import { requireRole } from "../../../_lib/auth";
import { getDepartments } from "../../../actions/hr";
import { getAttendanceForAdmin } from "../../../actions/attendance";
import Link from "next/link";

export default async function AttendanceReportPage({
  searchParams,
}: {
  searchParams: Promise<{ departmentId?: string; from?: string; to?: string }>;
}) {
  const session = await requireRole(["admin", "hr"]);
  const params = await searchParams; // Next.js 16: searchParams is a Promise
  const departments = await getDepartments();

  const from = params?.from ? new Date(params.from) : undefined;
  const to = params?.to ? new Date(params.to) : undefined;
  const departmentId = params?.departmentId || undefined;

  const records = await getAttendanceForAdmin({ departmentId, from, to });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">
          Attendance report
        </h1>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Dashboard
        </Link>
      </div>

      <form
        method="get"
        action="/admin/attendance/report"
        className="flex flex-wrap items-end gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
      >
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Department
          </label>
          <select
            name="departmentId"
            defaultValue={departmentId ?? ""}
            className="mt-1 block w-48 rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">All</option>
            {departments.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            From
          </label>
          <input
            type="date"
            name="from"
            defaultValue={params?.from}
            className="mt-1 block w-40 rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">To</label>
          <input
            type="date"
            name="to"
            defaultValue={params?.to}
            className="mt-1 block w-40 rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Filter
        </button>
      </form>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <h2 className="border-b border-slate-200 px-5 py-3 font-semibold text-slate-800">
          Records ({records.length})
        </h2>
        <div className="divide-y divide-slate-200">
          {records.length === 0 ? (
            <p className="px-5 py-6 text-slate-500">
              No attendance records for the selected filters.
            </p>
          ) : (
            records.map((r) => (
              <div
                key={r.id}
                className="flex flex-wrap items-center justify-between gap-3 px-5 py-3"
              >
                <div>
                  <p className="font-medium text-slate-800">
                    {new Date(r.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-slate-600">
                    In:{" "}
                    {r.checkIn
                      ? new Date(r.checkIn).toLocaleTimeString()
                      : "—"}{" "}
                    · Out:{" "}
                    {r.checkOut
                      ? new Date(r.checkOut).toLocaleTimeString()
                      : "—"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

