"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";
import {
  LeaveRequest,
  LeaveStatus,
  LeaveType,
  UserType,
  UserRole,
  Department,
} from "../_types/user";
import { getSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

export async function getDepartments(): Promise<Department[]> {
  const { data } = await axios.get<Department[]>(`${API_URL}/departments`);
  return data;
}

export interface DepartmentWithStats extends Department {
  memberCount: number;
  teamLeadName: string | null;
}

/** Departments with member count and team lead name (admin). */
export async function getDepartmentsWithStats(): Promise<DepartmentWithStats[]> {
  const session = await getSession();
  if (session?.role !== "admin") return [];
  const [deptRes, usersRes] = await Promise.all([
    axios.get<Department[]>(`${API_URL}/departments`),
    axios.get<UserType[]>(`${API_URL}/users`),
  ]);
  const users = usersRes.data as (UserType & { status?: string })[];
  const activeUsers = users.filter((u) => u.status !== "pending");
  return deptRes.data.map((d) => {
    const members = activeUsers.filter((u) => u.departmentId === d.id);
    const lead = members.find((u) => u.role === "team-lead");
    return {
      ...d,
      memberCount: members.length,
      teamLeadName: lead ? lead.name : null,
    };
  });
}

/** Admin: create a new team (department). */
export async function createDepartment(name: string) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can create teams.");

  const { data: existing } = await axios.get<Department[]>(`${API_URL}/departments`);
  const nextId = String(
    Math.max(0, ...existing.map((d) => parseInt(d.id, 10))) + 1
  );
  await axios.post(`${API_URL}/departments`, { id: nextId, name: name.trim() });
  revalidatePath("/admin/teams");
  revalidatePath("/dashboard/admin");
}

/** Admin: update team name. */
export async function updateDepartment(id: string, name: string) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can edit teams.");

  const { data: dept } = await axios.get<Department>(`${API_URL}/departments/${id}`);
  if (!dept) throw new Error("Team not found.");
  await axios.patch(`${API_URL}/departments/${id}`, { ...dept, name: name.trim() });
  revalidatePath("/admin/teams");
  revalidatePath("/dashboard/admin");
}

/** Admin: delete team. Fails if any users are in the team. */
export async function deleteDepartment(id: string) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can delete teams.");

  const { data: users } = await axios.get<UserType[]>(`${API_URL}/users`);
  const inTeam = (users as UserType[]).filter((u) => u.departmentId === id);
  if (inTeam.length > 0) {
    throw new Error(
      `Cannot delete: ${inTeam.length} member(s) are in this team. Reassign or remove them first.`
    );
  }
  await axios.delete(`${API_URL}/departments/${id}`);
  revalidatePath("/admin/teams");
  revalidatePath("/dashboard/admin");
}

/** Admin: update a user's team (department) and role (e.g. set as team-lead). */
export async function updateUserTeamAndRole(
  userId: string,
  departmentId: string | null,
  role: UserRole
) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can edit team members.");

  const { data: user } = await axios.get<UserType & { password?: string }>(
    `${API_URL}/users/${userId}`
  );
  if (!user || user.status === "pending")
    throw new Error("User not found or pending approval.");

  await axios.patch(`${API_URL}/users/${userId}`, {
    ...user,
    departmentId: departmentId || null,
    role,
  });
  revalidatePath("/admin/employees");
  revalidatePath("/admin/employees/" + userId);
  revalidatePath("/dashboard/admin");
}

/** Admin: delete an employee (user). Cannot delete yourself. */
export async function deleteEmployee(userId: string) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can delete employees.");

  if (session.id === userId) {
    throw new Error("You cannot delete your own account.");
  }

  const { data: user } = await axios.get<UserType>(`${API_URL}/users/${userId}`);
  if (!user) throw new Error("User not found.");

  await axios.delete(`${API_URL}/users/${userId}`);
  revalidatePath("/admin/employees");
  revalidatePath("/dashboard/admin");
}

function withDepartmentNames(
  users: UserType[],
  departments: Department[]
): (UserType & { departmentName?: string })[] {
  const deptMap = Object.fromEntries(departments.map((d) => [d.id, d.name]));
  return users.map((u) => ({
    ...u,
    departmentName: u.departmentId ? deptMap[u.departmentId] : "—",
  }));
}

export async function getEmployees(): Promise<
  (UserType & { departmentName?: string })[]
> {
  const [usersRes, deptRes] = await Promise.all([
    axios.get<UserType[]>(`${API_URL}/users`),
    axios.get<Department[]>(`${API_URL}/departments`),
  ]);
  const active = (usersRes.data as (UserType & { status?: string })[]).filter(
    (u) => u.status !== "pending"
  );
  return withDepartmentNames(active, deptRes.data as Department[]);
}

/** Team members in the same department (for team-lead). */
export async function getTeamMembers(): Promise<
  (UserType & { departmentName?: string })[]
