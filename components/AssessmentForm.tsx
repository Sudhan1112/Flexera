'use client';

import { useState } from 'react';
import { assessmentInputOptions } from '@/lib/mockData';

interface FormState {
  name: string;
  readingLevel: string;
  mathLevel: string;
}

export default function AssessmentForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    readingLevel: '',
    mathLevel: '',
  });
  const [submittedSnapshot, setSubmittedSnapshot] = useState<FormState | null>(
    null
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedSnapshot(formData);
    setFormData({ name: '', readingLevel: '', mathLevel: '' });
  };

  const inputClassName =
    'w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20';

  return (
    <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
      <div className="card-shadow rounded-2xl border border-slate-100 bg-surface p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-ink-900">
              Quick Assessment
            </h3>
            <p className="mt-1 text-sm text-ink-700">
              Capture a 2-minute reading + arithmetic check.
            </p>
          </div>
          <span className="rounded-full bg-brand-500/12 px-3 py-1 text-xs font-semibold text-brand-700">
            2 min test
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
              Student Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter full name"
              className={inputClassName}
              required
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
              Reading Level
            </label>
            <select
              value={formData.readingLevel}
              onChange={(e) =>
                setFormData({ ...formData, readingLevel: e.target.value })
              }
              className={inputClassName}
              required
            >
              <option value="">Select level</option>
              {assessmentInputOptions.readingLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
              Arithmetic Level
            </label>
            <select
              value={formData.mathLevel}
              onChange={(e) =>
                setFormData({ ...formData, mathLevel: e.target.value })
              }
              className={inputClassName}
              required
            >
              <option value="">Select level</option>
              {assessmentInputOptions.arithmeticLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
          >
            Submit Assessment
          </button>
        </form>
      </div>

      <div className="space-y-5">
        <div className="card-shadow rounded-2xl border border-slate-100 bg-surface p-5">
          <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-ink-500">
            Assessment Flow
          </h4>
          <ol className="mt-3 space-y-2 text-sm text-ink-700">
            <li>1. Read letters/words/paragraph text aloud</li>
            <li>2. Ask subtraction or division prompt</li>
            <li>3. Submit and move to next student</li>
          </ol>
        </div>

        <div className="card-shadow rounded-2xl border border-slate-100 bg-surface p-5">
          <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-ink-500">
            Last Submitted
          </h4>
          {submittedSnapshot ? (
            <div className="mt-3 space-y-1 text-sm text-ink-700">
              <p>
                <span className="font-semibold text-ink-900">Name:</span>{' '}
                {submittedSnapshot.name}
              </p>
              <p>
                <span className="font-semibold text-ink-900">Reading:</span>{' '}
                {submittedSnapshot.readingLevel}
              </p>
              <p>
                <span className="font-semibold text-ink-900">Arithmetic:</span>{' '}
                {submittedSnapshot.mathLevel}
              </p>
            </div>
          ) : (
            <p className="mt-3 text-sm text-ink-700">
              No assessment submitted in this session yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
