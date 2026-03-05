import { redirect } from "next/navigation";
import { requireAuth } from "../../_lib/auth";
import { getAllLeaves } from "../../actions/hr";
import Link from "next/link";
import ApproveButtons from "../../_components/ApproveButtons";

export default async function ApprovePage() {
  const session = await requireAuth();
  const canApprove =
    session.role === "hr" ||
    session.role === "admin" ||
    session.role === "team-lead";
  if (!canApprove) redirect("/dashboard");

  const leaves = await getAllLeaves();
  const pending = leaves.filter((l) => l.status === "pending");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Approve leave</h1>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Dashboard
        </Link>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <h2 className="border-b border-slate-200 px-5 py-3 font-semibold text-slate-800">
          Pending ({pending.length})
        </h2>
        <div className="divide-y divide-slate-200">
          {pending.length === 0 ? (
            <p className="px-5 py-6 text-slate-500">No pending requests.</p>
          ) : (
            pending.map((leave) => (
              <div
                key={leave.id}
                className="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
              >
                <div>
                  <p className="font-medium text-slate-800">{leave.userName}</p>
                  <p className="text-sm text-slate-600 capitalize">
                    {leave.type} · {leave.startDate} → {leave.endDate}
                  </p>
                  {leave.reason && (
                    <p className="mt-1 text-sm text-slate-500">{leave.reason}</p>
                  )}
                </div>
                <ApproveButtons leaveId={leave.id} />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <h2 className="border-b border-slate-200 px-5 py-3 font-semibold text-slate-800">
          All requests
        </h2>
        <div className="divide-y divide-slate-200">
          {leaves.map((leave) => (
            <div
              key={leave.id}
              className="flex flex-wrap items-center justify-between gap-3 px-5 py-3"
            >
              <div>
                <p className="font-medium text-slate-800">{leave.userName}</p>
                <p className="text-sm text-slate-600">
                  {leave.type} · {leave.startDate}–{leave.endDate}
                </p>
              </div>
              <span
                className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  leave.status === "approved"
                    ? "bg-green-100 text-green-800"
                    : leave.status === "rejected"
                      ? "bg-red-100 text-red-800"
                      : "bg-amber-100 text-amber-800"
                }`}
              >
                {leave.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
