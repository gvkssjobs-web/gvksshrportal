import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <h1 className="pl-10 pt-10 font-serif text-3xl font-bold text-emerald-700">
        Welcome to GVKSS HR Portal
      </h1>
      <p className="pl-10 pt-2 italic text-slate-600">
        Manage your HR needs effectively
      </p>
      <div className="flex flex-wrap items-center justify-between gap-6 pb-10 pr-10 pl-10 pt-8">
        <div className="flex space-x-4">
          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-lg border border-slate-300 bg-white px-6 py-2.5 font-medium text-slate-700 hover:bg-slate-50"
          >
            Register
          </Link>
        </div>
        <Image
          src="/hero.jpg"
          alt="HR Portal"
          width={400}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
