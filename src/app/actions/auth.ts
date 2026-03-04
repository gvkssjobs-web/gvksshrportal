"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";
import { deletesession, setSession } from "../_lib/session";

const API_URL = 'http://localhost:3001';

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "object" && error !== null && "message" in error)
    return String((error as { message: unknown }).message);
  return "Something went wrong. Please try again.";
}

function isConnectionError(error: unknown): boolean {
  if (axios.isAxiosError(error)) return true;
  if (error instanceof Error && "code" in error) return true;
  if (typeof AggregateError !== "undefined" && error instanceof AggregateError)
    return true;
  return false;
}

export const loginAction = async (formData: FormData) => {
  try {
    const response = await axios.get<UserType[]>(
      `${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`
    );

    const user = response.data[0] as UserType & { status?: string };

    if (!user) {
      throw new Error("Invalid email or password");
    }

    if (user.status === "pending") {
      throw new Error("Your account is pending admin approval. You can log in after an admin approves your registration.");
    }

    await setSession({
      name: user.name,
      email: user.email,
      id: user.id,
      role: user.role ?? "employee",
      departmentId: user.departmentId,
    });
    redirect("/dashboard");
  } catch (error) {
    // Next.js redirect() throws a special value — rethrow so the framework can handle it
    if (
      typeof error === "object" &&
      error !== null &&
      "digest" in error &&
      typeof (error as { digest?: string }).digest === "string" &&
      (error as { digest: string }).digest.startsWith("NEXT_")
    ) {
      throw error;
    }
    if (
      error instanceof Error &&
      (error.message === "Invalid email or password" ||
        error.message.includes("pending admin approval"))
    )
      throw error;
    const message = isConnectionError(error)
      ? "Cannot reach the server. Make sure the API is running (npm run server on port 3001)."
      : getErrorMessage(error);
    console.error("LOGIN ERROR:", error);
    throw new Error(message);
  }
};
 
export const logoutAction = async () => {
  await deletesession();
  redirect("/login");
};

interface UserWithPassword extends UserType {
  password?: string;
}

export async function registerAction(formData: FormData) {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const password = formData.get("password") as string;

  if (!name || !email || !password) {
    throw new Error("Name, email and password are required");
  }

  const { data: existing } = await axios.get<UserWithPassword[]>(
    `${API_URL}/users?email=${email}`
  );
  if (existing?.length) throw new Error("Email already registered");

  const { data: users } = await axios.get<UserWithPassword[]>(
    `${API_URL}/users`
  );
  const nextId = String(
    Math.max(0, ...users.map((u) => parseInt(u.id, 10))) + 1
  );

  await axios.post(`${API_URL}/users`, {
    id: nextId,
    name,
    email,
    password,
    status: "pending",
  });
}