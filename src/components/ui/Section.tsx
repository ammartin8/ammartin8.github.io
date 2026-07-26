import React from "react";
import { theme } from "./design-system";

interface SectionHeaderProps {
  title: string;
  subtitle?: string | React.ReactNode;
  id?: string;
  alignLeft?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, id, alignLeft }) => (
  <div className={alignLeft ? "mb-8" : "text-center mb-16"}>
    <h2 id={id} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
      {title.includes('The builds.') || alignLeft ? (
        <>
          {title.includes('The builds.') ? (
            <>
              <span style={{ color: theme.colors.textPrimary }}>The </span>
              <span className="italic text-[var(--accent)]">builds.</span>
            </>
          ) : (
            title
          )}
        </>
      ) : (
        title
      )}
    </h2>
    {subtitle && alignLeft ? (
      <p className="font-serif text-xl md:text-2xl text-[var(--text-secondary)]">
        {subtitle}
      </p>
    ) : subtitle ? (
      <p className="font-serif text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto">
        {subtitle}
      </p>
    ) : null}
  </div>
);

export const Section: React.FC<{
  id?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ id, children, className }) => (
  <section
    id={id}
    className={`py-6 md:py-8 ${className || ""}`}
  >
    {children}
  </section>
);
