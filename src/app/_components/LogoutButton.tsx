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

  return <button onClick={handleButton}>Logout</button>;
};

export default LogoutButton;
