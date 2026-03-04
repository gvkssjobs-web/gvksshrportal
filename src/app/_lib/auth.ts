import { redirect } from "next/navigation";
import { getSession } from "./session";
import type { UserRole } from "../_types/user";

/**
 * Get session or redirect to login. Use in server components/actions.
 */
export async function requireAuth() {
  const session = await getSession();
  if (!session) redirect("/login");
  return session;
}

/**
 * Get session and require one of the given roles; otherwise redirect to dashboard.
 */
export async function requireRole(allowedRoles: UserRole[]) {
  const session = await requireAuth();
  if (!session.role || !allowedRoles.includes(session.role)) {
    redirect("/dashboard");
  }
  return session;
}

export function isAdmin(session: { role?: UserRole }) {
  return session.role === "admin";
}

export function isHrOrAdmin(session: { role?: UserRole }) {
  return session.role === "hr" || session.role === "admin";
}

export function canApproveLeave(session: { role?: UserRole }) {
  return session.role === "hr" || session.role === "admin" || session.role === "team-lead";
}

export function canViewAllEmployees(session: { role?: UserRole }) {
  return session.role === "admin" || session.role === "hr";
}
