This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## GVKSS HR Portal

Role-based HR portal with separate dashboards for **Admin**, **HR**, **Team Lead**, and **Employee**. Uses **PostgreSQL** as the local database (Prisma ORM).

### Setup

1. **Install PostgreSQL** and create a database:
   ```bash
   createdb gvksshrportal
   ```

2. **Environment** — Copy `.env.example` to `.env` and set your database URL:
   ```bash
   cp .env.example .env
   # Edit .env: DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/gvksshrportal"
   ```

3. **Push schema and seed** (creates tables + one admin user):
   ```bash
   npm install
   npm run db:push
   npm run db:seed
   ```

### Running the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and log in. After seeding, use **admin@gvkss.local** / **admin123** for the first admin account.

### Database commands

- `npm run db:push` — Apply Prisma schema to the database (no migrations).
- `npm run db:migrate` — Create and run migrations.
- `npm run db:seed` — Seed departments + initial admin (idempotent).
- `npm run db:studio` — Open Prisma Studio to view/edit data.

### Dashboard pages & modules

- **/dashboard** — Redirects to your role’s dashboard after login.
- **/dashboard/admin** — Admin only.
- **/dashboard/hr** — HR only.
- **/dashboard/team-lead** — Team lead only.
- **/dashboard/employee** — Employee only.

Key modules:

- **Employees & Teams**
  - `/admin/employees` — Employee directory (team-lead sees only their team).
  - `/admin/employees/[id]/edit` — Admin-only edit for team/role.
  - `/admin/teams` — Admin-only team/department management.
  - `/admin/pending` — Admin-only registration approvals.
- **Leave**
  - `/admin/leave` — Apply for leave (non-admin) and view own leave history.
  - `/admin/approve` — Admin/HR/Team-lead leave approvals.
- **Attendance**
  - `/admin/attendance` — Employees mark check-in/check-out and view recent records.
  - `/admin/attendance/report` — Admin/HR filterable attendance reports.
- **Payroll**
  - `/admin/payroll` — Admin/HR set salaries and generate monthly payroll.
  - `/admin/payroll/me` — All roles view their own payroll history.

> Note: Passwords are stored in plain text in this demo (per project requirements). Do **not** reuse real credentials.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
