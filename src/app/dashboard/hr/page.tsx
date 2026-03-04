import { requireRole } from "../../_lib/auth";
import { getEmployees, getAllLeaves, getMyLeaves } from "../../actions/hr";
import HRDashboard from "../../_components/dashboards/HRDashboard";

export default async function HRDashboardPage() {
  const session = await requireRole(["hr"]);
  const [employees, allLeaves, myLeaves] = await Promise.all([
    getEmployees(),
    getAllLeaves(),
    getMyLeaves(),
  ]);
  return (
    <HRDashboard
      session={session}
      employees={employees}
      allLeaves={allLeaves}
      myLeaves={myLeaves}
    />
  );
}
