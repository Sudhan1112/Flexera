import StudentProfileView from '@/components/StudentProfileView';

export default async function StudentsPage({
  searchParams,
}: {
  searchParams: Promise<{ student?: string }>;
}) {
  const params = await searchParams;

  return <StudentProfileView initialStudentId={params.student} />;
}
