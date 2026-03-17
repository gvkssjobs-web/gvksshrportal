import { nanoid } from "nanoid";
import {
  runQuery,
  runExecute,
  runTransaction,
  getConnection,
} from "./oracle";

// Use Oracle (no Prisma). Ensure ORACLE_* env vars and tables exist (see scripts/oracle-ddl.sql).

function id() {
  return nanoid(24);
}

function toDate(d: Date | string | null | undefined): Date | null {
  if (!d) return null;
  if (d instanceof Date) return d;
  const t = new Date(d);
  return isNaN(t.getTime()) ? null : t;
}

function rowToUser(r: Record<string, unknown>) {
  return {
    id: String(r.id ?? r.ID),
    email: String(r.email ?? r.EMAIL),
    name: String(r.name ?? r.NAME),
    password: String(r.password ?? r.PASSWORD),
    firstName: r.firstName ?? r.FIRSTNAME ?? null,
    middleName: r.middleName ?? r.MIDDLENAME ?? null,
    lastName: r.lastName ?? r.LASTNAME ?? null,
    dateOfBirth: toDate(r.dateOfBirth ?? r.DATEOFBIRTH),
    marriageStatus: (r.marriageStatus ?? r.MARRIAGESTATUS) as string | null,
    photo: (r.photo ?? r.PHOTO) as string | null,
    aadharNumber: (r.aadharNumber ?? r.AADHARNUMBER) as string | null,
    bankAccount: (r.bankAccount ?? r.BANKACCOUNT) as string | null,
    panNumber: (r.panNumber ?? r.PANNUMBER) as string | null,
    passportNumber: (r.passportNumber ?? r.PASSPORTNUMBER) as string | null,
    dlNumber: (r.dlNumber ?? r.DLNUMBER) as string | null,
    addressHNo: (r.addressHNo ?? r.ADDRESSHNO) as string | null,
    city: (r.city ?? r.CITY) as string | null,
    state: (r.state ?? r.STATE) as string | null,
    pincode: (r.pincode ?? r.PINCODE) as string | null,
    phoneNumber: (r.phoneNumber ?? r.PHONENUMBER) as string | null,
    emergencyContactNumber: (r.emergencyContactNumber ?? r.EMERGENCYCONTACTNUMBER) as string | null,
    emergencyContactWhose: (r.emergencyContactWhose ?? r.EMERGENCYCONTACTWHOSE) as string | null,
    emergencyContactRelation: (r.emergencyContactRelation ?? r.EMERGENCYCONTACTRELATION) as string | null,
    native: (r.native ?? r.NATIVE) as string | null,
    fatherName: (r.fatherName ?? r.FATHERNAME) as string | null,
    fatherOccupation: (r.fatherOccupation ?? r.FATHEROCCUPATION) as string | null,
    motherName: (r.motherName ?? r.MOTHERNAME) as string | null,
    motherOccupation: (r.motherOccupation ?? r.MOTHEROCCUPATION) as string | null,
    motherTongue: (r.motherTongue ?? r.MOTHERTONGUE) as string | null,
    qualification: (r.qualification ?? r.QUALIFICATION) as string | null,
    experience: (r.experience ?? r.EXPERIENCE) as string | null,
    previousDesignation: (r.previousDesignation ?? r.PREVIOUSDESIGNATION) as string | null,
    currentDesignation: (r.currentDesignation ?? r.CURRENTDESIGNATION) as string | null,
    role: String(r.role ?? r.ROLE ?? "employee"),
    status: String(r.status ?? r.STATUS ?? "active"),
    departmentId: (r.departmentId ?? r.DEPARTMENTID) as string | null,
    joiningDate: toDate(r.joiningDate ?? r.JOININGDATE),
    relievingDate: toDate(r.relievingDate ?? r.RELIEVINGDATE),
  };
}

function rowToDept(r: Record<string, unknown>) {
  return { id: String(r.id ?? r.ID), name: String(r.name ?? r.NAME) };
}

