import { notFound } from "next/navigation";
import { requireRole } from "../../../../_lib/auth";
import { getDepartments, getUserById } from "../../../../actions/hr";
import Link from "next/link";
import EditTeamMemberForm from "../../../../_components/EditTeamMemberForm";

export default async function EditTeamMemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireRole(["admin"]);
  const { id } = await params;

  const [user, departments] = await Promise.all([
    getUserById(id),
    getDepartments(),
  ]);

  if (!user) notFound();

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Edit team member</h1>
        <Link
          href="/admin/employees"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Employees
        </Link>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-slate-600">
          <span className="font-medium text-slate-800">{user.name}</span>
          {" · "}
          {user.email}
        </p>
        <EditTeamMemberForm
          userId={user.id}
          currentDepartmentId={user.departmentId ?? null}
          currentRole={user.role ?? "employee"}
          currentJoiningDate={user.joiningDate ?? null}
          currentRelievingDate={user.relievingDate ?? null}
          departments={departments}
          canEditDates={true}
        />
      </div>
    </div>
  );
}
