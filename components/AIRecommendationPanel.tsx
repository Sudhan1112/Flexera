interface Recommendation {
  message: string;
  type: 'info' | 'warning' | 'success' | 'critical';
}

interface AIRecommendationPanelProps {
  title?: string;
  recommendations: Recommendation[];
}

export default function AIRecommendationPanel({
  title = 'AI Recommendations',
  recommendations,
}: AIRecommendationPanelProps) {
  const typeStyles = {
    info: 'border-blue-200 bg-blue-50 text-blue-900',
    warning: 'border-amber-200 bg-amber-50 text-amber-900',
    success: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    critical: 'border-rose-200 bg-rose-50 text-rose-900',
  };

  const badgeStyles = {
    info: 'bg-blue-100 text-blue-800',
    warning: 'bg-amber-100 text-amber-800',
    success: 'bg-emerald-100 text-emerald-800',
    critical: 'bg-rose-100 text-rose-800',
  };

  return (
    <div className="card-shadow rounded-2xl border border-slate-100 bg-surface p-5">
      <h3 className="text-base font-semibold text-ink-900 sm:text-lg">{title}</h3>
      <div className="mt-4 space-y-3">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className={`rounded-xl border px-4 py-3 ${typeStyles[rec.type]}`}
          >
            <span
              className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] ${badgeStyles[rec.type]}`}
            >
              {rec.type}
            </span>
            <p className="mt-2 text-sm leading-relaxed">{rec.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
