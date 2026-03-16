import { requireAuth } from "../../_lib/auth";
import { getMyAttendance, checkInToday, checkOutToday } from "../../actions/attendance";
import Link from "next/link";

async function getTodayStatus() {
  const records = await getMyAttendance(1);
  return records[0];
}

export default async function AttendancePage() {
  const session = await requireAuth();
  const today = await getTodayStatus();

  const hasCheckedIn = !!today?.checkIn;
  const hasCheckedOut = !!today?.checkOut;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Attendance</h1>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Dashboard
        </Link>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-slate-800">Today</h2>
        <p className="mt-1 text-sm text-slate-600">
          Mark your attendance for today.
        </p>
        <form
          action={checkInToday}
          className="mt-4 inline-flex items-center gap-3"
        >
          <button
            type="submit"
            disabled={hasCheckedIn}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
          >
            {hasCheckedIn ? "Checked in" : "Check in"}
          </button>
        </form>
        <form
          action={checkOutToday}
          className="mt-4 ml-3 inline-flex items-center gap-3"
        >
          <button
            type="submit"
            disabled={!hasCheckedIn || hasCheckedOut}
            className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
          >
            {hasCheckedOut ? "Checked out" : "Check out"}
          </button>
        </form>
        {today && (
          <div className="mt-4 text-sm text-slate-600">
            <p>
              Check-in:{" "}
              {today.checkIn
                ? new Date(today.checkIn).toLocaleTimeString()
                : "—"}
            </p>
            <p>
              Check-out:{" "}
              {today.checkOut
                ? new Date(today.checkOut).toLocaleTimeString()
                : "—"}
            </p>
          </div>
        )}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <h2 className="border-b border-slate-200 px-5 py-3 font-semibold text-slate-800">
          Recent attendance
        </h2>
        <div className="divide-y divide-slate-200">
          {(await getMyAttendance()).length === 0 ? (
            <p className="px-5 py-6 text-slate-500">
              No attendance records yet.
            </p>
          ) : (
            (await getMyAttendance()).map((record) => (
              <div
                key={record.id}
                className="flex flex-wrap items-center justify-between gap-3 px-5 py-3"
              >
                <div>
                  <p className="font-medium text-slate-800">
                    {new Date(record.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-slate-600">
                    In:{" "}
                    {record.checkIn
                      ? new Date(record.checkIn).toLocaleTimeString()
                      : "—"}{" "}
                    · Out:{" "}
                    {record.checkOut
                      ? new Date(record.checkOut).toLocaleTimeString()
                      : "—"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

