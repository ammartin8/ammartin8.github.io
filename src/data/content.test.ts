import { describe, it, expect } from 'vitest';
import { aboutSection, summaryCardData, summaryCardLookingFor, highlightPhrases, heroHighlightsStructured } from './content';

describe('About Section Content Data', () => {
  describe('aboutSection object', () => {
    it('should have title "The Human Behind the Data"', () => {
      expect(aboutSection.title).toBe('The Human Behind the Data');
    });

    it('should have subtitle with personal introduction and highlighted phrases', () => {
      expect(aboutSection.subtitle).toContain("I'm Amah");
      expect(aboutSection.subtitle).toContain('14M+ customer records');
      expect(aboutSection.subtitle).toContain('data analytics infrastructure');
      expect(aboutSection.subtitle).toContain('validating quality');
      expect(aboutSection.subtitle).toContain('automating workflows');
    });

    it('should have intro text about work approach', () => {
      expect(aboutSection.intro).toContain('focus on the hard problems');
      expect(aboutSection.intro).toContain('cut ETL time by 81%');
    });

    it('should have mostRecent field with Zoomcamp course details without redundant label', () => {
      expect(aboutSection.mostRecent).not.toContain('MOST RECENT CHAPTER');
      expect(aboutSection.mostRecent).toContain('Intensive Data Engineering Zoomcamp Course');
      expect(aboutSection.mostRecent).toContain('~87GB of data');
    });

    it('should have careerHistory field with previous work experience', () => {
      expect(aboutSection.careerHistory).toContain('Humana');
      expect(aboutSection.careerHistory).toContain('$30B healthcare enterprise');
      expect(aboutSection.careerHistory).toContain('Cabinet for Health and Family Services');
    });

    it('should have education field with Masters in Public Health', () => {
      expect(aboutSection.education).toContain('Masters in Public Health');
      expect(aboutSection.education).toContain('University of Kentucky');
    });
  });

  describe('summaryCardData object', () => {
    it('should have solutions field with exact content', () => {
      expect(summaryCardData.solutions).toBe('Analytics · Data Platforms · ETL Pipelines · Data Products');
    });

    it('should have location field with Ohio', () => {
      expect(summaryCardData.location).toBe('Ohio');
    });

    it('should have career advancement field with certs', () => {
      expect(summaryCardData.careerAdv).toBe('4 Microsoft Certs · 2 DE Certs · 1 AI Cert');
    });

    it('should have mostRecent field with Humana role', () => {
      expect(summaryCardData.mostRecent).toBe('Data Scientist @ Humana');
    });

    it('should have status field OPEN TO BUILD', () => {
      expect(summaryCardData.status).toBe('OPEN TO BUILD');
    });
  });

  describe('summaryCardLookingFor string', () => {
    it('should exist and be a non-empty string', () => {
      expect(typeof summaryCardLookingFor).toBe('string');
      expect(summaryCardLookingFor.length).toBeGreaterThan(0);
    });

    it('should have exact text about teams tackling hard data problems', () => {
      expect(summaryCardLookingFor).toContain('Teams that tackle hard data problems');
      expect(summaryCardLookingFor).toContain('Analytics/Data Engineer roles');
      expect(summaryCardLookingFor).toContain('health, tech, and life science industries');
      expect(summaryCardLookingFor).toContain('Will travel for the right team');
    });
  });
});

describe('highlightPhrases function', () => {
  it('should wrap matching phrases in span with highlight-accent class', () => {
    const text = "I build data analytics infrastructure";
    const phrases = ["data analytics infrastructure"];
    
    const result = highlightPhrases(text, phrases);
    // Check that the string contains the highlighted phrase
    expect(result).toContain('data analytics infrastructure');
    // Verify it's wrapped in a span element (check for className)
    const hasHighlightClass = Array.isArray(result) 
      ? result.some((part: React.ReactNode) => typeof part === 'string' && part.includes('highlight-accent'))
      : typeof result === 'string' && result.includes('highlight-accent');
    expect(hasHighlightClass).toBe(true);
  });

  it('should handle multiple phrases in order', () => {
    const text = "I'm Amah. I build scalable pipelines.";
    const phrases = ["Amah", "scalable pipelines"];
    
    const result = highlightPhrases(text, phrases);
    // Verify both phrases are present
    expect(result).toContain('Amah');
    expect(result).toContain('scalable pipelines');
  });

  it('should handle no matching phrases', () => {
    const text = "This is a completely different sentence";
    const phrases = ["nonexistent phrase"];
    
    const result = highlightPhrases(text, phrases);
    expect(result).toEqual("This is a completely different sentence");
  });

  it('should return React.ReactNode type', () => {
    const text = "Test text";
    const phrases = ["test"];
    
    const result = highlightPhrases(text, phrases);
    expect(typeof result).toBe('object'); // JSX elements are objects
  });
});

