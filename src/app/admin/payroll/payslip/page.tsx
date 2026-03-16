import { getPayslipData } from "../../../actions/payroll";
import { requireAuth } from "../../../_lib/auth";
import Link from "next/link";
import Image from "next/image";
import PayslipPrintButton from "../../../_components/PayslipPrintButton";
import { amountInWords } from "../../../_lib/numberToWords";

function formatCurrency(n: number) {
  return "₹ " + n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default async function PayslipPage({
  searchParams,
}: {
  searchParams: Promise<{ userId?: string; month?: string; year?: string }>;
}) {
  const session = await requireAuth();
  const params = await searchParams;
  const userId = params.userId;
  const month = params.month ? parseInt(params.month, 10) : new Date().getMonth() + 1;
  const year = params.year ? parseInt(params.year, 10) : new Date().getFullYear();

  if (!userId || month < 1 || month > 12 || !year) {
    return (
      <div className="mx-auto max-w-lg space-y-4 p-6">
        <p className="text-slate-600">Invalid payslip request. Select employee and period.</p>
        <Link href="/admin/payroll" className="text-blue-600 hover:underline">
          ← Back to Pay slips
        </Link>
      </div>
    );
  }

  const data = await getPayslipData(userId, month, year);

  if (!data) {
    return (
      <div className="mx-auto max-w-lg space-y-4 p-6">
        <p className="text-slate-600">
          No salary data for this period. Set salary for the employee first.
        </p>
        <Link href="/admin/payroll" className="text-blue-600 hover:underline">
          ← Back to Pay slips
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-4 flex items-center justify-between print:hidden">
        <Link
          href={session.role === "admin" || session.role === "hr" ? "/admin/payroll" : "/admin/payroll/me"}
          className="text-blue-600 hover:underline"
        >
          ← Back
        </Link>
        <PayslipPrintButton />
      </div>

      <div className="rounded-lg border border-slate-200 bg-white shadow-sm print:border-0 print:shadow-none">
        {/* Header: Logo at left top, company name centered in green */}
        <div className="flex items-start border-b border-slate-200 p-6">
          <Image
            src="/logo-DdOObT0Q.jpg"
            alt="GVKSS Software Pvt. Ltd."
            width={160}
            height={70}
            className="h-16 w-auto shrink-0 object-contain object-left-top print:h-16"
            unoptimized
          />
          <div className="flex flex-1 items-center justify-center">
            <h1 className="text-center text-xl font-bold uppercase tracking-wide text-emerald-700">
              GVKSS SOFTWARE PRIVATE LIMITED
            </h1>
          </div>
        </div>

        {/* Title */}
        <p className="py-3 text-center text-lg font-bold text-slate-800">
          Pay Slip for the Month of {data.periodLabel}
        </p>

        {/* Employee Details & Attendance two-column table */}
        <div className="border-b border-slate-200 px-6 pb-4">
          <table className="w-full text-sm">
            <tbody>
              <tr className="align-top">
                <td className="w-1/2 border-r border-slate-200 pr-4">
                  <table className="w-full">
                    <tbody>
                      <tr><td className="py-0.5 font-medium text-slate-700">Employee Name:</td><td>{data.employeeName}</td></tr>
                      <tr><td className="py-0.5 font-medium text-slate-700">Employee Code:</td><td>{data.employeeCode}</td></tr>
                      <tr><td className="py-0.5 font-medium text-slate-700">Designation:</td><td>{data.designation}</td></tr>
                      <tr><td className="py-0.5 font-medium text-slate-700">Bank Account No:</td><td>{data.bankAccount}</td></tr>
                      <tr><td className="py-0.5 font-medium text-slate-700">Joining Date:</td><td>{data.joiningDate}</td></tr>
                      <tr><td className="py-0.5 font-medium text-slate-700">P.F. No:</td><td>{data.pfNo}</td></tr>
                      <tr><td className="py-0.5 font-medium text-slate-700">PAN NUMBER:</td><td>{data.panNumber}</td></tr>
                    </tbody>
                  </table>
                </td>
                <td className="w-1/2 pl-4">
                  <table className="w-full">
                    <tbody>
                      <tr><td className="py-0.5 font-medium text-slate-700">No of days in a month:</td><td>{data.daysInMonth}</td></tr>
                      <tr><td className="py-0.5 font-medium text-slate-700">No of Leaves Taken:</td><td>{data.leavesTaken}</td></tr>
                      <tr><td className="py-0.5 font-medium text-slate-700">No of Allowed Leave:</td><td>{data.allowedLeave}</td></tr>
                      <tr><td className="py-0.5 font-medium text-slate-700">No of Deducted Leave:</td><td>{data.deductedLeave}</td></tr>
                      <tr><td className="py-0.5 font-medium text-slate-700">Payable days:</td><td>{data.payableDays}</td></tr>
                      <tr><td className="py-0.5 font-medium text-slate-700">UAN:</td><td>{data.uan}</td></tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Earnings & Deductions table */}
        <div className="px-6 py-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-300 bg-slate-50">
                <th className="py-2 text-left font-semibold text-slate-800">Earnings</th>
                <th className="w-28 py-2 text-right font-semibold text-slate-800">Actual</th>
                <th className="w-28 py-2 text-right font-semibold text-slate-800">Earned</th>
                <th className="w-4"></th>
                <th className="py-2 text-left font-semibold text-slate-800">Deductions</th>
                <th className="w-28 py-2 text-right font-semibold text-slate-800">Total Deductions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="py-1.5 text-slate-700">Basic</td>
                <td className="py-1.5 text-right text-slate-700">{formatCurrency(data.basicSalary)}</td>
                <td className="py-1.5 text-right text-slate-700">{formatCurrency(data.basicSalary)}</td>
                <td></td>
                <td className="py-1.5 text-slate-700">Tax Deducted at Source</td>
                <td className="py-1.5 text-right text-slate-700">{formatCurrency(data.tds)}</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-1.5 text-slate-700">House Rent Allowance</td>
                <td className="py-1.5 text-right text-slate-700">{formatCurrency(data.hra)}</td>
                <td className="py-1.5 text-right text-slate-700">{formatCurrency(data.hra)}</td>
                <td></td>
                <td className="py-1.5 text-slate-700">Employee Provident Fund</td>
                <td className="py-1.5 text-right text-slate-700">{formatCurrency(data.employeePf)}</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-1.5 text-slate-700">Special Allowances</td>
                <td className="py-1.5 text-right text-slate-700">{formatCurrency(data.specialAllowance)}</td>
                <td className="py-1.5 text-right text-slate-700">{formatCurrency(data.specialAllowance)}</td>
                <td></td>
                <td className="py-1.5 text-slate-700">Professional Tax</td>
                <td className="py-1.5 text-right text-slate-700">{formatCurrency(data.professionalTax)}</td>
              </tr>
              <tr className="border-b-2 border-slate-300 font-semibold">
                <td className="py-2 text-slate-800">Total Earnings (Gross Salary) (A)</td>
                <td className="py-2 text-right text-slate-800">{formatCurrency(data.grossSalary)}</td>
                <td className="py-2 text-right text-slate-800">{formatCurrency(data.grossSalary)}</td>
                <td></td>
                <td className="py-2 text-slate-800">Total Deductions (B)</td>
                <td className="py-2 text-right text-slate-800">{formatCurrency(data.totalDeductions)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Net Pay */}
        <div className="border-t-2 border-slate-200 px-6 py-3">
          <div className="flex justify-between font-semibold text-slate-800">
            <span>Net Pay (A-B)</span>
            <span>{formatCurrency(data.netPay)}</span>
          </div>
        </div>

        {/* Amount in words + Disclaimer */}
        <div className="border-t border-slate-200 bg-slate-50 px-6 py-3 text-sm">
          <p className="font-medium text-slate-700">
            <span className="text-slate-600">Amount in words: </span>
            {amountInWords(data.netPay)}
          </p>
          <p className="mt-2 text-center text-slate-500 italic">
            THIS IS COMPUTER GENERATED HENCE NO SIGNATURE REQUIRED
          </p>
        </div>
      </div>
    </div>
  );
}
