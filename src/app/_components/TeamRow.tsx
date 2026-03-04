"use client";

import { updateDepartment, deleteDepartment } from "../actions/hr";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import type { DepartmentWithStats } from "../actions/hr";

export default function TeamRow({ team }: { team: DepartmentWithStats }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(team.name);
  const [error, setError] = useState<string | null>(null);

  function handleSave() {
    if (name.trim() === team.name) {
      setEditing(false);
      return;
    }
    setError(null);
    startTransition(async () => {
      try {
        await updateDepartment(team.id, name.trim());
        setEditing(false);
        router.refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to update");
      }
    });
  }

  function handleDelete() {
    if (!confirm(`Delete team "${team.name}"? This will fail if any members are in the team.`))
      return;
    setError(null);
    startTransition(async () => {
      try {
        await deleteDepartment(team.id);
        router.refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to delete");
      }
    });
  }

  return (
    <li className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
      <div className="min-w-0 flex-1">
        {editing ? (
          <div className="flex flex-wrap items-center gap-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded border border-slate-300 px-2 py-1 text-slate-800"
              autoFocus
            />
            <button
              type="button"
              onClick={handleSave}
              disabled={isPending}
              className="rounded bg-emerald-600 px-2 py-1 text-sm text-white hover:bg-emerald-700 disabled:opacity-50"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => { setEditing(false); setName(team.name); setError(null); }}
              className="rounded border border-slate-300 px-2 py-1 text-sm text-slate-700 hover:bg-slate-100"
            >
              Cancel
            </button>
          </div>
        ) : (
          <>
            <p className="font-medium text-slate-800">{team.name}</p>
            <p className="text-sm text-slate-500">
              {team.memberCount} member{team.memberCount !== 1 ? "s" : ""}
              {team.teamLeadName ? ` · Lead: ${team.teamLeadName}` : ""}
            </p>
          </>
        )}
      </div>
      {error && (
        <p className="w-full text-sm text-red-600">{error}</p>
      )}
      {!editing && (
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setEditing(true)}
            disabled={isPending}
            className="rounded border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
          >
            Edit name
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={isPending}
            className="rounded border border-red-300 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50 disabled:opacity-50"
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
}
