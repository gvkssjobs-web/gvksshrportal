"use server";

import { prisma } from "../_lib/db";
import { getSession } from "../_lib/session";
import { revalidatePath } from "next/cache";

export type AttendanceStatus = "present" | "absent" | "leave";

export interface AttendanceRecord {
  id: string;
  userId: string;
  date: string;
  checkIn?: string;
  checkOut?: string;
  status: AttendanceStatus;
}

function toAttendanceRecord(a: {
  id: string;
  userId: string;
  date: Date;
  checkIn: Date | null;
  checkOut: Date | null;
  status: string;
}): AttendanceRecord {
  return {
    id: a.id,
    userId: a.userId,
    date: a.date.toISOString(),
    checkIn: a.checkIn ? a.checkIn.toISOString() : undefined,
    checkOut: a.checkOut ? a.checkOut.toISOString() : undefined,
    status: (a.status as AttendanceStatus) ?? "present",
  };
}

function getTodayRange() {
  const now = new Date();
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  return { start, end };
}

export async function getMyAttendance(limit = 30): Promise<AttendanceRecord[]> {
  const session = await getSession();
  if (!session?.id) return [];

  const records = await prisma.attendance.findMany({
    where: { userId: session.id },
    orderBy: { date: "desc" },
    take: limit,
  });
  return records.map(toAttendanceRecord);
}

export async function getAttendanceForAdmin(params: {
  departmentId?: string;
  from?: Date;
  to?: Date;
}): Promise<AttendanceRecord[]> {
  const session = await getSession();
  if (!session || (session.role !== "admin" && session.role !== "hr")) {
    return [];
  }

  const { departmentId, from, to } = params;

  const records = await prisma.attendance.findMany({
    where: {
      ...(from || to
        ? {
            date: {
              gte: from,
              lte: to,
            },
          }
        : {}),
      ...(departmentId
        ? {
            user: {
              departmentId,
            },
          }
        : {}),
    },
    orderBy: { date: "desc" },
    include: {
      user: true,
    },
  });

  return records.map((r) => toAttendanceRecord(r));
}

export async function checkInToday() {
  const session = await getSession();
  if (!session?.id) throw new Error("Not logged in");

  const { start, end } = getTodayRange();

  const existing = await prisma.attendance.findFirst({
    where: {
      userId: session.id,
      date: {
        gte: start,
        lte: end,
      },
    },
  });

  const now = new Date();

  if (existing) {
    if (existing.checkIn) {
      throw new Error("You have already checked in today.");
    }
    await prisma.attendance.update({
      where: { id: existing.id },
      data: {
        checkIn: now,
        status: "present",
      },
    });
  } else {
    await prisma.attendance.create({
      data: {
        userId: session.id,
        date: now,
        checkIn: now,
        status: "present",
      },
    });
  }

  revalidatePath("/admin/attendance");
}

export async function checkOutToday() {
  const session = await getSession();
  if (!session?.id) throw new Error("Not logged in");

  const { start, end } = getTodayRange();

  const existing = await prisma.attendance.findFirst({
    where: {
      userId: session.id,
      date: {
        gte: start,
        lte: end,
      },
    },
  });

  if (!existing || !existing.checkIn) {
    throw new Error("You need to check in before checking out.");
  }

  const now = new Date();

  await prisma.attendance.update({
    where: { id: existing.id },
    data: {
      checkOut: now,
    },
  });

  revalidatePath("/admin/attendance");
}
