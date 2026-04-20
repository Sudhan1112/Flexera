interface PageHeaderProps {
  title: string;
  description: string;
  eyebrow?: string;
  action?: React.ReactNode;
}

export default function PageHeader({
  title,
  description,
  eyebrow,
  action,
}: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 sm:mb-8 sm:flex-row sm:items-end">
      <div>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-1 font-serif text-2xl font-semibold text-ink-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700 sm:text-base">
          {description}
        </p>
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
