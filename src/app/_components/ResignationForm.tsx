"use client";

import { createResignation } from "../actions/resignation";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";

export default function ResignationForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    const explanation = (formData.get("explanation") as string)?.trim();
    startTransition(async () => {
      try {
        await createResignation(explanation);
        router.refresh();
        (e.target as HTMLFormElement).reset();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to submit");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      {error && (
        <p className="rounded bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}
      <div>
        <label className="block text-sm font-medium text-slate-700">
          Explanation (reason for resignation)
        </label>
        <textarea
          name="explanation"
          rows={4}
          required
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Please provide your reason for resignation..."
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-slate-700 px-4 py-2 font-medium text-white hover:bg-slate-800 disabled:opacity-50"
      >
        {isPending ? "Submitting…" : "Submit resignation request"}
      </button>
    </form>
  );
}
