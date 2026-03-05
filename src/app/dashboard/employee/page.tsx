import { requireRole } from "../../_lib/auth";
import { getMyLeaves } from "../../actions/hr";
import EmployeeDashboard from "../../_components/dashboards/EmployeeDashboard";

export default async function EmployeeDashboardPage() {
  const session = await requireRole(["employee"]);
  const myLeaves = await getMyLeaves();
  return <EmployeeDashboard session={session} myLeaves={myLeaves} />;
}
