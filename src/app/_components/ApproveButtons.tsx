"use client";

import { updateLeaveStatus } from "../actions/hr";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function ApproveButtons({ leaveId }: { leaveId: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const handle = (status: "approved" | "rejected") => {
    startTransition(async () => {
      await updateLeaveStatus(leaveId, status);
      router.refresh();
    });
  };

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => handle("approved")}
        disabled={pending}
        className="rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
      >
        Approve
      </button>
      <button
        type="button"
        onClick={() => handle("rejected")}
        disabled={pending}
        className="rounded-lg border border-red-300 bg-white px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50 disabled:opacity-50"
      >
        Reject
      </button>
    </div>
  );
}
