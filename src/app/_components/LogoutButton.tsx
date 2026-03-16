"use client";

import { useRouter } from "next/navigation";
import { logoutAction } from "../actions/auth";

const LogoutButton = () => {
  const router = useRouter();

  const handleButton = async () => {
    try {
      await logoutAction();
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.log("logout failed:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleButton}
      className="rounded-lg border border-slate-500 bg-slate-600 px-3 py-1.5 text-sm font-medium text-slate-50 shadow-sm hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
