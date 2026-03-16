"use server";

import { prisma } from "../_lib/db";
import { getSession } from "../_lib/session";
import { revalidatePath } from "next/cache";

export type ResignationStatus = "pending" | "approved" | "rejected";

export interface ResignationRequest {
  id: string;
  userId: string;
  userName: string;
  explanation: string;
  status: ResignationStatus;
  createdAt: string;
  approvedAt?: string;
}

function toResignation(r: {
  id: string;
  userId: string;
  userName: string;
  explanation: string;
  status: string;
  createdAt: Date;
  approvedAt: Date | null;
}): ResignationRequest {
  return {
    id: r.id,
    userId: r.userId,
    userName: r.userName,
    explanation: r.explanation,
    status: r.status as ResignationStatus,
    createdAt: r.createdAt.toISOString(),
    approvedAt: r.approvedAt?.toISOString(),
  };
}

export async function createResignation(explanation: string) {
  const session = await getSession();
  if (!session?.id) throw new Error("Not logged in.");
  if (session.role === "admin") throw new Error("Admins cannot apply for resignation.");

  const trimmed = explanation?.trim();
  if (!trimmed) throw new Error("Please provide an explanation.");

  const pending = await prisma.resignation.findFirst({
    where: { userId: session.id, status: "pending" },
  });
  if (pending) throw new Error("You already have a pending resignation request.");

  await prisma.resignation.create({
    data: {
      userId: session.id,
      userName: session.name,
      explanation: trimmed,
      status: "pending",
    },
  });
  revalidatePath("/admin/resign");
  revalidatePath("/admin/resignations");
}

export async function getMyResignations(): Promise<ResignationRequest[]> {
  const session = await getSession();
  if (!session?.id) return [];

  const list = await prisma.resignation.findMany({
    where: { userId: session.id },
    orderBy: { createdAt: "desc" },
  });
  return list.map(toResignation);
}

export async function getPendingResignations(): Promise<ResignationRequest[]> {
  const session = await getSession();
  if (session?.role !== "admin") return [];

  const list = await prisma.resignation.findMany({
    where: { status: "pending" },
    orderBy: { createdAt: "asc" },
  });
  return list.map(toResignation);
}

export async function approveResignation(resignationId: string) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can approve resignations.");

  const resignation = await prisma.resignation.findUnique({
    where: { id: resignationId },
  });
  if (!resignation) throw new Error("Resignation request not found.");
  if (resignation.status !== "pending") throw new Error("Request already processed.");

  const now = new Date();
  await prisma.$transaction([
    prisma.resignation.update({
      where: { id: resignationId },
      data: { status: "approved", approvedAt: now },
    }),
    prisma.user.update({
      where: { id: resignation.userId },
      data: { relievingDate: now },
    }),
  ]);
  revalidatePath("/admin/resignations");
  revalidatePath("/admin/resign");
  revalidatePath("/admin/employees");
}

export async function rejectResignation(resignationId: string) {
  const session = await getSession();
  if (session?.role !== "admin") throw new Error("Only admin can reject resignations.");

  const resignation = await prisma.resignation.findUnique({
    where: { id: resignationId },
  });
  if (!resignation) throw new Error("Resignation request not found.");
  if (resignation.status !== "pending") throw new Error("Request already processed.");

  await prisma.resignation.update({
    where: { id: resignationId },
    data: { status: "rejected" },
  });
  revalidatePath("/admin/resignations");
  revalidatePath("/admin/resign");
}
