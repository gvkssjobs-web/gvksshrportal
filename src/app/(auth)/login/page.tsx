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

      <p className="text-center text-xs text-slate-500">
        First time? Run <code className="rounded bg-slate-100 px-1">npm run db:seed</code> then log in as admin@gvkss.local / admin123
      </p>
    </div>
  );
}
