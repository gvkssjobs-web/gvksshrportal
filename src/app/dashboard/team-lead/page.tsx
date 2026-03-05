import { requireRole } from "../../_lib/auth";
import {
  getTeamMembers,
  getTeamLeaveRequests,
  getMyLeaves,
} from "../../actions/hr";
import TeamLeadDashboard from "../../_components/dashboards/TeamLeadDashboard";

export default async function TeamLeadDashboardPage() {
  const session = await requireRole(["team-lead"]);
  const [teamMembers, teamLeaves, myLeaves] = await Promise.all([
    getTeamMembers(),
    getTeamLeaveRequests(),
    getMyLeaves(),
  ]);
  return (
    <TeamLeadDashboard
      session={session}
      teamMembers={teamMembers}
      teamLeaves={teamLeaves}
      myLeaves={myLeaves}
    />
  );
}
