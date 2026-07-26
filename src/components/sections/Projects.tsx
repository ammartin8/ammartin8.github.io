
import { projects, projectsHeader, highlightPhrases } from "../../data/content";
import { Card, Section } from "../ui";

export default function Projects() {
  return (
    <Section id="Projects" className="bg-[var(--bg-secondary)]">
      <div id="projects-builds" className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {highlightPhrases(projectsHeader.title, projectsHeader.highlights)}
        </h2>
        <p className="font-serif text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto">
          {highlightPhrases(projectsHeader.subtitle, projectsHeader.highlights)}
        </p>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
}
