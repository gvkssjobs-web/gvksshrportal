import { redirect } from "next/navigation";
import { requireAuth } from "../_lib/auth";

/** Redirects to the role-specific dashboard. */
export default async function DashboardRedirect() {
  const session = await requireAuth();
  const role = session.role ?? "employee";
  redirect(`/dashboard/${role}`);
}
