import { requireAuth } from "../../_lib/auth";
import { getMyLeaves } from "../../actions/hr";
import Link from "next/link";
import LeaveForm from "../../_components/LeaveForm";

const statusColors: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

export default async function LeavePage() {
  await requireAuth();

  const leaves = await getMyLeaves();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Leave</h1>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Dashboard
        </Link>
      </div>

      <LeaveForm />

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <h2 className="border-b border-slate-200 px-5 py-3 font-semibold text-slate-800">
          My leave requests
        </h2>
        <div className="divide-y divide-slate-200">
          {leaves.length === 0 ? (
            <p className="px-5 py-6 text-slate-500">No leave requests yet.</p>
          ) : (
            leaves.map((leave) => (
              <div
                key={leave.id}
                className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 sm:flex-nowrap"
              >
                <div>
                  <p className="font-medium text-slate-800 capitalize">
                    {leave.type}
                  </p>
                  <p className="text-sm text-slate-600">
                    {leave.startDate} → {leave.endDate}
                  </p>
                  {leave.reason && (
                    <p className="mt-1 text-sm text-slate-500">{leave.reason}</p>
                  )}
                </div>
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    statusColors[leave.status] ?? "bg-slate-100 text-slate-700"
                  }`}
                >
                  {leave.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
