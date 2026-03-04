import { notFound } from "next/navigation";
import { requireRole } from "../../../../_lib/auth";
import { getDepartments } from "../../../../actions/hr";
import axios from "axios";
import Link from "next/link";
import EditTeamMemberForm from "../../../../_components/EditTeamMemberForm";

const API_URL = "http://localhost:3001";

export default async function EditTeamMemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await requireRole(["admin"]);
  const { id } = await params;

  const [userRes, deptRes] = await Promise.all([
    axios.get(`${API_URL}/users/${id}`).catch(() => ({ data: null })),
    axios.get<{ id: string; name: string }[]>(`${API_URL}/departments`),
  ]);
  const user = userRes.data;
  const departments = deptRes.data;

  if (!user || user.status === "pending") {
    notFound();
  }

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
          departments={departments}
        />
      </div>
    </div>
  );
}
