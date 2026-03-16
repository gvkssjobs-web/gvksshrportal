"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../_lib/db";
import { getSession } from "../_lib/session";
import type {
  LeaveRequest,
  LeaveStatus,
  LeaveType,
  UserType,
  UserRole,
  Department,
} from "../_types/user";

export async function getDepartments(): Promise<Department[]> {
  const list = await prisma.department.findMany({ orderBy: { name: "asc" } });
  return list.map((d) => ({ id: d.id, name: d.name }));
}

export interface DepartmentWithStats extends Department {
  memberCount: number;
  teamLeadName: string | null;
}

export async function getDepartmentsWithStats(): Promise<DepartmentWithStats[]> {
  const session = await getSession();
  if (session?.role !== "admin") return [];

  const departments = await prisma.department.findMany({
    orderBy: { name: "asc" },
    include: {
      users: {
        where: { status: { not: "pending" } },
      },
    },
  });

  return departments.map((d) => {
    const members = d.users;
    const lead = members.find((u) => u.role === "team-lead");
    return {
      id: d.id,
      name: d.name,
      memberCount: members.length,
      teamLeadName: lead ? lead.name : null,
    };
  });
}

export async function createDepartment(name: string) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can create teams.");

  await prisma.department.create({ data: { name: name.trim() } });
  revalidatePath("/admin/teams");
  revalidatePath("/dashboard/admin");
}

export async function updateDepartment(id: string, name: string) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can edit teams.");

  await prisma.department.update({
    where: { id },
    data: { name: name.trim() },
  });
  revalidatePath("/admin/teams");
  revalidatePath("/dashboard/admin");
}

export async function deleteDepartment(id: string) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can delete teams.");

  const count = await prisma.user.count({ where: { departmentId: id } });
  if (count > 0) {
    throw new Error(
      `Cannot delete: ${count} member(s) are in this team. Reassign or remove them first.`
    );
  }
  await prisma.department.delete({ where: { id } });
  revalidatePath("/admin/teams");
  revalidatePath("/dashboard/admin");
}

export async function updateUserTeamAndRole(
  userId: string,
  departmentId: string | null,
  role: UserRole,
  joiningDate?: string | null,
  relievingDate?: string | null
) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can edit team members.");

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user || user.status === "pending")
    throw new Error("User not found or pending approval.");

  const data: { departmentId: string | null; role: UserRole; joiningDate?: Date | null; relievingDate?: Date | null } = {
    departmentId,
    role,
  };
  // Only admin may update joining/relieving dates; no other role can modify them
  if (session.role === "admin") {
    if (joiningDate !== undefined) data.joiningDate = joiningDate ? new Date(joiningDate) : null;
    if (relievingDate !== undefined) data.relievingDate = relievingDate ? new Date(relievingDate) : null;
  }

  await prisma.user.update({
    where: { id: userId },
    data,
  });
  revalidatePath("/admin/employees");
  revalidatePath("/admin/employees/" + userId);
  revalidatePath("/dashboard/admin");
}

export async function deleteEmployee(userId: string) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can delete employees.");
  if (session.id === userId) throw new Error("You cannot delete your own account.");

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error("User not found.");

  await prisma.user.delete({ where: { id: userId } });
  revalidatePath("/admin/employees");
  revalidatePath("/dashboard/admin");
}

function toUserType(u: {
  id: string;
  name: string;
  email: string;
  role: string;
  departmentId: string | null;
  joiningDate?: Date | null;
  relievingDate?: Date | null;
}): UserType {
  return {
    id: u.id,
    name: u.name,
    email: u.email,
    role: u.role as UserRole,
    departmentId: u.departmentId ?? undefined,
    joiningDate: u.joiningDate?.toISOString().slice(0, 10),
    relievingDate: u.relievingDate?.toISOString().slice(0, 10),
  };
}

function withDepartmentNames(
  users: {
    id: string;
    name: string;
    email: string;
    role: string;
    departmentId: string | null;
    joiningDate?: Date | null;
    relievingDate?: Date | null;
    department: { name: string } | null;
  }[],
  _departments?: Department[]
): (UserType & { departmentName?: string })[] {
  return users.map((u) => ({
    ...toUserType(u),
    departmentName: u.department?.name ?? "—",
  }));
}

export async function getEmployees(): Promise<
  (UserType & { departmentName?: string })[]
> {
  const users = await prisma.user.findMany({
    where: { status: { not: "pending" } },
    include: { department: true },
    orderBy: { name: "asc" },
  });
  return withDepartmentNames(users);
}

export async function getTeamMembers(): Promise<
  (UserType & { departmentName?: string })[]
