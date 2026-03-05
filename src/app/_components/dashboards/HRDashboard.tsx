import Link from "next/link";
import type { UserType } from "../../_types/user";
import type { LeaveRequest } from "../../_types/user";

interface Props {
  session: UserType;
  employees: (UserType & { departmentName?: string })[];
  allLeaves: LeaveRequest[];
  myLeaves: LeaveRequest[];
}

export default function HRDashboard({
  session,
  employees,
  allLeaves,
  myLeaves,
}: Props) {
  const pendingAll = allLeaves.filter((l) => l.status === "pending");
  const pendingMine = myLeaves.filter((l) => l.status === "pending");

  return (
    <div className="space-y-8">
      <div>
        <span className="inline-flex rounded-full bg-amber-600 px-2.5 py-0.5 text-xs font-medium text-white">
          HR
        </span>
        <h1 className="mt-2 text-2xl font-bold text-slate-800">
          Welcome, {session.name}
        </h1>
        <p className="mt-1 text-slate-600">HR dashboard — employees & leave</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/admin/employees"
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow"
        >
          <h2 className="font-semibold text-slate-800">Employees</h2>
          <p className="mt-1 text-2xl font-bold text-blue-600">
            {employees.length}
          </p>
          <p className="mt-1 text-sm text-slate-500">View directory</p>
        </Link>
        <Link
          href="/admin/leave"
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow"
        >
          <h2 className="font-semibold text-slate-800">My leave</h2>
          <p className="mt-1 text-2xl font-bold text-amber-600">
            {pendingMine.length} pending
          </p>
          <p className="mt-1 text-sm text-slate-500">Apply or view</p>
        </Link>
        <Link
          href="/admin/approve"
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow"
        >
          <h2 className="font-semibold text-slate-800">Pending approvals</h2>
          <p className="mt-1 text-2xl font-bold text-emerald-600">
            {pendingAll.length}
          </p>
          <p className="mt-1 text-sm text-slate-500">Review requests</p>
        </Link>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-slate-800">Quick actions</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/admin/leave#apply"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Apply for leave
          </Link>
          <Link
            href="/admin/employees"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Employee directory
          </Link>
          <Link
            href="/admin/approve"
            className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800 hover:bg-amber-100"
          >
            Pending approvals
          </Link>
        </div>
      </div>
    </div>
  );
}
