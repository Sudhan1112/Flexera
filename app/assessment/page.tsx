import AssessmentForm from '@/components/AssessmentForm';
import PageHeader from '@/components/PageHeader';

export default function AssessmentPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Assessment"
        title="2-Minute Student Assessment"
        description="Capture ASER-style learning levels quickly so teachers can spend less time entering data and more time improving outcomes."
      />
      <AssessmentForm />
    </div>
  );
}
