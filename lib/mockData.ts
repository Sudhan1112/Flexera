export type ReadingLevel = 'Letters' | 'Words' | 'Paragraph' | 'Grade 2';
export type MathLevel =
  | 'Number recognition'
  | 'Subtraction'
  | 'Division';
export type StudentStatus = 'Good' | 'Needs Support' | 'Critical';
export type AlertSeverity = 'info' | 'warning' | 'critical';
export type RecommendationType = 'info' | 'warning' | 'success' | 'critical';

export interface Recommendation {
  message: string;
  type: RecommendationType;
}

export interface StudentAssessmentRecord {
  id: string;
  studentId: string;
  name: string;
  className: string;
  grade: number;
  year: number;
  school: string;
  district: string;
  state: string;
  readingScore: number;
  mathScore: number;
  readingLevel: ReadingLevel;
  mathLevel: MathLevel;
  expectedReadingLevel: ReadingLevel;
  expectedMathLevel: MathLevel;
  status: StudentStatus;
}

export interface ProgressPoint {
  period: string;
  reading: number;
  arithmetic: number;
}

export interface StudentProfile {
  studentId: string;
  name: string;
  className: string;
  grade: number;
  school: string;
  district: string;
  state: string;
  guardian: string;
  attendanceRate: number;
  currentReadingLevel: ReadingLevel;
  currentMathLevel: MathLevel;
  status: StudentStatus;
  progress: ProgressPoint[];
}

export interface ChartRow {
  [key: string]: number | string;
}

export interface TeacherFilters {
  className: string;
  grade: string;
  year: number;
}

export interface TeacherSummary {
  readingGrade2Percent: number;
  divisionPercent: number;
  supportNeededPercent: number;
  assessedStudents: number;
  avgReadingScore: number;
  avgMathScore: number;
}

export interface SchoolComparisonRow {
  school: string;
  reading: number;
  arithmetic: number;
  belowGradeLevel: number;
  students: number;
}

export interface AlertItem {
  title: string;
  message: string;
  severity: AlertSeverity;
}

interface StudentSeed {
  studentId: string;
  name: string;
  className: string;
  grade: number;
  school: string;
  district: string;
  state: string;
  guardian: string;
  readingBase: number;
  mathBase: number;
  attendanceRate: number;
}

const YEARS = [2021, 2022, 2023, 2024, 2025] as const;

