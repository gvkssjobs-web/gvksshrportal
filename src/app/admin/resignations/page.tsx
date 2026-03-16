import { requireRole } from "../../_lib/auth";
import { getPendingResignations } from "../../actions/resignation";
import Link from "next/link";
import ResignationApproveButtons from "../../_components/ResignationApproveButtons";

export default async function ResignationsPage() {
  const session = await requireRole(["admin"]);
  const pending = await getPendingResignations();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Resignation requests</h1>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Dashboard
        </Link>
      </div>

      <p className="text-slate-600">
        Approving a request will set the employee’s relieving date to today.
      </p>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <h2 className="border-b border-slate-200 px-5 py-3 font-semibold text-slate-800">
          Pending ({pending.length})
        </h2>
        <div className="divide-y divide-slate-200">
          {pending.length === 0 ? (
            <p className="px-5 py-6 text-slate-500">No pending resignation requests.</p>
          ) : (
            pending.map((r) => (
              <div
                key={r.id}
                className="flex flex-wrap items-start justify-between gap-3 px-5 py-4"
              >
                <div>
                  <p className="font-medium text-slate-800">{r.userName}</p>
                  <p className="mt-1 text-sm text-slate-600">{r.explanation}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Submitted {new Date(r.createdAt).toLocaleString()}
                  </p>
                </div>
                <ResignationApproveButtons resignationId={r.id} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
