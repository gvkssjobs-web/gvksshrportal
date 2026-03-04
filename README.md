This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## GVKSS HR Portal

Role-based HR portal with separate dashboards for **Admin**, **HR**, **Team Lead**, and **Employee**.

### Running the app

1. **Start the API** (json-server on port 3001):
   ```bash
   npm run server
   ```

2. **Start the dev server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) and go to **Login**.

### Test credentials (password: `test123`)

| Role       | Email             |
|-----------|-------------------|
| Admin     | admin@test.com    |
| HR        | hr@test.com       |
| Team Lead | teamlead@test.com |
| Employee  | employee@test.com |

### Dashboard pages

- **/dashboard** — Redirects to your role’s dashboard after login.
- **/dashboard/admin** — Admin only.
- **/dashboard/hr** — HR only.
- **/dashboard/team-lead** — Team lead only.
- **/dashboard/employee** — Employee only.

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