const studentSeeds: StudentSeed[] = [
  {
    studentId: 'STU-001',
    name: 'Aarav Patel',
    className: 'Class A',
    grade: 3,
    school: 'Govt Primary Rampur',
    district: 'Jaipur',
    state: 'Rajasthan',
    guardian: 'Meena Patel',
    readingBase: 61,
    mathBase: 52,
    attendanceRate: 91,
  },
  {
    studentId: 'STU-002',
    name: 'Ananya Singh',
    className: 'Class A',
    grade: 3,
    school: 'Govt Primary Rampur',
    district: 'Jaipur',
    state: 'Rajasthan',
    guardian: 'Ravi Singh',
    readingBase: 48,
    mathBase: 45,
    attendanceRate: 88,
  },
  {
    studentId: 'STU-003',
    name: 'Rohan Yadav',
    className: 'Class A',
    grade: 2,
    school: 'Govt Primary Rampur',
    district: 'Jaipur',
    state: 'Rajasthan',
    guardian: 'Sushila Yadav',
    readingBase: 34,
    mathBase: 30,
    attendanceRate: 84,
  },
  {
    studentId: 'STU-004',
    name: 'Fatima Khan',
    className: 'Class B',
    grade: 3,
    school: 'Kasturba Vidyalaya Central',
    district: 'Jaipur',
    state: 'Rajasthan',
    guardian: 'Imran Khan',
    readingBase: 66,
    mathBase: 58,
    attendanceRate: 93,
  },
  {
    studentId: 'STU-005',
    name: 'Neha Sharma',
    className: 'Class B',
    grade: 2,
    school: 'Kasturba Vidyalaya Central',
    district: 'Jaipur',
    state: 'Rajasthan',
    guardian: 'Rakesh Sharma',
    readingBase: 40,
    mathBase: 36,
    attendanceRate: 82,
  },
  {
    studentId: 'STU-006',
    name: 'Imtiyaz Ali',
    className: 'Class B',
    grade: 4,
    school: 'Kasturba Vidyalaya Central',
    district: 'Jaipur',
    state: 'Rajasthan',
    guardian: 'Shabana Ali',
    readingBase: 72,
    mathBase: 67,
    attendanceRate: 94,
  },
  {
    studentId: 'STU-007',
    name: 'Diya Menon',
    className: 'Class C',
    grade: 4,
    school: 'Model School Nandgaon',
    district: 'Jaipur',
    state: 'Rajasthan',
    guardian: 'Anil Menon',
    readingBase: 55,
    mathBase: 49,
    attendanceRate: 89,
  },
  {
    studentId: 'STU-008',
    name: 'Kabir Verma',
    className: 'Class C',
    grade: 3,
    school: 'Model School Nandgaon',
    district: 'Jaipur',
    state: 'Rajasthan',
    guardian: 'Pooja Verma',
    readingBase: 43,
    mathBase: 34,
    attendanceRate: 80,
  },
  {
    studentId: 'STU-009',
    name: 'Lakshmi Das',
    className: 'Class C',
    grade: 2,
    school: 'Model School Nandgaon',
    district: 'Jaipur',
    state: 'Rajasthan',
    guardian: 'Arun Das',
    readingBase: 37,
    mathBase: 29,
    attendanceRate: 79,
  },
  {
    studentId: 'STU-010',
    name: 'Samar Choudhary',
    className: 'Class A',
    grade: 4,
    school: 'BRC Demonstration School',
    district: 'Jaipur',
    state: 'Rajasthan',
    guardian: 'Nidhi Choudhary',
    readingBase: 69,
    mathBase: 62,
    attendanceRate: 92,
  },
  {
    studentId: 'STU-011',
    name: 'Prisha Reddy',
    className: 'Class B',
    grade: 3,
    school: 'BRC Demonstration School',
    district: 'Jaipur',
    state: 'Rajasthan',
    guardian: 'Shankar Reddy',
    readingBase: 59,
    mathBase: 54,
    attendanceRate: 90,
  },
  {
    studentId: 'STU-012',
    name: 'Harshita Paul',
    className: 'Class C',
    grade: 2,
    school: 'BRC Demonstration School',
    district: 'Jaipur',
    state: 'Rajasthan',
    guardian: 'Jyoti Paul',
    readingBase: 31,
    mathBase: 27,
    attendanceRate: 78,
  },
];

const yearShift: Record<number, number> = {
  2021: -12,
  2022: -9,
  2023: -6,
  2024: -2,
  2025: 4,
};

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const readingLevelFromScore = (score: number): ReadingLevel => {
  if (score >= 75) {
    return 'Grade 2';
  }

  if (score >= 55) {
    return 'Paragraph';
  }

  if (score >= 35) {
    return 'Words';
  }

  return 'Letters';
};

const mathLevelFromScore = (score: number): MathLevel => {
  if (score >= 70) {
    return 'Division';
  }

  if (score >= 45) {
    return 'Subtraction';
  }

  return 'Number recognition';
};

const expectedReadingLevel = (grade: number): ReadingLevel =>
  grade >= 3 ? 'Grade 2' : 'Paragraph';

const expectedMathLevel = (grade: number): MathLevel =>
  grade >= 3 ? 'Division' : 'Subtraction';

const statusFromScores = (
  readingScore: number,
  mathScore: number
): StudentStatus => {
  if (readingScore >= 75 && mathScore >= 70) {
    return 'Good';
  }

  if (readingScore < 35 || mathScore < 35) {
    return 'Critical';
  }

  return 'Needs Support';
};

const readingLevelOrder: Record<ReadingLevel, number> = {
  Letters: 0,
  Words: 1,
  Paragraph: 2,
  'Grade 2': 3,
};

const mathLevelOrder: Record<MathLevel, number> = {
  'Number recognition': 0,
  Subtraction: 1,
  Division: 2,
};

