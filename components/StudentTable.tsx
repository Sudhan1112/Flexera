'use client';

import Link from 'next/link';
import { StudentAssessmentRecord } from '@/lib/mockData';

interface StudentTableProps {
  students: StudentAssessmentRecord[];
  title?: string;
  description?: string;
}

const statusStyles = {
  Good: 'bg-emerald-100 text-emerald-800',
  'Needs Support': 'bg-amber-100 text-amber-800',
  Critical: 'bg-rose-100 text-rose-800',
};

export default function StudentTable({
  students,
  title = 'Student Snapshot',
  description = 'Latest learning levels and intervention status.',
}: StudentTableProps) {
  return (
    <div className="card-shadow rounded-2xl border border-slate-100 bg-surface p-5">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-ink-900 sm:text-lg">{title}</h3>
        <p className="mt-1 text-sm text-ink-700">{description}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-[0.08em] text-ink-500">
              <th className="py-2 pr-4 font-semibold">Name</th>
              <th className="py-2 pr-4 font-semibold">Class</th>
              <th className="py-2 pr-4 font-semibold">Reading</th>
              <th className="py-2 pr-4 font-semibold">Arithmetic</th>
              <th className="py-2 pr-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b border-slate-100/80">
                <td className="py-3 pr-4">
                  <Link
                    href={`/students?student=${student.studentId}`}
                    className="font-semibold text-brand-700 hover:text-brand-600"
                  >
                    {student.name}
                  </Link>
                </td>
                <td className="py-3 pr-4 text-ink-700">
                  {student.className} · Grade {student.grade}
                </td>
                <td className="py-3 pr-4 text-ink-700">{student.readingLevel}</td>
                <td className="py-3 pr-4 text-ink-700">{student.mathLevel}</td>
                <td className="py-3 pr-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[student.status]}`}
                  >
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
            {!students.length ? (
              <tr>
                <td colSpan={5} className="py-6 text-center text-sm text-ink-500">
                  No students match the selected filters.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