describe('phrase matching', () => {
  it('should match exact phrase boundaries', () => {
    const text = "I love data analytics infrastructure and more";
    const phrases = ["data analytics infrastructure"];
    
    const result = highlightPhrases(text, phrases);
    // Verify the full phrase is present
    expect(result).toContain('data analytics infrastructure');
  });

  it('should handle overlapping phrases (match first occurrence)', () => {
    const text = "The data analytics and data science fields";
    const phrases = ["data", "analytics", "science"];
    
    const result = highlightPhrases(text, phrases);
    expect(result).toContain('data');
    expect(result).toContain('analytics');
    expect(result).toContain('science');
  });

  it('should handle phrases at start of text', () => {
    const text = "Data analytics is my focus";
    const phrases = ["Data analytics"];
    
    const result = highlightPhrases(text, phrases);
    expect(result).toContain('Data analytics');
  });

  it('should handle phrases at end of text', () => {
    const text = "I work with ETL pipelines";
    const phrases = ["ETL pipelines"];
    
    const result = highlightPhrases(text, phrases);
    expect(result).toContain('ETL pipelines');
  });
});

describe('edge cases', () => {
  it('should handle empty text string', () => {
    const result = highlightPhrases("", ["phrase"]);
    expect(result).toEqual("");
  });

  it('should handle empty phrases array', () => {
    const result = highlightPhrases("Some text", []);
    expect(result).toEqual("Some text");
  });

  it('should handle both empty', () => {
    const result = highlightPhrases("", []);
    expect(result).toEqual("");
  });

  it('should handle phrase longer than text', () => {
    const result = highlightPhrases("short", ["very long phrase"]);
    expect(result).toEqual("short");
  });

  it('should handle special characters in phrases', () => {
    const text = "I work with ~14M+ customer records";
    const phrases = ["~14M+"];
    
    const result = highlightPhrases(text, phrases);
    expect(result).toContain('~14M+');
  });

  it('should handle punctuation correctly', () => {
    const text = "I care about data quality as much as I care about outcomes.";
    const phrases = ["data quality"];
    
    const result = highlightPhrases(text, phrases);
    expect(result).toContain('data quality');
  });
});

describe('integration with portfolio content', () => {
  it('should highlight About section phrases correctly', () => {
    const subtitle = aboutSection.subtitle;
    const phrases = ["data analytics infrastructure", "validating quality", "automating workflows"];
    
    const result = highlightPhrases(subtitle, phrases);
    
    expect(result).toContain('data analytics infrastructure');
    expect(result).toContain('validating quality');
    expect(result).toContain('automating workflows');
  });

  it('should handle Hero highlights (future migration)', () => {
    // This test would be added when Hero.tsx is migrated
    const text = "I love coding, photography and laser engraving!";
    const phrases = ["I love coding", ", photography", " and laser engraving!"];
    
    const result = highlightPhrases(text, phrases);
    expect(result).toContain('I love coding');
    expect(result).toContain(', photography');
    expect(result).toContain(' and laser engraving!');
  });

  it('should verify heroHighlightsStructured exports correct data', () => {
    expect(heroHighlightsStructured.length).toBe(3);
    expect(heroHighlightsStructured[0].text).toBe("I love coding");
    expect(heroHighlightsStructured[0].highlight).toBe(true);
    expect(heroHighlightsStructured[1].text).toBe(", photography");
    expect(heroHighlightsStructured[1].highlight).toBe(false);
    expect(heroHighlightsStructured[2].text).toBe(" and laser engraving!");
    expect(heroHighlightsStructured[2].highlight).toBe(true);
  });
});
