import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Go to Dashboard" },
  { href: "/assessment", label: "Open Assessment" },
  { href: "/students", label: "View Students" },
  { href: "/admin", label: "Open Admin Dashboard" },
];

export default function NotFound() {
  return (
    <section className="card-shadow rounded-2xl border border-slate-100 bg-surface p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
        Error 404
      </p>
      <h2 className="mt-2 font-serif text-3xl font-semibold text-ink-900">
        Page not found
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-700">
        The page you requested does not exist or has moved. Use one of the
        links below to continue.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-brand-700 transition hover:border-brand-400 hover:bg-brand-500/10"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
