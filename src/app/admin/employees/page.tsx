import { requireAuth } from "../../_lib/auth";
import { getEmployees, getTeamMembers } from "../../actions/hr";
import Link from "next/link";
import DeleteEmployeeButton from "../../_components/DeleteEmployeeButton";

export default async function EmployeesPage() {
  const session = await requireAuth();
  const isTeamLead = session.role === "team-lead";
  const employees = isTeamLead
    ? await getTeamMembers()
    : await getEmployees();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">
          {isTeamLead ? "My team" : "Employee directory"}
        </h1>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Dashboard
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Department
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Role
              </th>
              {session.role === "admin" && (
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-slate-50">
                <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-800">
                  {emp.name}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-slate-600">
                  {emp.email}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-slate-600">
                  {emp.departmentName ?? "—"}
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                      emp.role === "admin"
                        ? "bg-slate-800 text-white"
                        : emp.role === "hr"
                          ? "bg-amber-100 text-amber-800"
                          : emp.role === "team-lead"
                            ? "bg-indigo-100 text-indigo-800"
                            : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {emp.role ?? "employee"}
                  </span>
                </td>
                {session.role === "admin" && (
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className="flex items-center gap-3">
                      <Link
                        href={`/admin/employees/${emp.id}/edit`}
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        Edit
                      </Link>
                      <DeleteEmployeeButton
                        userId={emp.id}
                        userName={emp.name}
                        isCurrentUser={session.id === emp.id}
                      />
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
