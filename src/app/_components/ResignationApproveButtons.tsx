"use client";

import { approveResignation, rejectResignation } from "../actions/resignation";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";

export default function ResignationApproveButtons({
  resignationId,
}: {
  resignationId: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleApprove() {
    setError(null);
    startTransition(async () => {
      try {
        await approveResignation(resignationId);
        router.refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to approve");
      }
    });
  }

  function handleReject() {
    setError(null);
    startTransition(async () => {
      try {
        await rejectResignation(resignationId);
        router.refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to reject");
      }
    });
  }

  return (
    <div className="flex flex-col items-end gap-1">
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
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
