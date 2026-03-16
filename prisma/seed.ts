import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const existingDepts = await prisma.department.count();
  if (existingDepts === 0) {
    await prisma.department.createMany({
      data: [
        { name: "Engineering" },
        { name: "Operations" },
        { name: "HR" },
      ],
    });
  }

  const adminEmail = "admin@gvkss.local";
  const admin = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!admin) {
    const firstDept = await prisma.department.findFirst();
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: "Admin",
        password: "admin123",
        role: "admin",
        status: "active",
        departmentId: firstDept?.id ?? null,
      },
    });
    console.log("Seed done: created admin (admin@gvkss.local / admin123)");
  } else {
    console.log("Seed skipped: admin already exists");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
