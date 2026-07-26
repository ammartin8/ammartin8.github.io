
import { motion } from "framer-motion";
import { heroContent, heroHighlights, buildHighlightedHighlights } from "../../data/content";

export default function Hero() {
  // Removed scroll-based transforms - using simple fade-in animations instead
  // All elements now have subtle entrance animations without complex Y-axis movements

  return (
    <div
      id="Hero"
      className="relative overflow-hidden bg-[var(--bg-primary)] flex items-start justify-start pl-4 lg:pl-8 xl:pl-12 2xl:pl-16 pt-8 md:pt-12 lg:pt-16 min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]"
    >
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--text-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating Shapes - Subtle up/down motion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-20 right-[15%] w-32 h-32 border-2 border-[var(--accent)] rounded-full rotate-12 float"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute bottom-20 left-[10%] w-24 h-24 bg-[var(--accent-muted)] rounded-full blur-xl float"
      />

      {/* Main Content - Far left with minimal padding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col justify-start pl-4 lg:pl-8 xl:pl-12 2xl:pl-16 pt-8 md:pt-12 lg:pt-16 pb-8"
      >
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span 
            className="font-mono text-sm tracking-[0.3em] uppercase text-[var(--accent)] border-2 border-[var(--accent)] px-4 py-2"
            style={{
              backgroundColor: 'rgba(255, 107, 53, 0.1)',
            }}
          >
            Data Analytics Engineer
          </span>
        </motion.div>

        {/* Large Animated Name - Split into two lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4"
        >
          {/* First Name - Solid */}
          <motion.h1
            className="font-display text-[clamp(3.5rem,14vw,12rem)] leading-[0.85] tracking-tight text-[var(--text-primary)] mb-2"
          >
            {heroContent.name.split(" ")[0]}{" "}
          </motion.h1>
          
          {/* Last Name - Outline style with responsive sizing */}
          <h1 
            className="font-display outline-name leading-[0.85] tracking-tight text-[var(--text-primary)]"
            style={{
              fontSize: 'clamp(3.5rem, 14vw, 12rem)',
              letterSpacing: '-0.02em',
            }}
          >
            {heroContent.name.split(" ").slice(1).join(" ")}
          </h1>
        </motion.div>

        {/* Intro Text - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl text-left"
        >
          <p className="font-serif text-lg md:text-base lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl text-[var(--text-secondary)] leading-relaxed">
            {heroContent.intro} 
            <span className="text-[var(--accent)] font-semibold">
              {buildHighlightedHighlights(heroHighlights)}
            </span>
          </p>
        </motion.div>

        {/* Action Buttons - Minimalist Style */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {/* Primary button - REACH OUT */}
          <a
            href="#contact-heading"
            className="bg-[var(--accent)] text-[var(--bg-primary)] px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[var(--accent-muted)] transition-colors duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
          >
            REACH OUT
          </a>

          {/* Secondary button - VIEW WORK */}
          <a
            href="#projects-builds"
            className="text-[var(--text-secondary)] px-6 py-3 font-mono text-xs uppercase tracking-widest hover:text-[var(--accent)] transition-colors duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
          >
            VIEW WORK
          </a>
        </motion.div>


      </motion.div>
    </div>
  );
}