> {
  const session = await getSession();
  if (!session?.departmentId) return [];
  const [usersRes, deptRes] = await Promise.all([
    axios.get<UserType[]>(`${API_URL}/users?departmentId=${session.departmentId}`),
    axios.get<Department[]>(`${API_URL}/departments`),
  ]);
  const active = (usersRes.data as (UserType & { status?: string })[]).filter(
    (u) => u.status !== "pending"
  );
  return withDepartmentNames(active, deptRes.data as Department[]);
}

/** Pending registration requests (admin only). */
export async function getPendingRegistrations(): Promise<UserType[]> {
  const session = await getSession();
  if (session?.role !== "admin") return [];
  const { data } = await axios.get<UserType[]>(`${API_URL}/users?status=pending`);
  return data as UserType[];
}

/** Admin approves a registration: assign department, role and activate. */
export async function approveRegistration(
  userId: string,
  departmentId: string,
  role: UserRole
) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can approve registrations.");

  const { data: user } = await axios.get<UserType & { password?: string }>(
    `${API_URL}/users/${userId}`
  );
  if (!user || user.status !== "pending")
    throw new Error("User not found or already processed.");

  await axios.patch(`${API_URL}/users/${userId}`, {
    ...user,
    departmentId: departmentId || null,
    role,
    status: "active",
  });
  revalidatePath("/admin/pending");
  revalidatePath("/dashboard/admin");
}

/** Admin rejects a registration (removes the pending user). */
export async function rejectRegistration(userId: string) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can reject registrations.");

  const { data: user } = await axios.get<UserType>(`${API_URL}/users/${userId}`);
  if (!user || user.status !== "pending")
    throw new Error("User not found or already processed.");

  await axios.delete(`${API_URL}/users/${userId}`);
  revalidatePath("/admin/pending");
  revalidatePath("/dashboard/admin");
}

/** Leave requests from users in the same department (for team-lead). */
export async function getTeamLeaveRequests(): Promise<LeaveRequest[]> {
  const session = await getSession();
  if (!session?.departmentId) return [];
  const [leavesRes, usersRes] = await Promise.all([
    axios.get<LeaveRequest[]>(`${API_URL}/leaveRequests`),
    axios.get<UserType[]>(`${API_URL}/users`),
  ]);
  const userIdsInDept = new Set(
    (usersRes.data as UserType[])
      .filter((u) => u.departmentId === session.departmentId)
      .map((u) => u.id)
  );
  const teamLeaves = leavesRes.data.filter((l) => userIdsInDept.has(l.userId));
  return teamLeaves.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getMyLeaves(): Promise<LeaveRequest[]> {
  const session = await getSession();
  if (!session?.id) return [];
  const { data } = await axios.get<LeaveRequest[]>(
    `${API_URL}/leaveRequests?userId=${session.id}`
  );
  return data.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getAllLeaves(): Promise<LeaveRequest[]> {
  const session = await getSession();
  if (!session) return [];
  if (session.role === "hr" || session.role === "admin") {
    const { data } = await axios.get<LeaveRequest[]>(`${API_URL}/leaveRequests`);
    return data.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  if (session.role === "team-lead") return getTeamLeaveRequests();
  return [];
}

export async function createLeave(formData: FormData) {
  const session = await getSession();
  if (!session?.id) throw new Error("Not logged in");

  const type = (formData.get("type") as LeaveType) || "casual";
  const startDate = formData.get("startDate") as string;
  const endDate = formData.get("endDate") as string;
  const reason = (formData.get("reason") as string) || "";

  if (!startDate || !endDate) throw new Error("Start and end date required");

  const { data: existing } = await axios.get<LeaveRequest[]>(
    `${API_URL}/leaveRequests`
  );
  const nextId = String(
    Math.max(0, ...existing.map((l) => parseInt(l.id, 10))) + 1
  );

  await axios.post(`${API_URL}/leaveRequests`, {
    id: nextId,
    userId: session.id,
    userName: session.name,
    type,
    startDate,
    endDate,
    reason,
    status: "pending",
    createdAt: new Date().toISOString(),
  });
  revalidatePath("/admin");
  revalidatePath("/admin/leave");
}

export async function updateLeaveStatus(
  leaveId: string,
  status: LeaveStatus
) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  const canHrAdmin = session.role === "hr" || session.role === "admin";
  const canTeamLead =
    session.role === "team-lead" && session.departmentId;
  if (!canHrAdmin && !canTeamLead) throw new Error("Unauthorized");

  const { data: leave } = await axios.get<LeaveRequest>(
    `${API_URL}/leaveRequests/${leaveId}`
  );
  if (session.role === "team-lead") {
    const { data: leaveUser } = await axios.get<UserType[]>(
      `${API_URL}/users?id=${leave.userId}`
    );
    const user = leaveUser[0];
    if (!user || user.departmentId !== session.departmentId)
      throw new Error("You can only approve leave for your team.");
  }
  await axios.patch(`${API_URL}/leaveRequests/${leaveId}`, {
    ...leave,
    status,
  });
  revalidatePath("/admin");
  revalidatePath("/admin/leave");
  revalidatePath("/admin/approve");
}
