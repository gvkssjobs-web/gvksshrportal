import { requireAuth } from "../../../_lib/auth";
import Link from "next/link";
import MyPayslipDownload from "../../../_components/MyPayslipDownload";

export default async function MyPaySlipsPage() {
  const session = await requireAuth();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">My pay slips</h1>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Dashboard
        </Link>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-slate-800">Download pay slip</h2>
        <p className="mt-1 text-sm text-slate-600">
          Select month and year to view or print your pay slip (Save as PDF from print dialog).
        </p>
        <MyPayslipDownload userId={session.id} />
      </div>
    </div>
  );
}