> {
  const session = await getSession();
  if (!session?.departmentId) return [];

  const users = await prisma.user.findMany({
    where: { departmentId: session.departmentId, status: { not: "pending" } },
    include: { department: true },
    orderBy: { name: "asc" },
  });
  return withDepartmentNames(users);
}

export async function getPendingRegistrations(): Promise<UserType[]> {
  const session = await getSession();
  if (session?.role !== "admin") return [];

  const list = await prisma.user.findMany({
    where: { status: "pending" },
    orderBy: { name: "asc" },
  });
  return list.map(toUserType);
}

export async function approveRegistration(
  userId: string,
  departmentId: string,
  role: UserRole
) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can approve registrations.");

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user || user.status !== "pending")
    throw new Error("User not found or already processed.");

  await prisma.user.update({
    where: { id: userId },
    data: { departmentId, role, status: "active", joiningDate: new Date() },
  });
  revalidatePath("/admin/pending");
  revalidatePath("/dashboard/admin");
}

export async function rejectRegistration(userId: string) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can reject registrations.");

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user || user.status !== "pending")
    throw new Error("User not found or already processed.");

  await prisma.user.delete({ where: { id: userId } });
  revalidatePath("/admin/pending");
  revalidatePath("/dashboard/admin");
}

function toLeaveRequest(l: {
  id: string;
  userId: string;
  userName: string;
  type: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: string;
  createdAt: Date;
}): LeaveRequest {
  return {
    id: l.id,
    userId: l.userId,
    userName: l.userName,
    type: l.type as LeaveType,
    startDate: l.startDate,
    endDate: l.endDate,
    reason: l.reason,
    status: l.status as LeaveStatus,
    createdAt: l.createdAt.toISOString(),
  };
}

export async function getTeamLeaveRequests(): Promise<LeaveRequest[]> {
  const session = await getSession();
  if (!session?.departmentId) return [];

  const usersInDept = await prisma.user.findMany({
    where: { departmentId: session.departmentId },
    select: { id: true },
  });
  const userIds = new Set(usersInDept.map((u) => u.id));

  const list = await prisma.leaveRequest.findMany({
    where: { userId: { in: [...userIds] } },
    orderBy: { createdAt: "desc" },
  });
  return list.map(toLeaveRequest);
}

export async function getMyLeaves(): Promise<LeaveRequest[]> {
  const session = await getSession();
  if (!session?.id) return [];

  const list = await prisma.leaveRequest.findMany({
    where: { userId: session.id },
    orderBy: { createdAt: "desc" },
  });
  return list.map(toLeaveRequest);
}

export async function getAllLeaves(): Promise<LeaveRequest[]> {
  const session = await getSession();
  if (!session) return [];
  if (session.role === "hr" || session.role === "admin") {
    const list = await prisma.leaveRequest.findMany({
      orderBy: { createdAt: "desc" },
    });
    return list.map(toLeaveRequest);
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

  await prisma.leaveRequest.create({
    data: {
      userId: session.id,
      userName: session.name,
      type,
      startDate,
      endDate,
      reason,
      status: "pending",
    },
  });
  revalidatePath("/admin");
  revalidatePath("/admin/leave");
}

export async function updateLeaveStatus(leaveId: string, status: LeaveStatus) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  const canHrAdmin = session.role === "hr" || session.role === "admin";
  const canTeamLead = session.role === "team-lead" && session.departmentId;
  if (!canHrAdmin && !canTeamLead) throw new Error("Unauthorized");

  const leave = await prisma.leaveRequest.findUnique({ where: { id: leaveId } });
  if (!leave) throw new Error("Leave request not found.");

  if (session.role === "team-lead") {
    const user = await prisma.user.findUnique({
      where: { id: leave.userId },
    });
    if (!user || user.departmentId !== session.departmentId)
      throw new Error("You can only approve leave for your team.");
  }

  const updateData: any = {
    status,
  };

  const now = new Date();
  if (status === "approved") {
    updateData.approvedById = session.id;
    updateData.approvedAt = now;
    updateData.rejectedAt = null;
  } else if (status === "rejected") {
    updateData.approvedById = session.id;
    updateData.rejectedAt = now;
  }

  await prisma.leaveRequest.update({
    where: { id: leaveId },
    data: updateData,
  });
  revalidatePath("/admin");
  revalidatePath("/admin/leave");
  revalidatePath("/admin/approve");
}

/** Get a single user by id (for admin edit page). */
export async function getUserById(userId: string): Promise<UserType | null> {
  const session = await getSession();
  if (session?.role !== "admin") return null;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { department: true },
  });
  if (!user || user.status === "pending") return null;
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role as UserRole,
    departmentId: user.departmentId ?? undefined,
    joiningDate: user.joiningDate?.toISOString().slice(0, 10),
    relievingDate: user.relievingDate?.toISOString().slice(0, 10),
  };
}

