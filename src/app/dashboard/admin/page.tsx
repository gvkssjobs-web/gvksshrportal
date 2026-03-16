import { requireRole } from "../../_lib/auth";
import {
  getEmployees,
  getAllLeaves,
  getPendingRegistrations,
} from "../../actions/hr";
import AdminDashboard from "../../_components/dashboards/AdminDashboard";

export default async function AdminDashboardPage() {
  const session = await requireRole(["admin"]);
  const [employees, allLeaves, pendingRegistrations] = await Promise.all([
    getEmployees(),
    getAllLeaves(),
    getPendingRegistrations(),
  ]);
  return (
    <AdminDashboard
      session={session}
      employees={employees}
      allLeaves={allLeaves}
      pendingRegistrationsCount={pendingRegistrations.length}
    />
  );
}