export const assessmentRecords: StudentAssessmentRecord[] = YEARS.flatMap(
  (year) =>
    studentSeeds.map((seed, index) => {
      const readingScore = clamp(
        seed.readingBase + yearShift[year] + (index % 4),
        18,
        96
      );
      const mathScore = clamp(
        seed.mathBase + yearShift[year] + ((index + 2) % 5),
        14,
        95
      );
      const readingLevel = readingLevelFromScore(readingScore);
      const mathLevel = mathLevelFromScore(mathScore);

      return {
        id: `${seed.studentId}-${year}`,
        studentId: seed.studentId,
        name: seed.name,
        className: seed.className,
        grade: seed.grade,
        year,
        school: seed.school,
        district: seed.district,
        state: seed.state,
        readingScore,
        mathScore,
        readingLevel,
        mathLevel,
        expectedReadingLevel: expectedReadingLevel(seed.grade),
        expectedMathLevel: expectedMathLevel(seed.grade),
        status: statusFromScores(readingScore, mathScore),
      };
    })
);

export const availableYears = [...YEARS];
export const availableClasses = Array.from(
  new Set(studentSeeds.map((seed) => seed.className))
);
export const availableGrades = Array.from(
  new Set(studentSeeds.map((seed) => seed.grade))
).sort((a, b) => a - b);

export const assessmentInputOptions = {
  readingLevels: ['Letters', 'Words', 'Paragraph', 'Grade 2'] as ReadingLevel[],
  arithmeticLevels: [
    'Number recognition',
    'Subtraction',
    'Division',
  ] as MathLevel[],
};

export const teacherTrendByYear: Record<number, ProgressPoint[]> = {
  2021: [
    { period: 'Jul', reading: 43, arithmetic: 36 },
    { period: 'Aug', reading: 44, arithmetic: 37 },
    { period: 'Sep', reading: 45, arithmetic: 38 },
    { period: 'Oct', reading: 46, arithmetic: 39 },
    { period: 'Nov', reading: 47, arithmetic: 41 },
    { period: 'Dec', reading: 48, arithmetic: 42 },
  ],
  2022: [
    { period: 'Jul', reading: 46, arithmetic: 39 },
    { period: 'Aug', reading: 47, arithmetic: 40 },
    { period: 'Sep', reading: 49, arithmetic: 42 },
    { period: 'Oct', reading: 50, arithmetic: 43 },
    { period: 'Nov', reading: 51, arithmetic: 44 },
    { period: 'Dec', reading: 53, arithmetic: 46 },
  ],
  2023: [
    { period: 'Jul', reading: 49, arithmetic: 42 },
    { period: 'Aug', reading: 51, arithmetic: 45 },
    { period: 'Sep', reading: 52, arithmetic: 46 },
    { period: 'Oct', reading: 54, arithmetic: 49 },
    { period: 'Nov', reading: 56, arithmetic: 50 },
    { period: 'Dec', reading: 58, arithmetic: 52 },
  ],
  2024: [
    { period: 'Jul', reading: 54, arithmetic: 48 },
    { period: 'Aug', reading: 56, arithmetic: 50 },
    { period: 'Sep', reading: 58, arithmetic: 53 },
    { period: 'Oct', reading: 60, arithmetic: 55 },
    { period: 'Nov', reading: 62, arithmetic: 57 },
    { period: 'Dec', reading: 64, arithmetic: 59 },
  ],
  2025: [
    { period: 'Jul', reading: 60, arithmetic: 55 },
    { period: 'Aug', reading: 62, arithmetic: 58 },
    { period: 'Sep', reading: 65, arithmetic: 60 },
    { period: 'Oct', reading: 67, arithmetic: 63 },
    { period: 'Nov', reading: 69, arithmetic: 65 },
    { period: 'Dec', reading: 72, arithmetic: 67 },
  ],
};

export const districtTrendFiveYears = [
  { year: '2021', reading: 48, arithmetic: 42 },
  { year: '2022', reading: 51, arithmetic: 45 },
  { year: '2023', reading: 55, arithmetic: 49 },
  { year: '2024', reading: 59, arithmetic: 54 },
  { year: '2025', reading: 64, arithmetic: 59 },
];

const round = (value: number) => Math.round(value * 10) / 10;

export function filterAssessmentRecords(
  records: StudentAssessmentRecord[],
  filters: TeacherFilters
) {
  return records.filter((record) => {
    const classMatches =
      filters.className === 'All' || record.className === filters.className;
    const gradeMatches =
      filters.grade === 'All' || record.grade === Number(filters.grade);
    const yearMatches = record.year === filters.year;

    return classMatches && gradeMatches && yearMatches;
  });
}

