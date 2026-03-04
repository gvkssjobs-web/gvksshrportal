import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { getSession } from "../_lib/session";

export default async function Navbar() {
  const session = await getSession();
  const canApprove =
    session?.role === "hr" ||
    session?.role === "admin" ||
    session?.role === "team-lead";

  return (
    <header className="bg-slate-700 text-slate-100">
      <nav className="container mx-auto flex flex-wrap items-center justify-between gap-4 py-3 px-6">
        <Link href="/" className="font-semibold hover:underline">
          GVKSS HR
        </Link>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {session ? (
            <>
              <Link href="/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <Link href="/admin/employees" className="hover:underline">
                {session.role === "team-lead" ? "Team" : "Employees"}
              </Link>
              <Link href="/admin/leave" className="hover:underline">
                Leave
              </Link>
              {canApprove && (
                <Link href="/admin/approve" className="hover:underline">
                  Approve
                </Link>
              )}
              {session.role === "admin" && (
                <>
                  <Link href="/admin/teams" className="hover:underline">
                    Teams
                  </Link>
                  <Link href="/admin/pending" className="hover:underline">
                    Pending
                  </Link>
                </>
              )}
              <span className="text-slate-300 text-sm">
                {session.role ?? "employee"}
              </span>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login" className="hover:underline">
                Login
              </Link>
              <Link href="/register" className="hover:underline">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}