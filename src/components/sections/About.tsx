import React from "react";
import { SummaryCard } from "../ui/SummaryCard";
import { Section, SectionHeader } from "../ui/Section";
import { aboutSection, summaryCardData, summaryCardLookingFor, highlightPhrases } from "../../data/content";

// HighlightedSubtitle component using the pure highlightPhrases function
// This demonstrates locality - presentation logic is now in a separate adapter interface
const HighlightedSubtitle: React.FC<{ content: string }> = ({ content }) => {
  const phrases = ["data analytics infrastructure", "validating quality", "automating workflows"];
  
  // Use the pure function from data layer instead of embedding logic
  const highlightedText = highlightPhrases(content, phrases);
  
  return (
    <span className="font-serif text-xl md:text-2xl text-[var(--text-secondary)]">
      {highlightedText}
    </span>
  );
};

export const About: React.FC = () => {
  const { title, intro, mostRecent, careerHistory, education } = aboutSection; // subtitle not used in current implementation

  return (
    <Section id="the-engineer" className="pt-32 md:pt-40 lg:pt-48">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 xl:px-12">
        {/* Left Column - Content and Right Column - Summary Card in same grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-32 mb-16 lg:mb-0">
          {/* Left Column - Content */}
          <div className="lg:col-span-3">
            <SectionHeader title={title} subtitle={<HighlightedSubtitle content={aboutSection.subtitle} />} alignLeft={true} />
            
            <p className="mt-8 text-[var(--text-secondary)] text-base leading-relaxed mb-8">
              {intro}
            </p>
            
            <div className="space-y-6">
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-[var(--accent)] mb-2">
                MOST RECENT CHAPTER
              </h3>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                {mostRecent}
              </p>
              
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                {careerHistory}
              </p>
              
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                {education}
              </p>
            </div>
          </div>
          
          {/* Right Column - Summary Card */}
          <div className="lg:col-span-2">
            <div className="pt-16 mt-8">
              <SummaryCard data={summaryCardData} lookingFor={summaryCardLookingFor} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
