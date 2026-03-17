/**
 * Quick check: can we reach the Oracle DB host:port?
 * Run from project root: node scripts/check-oracle-network.js
 *
 * If this fails, the problem is network/firewall (or DB down).
 * If this succeeds but db:oracle:setup still fails, the problem is wallet/auth.
 */

const net = require("net");
const path = require("path");
const fs = require("fs");

// Parse tnsnames.ora for host and port (first entry)
const configDir = path.resolve(__dirname, "..", "config", "oracle");
const tnsPath = path.join(configDir, "tnsnames.ora");

if (!fs.existsSync(tnsPath)) {
  console.error("Not found:", tnsPath);
  process.exit(1);
}

const content = fs.readFileSync(tnsPath, "utf8");
const hostMatch = content.match(/host=([^)]+)/);
const portMatch = content.match(/port=(\d+)/);
const host = hostMatch ? hostMatch[1].trim() : "adb.ap-hyderabad-1.oraclecloud.com";
const port = portMatch ? parseInt(portMatch[1], 10) : 1522;

console.log("Testing TCP connection to", host + ":" + port, "...");

const socket = new net.Socket();
const timeout = 10000;

socket.setTimeout(timeout);
socket.on("connect", () => {
  console.log("OK – port is reachable. Connection refused later is likely wallet/auth or listener.");
  socket.destroy();
  process.exit(0);
});
socket.on("timeout", () => {
  console.error("TIMEOUT – cannot reach", host + ":" + port);
  console.error("Check: firewall, VPN, or outbound port 1522 blocked.");
  socket.destroy();
  process.exit(1);
});
socket.on("error", (err) => {
  console.error("ERROR –", err.message);
  console.error("If 'connection refused': listener may be down or blocking. If 'ENOTFOUND': wrong host.");
  socket.destroy();
  process.exit(1);
});

socket.connect(port, host);
