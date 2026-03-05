"use client";

import { updateUserTeamAndRole } from "../actions/hr";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import type { UserRole } from "../_types/user";
import type { Department } from "../_types/user";

interface Props {
  userId: string;
  currentDepartmentId: string | null;
  currentRole: UserRole;
  departments: Department[];
}

export default function EditTeamMemberForm({
  userId,
  currentDepartmentId,
  currentRole,
  departments,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [departmentId, setDepartmentId] = useState(currentDepartmentId ?? "");
  const [role, setRole] = useState<UserRole>(currentRole);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      try {
        await updateUserTeamAndRole(
          userId,
          departmentId ? departmentId : null,
          role
        );
        router.push("/admin/employees");
        router.refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to update");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      {error && (
        <p className="rounded bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
      )}
      <div>
        <label className="block text-sm font-medium text-slate-700">Team</label>
        <select
          value={departmentId}
          onChange={(e) => setDepartmentId(e.target.value)}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          <option value="">— No team —</option>
          {departments.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as UserRole)}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          <option value="employee">Employee</option>
          <option value="team-lead">Team Lead</option>
          <option value="hr">HR</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? "Saving…" : "Save"}
      </button>
    </form>
  );
}
