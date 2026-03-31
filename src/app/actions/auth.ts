"use server";

import { redirect } from "next/navigation";
import { prisma } from "../_lib/db";
import { deletesession, setSession } from "../_lib/session";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "object" && error !== null && "message" in error)
    return String((error as { message: unknown }).message);
  return "Something went wrong. Please try again.";
}

function getStr(formData: FormData, key: string): string | null {
  const v = formData.get(key);
  if (v == null) return null;
  const s = String(v).trim();
  return s === "" ? null : s;
}

export const loginAction = async (formData: FormData) => {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const user = await prisma.user.findFirst({
      where: { email, password },
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    if (user.status === "pending") {
      throw new Error(
        "Your account is pending admin approval. You can log in after an admin approves your registration."
      );
    }

    await setSession({
      name: user.name,
      email: user.email,
      id: user.id,
      role: (user.role as "employee" | "hr" | "admin" | "team-lead") ?? "employee",
      departmentId: user.departmentId ?? undefined,
    });
    redirect("/dashboard");
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "digest" in error &&
      typeof (error as { digest?: string }).digest === "string" &&
      (error as { digest: string }).digest.startsWith("NEXT_")
    ) {
      throw error;
    }
    if (
      error instanceof Error &&
      (error.message === "Invalid email or password" ||
        error.message.includes("pending admin approval"))
    ) {
      throw error;
    }
    const message =
      error instanceof Error
        ? error.message
        : getErrorMessage(error);
    if (message.includes("connect") || message.includes("database"))
      throw new Error(
        "Database connection failed. Check DATABASE_URL in .env and that PostgreSQL is running."
      );
    console.error("LOGIN ERROR:", error);
    throw new Error(message);
  }
};

export const logoutAction = async () => {
  await deletesession();
  redirect("/login");
};

export interface EducationEntry {
  level: string;
  collegeName?: string;
  rollNumber?: string;
  yearPassout?: string;
  marksScored?: string;
  marksOutOf?: string;
  cgpaScored?: string;
  cgpaOutOf?: string;
  currentBacklogs?: string;
  historyBacklogs?: string;
  breaksInAcademics?: string;
}

