"use server";

import oracledb from "oracledb";

const walletPath = process.env.ORACLE_WALLET_PATH;
const poolConfig: oracledb.PoolAttributes = {
  user: process.env.ORACLE_USER ?? "ADMIN",
  password: process.env.ORACLE_PASSWORD ?? "",
  connectString: process.env.ORACLE_CONNECT_STRING ?? "",
  configDir: walletPath ?? undefined,
  walletLocation: walletPath ?? undefined,
  walletPassword: process.env.ORACLE_WALLET_PASSWORD ?? undefined,
};

let pool: oracledb.Pool | null = null;

export async function getPool(): Promise<oracledb.Pool> {
  if (!poolConfig.connectString || !poolConfig.password) {
    throw new Error(
      "Oracle: set ORACLE_CONNECT_STRING and ORACLE_PASSWORD (and ORACLE_WALLET_PATH if using wallet) in .env"
    );
  }
  if (!pool) {
    pool = await oracledb.createPool({
      ...poolConfig,
      poolMin: 1,
      poolMax: 10,
      poolIncrement: 1,
    });
  }
  return pool;
}

export async function getConnection(): Promise<oracledb.Connection> {
  const p = await getPool();
  return p.getConnection();
}

export async function closePool(): Promise<void> {
  if (pool) {
    await pool.close(10);
    pool = null;
  }
}

/** Run a query and return rows. Binds use :name. */
export async function runQuery<T = Record<string, unknown>>(
  sql: string,
  binds: Record<string, unknown> = {}
): Promise<T[]> {
  let conn: oracledb.Connection | null = null;
  try {
    conn = await getConnection();
    const result = await conn.execute<T>(sql, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    return (result.rows ?? []) as T[];
  } finally {
    if (conn) await conn.close();
  }
}

/** Execute a single statement (insert/update/delete). Returns rowsAffected. */
export async function runExecute(
  sql: string,
  binds: Record<string, unknown> = {}
): Promise<number> {
  let conn: oracledb.Connection | null = null;
  try {
    conn = await getConnection();
    const result = await conn.execute(sql, binds, { autoCommit: true });
    return result.rowsAffected ?? 0;
  } finally {
    if (conn) await conn.close();
  }
}

/** Run multiple statements in a transaction. */
export async function runTransaction(
  fn: (conn: oracledb.Connection) => Promise<void>
): Promise<void> {
  const conn = await getConnection();
  try {
    await fn(conn);
    await conn.commit();
  } catch (e) {
    await conn.rollback();
    throw e;
  } finally {
    await conn.close();
  }
}

/** Execute a statement using an existing connection (no commit). Use inside runTransaction. */
export async function runExecuteWithConn(
  conn: oracledb.Connection,
  sql: string,
  binds: Record<string, unknown> = {}
): Promise<number> {
  const result = await conn.execute(sql, binds);
  return result.rowsAffected ?? 0;
}
