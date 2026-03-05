import { redirect } from "next/navigation";
import { requireRole } from "../../_lib/auth";
import { getPendingRegistrations } from "../../actions/hr";
import { getDepartments } from "../../actions/hr";
import Link from "next/link";
import PendingRegistrationRow from "../../_components/PendingRegistrationRow";

export default async function PendingRegistrationsPage() {
  const session = await requireRole(["admin"]);
  const [pending, departments] = await Promise.all([
    getPendingRegistrations(),
    getDepartments(),
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">
          Pending registrations
        </h1>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Dashboard
        </Link>
      </div>

      <p className="text-slate-600">
        Assign team and role, then Approve to activate the account. The user can log in after approval.
      </p>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {pending.length === 0 ? (
          <p className="px-5 py-8 text-slate-500">No pending registration requests.</p>
        ) : (
          <div className="divide-y divide-slate-200">
            {pending.map((user) => (
              <PendingRegistrationRow
                key={user.id}
                user={user}
                departments={departments}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
