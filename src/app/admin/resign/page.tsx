import { redirect } from "next/navigation";
import { requireAuth } from "../../_lib/auth";
import { getMyResignations } from "../../actions/resignation";
import Link from "next/link";
import ResignationForm from "../../_components/ResignationForm";

const statusColors: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

export default async function ResignPage() {
  const session = await requireAuth();
  if (session.role === "admin") redirect("/dashboard");

  const resignations = await getMyResignations();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Resignation</h1>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Dashboard
        </Link>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-slate-800">Apply for resignation</h2>
        <p className="mt-1 text-sm text-slate-600">
          Submit your resignation with an explanation. Admin will review and approve or reject. On approval, your relieving date will be updated.
        </p>
        <ResignationForm />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <h2 className="border-b border-slate-200 px-5 py-3 font-semibold text-slate-800">
          My resignation requests
        </h2>
        <div className="divide-y divide-slate-200">
          {resignations.length === 0 ? (
            <p className="px-5 py-6 text-slate-500">No resignation requests yet.</p>
          ) : (
            resignations.map((r) => (
              <div
                key={r.id}
                className="flex flex-wrap items-start justify-between gap-3 px-5 py-4"
              >
                <div>
                  <p className="text-sm text-slate-600">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </p>
                  <p className="mt-1 text-slate-800">{r.explanation}</p>
                </div>
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    statusColors[r.status] ?? "bg-slate-100 text-slate-700"
                  }`}
                >
                  {r.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
