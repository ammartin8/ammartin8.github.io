import React from "react";
import { motion } from "framer-motion";
import { theme } from "./design-system";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  category: "Data Engineering" | "Data Analytics" | "Front-End Engineering" | "AI Engineering";
  techStack: string[];
  link?: string;
  githubLink?: string;
}

export const Card: React.FC<CardProps> = ({
  // imageSrc, imageAlt, and githubLink are not currently used in this implementation
  // but are included for future extensibility
  title,
  description,
  problem,
  solution,
  impact,
  category,
  techStack,
  link,
}) => {
  return (
    <motion.div
      className="group relative bg-[var(--surface)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Category Badge */}
      <div className="mb-4 ml-4 mt-6">
        <span className="inline-block px-4 py-1 text-xs font-mono uppercase tracking-widest bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-md my-0.5">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="pt-4 px-4">
        <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-1.5">
          {title}
        </h3>
        <p className="font-serif text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
          {description}
        </p>

        {/* Problem Section */}
        <div style={{ position: 'relative', paddingLeft: '0.75rem', marginBottom: '1rem' }}>
          <div style={{ 
            position: 'absolute', 
            left: 0, 
            top: '4px',
            width: '2px',
            height: '2.5em', 
            backgroundColor: theme.colors.accent
          }}></div>
          <h4 className="font-display text-xs font-bold uppercase text-[var(--accent)] mb-0.5">
            Problem
          </h4>
          <p className="font-serif text-sm text-[var(--text-secondary)] leading-relaxed">
            {problem}
          </p>
        </div>

        {/* Solution Section */}
        <div style={{ position: 'relative', paddingLeft: '0.75rem', marginBottom: '1rem' }}>
          <div style={{ 
            position: 'absolute', 
            left: 0, 
            top: '4px',
            width: '2px',
            height: '2.5em', 
            backgroundColor: theme.colors.accent
          }}></div>
          <h4 className="font-display text-xs font-bold uppercase text-[var(--accent)] mb-0.5">
            Solution
          </h4>
          <p className="font-serif text-sm text-[var(--text-secondary)] leading-relaxed">
            {solution}
          </p>
        </div>

        {/* Impact Section */}
        <div style={{ position: 'relative', paddingLeft: '0.75rem' }}>
          <div style={{ 
            position: 'absolute', 
            left: 0, 
            top: '4px',
            width: '2px',
            height: '2.5em', 
            backgroundColor: theme.colors.accent
          }}></div>
          <h4 className="font-display text-xs font-bold uppercase text-[var(--accent)] mb-0.5">
            Impact
          </h4>
          <p className="font-serif text-sm text-[var(--text-secondary)] leading-relaxed">
            {impact}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className={`inline-flex items-center px-2 py-0.75 text-[10px] font-mono uppercase tracking-wider bg-[${theme.colors.bgSecondary}] text-[${theme.colors.textPrimary}] rounded-full`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Link */}
        {link && (
          <div className="mb-6">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--accent)] text-[var(--bg-primary)] font-mono text-xs uppercase tracking-widest rounded hover:bg-[var(--accent-muted)] transition-colors duration-300"
            >
              View Project
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};
