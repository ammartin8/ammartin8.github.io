

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] py-12 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-24">
        {/* Copyright */}
        <p className="font-mono text-xs text-[var(--text-secondary)] text-center">
          © {new Date().getFullYear()} Amah Martin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