export function summarizeTeacherPerformance(
  records: StudentAssessmentRecord[]
): TeacherSummary {
  if (!records.length) {
    return {
      readingGrade2Percent: 0,
      divisionPercent: 0,
      supportNeededPercent: 0,
      assessedStudents: 0,
      avgReadingScore: 0,
      avgMathScore: 0,
    };
  }

  const total = records.length;
  const readingGrade2 = records.filter(
    (record) => record.readingLevel === 'Grade 2'
  ).length;
  const division = records.filter(
    (record) => record.mathLevel === 'Division'
  ).length;
  const supportNeeded = records.filter(
    (record) => record.status !== 'Good'
  ).length;
  const avgReading =
    records.reduce((sum, record) => sum + record.readingScore, 0) / total;
  const avgMath =
    records.reduce((sum, record) => sum + record.mathScore, 0) / total;

  return {
    readingGrade2Percent: round((readingGrade2 / total) * 100),
    divisionPercent: round((division / total) * 100),
    supportNeededPercent: round((supportNeeded / total) * 100),
    assessedStudents: total,
    avgReadingScore: round(avgReading),
    avgMathScore: round(avgMath),
  };
}

export function buildClassComparisonData(records: StudentAssessmentRecord[]) {
  const grouped = records.reduce<Record<string, StudentAssessmentRecord[]>>(
    (acc, record) => {
      acc[record.className] = [...(acc[record.className] ?? []), record];
      return acc;
    },
    {}
  );

  return Object.entries(grouped).map(([className, classRecords]) => ({
    className,
    reading: round(
      classRecords.reduce((sum, record) => sum + record.readingScore, 0) /
        classRecords.length
    ),
    arithmetic: round(
      classRecords.reduce((sum, record) => sum + record.mathScore, 0) /
        classRecords.length
    ),
  }));
}

export function buildSchoolComparisonData(
  records: StudentAssessmentRecord[]
): SchoolComparisonRow[] {
  const grouped = records.reduce<Record<string, StudentAssessmentRecord[]>>(
    (acc, record) => {
      acc[record.school] = [...(acc[record.school] ?? []), record];
      return acc;
    },
    {}
  );

  return Object.entries(grouped)
    .map(([school, schoolRecords]) => {
      const total = schoolRecords.length;
      const belowExpected = schoolRecords.filter(
        (record) =>
          readingLevelOrder[record.readingLevel] <
            readingLevelOrder[record.expectedReadingLevel] ||
          mathLevelOrder[record.mathLevel] <
            mathLevelOrder[record.expectedMathLevel]
      ).length;

      return {
        school,
        reading: round(
          schoolRecords.reduce((sum, record) => sum + record.readingScore, 0) /
            total
        ),
        arithmetic: round(
          schoolRecords.reduce((sum, record) => sum + record.mathScore, 0) /
            total
        ),
        belowGradeLevel: round((belowExpected / total) * 100),
        students: total,
      };
    })
    .sort((a, b) => a.reading - b.reading);
}

const getBand = (score: number) => {
  if (score >= 70) {
    return 'On Track';
  }

  if (score >= 45) {
    return 'Emerging';
  }

  return 'At Risk';
};

export function buildLearningDistribution(records: StudentAssessmentRecord[]) {
  const total = Math.max(records.length, 1);
  const bands = ['At Risk', 'Emerging', 'On Track'];

  return bands.map((band) => {
    const readingCount = records.filter(
      (record) => getBand(record.readingScore) === band
    ).length;
    const arithmeticCount = records.filter(
      (record) => getBand(record.mathScore) === band
    ).length;

    return {
      band,
      reading: round((readingCount / total) * 100),
      arithmetic: round((arithmeticCount / total) * 100),
    };
  });
}

export function buildTeacherRecommendations(
  records: StudentAssessmentRecord[],
  summary: TeacherSummary
): Recommendation[] {
  const criticalStudents = records.filter(
    (record) => record.status === 'Critical'
  );
  const divisionGap =
    records.filter((record) => record.mathLevel !== 'Division').length /
    Math.max(records.length, 1);

  const recommendations: Recommendation[] = [
    {
      type: summary.readingGrade2Percent < 55 ? 'warning' : 'success',
      message:
        summary.readingGrade2Percent < 55
          ? `Only ${summary.readingGrade2Percent}% can read Grade 2 text. Add daily guided reading circles.`
          : `${summary.readingGrade2Percent}% are reading Grade 2 text. Keep peer reading groups active.`,
    },
    {
      type: divisionGap > 0.45 ? 'warning' : 'info',
      message:
        divisionGap > 0.45
          ? 'Class is struggling with division fluency. Plan targeted 15-minute arithmetic drills.'
          : 'Division performance is improving. Continue mixed-problem practice.',
    },
    {
      type: criticalStudents.length > 0 ? 'critical' : 'info',
      message:
        criticalStudents.length > 0
          ? `${criticalStudents.length} students are in critical status. Schedule one-on-one remediation this week.`
          : 'No critical students in this filter. Focus on moving support-level students to on-track.',
    },
  ];

  return recommendations;
}

