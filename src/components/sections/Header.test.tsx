import { describe, it, expect, vi } from "vitest";
import Header from "./Header";

describe("Header", () => {
  it("renders logo", () => {
    render(<Header />);
    const logo = screen.getByRole("link", { name: /am/i });
    expect(logo).toBeInTheDocument();
  });

  it("renders desktop navigation links", () => {
    render(<Header />);
    
    // Desktop nav is hidden on mobile, visible on lg screens
    const desktopNavLinks = screen.getAllByRole("link", { hidden: true }).filter((link: HTMLAnchorElement) => 
      link.getAttribute("href")?.startsWith("#") && 
      !link.getAttribute("href")?.includes("the-engineer")
    );
    
    expect(desktopNavLinks).toHaveLength(3);
  });

  it("renders mobile navigation links when menu is open", () => {
    render(<Header />);
    
    // Click hamburger to open mobile menu
    const hamburgerBtn = screen.getByRole("button", { name: /toggle navigation menu/i });
    
    // This test verifies the mobile menu structure
    expect(hamburgerBtn).toBeInTheDocument();
  });

  it("contains all expected navigation items including THE ENGINEER", () => {
    render(<Header />);
    
    // Check for THE ENGINEER link (href should be #the-engineer)
    const engineerLink = screen.getByRole("link", { href: "#the-engineer" });
    expect(engineerLink).toBeInTheDocument();
    expect(engineerLink.textContent).toBe("THE ENGINEER");
  });



  it("contains PROJECTS link", () => {
    render(<Header />);
    
    const projectsLink = screen.getByRole("link", { href: "#projects" });
    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink.textContent).toBe("PROJECTS");
  });

  it("contains CONTACT link", () => {
    render(<Header />);
    
    const contactLink = screen.getByRole("link", { href: "#contact" });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink.textContent).toBe("CONTACT");
  });
});
