"use client";

import { createDepartment } from "../actions/hr";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";

export default function CreateTeamForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value?.trim();
    if (!name) return;
    startTransition(async () => {
      try {
        await createDepartment(name);
        form.reset();
        router.refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to create team");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 flex flex-wrap items-end gap-3">
      {error && (
        <p className="w-full rounded bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}
      <div className="min-w-[200px] flex-1">
        <label className="block text-sm font-medium text-slate-700">Team name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="e.g. Engineering"
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? "Creating…" : "Create team"}
      </button>
    </form>
  );
}
