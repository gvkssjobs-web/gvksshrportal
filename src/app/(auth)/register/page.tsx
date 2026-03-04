import RegisterForm from "@/app/_components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md rounded-lg border border-amber-200 bg-amber-50 p-6 shadow-sm">
      <h1 className="text-xl font-semibold text-slate-800">Register</h1>
      <p className="mt-1 text-sm text-slate-600">
        Submit your details. Admin will approve your account and assign your team and role.
      </p>
      <RegisterForm />
    </div>
  );
}
