export type UserRole = "employee" | "hr" | "admin" | "team-lead";

export type UserStatus = "pending" | "active";

export interface UserType {
  id: string;
  email: string;
  name: string;
  role?: UserRole;
  departmentId?: string;
  status?: UserStatus;
  joiningDate?: string;   // ISO date string
  relievingDate?: string; // ISO date string
}

export interface Department {
  id: string;
  name: string;
}

export type LeaveStatus = "pending" | "approved" | "rejected";
export type LeaveType = "sick" | "casual" | "annual" | "unpaid";

export interface LeaveRequest {
  id: string;
  userId: string;
  userName: string;
  type: LeaveType;
  startDate: string;
  endDate: string;
  reason: string;
  status: LeaveStatus;
  createdAt: string;
}
