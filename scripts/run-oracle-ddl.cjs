/**
 * Run the Oracle DDL script against your remote Oracle DB.
 * Uses ORACLE_* from .env (same as the app).
 *
 * Usage (from project root):
 *   node scripts/run-oracle-ddl.cjs
 *
 * Or with explicit .env (Node 20+):
 *   node --env-file=.env scripts/run-oracle-ddl.cjs
 *
 * Ensure .env has: ORACLE_CONNECT_STRING, ORACLE_USER, ORACLE_PASSWORD, ORACLE_WALLET_PATH
 */

const oracledb = require("oracledb");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.resolve(__dirname, "..");

function isOpenSSLInPath() {
  try {
    execSync("openssl version", { stdio: "pipe", windowsHide: true });
    return true;
  } catch (_) {
    return false;
  }
}

const OPENSSL_INSTALL_MSG =
  "OpenSSL is required to convert the Oracle wallet (ewallet.p12 -> ewallet.pem).\n" +
  "  Download Win64 OpenSSL (MSI) from: https://slproweb.com/products/Win32OpenSSL.html\n" +
  "  Install it, add the install bin folder to PATH if needed, then close and reopen the terminal.\n" +
  "  Then run: npm run db:oracle:setup   again.";

/** Convert ewallet.p12 to ewallet.pem using OpenSSL (caller must ensure OpenSSL is in PATH). */
function convertP12ToPem(p12Path, pemPath, password) {
  try {
    execSync(
      `openssl pkcs12 -in "${p12Path}" -out "${pemPath}" -nodes -passin env:OPENSSL_WALLET_PASS`,
      { stdio: "pipe", windowsHide: true, env: { ...process.env, OPENSSL_WALLET_PASS: password } }
    );
  } catch (e) {
    const stderr = (e.stderr && e.stderr.toString()) || "";
    if (stderr.includes("Mac verify error") || stderr.includes("wrong password"))
      throw new Error("Wrong wallet password. Fix ORACLE_WALLET_PASSWORD in .env and try again.");
    throw e;
  }
}

// Load .env from project root or cwd if ORACLE_* not already set
function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return false;
  let content = fs.readFileSync(filePath, "utf8");
  content = content.replace(/^\uFEFF/, ""); // BOM
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const m = trimmed.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (m) {
      const val = m[2].trim().replace(/^["']|["']$/g, "");
      process.env[m[1]] = val;
    }
  }
  return true;
}

const envPaths = [path.join(process.cwd(), ".env"), path.join(root, ".env")];
for (const p of envPaths) loadEnv(p);
if (!process.env.ORACLE_CONNECT_STRING || !process.env.ORACLE_PASSWORD) {
  // already tried loading .env above
}

const connectString = process.env.ORACLE_CONNECT_STRING;
const user = process.env.ORACLE_USER || "ADMIN";
const password = process.env.ORACLE_PASSWORD;
const walletPassword = process.env.ORACLE_WALLET_PASSWORD;
// Resolve wallet path relative to project root so ./config/oracle works reliably
const walletPath = process.env.ORACLE_WALLET_PATH;
const configDir = walletPath
  ? path.isAbsolute(walletPath)
    ? walletPath
    : path.resolve(root, walletPath)
  : undefined;

if (!connectString || !password) {
  console.error("Missing ORACLE_CONNECT_STRING or ORACLE_PASSWORD in .env");
  console.error("Expected in .env (project root):");
  console.error('  ORACLE_CONNECT_STRING=gvksshrportal_high');
  console.error('  ORACLE_USER=ADMIN');
  console.error('  ORACLE_PASSWORD=your_password');
  console.error('  ORACLE_WALLET_PATH=./config/oracle');
  process.exit(1);
}

