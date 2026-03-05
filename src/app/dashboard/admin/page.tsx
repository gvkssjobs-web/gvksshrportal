import { requireRole } from "../../_lib/auth";
import {
  getEmployees,
  getAllLeaves,
  getMyLeaves,
  getPendingRegistrations,
} from "../../actions/hr";
import AdminDashboard from "../../_components/dashboards/AdminDashboard";

export default async function AdminDashboardPage() {
  const session = await requireRole(["admin"]);
  const [employees, allLeaves, myLeaves, pendingRegistrations] = await Promise.all([
    getEmployees(),
    getAllLeaves(),
    getMyLeaves(),
    getPendingRegistrations(),
  ]);
  return (
    <AdminDashboard
      session={session}
      employees={employees}
      allLeaves={allLeaves}
      myLeaves={myLeaves}
      pendingRegistrationsCount={pendingRegistrations.length}
    />
  );
}
