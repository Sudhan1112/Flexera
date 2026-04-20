'use client';

import { useMemo, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import DashboardCard from '@/components/DashboardCard';
import Chart from '@/components/Chart';
import StudentTable from '@/components/StudentTable';
import AIRecommendationPanel from '@/components/AIRecommendationPanel';
import {
  assessmentRecords,
  availableClasses,
  availableGrades,
  availableYears,
  buildClassComparisonData,
  buildTeacherRecommendations,
  filterAssessmentRecords,
  summarizeTeacherPerformance,
  teacherTrendByYear,
} from '@/lib/mockData';

const statusPriority = {
  Critical: 0,
  'Needs Support': 1,
  Good: 2,
};

export default function TeacherDashboard() {
  const latestYear = availableYears[availableYears.length - 1];
  const [selectedClass, setSelectedClass] = useState('All');
  const [selectedGrade, setSelectedGrade] = useState('All');
  const [selectedYear, setSelectedYear] = useState<number>(latestYear);

  const filteredRecords = useMemo(
    () =>
      filterAssessmentRecords(assessmentRecords, {
        className: selectedClass,
        grade: selectedGrade,
        year: selectedYear,
      }),
    [selectedClass, selectedGrade, selectedYear]
  );

  const summary = useMemo(
    () => summarizeTeacherPerformance(filteredRecords),
    [filteredRecords]
  );

  const classComparisonData = useMemo(
    () => buildClassComparisonData(filteredRecords),
    [filteredRecords]
  );

  const studentsForTable = useMemo(
    () =>
      [...filteredRecords].sort(
        (a, b) => statusPriority[a.status] - statusPriority[b.status]
      ),
    [filteredRecords]
  );

  const recommendations = useMemo(
    () => buildTeacherRecommendations(filteredRecords, summary),
    [filteredRecords, summary]
  );

  const trendData = teacherTrendByYear[selectedYear] ?? [];

  return (
    <div>
      <PageHeader
        eyebrow="Teacher View"
        title="Class Performance Dashboard"
        description="Track foundational learning outcomes in reading and arithmetic, identify gaps quickly, and act early with targeted support."
      />

      <div className="card-shadow mb-6 grid gap-3 rounded-2xl border border-slate-100 bg-surface p-4 sm:grid-cols-3">
        <label className="space-y-1.5 text-sm text-ink-700">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
            Class
          </span>
          <select
            value={selectedClass}
            onChange={(event) => setSelectedClass(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          >
            <option value="All">All Classes</option>
            {availableClasses.map((className) => (
              <option key={className} value={className}>
                {className}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1.5 text-sm text-ink-700">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
            Grade
          </span>
          <select
            value={selectedGrade}
            onChange={(event) => setSelectedGrade(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          >
            <option value="All">All Grades</option>
            {availableGrades.map((grade) => (
              <option key={grade} value={String(grade)}>
                Grade {grade}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1.5 text-sm text-ink-700">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
            Year
          </span>
          <select
            value={selectedYear}
            onChange={(event) => setSelectedYear(Number(event.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          >
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          title="% Reading Grade 2 Text"
          value={`${summary.readingGrade2Percent}%`}
          description="Students reaching expected reading benchmark."
          tone={summary.readingGrade2Percent >= 60 ? 'success' : 'warning'}
          trend={summary.readingGrade2Percent >= 60 ? 'On Track' : 'Needs Attention'}
        />
        <DashboardCard
          title="% Performing Division"
          value={`${summary.divisionPercent}%`}
          description="Arithmetic proficiency for division-level tasks."
          tone={summary.divisionPercent >= 60 ? 'success' : 'warning'}
          trend={summary.divisionPercent >= 60 ? 'Improving' : 'Gap'}
        />
        <DashboardCard
          title="% Requiring Support"
          value={`${summary.supportNeededPercent}%`}
          description="Students marked as Needs Support or Critical."
          tone={summary.supportNeededPercent > 50 ? 'critical' : 'brand'}
          trend={summary.supportNeededPercent > 50 ? 'Priority' : 'Monitor'}
        />
        <DashboardCard
          title="Students Assessed"
          value={summary.assessedStudents}
          description={`Filtered set for ${selectedYear}.`}
          tone="brand"
          trend={`${selectedClass === 'All' ? 'All Classes' : selectedClass}`}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <Chart
          type="bar"
          title="Reading vs Arithmetic by Class"
          subtitle="Average scores after applying current filters."
          data={classComparisonData}
          xKey="className"
          valueSuffix="%"
          series={[
            { key: 'reading', label: 'Reading', color: '#4e90c7' },
            { key: 'arithmetic', label: 'Arithmetic', color: '#2f7d8e' },
          ]}
        />
        <Chart
          type="line"
          title="Monthly Trend Progression"
          subtitle={`Trend line for ${selectedYear} classroom cycle.`}
          data={trendData}
          xKey="period"
          valueSuffix="%"
          series={[
            { key: 'reading', label: 'Reading', color: '#245b8f' },
            { key: 'arithmetic', label: 'Arithmetic', color: '#228d61' },
          ]}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[1.5fr_1fr]">
        <StudentTable
          students={studentsForTable}
          title="Student Learning Status"
          description="Use this table for targeted follow-up by status and current level."
        />
        <AIRecommendationPanel recommendations={recommendations} />
      </div>
    </div>
  );
}