export function buildAdminAlerts(
  records: StudentAssessmentRecord[],
  schoolRows: SchoolComparisonRow[]
): AlertItem[] {
  const lowPerformingSchools = schoolRows.filter(
    (row) => row.reading < 55 || row.arithmetic < 55
  );

  const belowGradeStudents = records.filter(
    (record) =>
      readingLevelOrder[record.readingLevel] <
        readingLevelOrder[record.expectedReadingLevel] ||
      mathLevelOrder[record.mathLevel] < mathLevelOrder[record.expectedMathLevel]
  );

  const alerts: AlertItem[] = [];

  if (lowPerformingSchools.length) {
    alerts.push({
      title: 'Low-performing schools detected',
      message: `${lowPerformingSchools
        .map((school) => school.school)
        .join(', ')} need focused teacher coaching support.`,
      severity: 'critical',
    });
  }

  alerts.push({
    title: 'Below grade-level students',
    message: `${belowGradeStudents.length} students are below expected reading or arithmetic levels in the selected year.`,
    severity: belowGradeStudents.length > records.length * 0.35 ? 'warning' : 'info',
  });

  alerts.push({
    title: 'Priority intervention focus',
    message:
      'Use monthly ASER-style checkpoints to track movement from "At Risk" to "Emerging" bands.',
    severity: 'info',
  });

  return alerts;
}

const studentRecordsById = assessmentRecords.reduce<
  Record<string, StudentAssessmentRecord[]>
>((acc, record) => {
  acc[record.studentId] = [...(acc[record.studentId] ?? []), record];
  return acc;
}, {});

export const studentProfiles: StudentProfile[] = studentSeeds.map((seed) => {
  const records = (studentRecordsById[seed.studentId] ?? []).sort(
    (a, b) => a.year - b.year
  );
  const latest = records[records.length - 1];

  return {
    studentId: seed.studentId,
    name: seed.name,
    className: seed.className,
    grade: seed.grade,
    school: seed.school,
    district: seed.district,
    state: seed.state,
    guardian: seed.guardian,
    attendanceRate: seed.attendanceRate,
    currentReadingLevel: latest.readingLevel,
    currentMathLevel: latest.mathLevel,
    status: latest.status,
    progress: records.map((record) => ({
      period: String(record.year),
      reading: record.readingScore,
      arithmetic: record.mathScore,
    })),
  };
});

export function buildStudentRecommendations(
  profile: StudentProfile
): Recommendation[] {
  const readingGap =
    readingLevelOrder[expectedReadingLevel(profile.grade)] -
    readingLevelOrder[profile.currentReadingLevel];
  const mathGap =
    mathLevelOrder[expectedMathLevel(profile.grade)] -
    mathLevelOrder[profile.currentMathLevel];

  const recommendations: Recommendation[] = [];

  if (readingGap > 0) {
    recommendations.push({
      type: 'warning',
      message: `This student is ${readingGap} reading level(s) below expected. Practice guided reading for 15 minutes daily.`,
    });
  } else {
    recommendations.push({
      type: 'success',
      message:
        'Reading level is on track. Reinforce comprehension with short paragraph retelling.',
    });
  }

  if (mathGap > 0) {
    recommendations.push({
      type: 'warning',
      message:
        'Arithmetic progression is below target. Focus on subtraction-to-division transition practice.',
    });
  } else {
    recommendations.push({
      type: 'info',
      message: 'Arithmetic level is stable. Increase word-problem complexity gradually.',
    });
  }

  if (profile.attendanceRate < 85) {
    recommendations.push({
      type: 'critical',
      message:
        'Attendance is below 85%. Add guardian follow-up to prevent learning loss.',
    });
  }

  return recommendations;
}
