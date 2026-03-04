"use client";

import { deleteEmployee } from "../actions/hr";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";

export default function DeleteEmployeeButton({
  userId,
  userName,
  isCurrentUser,
}: {
  userId: string;
  userName: string;
  isCurrentUser: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleClick() {
    if (!confirm(`Delete employee "${userName}"? This cannot be undone.`)) return;
    setError(null);
    startTransition(async () => {
      try {
        await deleteEmployee(userId);
        router.refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to delete");
      }
    });
  }

  if (isCurrentUser) return null;

  return (
    <span className="inline-flex items-center gap-1">
      <button
        type="button"
        onClick={handleClick}
        disabled={isPending}
        className="text-sm font-medium text-red-600 hover:underline disabled:opacity-50"
      >
        {isPending ? "Deleting…" : "Delete"}
      </button>
      {error && <span className="text-xs text-red-600">{error}</span>}
    </span>
  );
}
