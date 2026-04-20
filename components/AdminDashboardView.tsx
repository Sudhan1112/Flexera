'use client';

import { useMemo, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import DashboardCard from '@/components/DashboardCard';
import Chart from '@/components/Chart';
import {
  assessmentRecords,
  availableYears,
  buildAdminAlerts,
  buildLearningDistribution,
  buildSchoolComparisonData,
  districtTrendFiveYears,
  summarizeTeacherPerformance,
} from '@/lib/mockData';

const severityStyles = {
  info: 'border-blue-200 bg-blue-50 text-blue-900',
  warning: 'border-amber-200 bg-amber-50 text-amber-900',
  critical: 'border-rose-200 bg-rose-50 text-rose-900',
};

export default function AdminDashboardView() {
  const latestYear = availableYears[availableYears.length - 1];
  const [selectedYear, setSelectedYear] = useState<number>(latestYear);

  const records = useMemo(
    () => assessmentRecords.filter((record) => record.year === selectedYear),
    [selectedYear]
  );
  const summary = useMemo(() => summarizeTeacherPerformance(records), [records]);
  const schoolComparison = useMemo(
    () => buildSchoolComparisonData(records),
    [records]
  );
  const learningDistribution = useMemo(
    () => buildLearningDistribution(records),
    [records]
  );
  const alerts = useMemo(
    () => buildAdminAlerts(records, schoolComparison),
    [records, schoolComparison]
  );

  const belowGradeLevelPercent = useMemo(() => {
    const weightedTotal = schoolComparison.reduce(
      (sum, row) => sum + row.belowGradeLevel * row.students,
      0
    );
    const studentTotal = schoolComparison.reduce(
      (sum, row) => sum + row.students,
      0
    );

    if (!studentTotal) {
      return 0;
    }

    return Math.round((weightedTotal / studentTotal) * 10) / 10;
  }, [schoolComparison]);

  return (
    <div>
      <PageHeader
        eyebrow="Admin View"
        title="District & State Analytics"
        description="Compare school-level outcomes, monitor foundational learning distribution, and surface intervention alerts for education leaders."
        action={
          <select
            value={selectedYear}
            onChange={(event) => setSelectedYear(Number(event.target.value))}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          >
            {availableYears.map((year) => (
              <option key={year} value={year}>
                Year {year}
              </option>
            ))}
          </select>
        }
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <DashboardCard
          title="Avg Reading Score"
          value={`${summary.avgReadingScore}%`}
          description="District-wide reading proficiency."
          tone="brand"
          trend={summary.avgReadingScore >= 60 ? 'Improving' : 'Low'}
        />
        <DashboardCard
          title="Avg Arithmetic Score"
          value={`${summary.avgMathScore}%`}
          description="District-wide arithmetic proficiency."
          tone={summary.avgMathScore >= 60 ? 'success' : 'warning'}
          trend={summary.avgMathScore >= 60 ? 'Stable' : 'Focus Needed'}
        />
        <DashboardCard
          title="Below Grade Level"
          value={`${belowGradeLevelPercent}%`}
          description="Students below expected grade benchmarks."
          tone={belowGradeLevelPercent > 35 ? 'critical' : 'warning'}
          trend={belowGradeLevelPercent > 35 ? 'High Alert' : 'Watchlist'}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <Chart
          type="bar"
          title="School Comparison"
          subtitle="Reading and arithmetic averages by school."
          data={schoolComparison}
          xKey="school"
          valueSuffix="%"
          series={[
            { key: 'reading', label: 'Reading', color: '#3274ac' },
            { key: 'arithmetic', label: 'Arithmetic', color: '#228d61' },
          ]}
        />
        <Chart
          type="bar"
          title="Learning Level Distribution"
          subtitle="Percent of students in At Risk, Emerging, and On Track bands."
          data={learningDistribution}
          xKey="band"
          valueSuffix="%"
          series={[
            { key: 'reading', label: 'Reading', color: '#4e90c7' },
            { key: 'arithmetic', label: 'Arithmetic', color: '#2f7d8e' },
          ]}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[1.5fr_1fr]">
        <Chart
          type="line"
          title="Five-Year Foundational Learning Trend"
          subtitle="ASER-style district trend across reading and arithmetic."
          data={districtTrendFiveYears}
          xKey="year"
          valueSuffix="%"
          series={[
            { key: 'reading', label: 'Reading', color: '#245b8f' },
            { key: 'arithmetic', label: 'Arithmetic', color: '#228d61' },
          ]}
        />

        <section className="card-shadow rounded-2xl border border-slate-100 bg-surface p-5">
          <h3 className="text-base font-semibold text-ink-900 sm:text-lg">
            Alerts & Priority Signals
          </h3>
          <div className="mt-4 space-y-3">
            {alerts.map((alert, index) => (
              <article
                key={`${alert.title}-${index}`}
                className={`rounded-xl border px-4 py-3 ${severityStyles[alert.severity]}`}
              >
                <h4 className="text-sm font-semibold">{alert.title}</h4>
                <p className="mt-1 text-sm">{alert.message}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
