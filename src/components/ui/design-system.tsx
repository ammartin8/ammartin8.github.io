import React from "react";

/**
 * DesignSystem - Theme tokens and utilities
 * 
 * This module extracts CSS variable references into a reusable theme object.
 * Components can use these tokens for consistent theming without hardcoding values.
 */

// Theme tokens extracted from CSS variables in index.css
export const theme = {
  colors: {
    bgPrimary: "var(--bg-primary)",
    bgSecondary: "var(--bg-secondary)",
    textPrimary: "var(--text-primary)",
    textSecondary: "var(--text-secondary)",
    accent: "var(--accent)",
    accentMuted: "var(--accent-muted)",
    border: "var(--border)",
    surface: "var(--surface)",
  },
  // Hardcoded values that should use CSS variables (for consistency)
  hardcodedColors: {
    accentColor: "#c2410c",
    accentMutedColor: "#c4956a",
  },
};

// Utility class names for common patterns
export const cx = (...classes: (string | false | null | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

/**
 * Badge primitive - a reusable badge component with theme tokens
 */
export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export const BadgePrimitive: React.FC<BadgeProps> = ({ 
  children, 
  variant = "default",
  className 
}) => {
  const baseClasses = "inline-block px-4 py-1 text-xs font-mono uppercase tracking-widest rounded-md my-0.5";
  const variantClasses = variant === "accent" 
    ? `bg-[var(--accent)] text-[var(--bg-primary)]`
    : "bg-[var(--bg-secondary)] text-[var(--text-primary)]";
  
  return (
    <span className={cx(baseClasses, variantClasses, className)}>
      {children}
    </span>
  );
};

/**
 * Section with theme-aware styling
 */
export interface ThemeSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export const ThemeSection: React.FC<ThemeSectionProps> = ({ 
  id, 
  children, 
  className 
}) => (
  <section
    id={id}
    className={`py-6 md:py-8 ${className || ""}`}
  >
    {children}
  </section>
);
