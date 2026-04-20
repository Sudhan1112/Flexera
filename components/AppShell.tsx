'use client';

import { useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

interface AppShellProps {
  children: React.ReactNode;
}

const titleByPath: Record<string, string> = {
  '/': 'Teacher Dashboard',
  '/assessment': 'Student Assessment',
  '/students': 'Student Profiles',
  '/admin': 'Admin Dashboard',
};

const getPageTitle = (pathname: string) => {
  if (titleByPath[pathname]) {
    return titleByPath[pathname];
  }

  if (pathname.startsWith('/students')) {
    return 'Student Profiles';
  }

  return 'FoundEd Analytics';
};

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pageTitle = useMemo(() => getPageTitle(pathname), [pathname]);

  return (
    <div className="min-h-screen bg-canvas text-ink-900">
      <div className="lg:grid lg:grid-cols-[260px_1fr]">
        <aside className="hidden min-h-screen lg:block">
          <Sidebar />
        </aside>

        <div
          className={`fixed inset-0 z-40 bg-slate-950/35 transition lg:hidden ${
            isMobileNavOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }`}
          onClick={() => setIsMobileNavOpen(false)}
          aria-hidden={!isMobileNavOpen}
        />

        <aside
          className={`fixed left-0 top-0 z-50 h-full w-72 transform transition duration-200 lg:hidden ${
            isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Sidebar onNavigate={() => setIsMobileNavOpen(false)} />
        </aside>

        <div className="min-h-screen">
          <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur">
            <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsMobileNavOpen(true)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-ink-700 transition hover:bg-slate-50 lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                </button>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                    FoundEd
                  </p>
                  <h1 className="text-lg font-semibold text-ink-900">{pageTitle}</h1>
                </div>
              </div>

              <div className="rounded-full border border-brand-500/25 bg-brand-500/8 px-3 py-1 text-xs font-semibold text-brand-700">
                ASER Cycle 2025
              </div>
            </div>
          </header>

          <main className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
