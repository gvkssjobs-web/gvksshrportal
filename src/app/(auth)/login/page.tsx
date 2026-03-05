import LoginForm from "@/app/_components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 shadow-sm">
        <h1 className="text-xl font-semibold text-slate-800">Login</h1>
        <LoginForm />
        <p className="mt-4 text-center text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-medium text-blue-700 hover:underline">
            Register
          </Link>
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h2 className="mb-3 text-sm font-semibold text-slate-700">
          Test credentials (password: test123)
        </h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>
            <strong>Admin:</strong> admin@test.com
          </li>
          <li>
            <strong>HR:</strong> hr@test.com
          </li>
          <li>
            <strong>Team Lead:</strong> teamlead@test.com
          </li>
          <li>
            <strong>Employee:</strong> employee@test.com
          </li>
        </ul>
      </div>
    </div>
  );
}
