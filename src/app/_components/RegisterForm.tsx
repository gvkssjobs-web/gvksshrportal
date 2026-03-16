"use client";

import { registerAction, type EducationEntry } from "@/app/actions/auth";
import Link from "next/link";
import { useTransition, useState } from "react";

function EyeIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

const STEPS = [
  "Personal",
  "ID & Documents",
  "Contact & Address",
  "Education",
  "Family",
  "Experience & Submit",
];

export default function RegisterForm() {
  const [step, setStep] = useState(1);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    marriageStatus: "",
    photo: "",
    aadharNumber: "",
    panNumber: "",
    passportNumber: "",
    dlNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    bankAccount: "",
    addressHNo: "",
    city: "",
    state: "",
    pincode: "",
    phoneNumber: "",
    emergencyContactNumber: "",
    emergencyContactWhose: "",
    emergencyContactRelation: "",
    native: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    motherTongue: "",
    qualification: "",
    experience: "",
    previousDesignation: "",
    currentDesignation: "",
  });

  const [education, setEducation] = useState<EducationEntry[]>([
    { level: "10th" },
    { level: "12th" },
    { level: "BTech" },
  ]);

  const updateForm = (key: keyof typeof form, value: string) => {
    setForm((p) => ({ ...p, [key]: value }));
    setError(null);
  };

  const updateEducation = (index: number, field: keyof EducationEntry, value: string) => {
    setEducation((p) => {
      const next = [...p];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const addEducation = () => {
    setEducation((p) => [...p, { level: "Other" }]);
  };

  const canNext = () => {
    if (step === 1) return (form.firstName.trim() || form.lastName.trim()) && form.dateOfBirth.trim() && form.marriageStatus.trim() && form.photo.trim();
    if (step === 2) return form.aadharNumber.trim().length >= 12 && form.panNumber.trim();
    if (step === 3) {
      return (
        form.email.trim() &&
        form.password.trim().length >= 6 &&
        form.confirmPassword === form.password &&
        form.bankAccount.trim() &&
        form.addressHNo.trim() &&
        form.city.trim() &&
        form.state.trim() &&
        form.pincode.trim() &&
        form.phoneNumber.trim() &&
        form.emergencyContactNumber.trim() &&
        form.emergencyContactWhose.trim() &&
        form.emergencyContactRelation.trim()
      );
    }
    if (step === 4) {
      const requiredLevels = ["10th", "12th", "BTech"];
      for (const level of requiredLevels) {
        const entry = education.find((e) => e.level === level);
        if (!entry || !(entry.collegeName ?? "").trim() || !(entry.rollNumber ?? "").trim() || !(entry.yearPassout ?? "").trim())
          return false;
      }
      return true;
    }
    if (step === 5) {
      return (
        form.native.trim() &&
        form.fatherName.trim() &&
        form.fatherOccupation.trim() &&
        form.motherName.trim() &&
        form.motherOccupation.trim() &&
        form.motherTongue.trim()
      );
    }
    if (step === 6) {
      return form.qualification.trim() && form.experience.trim() && form.currentDesignation.trim();
    }
    return true;
  };

  const handleSubmit = () => {
    setError(null);
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => {
      if (v != null && v !== "") fd.set(k, v);
    });
    fd.set("education", JSON.stringify(education));
    startTransition(async () => {
      try {
        await registerAction(fd);
        setSuccess(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Registration failed");
      }
    });
  };

  if (success) {
    return (
      <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-center">
        <p className="font-medium text-emerald-800">Registration submitted</p>
        <p className="mt-1 text-sm text-emerald-700">
          Your request has been sent to admin. You can log in after your account is approved.
        </p>
        <Link href="/login" className="mt-3 inline-block text-sm font-medium text-emerald-700 hover:underline">
          Go to Login
        </Link>
      </div>
    );
  }

  const totalSteps = STEPS.length;
  const inputClass = "mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500";
  const labelClass = "block text-sm font-medium text-slate-700";

  return (
    <div className="mt-4">
      <div className="mb-4 flex justify-between gap-2 text-xs">
        {STEPS.map((label, i) => (
          <span
            key={label}
            className={`rounded px-2 py-1 ${i + 1 === step ? "bg-blue-600 text-white" : i + 1 < step ? "bg-slate-200 text-slate-700" : "bg-slate-100 text-slate-500"}`}
          >
            {i + 1}. {label}
          </span>
        ))}
      </div>

      {error && (
        <p className="mb-4 rounded bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
      )}

      {/* Step 1: Personal */}
      {step === 1 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-800">Personal details</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className={labelClass}>First name *</label>
              <input className={inputClass} value={form.firstName} onChange={(e) => updateForm("firstName", e.target.value)} placeholder="First name" />
            </div>
            <div>
              <label className={labelClass}>Middle name</label>
              <input className={inputClass} value={form.middleName} onChange={(e) => updateForm("middleName", e.target.value)} placeholder="Middle name" />
            </div>
            <div>
              <label className={labelClass}>Last name *</label>
              <input className={inputClass} value={form.lastName} onChange={(e) => updateForm("lastName", e.target.value)} placeholder="Last name" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Date of birth *</label>
              <input type="date" className={inputClass} value={form.dateOfBirth} onChange={(e) => updateForm("dateOfBirth", e.target.value)} required />
            </div>
            <div>
              <label className={labelClass}>Marital status *</label>
              <select className={inputClass} value={form.marriageStatus} onChange={(e) => updateForm("marriageStatus", e.target.value)} required>
                <option value="">— Select —</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <label className={labelClass}>Photo (URL) *</label>
            <input className={inputClass} value={form.photo} onChange={(e) => updateForm("photo", e.target.value)} placeholder="Image URL (required)" required />
          </div>
        </div>
      )}

      {/* Step 2: ID & Documents */}
      {step === 2 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-800">ID & documents</h3>
          <div>
            <label className={labelClass}>Aadhar number *</label>
            <input className={inputClass} value={form.aadharNumber} onChange={(e) => updateForm("aadharNumber", e.target.value.replace(/\D/g, "").slice(0, 12))} placeholder="12-digit Aadhar" maxLength={12} required />
          </div>
          <div>
            <label className={labelClass}>PAN number *</label>
            <input className={inputClass + " uppercase"} value={form.panNumber} onChange={(e) => updateForm("panNumber", e.target.value.toUpperCase())} placeholder="e.g. ABCD E1234F" maxLength={10} />
          </div>
          <div>
            <label className={labelClass}>Passport number</label>
            <input className={inputClass} value={form.passportNumber} onChange={(e) => updateForm("passportNumber", e.target.value)} placeholder="Passport number" />
          </div>
          <div>
            <label className={labelClass}>DL number</label>
            <input className={inputClass} value={form.dlNumber} onChange={(e) => updateForm("dlNumber", e.target.value)} placeholder="Driving licence number" />
          </div>
        </div>
      )}

      {/* Step 3: Contact & Address */}
      {step === 3 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-800">Contact & address</h3>
          <div>
            <label className={labelClass}>Email *</label>
            <input type="email" className={inputClass} value={form.email} onChange={(e) => updateForm("email", e.target.value)} placeholder="you@example.com" required />
          </div>
          <div>
            <label className={labelClass}>Password *</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className={inputClass + " pr-10"}
                value={form.password}
                onChange={(e) => updateForm("password", e.target.value)}
                placeholder="Min 6 characters"
                minLength={6}
                required
              />
              <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded" onClick={() => setShowPassword((p) => !p)} aria-label={showPassword ? "Hide password" : "Show password"}>
                <EyeIcon open={showPassword} />
              </button>
            </div>
          </div>
          <div>
            <label className={labelClass}>Confirm password *</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className={inputClass + " pr-10"}
                value={form.confirmPassword}
                onChange={(e) => updateForm("confirmPassword", e.target.value)}
                placeholder="Re-enter password"
                minLength={6}
                required
              />
              <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded" onClick={() => setShowConfirmPassword((p) => !p)} aria-label={showConfirmPassword ? "Hide password" : "Show password"}>
                <EyeIcon open={showConfirmPassword} />
              </button>
            </div>
            {form.confirmPassword && form.password !== form.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
            )}
          </div>
          <div>
            <label className={labelClass}>Bank account number *</label>
            <input className={inputClass} value={form.bankAccount} onChange={(e) => updateForm("bankAccount", e.target.value)} placeholder="e.g. 041391900043685" />
          </div>
          <div>
            <label className={labelClass}>Address – H.No / Building *</label>
            <input className={inputClass} value={form.addressHNo} onChange={(e) => updateForm("addressHNo", e.target.value)} placeholder="House no., street" required />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className={labelClass}>City *</label>
              <input className={inputClass} value={form.city} onChange={(e) => updateForm("city", e.target.value)} placeholder="City" required />
            </div>
            <div>
              <label className={labelClass}>State *</label>
              <input className={inputClass} value={form.state} onChange={(e) => updateForm("state", e.target.value)} placeholder="State" required />
            </div>
            <div>
              <label className={labelClass}>Pincode *</label>
              <input className={inputClass} value={form.pincode} onChange={(e) => updateForm("pincode", e.target.value)} placeholder="Pincode" required />
            </div>
          </div>
          <div>
            <label className={labelClass}>Phone number *</label>
            <input type="tel" className={inputClass} value={form.phoneNumber} onChange={(e) => updateForm("phoneNumber", e.target.value)} placeholder="Phone number" required />
          </div>
          <div className="rounded border border-slate-200 bg-slate-50 p-3">
            <p className="mb-2 text-sm font-medium text-slate-700">Emergency contact *</p>
            <div className="space-y-2">
              <input className={inputClass} value={form.emergencyContactNumber} onChange={(e) => updateForm("emergencyContactNumber", e.target.value)} placeholder="Emergency contact number" required />
              <input className={inputClass} value={form.emergencyContactWhose} onChange={(e) => updateForm("emergencyContactWhose", e.target.value)} placeholder="Whose (e.g. Spouse)" required />
              <input className={inputClass} value={form.emergencyContactRelation} onChange={(e) => updateForm("emergencyContactRelation", e.target.value)} placeholder="Relation" required />
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Education */}
      {step === 4 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-800">Education (10th, 12th, higher studies)</h3>
          <p className="text-sm text-slate-600">For 10th, 12th and BTech: College/School name, Roll number and Year of passout are required.</p>
          {education.map((edu, index) => (
            <div key={index} className="rounded border border-slate-200 bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="font-medium text-slate-700">Qualification:</span>
                <select className={inputClass + " w-32"} value={edu.level} onChange={(e) => updateEducation(index, "level", e.target.value)}>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                  <option value="BTech">BTech</option>
                  <option value="MTech">MTech</option>
                  <option value="BCA">BCA</option>
                  <option value="MCA">MCA</option>
                  <option value="BSc">BSc</option>
                  <option value="MSc">MSc</option>
                  <option value="Other">Other</option>
                </select>
                {["10th", "12th", "BTech"].includes(edu.level) && <span className="text-red-500 text-sm">*</span>}
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <input className={inputClass} value={edu.collegeName ?? ""} onChange={(e) => updateEducation(index, "collegeName", e.target.value)} placeholder="College / School name" required={["10th", "12th", "BTech"].includes(edu.level)} />
                <input className={inputClass} value={edu.rollNumber ?? ""} onChange={(e) => updateEducation(index, "rollNumber", e.target.value)} placeholder="Roll number" required={["10th", "12th", "BTech"].includes(edu.level)} />
                <input className={inputClass} value={edu.yearPassout ?? ""} onChange={(e) => updateEducation(index, "yearPassout", e.target.value)} placeholder="Year of passout" required={["10th", "12th", "BTech"].includes(edu.level)} />
                <input className={inputClass} value={edu.marksScored ?? ""} onChange={(e) => updateEducation(index, "marksScored", e.target.value)} placeholder="Marks scored" />
                <input className={inputClass} value={edu.marksOutOf ?? ""} onChange={(e) => updateEducation(index, "marksOutOf", e.target.value)} placeholder="Marks out of" />
                <input className={inputClass} value={edu.cgpaScored ?? ""} onChange={(e) => updateEducation(index, "cgpaScored", e.target.value)} placeholder="CGPA scored" />
                <input className={inputClass} value={edu.cgpaOutOf ?? ""} onChange={(e) => updateEducation(index, "cgpaOutOf", e.target.value)} placeholder="CGPA out of" />
                <input className={inputClass} value={edu.currentBacklogs ?? ""} onChange={(e) => updateEducation(index, "currentBacklogs", e.target.value)} placeholder="Current backlogs" />
                <input className={inputClass} value={edu.historyBacklogs ?? ""} onChange={(e) => updateEducation(index, "historyBacklogs", e.target.value)} placeholder="History of backlogs" />
                <input className={inputClass} value={edu.breaksInAcademics ?? ""} onChange={(e) => updateEducation(index, "breaksInAcademics", e.target.value)} placeholder="Breaks in academics" />
              </div>
              {index > 2 && (
                <button type="button" className="mt-2 text-sm text-red-600 hover:underline" onClick={() => setEducation((p) => p.filter((_, i) => i !== index))}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" className="text-sm text-blue-600 hover:underline" onClick={addEducation}>
            + Add another qualification
          </button>
        </div>
      )}

      {/* Step 5: Family */}
      {step === 5 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-800">Family details</h3>
          <div>
            <label className={labelClass}>Native place *</label>
            <input className={inputClass} value={form.native} onChange={(e) => updateForm("native", e.target.value)} placeholder="Native / hometown" required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Father name *</label>
              <input className={inputClass} value={form.fatherName} onChange={(e) => updateForm("fatherName", e.target.value)} placeholder="Father name" required />
            </div>
            <div>
              <label className={labelClass}>Father occupation *</label>
              <input className={inputClass} value={form.fatherOccupation} onChange={(e) => updateForm("fatherOccupation", e.target.value)} placeholder="Occupation" required />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Mother name *</label>
              <input className={inputClass} value={form.motherName} onChange={(e) => updateForm("motherName", e.target.value)} placeholder="Mother name" required />
            </div>
            <div>
              <label className={labelClass}>Mother occupation *</label>
              <input className={inputClass} value={form.motherOccupation} onChange={(e) => updateForm("motherOccupation", e.target.value)} placeholder="Occupation" required />
            </div>
          </div>
          <div>
            <label className={labelClass}>Mother tongue *</label>
            <input className={inputClass} value={form.motherTongue} onChange={(e) => updateForm("motherTongue", e.target.value)} placeholder="Mother tongue" required />
          </div>
        </div>
      )}

      {/* Step 6: Experience & Submit */}
      {step === 6 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-800">Experience & designation</h3>
          <div>
            <label className={labelClass}>Highest qualification *</label>
            <input className={inputClass} value={form.qualification} onChange={(e) => updateForm("qualification", e.target.value)} placeholder="e.g. BTech, MBA" required />
          </div>
          <div>
            <label className={labelClass}>Experience *</label>
            <input className={inputClass} value={form.experience} onChange={(e) => updateForm("experience", e.target.value)} placeholder="e.g. 2 years" required />
          </div>
          <div>
            <label className={labelClass}>Previous designation</label>
            <input className={inputClass} value={form.previousDesignation} onChange={(e) => updateForm("previousDesignation", e.target.value)} placeholder="Previous job title" />
          </div>
          <div>
            <label className={labelClass}>Current designation *</label>
            <input className={inputClass} value={form.currentDesignation} onChange={(e) => updateForm("currentDesignation", e.target.value)} placeholder="Current job title" required />
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        {step > 1 ? (
          <button type="button" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setStep((s) => s - 1)}>
            Previous
          </button>
        ) : (
          <span />
        )}
        {step < totalSteps ? (
          <button type="button" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50" onClick={() => setStep((s) => s + 1)} disabled={!canNext()}>
            Next
          </button>
        ) : (
          <button type="button" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50" onClick={handleSubmit} disabled={isPending}>
            {isPending ? "Submitting…" : "Submit registration"}
          </button>
        )}
      </div>

      <p className="mt-4 text-center text-sm text-slate-600">
        Already have an account? <Link href="/login" className="font-medium text-blue-700 hover:underline">Login</Link>
      </p>
    </div>
  );
}