function rowToEducation(r: Record<string, unknown>) {
  return {
    id: String(r.id ?? r.ID),
    userId: String(r.userId ?? r.USERID),
    level: String(r.level ?? r.LEVEL),
    collegeName: (r.collegeName ?? r.COLLEGENAME) as string | null,
    rollNumber: (r.rollNumber ?? r.ROLLNUMBER) as string | null,
    yearPassout: (r.yearPassout ?? r.YEARPASSOUT) as string | null,
    marksScored: (r.marksScored ?? r.MARKSSCORED) as string | null,
    marksOutOf: (r.marksOutOf ?? r.MARKSOUTOF) as string | null,
    cgpaScored: (r.cgpaScored ?? r.CGPASCORED) as string | null,
    cgpaOutOf: (r.cgpaOutOf ?? r.CGPAOUTOF) as string | null,
    currentBacklogs: (r.currentBacklogs ?? r.CURRENTBACKLOGS) as string | null,
    historyBacklogs: (r.historyBacklogs ?? r.HISTORYBACKLOGS) as string | null,
    breaksInAcademics: (r.breaksInAcademics ?? r.BREAKSINACADEMICS) as string | null,
  };
}

function rowToLeaveRequest(r: Record<string, unknown>) {
  return {
    id: String(r.id ?? r.ID),
    userId: String(r.userId ?? r.USERID),
    userName: String(r.userName ?? r.USERNAME),
    type: String(r.type ?? r.TYPE),
    startDate: String(r.startDate ?? r.STARTDATE),
    endDate: String(r.endDate ?? r.ENDDATE),
    reason: String(r.reason ?? r.REASON ?? ""),
    status: String(r.status ?? r.STATUS ?? "pending"),
    createdAt: toDate(r.createdAt ?? r.CREATEDAT)!,
    approvedById: (r.approvedById ?? r.APPROVEDBYID) as string | null,
    approvedAt: toDate(r.approvedAt ?? r.APPROVEDAT),
    rejectedAt: toDate(r.rejectedAt ?? r.REJECTEDAT),
  };
}

function rowToAttendance(r: Record<string, unknown>) {
  return {
    id: String(r.id ?? r.ID),
    userId: String(r.userId ?? r.USERID),
    date: toDate(r.date ?? r.DATE)!,
    checkIn: toDate(r.checkIn ?? r.CHECKIN),
    checkOut: toDate(r.checkOut ?? r.CHECKOUT),
    status: String(r.status ?? r.STATUS ?? "present"),
    createdAt: toDate(r.createdAt ?? r.CREATEDAT),
  };
}

function rowToSalary(r: Record<string, unknown>) {
  return {
    id: String(r.id ?? r.ID),
    userId: String(r.userId ?? r.USERID),
    baseAmount: Number(r.baseAmount ?? r.BASEAMOUNT),
    effectiveFrom: toDate(r.effectiveFrom ?? r.EFFECTIVEFROM)!,
  };
}

function rowToPayrollRecord(r: Record<string, unknown>) {
  return {
    id: String(r.id ?? r.ID),
    userId: String(r.userId ?? r.USERID),
    periodYear: Number(r.periodYear ?? r.PERIODYEAR),
    periodMonth: Number(r.periodMonth ?? r.PERIODMONTH),
    gross: Number(r.gross ?? r.GROSS),
    net: Number(r.net ?? r.NET),
    createdAt: toDate(r.createdAt ?? r.CREATEDAT)!,
  };
}

function rowToResignation(r: Record<string, unknown>) {
  return {
    id: String(r.id ?? r.ID),
    userId: String(r.userId ?? r.USERID),
    userName: String(r.userName ?? r.USERNAME),
    explanation: String(r.explanation ?? r.EXPLANATION),
    status: String(r.status ?? r.STATUS ?? "pending"),
    createdAt: toDate(r.createdAt ?? r.CREATEDAT)!,
    approvedById: (r.approvedById ?? r.APPROVEDBYID) as string | null,
    approvedAt: toDate(r.approvedAt ?? r.APPROVEDAT),
  };
}

