"use client";

import { approveRegistration, rejectRegistration } from "../actions/hr";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import type { UserType } from "../_types/user";
import type { Department } from "../_types/user";
import type { UserRole } from "../_types/user";

export default function PendingRegistrationRow({
  user,
  departments,
}: {
  user: UserType;
  departments: Department[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [departmentId, setDepartmentId] = useState("");
  const [role, setRole] = useState<UserRole>("employee");
  const [error, setError] = useState<string | null>(null);

  function handleApprove() {
    if (!departmentId) {
      setError("Select a department");
      return;
    }
    setError(null);
    startTransition(async () => {
      try {
        await approveRegistration(user.id, departmentId, role);
        router.refresh();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to approve");
      }
    });
  }

  function handleReject() {
    startTransition(async () => {
      try {
        await rejectRegistration(user.id);
        router.refresh();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to reject");
      }
    });
  }

  return (
    <div className="flex flex-wrap items-end gap-3 border-b border-slate-200 px-5 py-4 last:border-0">
      <div className="min-w-0 flex-1">
        <p className="font-medium text-slate-800">{user.name}</p>
        <p className="text-sm text-slate-600">{user.email}</p>
      </div>
      <div className="w-36">
        <label className="block text-xs font-medium text-slate-600">Team</label>
        <select
          value={departmentId}
          onChange={(e) => setDepartmentId(e.target.value)}
          className="mt-0.5 block w-full rounded border border-slate-300 px-2 py-1.5 text-sm"
        >
          <option value="">— Select —</option>
          {departments.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-32">
        <label className="block text-xs font-medium text-slate-600">Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as UserRole)}
          className="mt-0.5 block w-full rounded border border-slate-300 px-2 py-1.5 text-sm"
        >
          <option value="employee">Employee</option>
          <option value="team-lead">Team Lead</option>
          <option value="hr">HR</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleApprove}
          disabled={isPending}
          className="rounded bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
        >
          Approve
        </button>
        <button
          type="button"
          onClick={handleReject}
          disabled={isPending}
          className="rounded border border-red-300 bg-white px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50 disabled:opacity-50"
        >
          Reject
        </button>
      </div>
      {error && (
        <p className="w-full text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
