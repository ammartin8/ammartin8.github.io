import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = ''; // Reset on unmount
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border)]">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between px-6 py-6">
        <Logo />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          className="text-[var(--text-primary)] p-2"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Header - Same padding as mobile (px-6 py-4) */}
      <nav className="hidden lg:flex w-full items-center justify-between px-20 py-6">
        {/* Logo - Far Left */}
        <Logo />

        {/* Desktop Navigation Links - Pushed to Right Side */}
        <div className="flex items-center gap-8 ml-auto">
          {[{
            label: "THE ENGINEER", href: "#the-engineer" 
          }, {
            label: "PROJECTS", href: "#projects-builds" 
          }, {
            label: "CONTACT", href: "#contact-heading" 
          }].map(({ label, href }) => {
            return (
              <a
                key={label}
                href={href}
                className="font-mono text-sm uppercase tracking-wide text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 relative group"
              >
                {label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            );
          })}
          
          {/* OPEN Text with Beacon Pulse - Desktop */}
          <span className="font-mono text-sm uppercase tracking-wide text-[var(--accent)] flex items-center">
            <span className="beacon-pulse"></span>
            OPEN
          </span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[var(--border)] bg-[var(--bg-primary)] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {[
                { label: "THE ENGINEER", href: "#the-engineer" },
                { label: "PROJECTS", href: "#projects-builds" },
                { label: "CONTACT", href: "#contact-heading" }
              ].map(({ label, href }) => {
                return (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-mono text-sm uppercase tracking-wide text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 block py-2"
                  >
                    {label}
                  </a>
                );
              })}
              
              {/* OPEN Text with Beacon Pulse - Mobile */}
              <span className="font-mono text-sm uppercase tracking-wide text-[var(--accent)] flex items-center">
                <span className="beacon-pulse"></span>
                OPEN
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
