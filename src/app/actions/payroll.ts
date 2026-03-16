"use server";

import { prisma } from "../_lib/db";
import { getSession } from "../_lib/session";
import { revalidatePath } from "next/cache";

export interface PayrollRecordType {
  id: string;
  userId: string;
  periodYear: number;
  periodMonth: number;
  gross: number;
  net: number;
  createdAt: string;
}

export async function setSalary(userId: string, baseAmount: number) {
  const session = await getSession();
  if (!session || (session.role !== "admin" && session.role !== "hr")) {
    throw new Error("Only admin or HR can set salaries.");
  }

  if (baseAmount <= 0) throw new Error("Base salary must be greater than 0.");

  await prisma.salary.create({
    data: {
      userId,
      baseAmount,
      effectiveFrom: new Date(),
    },
  });

  revalidatePath("/admin/payroll");
}

export async function getSalaries() {
  const session = await getSession();
  if (!session || (session.role !== "admin" && session.role !== "hr")) {
    return [];
  }

  const users = await prisma.user.findMany({
    where: { status: { not: "pending" } },
    orderBy: { name: "asc" },
    include: {
      department: true,
      salaries: {
        orderBy: { effectiveFrom: "desc" },
        take: 1,
      },
    },
  });

  return users.map((u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    departmentName: u.department?.name ?? "—",
    currentSalary: u.salaries[0]?.baseAmount ?? null,
  }));
}

export async function generatePayroll(
  periodYear: number,
  periodMonth: number
): Promise<PayrollRecordType[]> {
  const session = await getSession();
  if (!session || (session.role !== "admin" && session.role !== "hr")) {
    throw new Error("Only admin or HR can generate payroll.");
  }

  if (!periodYear || !periodMonth) {
    throw new Error("Invalid period.");
  }

  const startOfMonth = new Date(periodYear, periodMonth - 1, 1);
  const endOfMonth = new Date(periodYear, periodMonth, 0, 23, 59, 59, 999);

  const activeUsers = await prisma.user.findMany({
    where: { status: "active" },
  });

  const records: PayrollRecordType[] = [];

  for (const user of activeUsers) {
    const latestSalary = await prisma.salary.findFirst({
      where: { userId: user.id, effectiveFrom: { lte: endOfMonth } },
      orderBy: { effectiveFrom: "desc" },
    });

    if (!latestSalary) continue;

    const gross = latestSalary.baseAmount;
    const net = gross; // simple for now

    const created = await prisma.payrollRecord.create({
      data: {
        userId: user.id,
        periodYear,
        periodMonth,
        gross,
        net,
      },
    });

    records.push({
      id: created.id,
      userId: created.userId,
      periodYear: created.periodYear,
      periodMonth: created.periodMonth,
      gross: created.gross,
      net: created.net,
      createdAt: created.createdAt.toISOString(),
    });
  }

  revalidatePath("/admin/payroll");
  return records;
}

export async function getPayrollForUser(
  userId?: string
): Promise<PayrollRecordType[]> {
  const session = await getSession();
  if (!session) return [];

  const targetUserId = userId ?? session.id;

  if (userId && session.role !== "admin" && session.role !== "hr") {
    throw new Error("Only admin or HR can view payroll for other users.");
  }

  const records = await prisma.payrollRecord.findMany({
    where: { userId: targetUserId },
    orderBy: { createdAt: "desc" },
  });

  return records.map((r) => ({
    id: r.id,
    userId: r.userId,
    periodYear: r.periodYear,
    periodMonth: r.periodMonth,
    gross: r.gross,
    net: r.net,
    createdAt: r.createdAt.toISOString(),
  }));
}

export interface PayslipData {
  employeeName: string;
  employeeId: string;
  employeeCode: string;
  designation: string;
  bankAccount: string;
  joiningDate: string;
  pfNo: string;
  panNumber: string;
  periodMonth: number;
  periodYear: number;
  periodLabel: string;
  daysInMonth: number;
  leavesTaken: number;
  allowedLeave: number;
  deductedLeave: number;
  payableDays: number;
  uan: string;
  basicSalary: number;
  hra: number;
  specialAllowance: number;
  grossSalary: number;
  tds: number;
  employeePf: number;
  professionalTax: number;
  totalDeductions: number;
  netPay: number;
}

export async function getPayslipData(
  userId: string,
  month: number,
  year: number
): Promise<PayslipData | null> {
  const session = await getSession();
  if (!session) return null;

  if (userId !== session.id && session.role !== "admin" && session.role !== "hr") {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { department: true },
  });
  if (!user || user.status === "pending") return null;

  const endOfMonth = new Date(year, month, 0, 23, 59, 59, 999);
  const salary = await prisma.salary.findFirst({
    where: { userId, effectiveFrom: { lte: endOfMonth } },
    orderBy: { effectiveFrom: "desc" },
  });

  if (!salary) return null;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const daysInMonth = new Date(year, month, 0).getDate();
  const grossSalary = salary.baseAmount;
  const basicSalary = Math.round(grossSalary * 0.5);
  const hra = Math.round(grossSalary * 0.25);
  const specialAllowance = grossSalary - basicSalary - hra;
  const tds = 0;
  const employeePf = 0;
  const professionalTax = 0;
  const totalDeductions = tds + employeePf + professionalTax;
  const netPay = grossSalary - totalDeductions;
  const joiningDateFormatted = user.joiningDate
    ? (() => {
        const d = new Date(user.joiningDate);
        const day = d.getDate().toString().padStart(2, "0");
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = monthNames[d.getMonth()];
        const year = d.getFullYear().toString().slice(-2);
        return `${day}-${month}-${year}`;
      })()
    : "—";
  const designation = (user.role ?? "employee").toUpperCase().replace(/-/g, " ");
  const employeeCode = user.id.slice(-6).toUpperCase();

  return {
    employeeName: user.name,
    employeeId: user.id,
    employeeCode: `GJID-${employeeCode}`,
    designation,
    bankAccount: user.bankAccount ?? "—",
    joiningDate: joiningDateFormatted,
    pfNo: "0",
    panNumber: user.panNumber ?? "—",
    periodMonth: month,
    periodYear: year,
    periodLabel: `${monthNames[month - 1]}- ${year}`,
    daysInMonth,
    leavesTaken: 0,
    allowedLeave: 0,
    deductedLeave: 0,
    payableDays: daysInMonth,
    uan: "0",
    basicSalary,
    hra,
    specialAllowance,
    grossSalary,
    tds,
    employeePf,
    professionalTax,
    totalDeductions,
    netPay,
  };
}

