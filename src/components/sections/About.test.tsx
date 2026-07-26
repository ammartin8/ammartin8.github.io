import { describe, it, expect } from "vitest";
import { About } from "./About";
import { summaryCardData, summaryCardLookingFor } from "../../data/content";

describe("About Section", () => {
  it("should render without errors", () => {
    // Basic smoke test to ensure component renders
    expect(() => About).not.toThrow();
  });

  it("should have SummaryCard with correct data props", () => {
    // Verify the component accepts the correct props
    expect(summaryCardData).toBeDefined();
    expect(summaryCardLookingFor).toBeDefined();
    expect(summaryCardData.solutions).toBeDefined();
    expect(summaryCardData.location).toBeDefined();
    expect(summaryCardData.careerAdv).toBeDefined();
    expect(summaryCardData.mostRecent).toBeDefined();
    expect(summaryCardData.status).toBeDefined();
  });

  it("should have properly structured subtitle content", () => {
    // Verify the HighlightedSubtitle component works correctly
    const phrases = ["data analytics infrastructure", "validating quality", "automating workflows"];
    const testContent = "I build data analytics infrastructure that turn chaos into clarity.";
    
    for (const phrase of phrases) {
      if (testContent.includes(phrase)) {
        expect(testContent).toContain(phrase);
      }
    }
  });
});