if (configDir) {
  if (!fs.existsSync(path.join(configDir, "tnsnames.ora"))) {
    console.error("tnsnames.ora not found in ORACLE_WALLET_PATH:", configDir);
    process.exit(1);
  }
  const pemPath = path.join(configDir, "ewallet.pem");
  const p12Path = path.join(configDir, "ewallet.p12");
  if (!fs.existsSync(pemPath)) {
    if (fs.existsSync(p12Path)) {
      if (!walletPassword) {
        console.error("ewallet.pem not found; ewallet.p12 found. Set ORACLE_WALLET_PASSWORD in .env (the password you set when downloading the wallet), then run again. The script will convert ewallet.p12 → ewallet.pem (no OpenSSL required).");
        process.exit(1);
      }
      if (!isOpenSSLInPath()) {
        console.error(OPENSSL_INSTALL_MSG);
        process.exit(1);
      }
      try {
        console.log("Converting ewallet.p12 to ewallet.pem...");
        convertP12ToPem(p12Path, pemPath, walletPassword);
        console.log("Done.");
      } catch (e) {
        console.error("Failed to convert ewallet.p12 to ewallet.pem:", e.message);
        console.error("If the wallet uses ECC keys, install OpenSSL and run: openssl pkcs12 -in ewallet.p12 -out ewallet.pem -nodes -passin pass:YOUR_WALLET_PASSWORD");
        process.exit(1);
      }
    } else {
      console.error("ewallet.pem and ewallet.p12 not found in:", configDir);
      console.error("1. Oracle Cloud → your Autonomous DB → Database connection → Download wallet");
      console.error("2. Extract the ZIP and copy ALL files (tnsnames.ora, sqlnet.ora, cwallet.sso, ewallet.p12, etc.) into:", configDir);
      console.error("3. If the ZIP has ewallet.p12 only, add ORACLE_WALLET_PASSWORD=your_wallet_password to .env and run again.");
      process.exit(1);
    }
  }
}

const ddlPath = path.join(__dirname, "oracle-ddl.sql");
const sql = fs.readFileSync(ddlPath, "utf8");

// Split into statements (each ends with ;)
const statements = sql
  .split(/;\s*\n/)
  .map((s) => s.replace(/^\s*--[^\n]*\n/gm, "").trim())
  .filter((s) => s.length > 0 && !s.startsWith("--"));

async function run() {
  let conn;
  try {
    conn = await oracledb.getConnection({
      user,
      password,
      connectString,
      configDir: configDir || undefined,
      walletLocation: configDir || undefined,
      walletPassword: walletPassword || undefined,
    });
    console.log("Connected to Oracle.\n");

    for (let i = 0; i < statements.length; i++) {
      const stmt = statements[i];
      const preview = stmt.slice(0, 60).replace(/\n/g, " ");
      try {
        await conn.execute(stmt);
        console.log(`[${i + 1}/${statements.length}] OK: ${preview}...`);
      } catch (err) {
        if (err.message && err.message.includes("ORA-00955")) {
          console.log(`[${i + 1}/${statements.length}] SKIP (already exists): ${preview}...`);
        } else {
          console.error(`[${i + 1}/${statements.length}] FAIL: ${preview}...`);
          console.error(err.message);
          throw err;
        }
      }
    }

    await conn.commit();
    console.log("\nSchema applied successfully.");
  } finally {
    if (conn) await conn.close();
  }
}

run().catch((err) => {
  console.error(err);
  if (err.code === "NJS-505" || (err.message && err.message.includes("bad decrypt"))) {
    console.error("\n--- TLS/wallet error (NJS-505 / bad decrypt) ---");
    console.error("1. Ensure ORACLE_WALLET_PASSWORD in .env is the exact password you set when downloading the wallet.");
    console.error("2. If you have ewallet.p12: delete ewallet.pem in config/oracle and run again so the script re-converts with the correct password.");
  } else if (err.code === "NJS-511" || (err.message && err.message.includes("ORA-12506"))) {
    console.error("\n--- Connection refused (ORA-12506) ---");
    console.error("1. Put the FULL wallet in ORACLE_WALLET_PATH: tnsnames.ora, sqlnet.ora, and ewallet.pem (re-download from Oracle Cloud → Database connection → Download wallet, extract all files).");
    console.error("2. Add your IP in Oracle Cloud → DB → Access control list (or 0.0.0.0/0 for testing).");
    console.error("3. Run: node scripts/check-oracle-network.js to verify the host/port is reachable.");
  }
  process.exit(1);
});
