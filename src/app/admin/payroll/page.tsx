import { requireRole } from "../../_lib/auth";
import { getEmployees } from "../../actions/hr";
import { getSalaries, setSalary } from "../../actions/payroll";
import Link from "next/link";
import PayslipDownloadForm from "../../_components/PayslipDownloadForm";

export default async function PayrollPage() {
  const session = await requireRole(["admin", "hr"]);
  const employees = await getEmployees();
  const salaries = await getSalaries();

  const salariesByUser = new Map(
    salaries.map((s) => [s.id, s.currentSalary as number | null])
  );

  async function handleSetSalary(formData: FormData) {
    "use server";
    const userId = formData.get("userId") as string;
    const baseAmount = Number(formData.get("baseAmount"));
    await setSalary(userId, baseAmount);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Pay slips</h1>
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
          Select employee and period, then open the pay slip to print or save as PDF.
        </p>
        <PayslipDownloadForm employees={employees} />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-slate-800">Set salary</h2>
        <p className="mt-1 text-sm text-slate-600">
          Set or update base salary for pay slip data.
        </p>
        <form action={handleSetSalary} className="mt-4 space-y-3">
          <select
            name="userId"
            className="block w-full max-w-xs rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          >
            <option value="">Select employee</option>
            {employees.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name} ({e.email})
              </option>
            ))}
          </select>
          <input
            type="number"
            name="baseAmount"
            min={0}
            step={0.01}
            required
            placeholder="Base salary (₹)"
            className="block w-full max-w-xs rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Save salary
          </button>
        </form>
        <div className="mt-4 text-sm text-slate-600">
          <p className="font-medium text-slate-800">Current salaries</p>
          <ul className="mt-2 space-y-1">
            {employees.map((e) => (
              <li key={e.id}>
                {e.name}:{" "}
                {salariesByUser.get(e.id) != null
                  ? `₹${Number(salariesByUser.get(e.id)).toLocaleString()}`
                  : "Not set"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
