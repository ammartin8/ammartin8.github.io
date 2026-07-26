import React from "react";
import { motion } from "framer-motion";


interface SummaryCardProps {
  data: {
    solutions: string;
    location: string;
    careerAdv: string;
    mostRecent: string;
    status: string;
  };
  lookingFor: string;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ data, lookingFor }) => {
  return (
    <motion.div
      className="group bg-[var(--surface)] rounded-xl shadow-lg hover:shadow-2xl border border-[var(--border)] overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Row 1: Header */}
      <div className="px-5 py-2 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <h3 className="font-display 3xs font-bold uppercase tracking-widest text-[var(--text-primary)]">
          Quick Overview
        </h3>
      </div>

      {/* Row 2: Borderless table with 2 columns */}
      <div className="px-4 sm:px-5 py-3">
        <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-sm">
          {/* SOLUTIONS */}
          <dt className="font-mono font-semibold uppercase tracking-wide text-xs text-[var(--accent)] w-fit mb-0">
            SOLUTIONS
          </dt>
          <dd className="font-serif text-[var(--text-secondary)] text-sm leading-tight ml-2">
            {data.solutions}
          </dd>

          {/* LOCATION */}
          <dt className="font-mono font-semibold uppercase tracking-wide text-xs text-[var(--accent)] w-fit mb-0 pt-1">
            LOCATION
          </dt>
          <dd className="font-serif text-[var(--text-secondary)] leading-tight pt-2 ml-2">
            {data.location}
          </dd>

          {/* CAREER ADV */}
          <dt className="font-mono font-semibold uppercase tracking-wide text-xs text-[var(--accent)] w-fit mb-0 pt-1">
            CAREER ADV
          </dt>
          <dd className="font-serif text-[var(--text-secondary)] leading-tight pt-2 ml-2">
            {data.careerAdv}
          </dd>

          {/* MOST RECENT */}
          <dt className="font-mono font-semibold uppercase tracking-wide text-xs text-[var(--accent)] w-fit mb-0 pt-1">
            MOST RECENT
          </dt>
          <dd className="font-serif text-[var(--text-secondary)] leading-tight pt-2 ml-2">
            {data.mostRecent}
          </dd>

          {/* STATUS */}
          <dt className="font-mono font-semibold uppercase tracking-wide text-xs text-[var(--accent)] w-fit mb-0 pt-1">
            STATUS
          </dt>
          <dd className="font-serif font-bold text-[var(--text-secondary)] leading-tight pt-2 ml-2">
            {data.status}
          </dd>
        </dl>
      </div>

      {/* Row 3: Line separator */}
      <div className="h-px bg-[var(--border)] my-0" />

      {/* Row 4: Sub-header and paragraph */}
      <div className="px-5 py-4">
        <h4 className="font-mono font-semibold uppercase tracking-wide text-base text-[var(--text-primary)] mb-1.5 ml-0">
          WHAT I'M LOOKING FOR
        </h4>
        <p className="font-serif 3xs text-[var(--text-secondary)] leading-relaxed">
          {lookingFor}
        </p>
      </div>
    </motion.div>
  );
};
