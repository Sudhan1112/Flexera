'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  onNavigate?: () => void;
}

const navItems = [
  {
    href: '/',
    label: 'Dashboard',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" d="M4 13h6V4H4v9Zm10 7h6V4h-6v16ZM4 20h6v-3H4v3Z" />
      </svg>
    ),
  },
  {
    href: '/assessment',
    label: 'Assessment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" d="M8 7h8M8 12h8M8 17h5" />
        <path
          strokeLinecap="round"
          d="M6 21h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8l-4 4v12a2 2 0 0 0 2 2Z"
        />
      </svg>
    ),
  },
  {
    href: '/students',
    label: 'Students',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="3" />
        <path strokeLinecap="round" d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    href: '/admin',
    label: 'Admin',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" d="M3 21h18M5 21V6l7-3 7 3v15M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
      </svg>
    ),
  },
];

const isActivePath = (pathname: string, href: string) =>
  href === '/' ? pathname === href : pathname.startsWith(href);

export default function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="card-shadow flex h-full flex-col border-r border-slate-800/20 bg-sidebar px-4 pb-6 pt-5 text-slate-100">
      <div className="mb-7 rounded-2xl bg-white/8 p-4">
        <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Product</p>
        <h1 className="mt-1 font-serif text-2xl font-semibold text-white">FoundEd</h1>
        <p className="mt-2 text-sm text-slate-200/90">
          Foundational learning analytics for reading and arithmetic.
        </p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1.5">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  isActivePath(pathname, item.href)
                    ? 'bg-white text-sidebar shadow-sm'
                    : 'text-slate-100 hover:bg-sidebar-soft'
                }`}
              >
                <span
                  className={`h-5 w-5 ${
                    isActivePath(pathname, item.href)
                      ? 'text-brand-700'
                      : 'text-slate-200 group-hover:text-white'
                  }`}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-6 rounded-xl border border-white/15 bg-white/7 p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
          Intervention Focus
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-100">
          Class B needs extra division practice this week.
        </p>
      </div>
    </div>
  );
}
