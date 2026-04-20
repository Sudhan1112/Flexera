'use client';

import { useMemo, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import Chart from '@/components/Chart';
import AIRecommendationPanel from '@/components/AIRecommendationPanel';
import {
  buildStudentRecommendations,
  studentProfiles,
} from '@/lib/mockData';

interface StudentProfileViewProps {
  initialStudentId?: string;
}

export default function StudentProfileView({
  initialStudentId,
}: StudentProfileViewProps) {
  const [selectedStudentId, setSelectedStudentId] = useState(
    studentProfiles.some((profile) => profile.studentId === initialStudentId)
      ? initialStudentId
      : studentProfiles[0]?.studentId ?? ''
  );

  const selectedProfile = useMemo(
    () =>
      studentProfiles.find((profile) => profile.studentId === selectedStudentId) ??
      studentProfiles[0],
    [selectedStudentId]
  );

  if (!selectedProfile) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-ink-700">
        No student data available.
      </div>
    );
  }

  const recommendations = buildStudentRecommendations(selectedProfile);

  return (
    <div>
      <PageHeader
        eyebrow="Student View"
        title="Student Profile & Progress"
        description="Track each learner's reading and arithmetic levels over time and prioritize interventions with practical AI suggestions."
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[340px_1fr]">
        <aside className="card-shadow rounded-2xl border border-slate-100 bg-surface p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-ink-500">
            Students
          </h3>
          <div className="mt-3 space-y-2">
            {studentProfiles.map((profile) => (
              <button
                type="button"
                key={profile.studentId}
                onClick={() => setSelectedStudentId(profile.studentId)}
                className={`w-full rounded-xl border px-3 py-2.5 text-left transition ${
                  selectedStudentId === profile.studentId
                    ? 'border-brand-500 bg-brand-500/10 text-brand-700'
                    : 'border-slate-200 bg-white text-ink-700 hover:border-brand-400'
                }`}
              >
                <p className="font-semibold">{profile.name}</p>
                <p className="text-xs text-ink-500">
                  {profile.className} · Grade {profile.grade}
                </p>
              </button>
            ))}
          </div>
        </aside>

        <div className="space-y-5">
          <section className="card-shadow rounded-2xl border border-slate-100 bg-surface p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-ink-900">
                  {selectedProfile.name}
                </h3>
                <p className="mt-1 text-sm text-ink-700">
                  {selectedProfile.school}, {selectedProfile.district}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  selectedProfile.status === 'Good'
                    ? 'bg-emerald-100 text-emerald-700'
                    : selectedProfile.status === 'Needs Support'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-rose-100 text-rose-700'
                }`}
              >
                {selectedProfile.status}
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-surface-soft p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
                  Class & Grade
                </p>
                <p className="mt-1 text-sm font-semibold text-ink-900">
                  {selectedProfile.className} · Grade {selectedProfile.grade}
                </p>
              </div>
              <div className="rounded-xl bg-surface-soft p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
                  Reading Level
                </p>
                <p className="mt-1 text-sm font-semibold text-ink-900">
                  {selectedProfile.currentReadingLevel}
                </p>
              </div>
              <div className="rounded-xl bg-surface-soft p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
                  Arithmetic Level
                </p>
                <p className="mt-1 text-sm font-semibold text-ink-900">
                  {selectedProfile.currentMathLevel}
                </p>
              </div>
              <div className="rounded-xl bg-surface-soft p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
                  Attendance
                </p>
                <p className="mt-1 text-sm font-semibold text-ink-900">
                  {selectedProfile.attendanceRate}%
                </p>
              </div>
            </div>
          </section>

          <Chart
            type="line"
            title="Progress Trend Over Time"
            subtitle="Reading and arithmetic progression across assessment years."
            data={selectedProfile.progress}
            xKey="period"
            valueSuffix="%"
            series={[
              { key: 'reading', label: 'Reading', color: '#3274ac' },
              { key: 'arithmetic', label: 'Arithmetic', color: '#228d61' },
            ]}
          />

          <AIRecommendationPanel
            title="Suggested Actions"
            recommendations={recommendations}
          />
        </div>
      </div>
    </div>
  );
}
