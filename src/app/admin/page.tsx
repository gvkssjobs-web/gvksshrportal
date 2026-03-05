import { redirect } from "next/navigation";
import { requireAuth } from "../_lib/auth";

/** Redirect /admin to role-specific dashboard. */
export default async function AdminPage() {
  await requireAuth();
  redirect("/dashboard");
}