export const prisma = {
  department: {
    findMany: async (opts?: { orderBy?: { name: string }; include?: { users?: { where?: { status?: { not?: string } } } } }) => {
      const order = opts?.orderBy?.name === "asc" ? " ASC" : " DESC";
      const rows = await runQuery<Record<string, unknown>>(
        `SELECT * FROM departments ORDER BY "name"${order}`
      );
      const depts = rows.map(rowToDept);
      if (opts?.include?.users) {
        const statusNot = opts.include.users.where?.status?.not;
        for (let i = 0; i < depts.length; i++) {
          let sql = `SELECT * FROM users WHERE "departmentId" = :departmentId`;
          const binds: Record<string, unknown> = { departmentId: depts[i].id };
          if (statusNot) { sql += ` AND "status" != :statusNot`; binds.statusNot = statusNot; }
          sql += ` ORDER BY "name" ASC`;
          const userRows = await runQuery<Record<string, unknown>>(sql, binds);
          (depts[i] as Record<string, unknown>).users = userRows.map(rowToUser);
        }
      }
      return depts;
    },
    create: async (args: { data: { name: string } }) => {
      const idVal = id();
      await runExecute(
        `INSERT INTO departments ("id", "name") VALUES (:id, :name)`,
        { id: idVal, name: args.data.name }
      );
      return { id: idVal, name: args.data.name };
    },
    update: async (args: { where: { id: string }; data: { name: string } }) => {
      await runExecute(
        `UPDATE departments SET "name" = :name WHERE "id" = :id`,
        { name: args.data.name, id: args.where.id }
      );
      return { id: args.where.id, name: args.data.name };
    },
    delete: async (args: { where: { id: string } }) => {
      await runExecute(`DELETE FROM departments WHERE "id" = :id`, {
        id: args.where.id,
      });
    },
  },

  user: {
    findFirst: async (args: { where: { email: string; password?: string } }) => {
      const rows = await runQuery<Record<string, unknown>>(
        `SELECT * FROM users WHERE "email" = :email ${args.where.password != null ? `AND "password" = :password` : ""}`,
        args.where.password != null
          ? { email: args.where.email, password: args.where.password }
          : { email: args.where.email }
      );
      return rows.length ? rowToUser(rows[0]) : null;
    },
    findUnique: async (args: { where: { id?: string; email?: string }; include?: { department?: boolean } }) => {
      const where = args.where.id != null ? `"id" = :id` : `"email" = :email`;
      const binds = args.where.id != null ? { id: args.where.id } : { email: args.where.email };
      if (args.include?.department) {
        const rows = await runQuery<Record<string, unknown>>(
          `SELECT u.*, d."id" AS "dept_id", d."name" AS "dept_name" FROM users u LEFT JOIN departments d ON u."departmentId" = d."id" WHERE u.${where.replace('"id"', 'u."id"').replace('"email"', 'u."email"')}`,
          binds
        );
        if (rows.length === 0) return null;
        const u = rowToUser(rows[0]);
        const r = rows[0];
        return {
          ...u,
          department: (r.dept_id ?? r.DEPT_ID) != null ? { id: String(r.dept_id ?? r.DEPT_ID), name: String(r.dept_name ?? r.DEPT_NAME) } : null,
        };
      }
      const rows = await runQuery<Record<string, unknown>>(
        `SELECT * FROM users WHERE ${where}`,
        binds
      );
      return rows.length ? rowToUser(rows[0]) : null;
    },
    findMany: async (args?: {
      where?: { id?: string; email?: string; status?: string; departmentId?: string; departmentId_in?: string[]; status_not?: string };
      orderBy?: { name: string };
      include?: { department?: boolean; users?: boolean; salaries?: { orderBy: { effectiveFrom: string }; take: number } };
    }) => {
      let sql = `SELECT * FROM users WHERE 1=1`;
      const binds: Record<string, unknown> = {};
      if (args?.where) {
        if (args.where.status !== undefined) {
          sql += ` AND "status" = :status`;
          binds.status = args.where.status;
        }
        if (args.where.status_not) {
          sql += ` AND "status" != :status_not`;
          binds.status_not = args.where.status_not;
        }
        if (args.where.departmentId !== undefined) {
          sql += ` AND "departmentId" = :departmentId`;
          binds.departmentId = args.where.departmentId;
        }
        if (args.where.departmentId_in?.length) {
          sql += ` AND "departmentId" IN (${args.where.departmentId_in.map((_, i) => `:d${i}`).join(",")})`;
          args.where.departmentId_in.forEach((v, i) => { binds[`d${i}`] = v; });
        }
      }
      sql += ` ORDER BY "name" ${args?.orderBy?.name === "asc" ? "ASC" : "DESC"}`;
      const rows = await runQuery<Record<string, unknown>>(sql, binds);
      let users = rows.map(rowToUser);
      if (args?.include?.department) {
        for (let i = 0; i < users.length; i++) {
          const u = users[i];
          if (u.departmentId) {
            const depts = await runQuery<Record<string, unknown>>(
              `SELECT * FROM departments WHERE "id" = :id`,
              { id: u.departmentId }
            );
            (users[i] as Record<string, unknown>).department = depts.length ? rowToDept(depts[0]) : null;
          } else {
            (users[i] as Record<string, unknown>).department = null;
          }
        }
      }
      if (args?.include?.salaries) {
        for (let i = 0; i < users.length; i++) {
          const salRows = await runQuery<Record<string, unknown>>(
            `SELECT * FROM salaries WHERE "userId" = :userId ORDER BY "effectiveFrom" DESC FETCH FIRST 1 ROWS ONLY`,
            { userId: users[i].id }
          );
          (users[i] as Record<string, unknown>).salaries = salRows.map(rowToSalary);
        }
      }
      return users;
    },
    count: async (args: { where: { departmentId: string } }) => {
      const rows = await runQuery<Record<string, unknown>>(
        `SELECT COUNT(*) AS cnt FROM users WHERE "departmentId" = :departmentId`,
        { departmentId: args.where.departmentId }
      );
      return Number(rows[0]?.cnt ?? rows[0]?.CNT ?? 0);
    },
    create: async (args: { data: Record<string, unknown> }) => {
      const data = args.data as Record<string, unknown>;
      const userId = id();
      const cols = ["id", "email", "name", "password", "firstName", "middleName", "lastName", "dateOfBirth", "marriageStatus", "photo", "aadharNumber", "bankAccount", "panNumber", "passportNumber", "dlNumber", "addressHNo", "city", "state", "pincode", "phoneNumber", "emergencyContactNumber", "emergencyContactWhose", "emergencyContactRelation", "native", "fatherName", "fatherOccupation", "motherName", "motherOccupation", "motherTongue", "qualification", "experience", "previousDesignation", "currentDesignation", "status"];
      const setCols = cols.map((c) => `"${c}"`).join(", ");
      const placeholders = cols.map((_, i) => `:b${i}`).join(", ");
      const binds: Record<string, unknown> = {};
      cols.forEach((c, i) => { binds[`b${i}`] = c === "id" ? userId : (data[c] ?? null); });
      await runExecute(
        `INSERT INTO users (${setCols}) VALUES (${placeholders})`,
        binds
      );
      return rowToUser({ ...data, id: userId });
    },
    update: async (args: { where: { id: string }; data: Record<string, unknown> }) => {
      const data = args.data;
      const sets: string[] = [];
      const binds: Record<string, unknown> = { id: args.where.id };
      const keys = Object.keys(data).filter((k) => data[k] !== undefined);
      keys.forEach((k, i) => {
        sets.push(`"${k}" = :u${i}`);
        binds[`u${i}`] = data[k] instanceof Date ? data[k] : data[k];
      });
      if (sets.length === 0) return prisma.user.findUnique({ where: { id: args.where.id } }) as Promise<unknown>;
      await runExecute(
        `UPDATE users SET ${sets.join(", ")} WHERE "id" = :id`,
        binds
      );
      return prisma.user.findUnique({ where: { id: args.where.id } }) as Promise<unknown>;
    },
    delete: async (args: { where: { id: string } }) => {
      await runExecute(`DELETE FROM users WHERE "id" = :id`, { id: args.where.id });
    },
  },

  education: {
    create: async (args: { data: Record<string, unknown> }) => {
      const data = args.data;
      const eid = id();
      await runExecute(
        `INSERT INTO educations ("id", "userId", "level", "collegeName", "rollNumber", "yearPassout", "marksScored", "marksOutOf", "cgpaScored", "cgpaOutOf", "currentBacklogs", "historyBacklogs", "breaksInAcademics") VALUES (:id, :userId, :level, :collegeName, :rollNumber, :yearPassout, :marksScored, :marksOutOf, :cgpaScored, :cgpaOutOf, :currentBacklogs, :historyBacklogs, :breaksInAcademics)`,
        {
          id: eid,
          userId: data.userId,
          level: data.level,
          collegeName: data.collegeName ?? null,
          rollNumber: data.rollNumber ?? null,
          yearPassout: data.yearPassout ?? null,
          marksScored: data.marksScored ?? null,
          marksOutOf: data.marksOutOf ?? null,
          cgpaScored: data.cgpaScored ?? null,
          cgpaOutOf: data.cgpaOutOf ?? null,
          currentBacklogs: data.currentBacklogs ?? null,
          historyBacklogs: data.historyBacklogs ?? null,
          breaksInAcademics: data.breaksInAcademics ?? null,
        }
      );
      return { id: eid, ...data };
    },
  },

  leaveRequest: {
    findMany: async (args?: { where?: { userId?: string; userId_in?: string[] }; orderBy?: { createdAt: string } }) => {
      let sql = `SELECT * FROM leave_requests WHERE 1=1`;
      const binds: Record<string, unknown> = {};
      if (args?.where?.userId) {
        sql += ` AND "userId" = :userId`;
        binds.userId = args.where.userId;
      }
      if (args?.where?.userId_in?.length) {
        sql += ` AND "userId" IN (${args.where.userId_in.map((_, i) => `:uid${i}`).join(",")})`;
        args.where.userId_in.forEach((v, i) => { binds[`uid${i}`] = v; });
      }
      sql += ` ORDER BY "createdAt" DESC`;
      const rows = await runQuery<Record<string, unknown>>(sql, binds);
      return rows.map(rowToLeaveRequest);
    },
    findUnique: async (args: { where: { id: string } }) => {
      const rows = await runQuery<Record<string, unknown>>(
        `SELECT * FROM leave_requests WHERE "id" = :id`,
        { id: args.where.id }
      );
      return rows.length ? rowToLeaveRequest(rows[0]) : null;
    },
    create: async (args: { data: Record<string, unknown> }) => {
      const data = args.data;
      const lid = id();
      await runExecute(
        `INSERT INTO leave_requests ("id", "userId", "userName", "type", "startDate", "endDate", "reason", "status") VALUES (:id, :userId, :userName, :type, :startDate, :endDate, :reason, :status)`,
        {
          id: lid,
          userId: data.userId,
          userName: data.userName,
          type: data.type,
          startDate: data.startDate,
          endDate: data.endDate,
          reason: data.reason ?? "",
          status: data.status ?? "pending",
        }
      );
      return { id: lid, ...data, createdAt: new Date() };
    },
    update: async (args: { where: { id: string }; data: Record<string, unknown> }) => {
      const d = args.data;
      const sets: string[] = [];
      const binds: Record<string, unknown> = { id: args.where.id };
      if (d.status !== undefined) { sets.push(`"status" = :status`); binds.status = d.status; }
      if (d.approvedById !== undefined) { sets.push(`"approvedById" = :approvedById`); binds.approvedById = d.approvedById; }
      if (d.approvedAt !== undefined) { sets.push(`"approvedAt" = :approvedAt`); binds.approvedAt = d.approvedAt; }
      if (d.rejectedAt !== undefined) { sets.push(`"rejectedAt" = :rejectedAt`); binds.rejectedAt = d.rejectedAt; }
      if (sets.length === 0) return null;
      await runExecute(`UPDATE leave_requests SET ${sets.join(", ")} WHERE "id" = :id`, binds);
      const rows = await runQuery<Record<string, unknown>>(`SELECT * FROM leave_requests WHERE "id" = :id`, { id: args.where.id });
      return rows.length ? rowToLeaveRequest(rows[0]) : null;
    },
  },

  attendance: {
    findMany: async (args: {
      where?: { userId?: string; date?: { gte?: Date; lte?: Date }; user?: { departmentId?: string } };
      orderBy?: { date: string };
      take?: number;
      include?: { user?: boolean };
    }) => {
      const limit = args.take ?? 100;
      if (args.include?.user) {
        return prisma.attendance.findManyWithUser({
          where: args.where ?? {},
          orderBy: args.orderBy ?? { date: "desc" },
          include: { user: true },
        });
      }
      const userId = args.where?.userId;
      if (!userId) return [];
      const rows = await runQuery<Record<string, unknown>>(
        `SELECT * FROM attendances WHERE "userId" = :userId ORDER BY "date" DESC FETCH FIRST :limit ROWS ONLY`,
        { userId, limit }
      );
      return rows.map(rowToAttendance);
    },
    findFirst: async (args: { where: { userId: string; date: { gte: Date; lte: Date } } }) => {
      const rows = await runQuery<Record<string, unknown>>(
        `SELECT * FROM attendances WHERE "userId" = :userId AND "date" >= :start AND "date" <= :end`,
        {
          userId: args.where.userId,
          start: args.where.date.gte,
          end: args.where.date.lte,
        }
      );
      return rows.length ? rowToAttendance(rows[0]) : null;
    },
    findManyWithUser: async (args: {
      where: { date?: { gte?: Date; lte?: Date }; user?: { departmentId?: string } };
      orderBy: { date: string };
      include: { user: boolean };
    }) => {
      let sql = `SELECT a.*, u."id" AS u_id, u."name" AS u_name, u."email" AS u_email, u."departmentId" AS u_departmentId FROM attendances a JOIN users u ON a."userId" = u."id" WHERE 1=1`;
      const binds: Record<string, unknown> = {};
      if (args.where.date?.gte) { sql += ` AND a."date" >= :dateFrom`; binds.dateFrom = args.where.date.gte; }
      if (args.where.date?.lte) { sql += ` AND a."date" <= :dateTo`; binds.dateTo = args.where.date.lte; }
      if (args.where.user?.departmentId) { sql += ` AND u."departmentId" = :departmentId`; binds.departmentId = args.where.user.departmentId; }
      sql += ` ORDER BY a."date" DESC`;
      const rows = await runQuery<Record<string, unknown>>(sql, binds);
      return rows.map((r) => ({
        ...rowToAttendance(r),
        user: { id: r.u_id ?? r.U_ID, name: r.u_name ?? r.U_NAME, email: r.u_email ?? r.U_EMAIL, departmentId: r.u_departmentId ?? r.U_DEPARTMENTID },
      }));
    },
    update: async (args: { where: { id: string }; data: Record<string, unknown> }) => {
      const d = args.data;
      const sets: string[] = [];
      const binds: Record<string, unknown> = { id: args.where.id };
      if (d.checkIn !== undefined) { sets.push(`"checkIn" = :checkIn`); binds.checkIn = d.checkIn; }
      if (d.checkOut !== undefined) { sets.push(`"checkOut" = :checkOut`); binds.checkOut = d.checkOut; }
      if (d.status !== undefined) { sets.push(`"status" = :status`); binds.status = d.status; }
      if (sets.length === 0) return null;
      await runExecute(`UPDATE attendances SET ${sets.join(", ")} WHERE "id" = :id`, binds);
      const rows = await runQuery<Record<string, unknown>>(`SELECT * FROM attendances WHERE "id" = :id`, { id: args.where.id });
      return rows.length ? rowToAttendance(rows[0]) : null;
    },
    create: async (args: { data: Record<string, unknown> }) => {
      const data = args.data;
      const aid = id();
      await runExecute(
        `INSERT INTO attendances ("id", "userId", "date", "checkIn", "checkOut", "status") VALUES (:id, :userId, :date, :checkIn, :checkOut, :status)`,
        {
          id: aid,
          userId: data.userId,
          date: data.date,
          checkIn: data.checkIn ?? null,
          checkOut: data.checkOut ?? null,
          status: data.status ?? "present",
        }
      );
      const rows = await runQuery<Record<string, unknown>>(`SELECT * FROM attendances WHERE "id" = :id`, { id: aid });
      return rows.length ? rowToAttendance(rows[0]) : null;
    },
  },

  salary: {
    findFirst: async (args: { where: { userId: string; effectiveFrom?: { lte: Date } }; orderBy: { effectiveFrom: string } }) => {
      let sql = `SELECT * FROM salaries WHERE "userId" = :userId`;
      const binds: Record<string, unknown> = { userId: args.where.userId };
      if (args.where.effectiveFrom?.lte) {
        sql += ` AND "effectiveFrom" <= :effectiveTo`;
        binds.effectiveTo = args.where.effectiveFrom.lte;
      }
      sql += ` ORDER BY "effectiveFrom" DESC FETCH FIRST 1 ROWS ONLY`;
      const rows = await runQuery<Record<string, unknown>>(sql, binds);
      return rows.length ? rowToSalary(rows[0]) : null;
    },
    create: async (args: { data: { userId: string; baseAmount: number; effectiveFrom: Date } }) => {
      const sid = id();
      await runExecute(
        `INSERT INTO salaries ("id", "userId", "baseAmount", "effectiveFrom") VALUES (:id, :userId, :baseAmount, :effectiveFrom)`,
        { id: sid, userId: args.data.userId, baseAmount: args.data.baseAmount, effectiveFrom: args.data.effectiveFrom }
      );
      return { id: sid, ...args.data };
    },
  },

  payrollRecord: {
    findMany: async (args: { where: { userId: string }; orderBy: { createdAt: string } }) => {
      const rows = await runQuery<Record<string, unknown>>(
        `SELECT * FROM payroll_records WHERE "userId" = :userId ORDER BY "createdAt" DESC`,
        { userId: args.where.userId }
      );
      return rows.map(rowToPayrollRecord);
    },
    create: async (args: { data: { userId: string; periodYear: number; periodMonth: number; gross: number; net: number } }) => {
      const pid = id();
      await runExecute(
        `INSERT INTO payroll_records ("id", "userId", "periodYear", "periodMonth", "gross", "net") VALUES (:id, :userId, :periodYear, :periodMonth, :gross, :net)`,
        { id: pid, ...args.data }
      );
      const rows = await runQuery<Record<string, unknown>>(`SELECT * FROM payroll_records WHERE "id" = :id`, { id: pid });
      return rows.length ? rowToPayrollRecord(rows[0]) : null;
    },
  },

  resignation: {
    findFirst: async (args: { where: { userId: string; status: string } }) => {
      const rows = await runQuery<Record<string, unknown>>(
        `SELECT * FROM resignations WHERE "userId" = :userId AND "status" = :status`,
        { userId: args.where.userId, status: args.where.status }
      );
      return rows.length ? rowToResignation(rows[0]) : null;
    },
    findMany: async (args?: { where?: { userId?: string; status?: string }; orderBy?: { createdAt: string } }) => {
      let sql = `SELECT * FROM resignations WHERE 1=1`;
      const binds: Record<string, unknown> = {};
      if (args?.where?.userId) { sql += ` AND "userId" = :userId`; binds.userId = args.where.userId; }
      if (args?.where?.status) { sql += ` AND "status" = :status`; binds.status = args.where.status; }
      sql += args?.orderBy?.createdAt === "desc" ? ` ORDER BY "createdAt" DESC` : ` ORDER BY "createdAt" ASC`;
      const rows = await runQuery<Record<string, unknown>>(sql, binds);
      return rows.map(rowToResignation);
    },
    findUnique: async (args: { where: { id: string } }) => {
      const rows = await runQuery<Record<string, unknown>>(
        `SELECT * FROM resignations WHERE "id" = :id`,
        { id: args.where.id }
      );
      return rows.length ? rowToResignation(rows[0]) : null;
    },
    create: async (args: { data: { userId: string; userName: string; explanation: string; status: string } }) => {
      const rid = id();
      await runExecute(
        `INSERT INTO resignations ("id", "userId", "userName", "explanation", "status") VALUES (:id, :userId, :userName, :explanation, :status)`,
        { id: rid, ...args.data }
      );
      return { id: rid, ...args.data, createdAt: new Date(), approvedAt: null };
    },
    update: async (args: { where: { id: string }; data: Record<string, unknown> }) => {
      const d = args.data;
      const sets: string[] = [];
      const binds: Record<string, unknown> = { id: args.where.id };
      if (d.status !== undefined) { sets.push(`"status" = :status`); binds.status = d.status; }
      if (d.approvedAt !== undefined) { sets.push(`"approvedAt" = :approvedAt`); binds.approvedAt = d.approvedAt; }
      if (sets.length === 0) return null;
      await runExecute(`UPDATE resignations SET ${sets.join(", ")} WHERE "id" = :id`, binds);
      const rows = await runQuery<Record<string, unknown>>(`SELECT * FROM resignations WHERE "id" = :id`, { id: args.where.id });
      return rows.length ? rowToResignation(rows[0]) : null;
    },
  },

  $transaction: async <T>(fns: (() => Promise<T>)[]) => {
    const conn = await getConnection();
    const results: T[] = [];
    try {
      for (const fn of fns) {
        const r = await fn();
        results.push(r);
      }
      await conn.commit();
      return results;
    } catch (e) {
      await conn.rollback();
      throw e;
    } finally {
      await conn.close();
    }
  },
};
