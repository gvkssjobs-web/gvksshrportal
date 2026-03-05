import { redirect } from "next/navigation";
import { requireRole } from "../../_lib/auth";
import { getDepartmentsWithStats } from "../../actions/hr";
import Link from "next/link";
import CreateTeamForm from "../../_components/CreateTeamForm";
import TeamRow from "../../_components/TeamRow";

export default async function TeamsPage() {
  const session = await requireRole(["admin"]);
  const teams = await getDepartmentsWithStats();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Manage teams</h1>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Dashboard
        </Link>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-slate-800">Create team</h2>
        <CreateTeamForm />
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <h2 className="border-b border-slate-200 px-5 py-3 font-semibold text-slate-800">
          Teams
        </h2>
        {teams.length === 0 ? (
          <p className="px-5 py-6 text-slate-500">No teams yet. Create one above.</p>
        ) : (
          <ul className="divide-y divide-slate-200">
            {teams.map((team) => (
              <TeamRow key={team.id} team={team} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
