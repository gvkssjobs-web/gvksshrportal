"use client";

import { useState } from "react";

export default function MyPayslipDownload({ userId }: { userId: string }) {
  const [month, setMonth] = useState(String(new Date().getMonth() + 1));
  const [year, setYear] = useState(String(new Date().getFullYear()));

  function handleDownload() {
    const url = `/admin/payroll/payslip?userId=${encodeURIComponent(userId)}&month=${encodeURIComponent(month)}&year=${encodeURIComponent(year)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="mt-4 flex flex-wrap items-end gap-4">
      <div>
        <label className="block text-sm font-medium text-slate-700">Month</label>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="mt-1 block w-40 rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
            <option key={m} value={m}>
              {new Date(2000, m - 1).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Year</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          min={2020}
          max={2030}
          className="mt-1 block w-24 rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <button
        type="button"
        onClick={handleDownload}
        className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
      >
        View / Download pay slip
      </button>
    </div>
  );
}
