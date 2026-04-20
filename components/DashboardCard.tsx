interface DashboardCardProps {
  title: string;
  value: string | number;
  description?: string;
  tone?: 'brand' | 'success' | 'warning' | 'critical';
  trend?: string;
}

export default function DashboardCard({
  title,
  value,
  description,
  tone = 'brand',
  trend,
}: DashboardCardProps) {
  const toneStyles = {
    brand: {
      ring: 'ring-brand-500/25',
      badge: 'bg-brand-500/10 text-brand-700',
      value: 'text-brand-700',
    },
    success: {
      ring: 'ring-emerald-500/25',
      badge: 'bg-emerald-500/12 text-emerald-700',
      value: 'text-emerald-700',
    },
    warning: {
      ring: 'ring-amber-500/25',
      badge: 'bg-amber-500/15 text-amber-700',
      value: 'text-amber-700',
    },
    critical: {
      ring: 'ring-rose-500/25',
      badge: 'bg-rose-500/10 text-rose-700',
      value: 'text-rose-700',
    },
  };

  const style = toneStyles[tone];

  return (
    <div
      className={`card-shadow rounded-2xl border border-slate-100 bg-surface p-5 ring-1 ${style.ring}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-ink-500">
          {title}
        </h3>
        {trend ? (
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${style.badge}`}>
            {trend}
          </span>
        ) : null}
      </div>
      <p className={`mt-3 text-3xl font-bold ${style.value}`}>{value}</p>
      {description && (
        <p className="mt-2 text-sm text-ink-700">{description}</p>
      )}
    </div>
  );
}
