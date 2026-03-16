"use client";

import { useState } from "react";
import { loginAction } from "../actions/auth";

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      action={async (formData) => {
        setError(null);
        try {
          await loginAction(formData);
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "Login failed. Please try again."
          );
        }
      }}
      className="space-y-4 pt-5"
    >
      {error && (
        <p className="rounded bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}
      <div className="space-y-3">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          minLength={6}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="rounded-lg bg-red-500 px-6 py-2 font-semibold text-white shadow-md transition duration-300 hover:bg-red-600"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;