export async function registerAction(formData: FormData) {
  const firstName = getStr(formData, "firstName");
  const middleName = getStr(formData, "middleName");
  const lastName = getStr(formData, "lastName");
  const email = getStr(formData, "email");
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const bankAccount = getStr(formData, "bankAccount");
  const panNumber = getStr(formData, "panNumber");

  if (!email || !password) {
    throw new Error("Email and password are required");
  }
  if (password !== confirmPassword) {
    throw new Error("Password and confirm password do not match");
  }
  if (!firstName && !lastName) {
    throw new Error("First name or last name is required");
  }
  if (!bankAccount) throw new Error("Bank account number is required");
  if (!panNumber) throw new Error("PAN number is required");
  const aadharNumber = getStr(formData, "aadharNumber");
  if (!aadharNumber) throw new Error("Aadhar number is required");

  const dateOfBirthRaw = getStr(formData, "dateOfBirth");
  if (!dateOfBirthRaw) throw new Error("Date of birth is required");
  const marriageStatus = getStr(formData, "marriageStatus");
  if (!marriageStatus) throw new Error("Marital status is required");
  const photo = getStr(formData, "photo");
  if (!photo) throw new Error("Photo (URL) is required");

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) throw new Error("Email already registered");

  if (!getStr(formData, "addressHNo")) throw new Error("Address (H.No / Building) is required");
  if (!getStr(formData, "city")) throw new Error("City is required");
  if (!getStr(formData, "state")) throw new Error("State is required");
  if (!getStr(formData, "pincode")) throw new Error("Pincode is required");
  if (!getStr(formData, "phoneNumber")) throw new Error("Phone number is required");
  if (!getStr(formData, "emergencyContactNumber")) throw new Error("Emergency contact number is required");
  if (!getStr(formData, "emergencyContactWhose")) throw new Error("Emergency contact (whose) is required");
  if (!getStr(formData, "emergencyContactRelation")) throw new Error("Emergency contact relation is required");
  if (!getStr(formData, "native")) throw new Error("Native place is required");
  if (!getStr(formData, "fatherName")) throw new Error("Father name is required");
  if (!getStr(formData, "fatherOccupation")) throw new Error("Father occupation is required");
  if (!getStr(formData, "motherName")) throw new Error("Mother name is required");
  if (!getStr(formData, "motherOccupation")) throw new Error("Mother occupation is required");
  if (!getStr(formData, "motherTongue")) throw new Error("Mother tongue is required");
  if (!getStr(formData, "qualification")) throw new Error("Highest qualification is required");
  if (!getStr(formData, "experience")) throw new Error("Experience is required");
  if (!getStr(formData, "currentDesignation")) throw new Error("Current designation is required");

  const name = [firstName, middleName, lastName].filter(Boolean).join(" ") || email;
  const dateOfBirth = new Date(dateOfBirthRaw);

  const educationJson = getStr(formData, "education");
  let educationList: EducationEntry[] = [];
  if (educationJson) {
    try {
      educationList = JSON.parse(educationJson) as EducationEntry[];
    } catch {
      educationList = [];
    }
  }
  for (const e of educationList) {
    if (!e.level) continue;
    if (!e.collegeName?.trim()) throw new Error(`College/School name is required for ${e.level}`);
    if (!e.rollNumber?.trim()) throw new Error(`Roll number is required for ${e.level}`);
    if (!e.yearPassout?.trim()) throw new Error(`Year of passout is required for ${e.level}`);
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      firstName: firstName ?? null,
      middleName: middleName ?? null,
      lastName: lastName ?? null,
      dateOfBirth,
      marriageStatus: marriageStatus ?? null,
      photo: photo ?? null,
      aadharNumber: aadharNumber ?? null,
      bankAccount: bankAccount ?? null,
      panNumber: panNumber ?? null,
      passportNumber: getStr(formData, "passportNumber") ?? null,
      dlNumber: getStr(formData, "dlNumber") ?? null,
      addressHNo: getStr(formData, "addressHNo") ?? null,
      city: getStr(formData, "city") ?? null,
      state: getStr(formData, "state") ?? null,
      pincode: getStr(formData, "pincode") ?? null,
      phoneNumber: getStr(formData, "phoneNumber") ?? null,
      emergencyContactNumber: getStr(formData, "emergencyContactNumber") ?? null,
      emergencyContactWhose: getStr(formData, "emergencyContactWhose") ?? null,
      emergencyContactRelation: getStr(formData, "emergencyContactRelation") ?? null,
      native: getStr(formData, "native") ?? null,
      fatherName: getStr(formData, "fatherName") ?? null,
      fatherOccupation: getStr(formData, "fatherOccupation") ?? null,
      motherName: getStr(formData, "motherName") ?? null,
      motherOccupation: getStr(formData, "motherOccupation") ?? null,
      motherTongue: getStr(formData, "motherTongue") ?? null,
      qualification: getStr(formData, "qualification") ?? null,
      experience: getStr(formData, "experience") ?? null,
      previousDesignation: getStr(formData, "previousDesignation") ?? null,
      currentDesignation: getStr(formData, "currentDesignation") ?? null,
      status: "pending",
    },
  });

  for (const e of educationList) {
    if (!e.level) continue;
    await prisma.education.create({
      data: {
        userId: user.id,
        level: e.level,
        collegeName: e.collegeName ?? null,
        rollNumber: e.rollNumber ?? null,
        yearPassout: e.yearPassout ?? null,
        marksScored: e.marksScored ?? null,
        marksOutOf: e.marksOutOf ?? null,
        cgpaScored: e.cgpaScored ?? null,
        cgpaOutOf: e.cgpaOutOf ?? null,
        currentBacklogs: e.currentBacklogs ?? null,
        historyBacklogs: e.historyBacklogs ?? null,
        breaksInAcademics: e.breaksInAcademics ?? null,
      },
    });
  }
}
