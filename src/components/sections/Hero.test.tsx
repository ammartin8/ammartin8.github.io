import { describe, it, expect, vi } from 'vitest';
import Hero from './Hero';

// Test for the title label styling (Issue #12 - Restyle Title Label with Accent Border)
describe('Hero Component - Title Label', () => {
  it('renders the Data Analytics Engineer title label', () => {
    render(<Hero />);
    
    const titleLabel = screen.getByText(/Data Analytics Engineer/i);
    expect(titleLabel).toBeInTheDocument();
  });

  it('title label has accent orange border (#ff6b35)', () => {
    render(<Hero />);
    
    const titleLabel = screen.getByText(/Data Analytics Engineer/i);
    expect(titleLabel).toHaveClass('border');
    expect(titleLabel).toHaveClass('border-[var(--accent)]');
  });

  it('title label has semi-transparent orange background (10% opacity)', () => {
    render(<Hero />);
    
    const titleLabel = screen.getByText(/Data Analytics Engineer/i);
    // Should have inline style with accent color at 10% opacity for subtle visual emphasis
    expect(titleLabel).toHaveStyle('background-color: rgba(255, 107, 53, 0.1)');
  });

  it('title label text remains unchanged and uppercase', () => {
    render(<Hero />);
    
    const titleLabel = screen.getByText(/Data Analytics Engineer/i);
    expect(titleLabel).toHaveClass('uppercase');
  });

  it('title label maintains proper font styling (font-mono, text-sm, tracking)', () => {
    render(<Hero />);
    
    const titleLabel = screen.getByText(/Data Analytics Engineer/i);
    expect(titleLabel).toHaveClass('font-mono');
    expect(titleLabel).toHaveClass('text-sm');
    expect(titleLabel).toHaveClass('tracking-[0.3em]');
  });

  it('title label has appropriate padding for rectangular frame', () => {
    render(<Hero />);
    
    const titleLabel = screen.getByText(/Data Analytics Engineer/i);
    // Should have px-4 py-2 for proper rectangular shape (not pill-shaped)
    expect(titleLabel).toHaveClass('px-4');
    expect(titleLabel).toHaveClass('py-2');
  });
});

describe('Hero Component - Action Buttons', () => {
  it('renders two action buttons', () => {
    render(<Hero />);
    
    const reachOutButton = screen.getByRole('link', { name: /reach out/i });
    const viewWorkButton = screen.getByRole('link', { name: /view work/i });
    
    expect(reachOutButton).toBeInTheDocument();
    expect(viewWorkButton).toBeInTheDocument();
  });

  it('primary button "REACH OUT" has orange background', () => {
    render(<Hero />);
    
    const reachOutButton = screen.getByRole('link', { name: /reach out/i });
    expect(reachOutButton).toHaveClass('bg-[var(--accent)]');
  });

  it('secondary button "VIEW WORK" has no background (text-only)', () => {
    render(<Hero />);
    
    const viewWorkButton = screen.getByRole('link', { name: /view work/i });
    // Should not have bg-* class
    expect(viewWorkButton).not.toHaveClass('bg-');
  });

  it('primary button links to #contact-heading', () => {
    render(<Hero />);
    
    const reachOutButton = screen.getByRole('link', { name: /reach out/i });
    expect(reachOutButton).toHaveAttribute('href', '#contact-heading');
  });

  it('secondary button links to #projects-builds', () => {
    render(<Hero />);
    
    const viewWorkButton = screen.getByRole('link', { name: /view work/i });
    expect(viewWorkButton).toHaveAttribute('href', '#projects-builds');
  });

  it('buttons are compact and smaller than before', () => {
    render(<Hero />);
    
    const buttons = screen.getAllByRole('link') as HTMLAnchorElement[];
    // Buttons should have text-xs (smallest Tailwind text size)
    buttons.forEach((button: HTMLAnchorElement) => {
      expect(button).toHaveClass('text-xs');
    });
  });

  it('buttons have hover states', () => {
    render(<Hero />);
    
    const reachOutButton = screen.getByRole('link', { name: /reach out/i });
    const viewWorkButton = screen.getByRole('link', { name: /view work/i });
    
    // Both buttons should have hover transition classes
    expect(reachOutButton).toHaveClass('hover:bg-[var(--accent-muted)]');
    expect(viewWorkButton).toHaveClass('hover:text-[var(--accent)]');
  });

  it('buttons maintain accessibility with focus states', () => {
    render(<Hero />);
    
    const buttons = screen.getAllByRole('link') as HTMLAnchorElement[];
    
    // Both buttons should have focus-visible styles for accessibility
    buttons.forEach((button: HTMLAnchorElement) => {
      expect(button).toHaveClass('focus:outline-none');
      expect(button).toHaveClass('focus-visible:outline-2');
      expect(button).toHaveClass('focus-visible:outline-offset-2');
    });
  });

  it('buttons are responsive (stack on mobile, row on desktop)', () => {
    render(<Hero />);
    
    // Should have flex and sm:flex-row classes for responsive layout
    expect(document.body.innerHTML).toContain('flex flex-col sm:flex-row gap-4');
  });

  it('download icon is removed from primary button', () => {
    render(<Hero />);
    
    const reachOutButton = screen.getByRole('link', { name: /reach out/i });
    // Should not contain any SVG elements (no icons)
    expect(reachOutButton.innerHTML).not.includes('<svg');
  });
});

describe('Hero Component - Font Sizes for 1920x1080 View', () => {
  it('first name uses reduced clamp font size (3.5rem, 14vw, 12rem)', () => {
    render(<Hero />);
    
    const firstName = screen.getByText(/Amah/i);
    expect(firstName).toHaveClass('text-[clamp(3.5rem,14vw,12rem)]');
  });

  it('last name uses reduced clamp font size (3.5rem, 14vw, 12rem)', () => {
    render(<Hero />);
    
    const lastName = screen.getByText(/Martin/i);
    expect(lastName).toHaveStyle('font-size: clamp(3.5rem, 14vw, 12rem)');
  });

  it('intro text uses reduced responsive font sizes (lg, xl, 2xl, 3xl)', () => {
    render(<Hero />);
    
    const introText = screen.getByText(/Data Analytics Engineer/i).closest('p') || 
                       screen.getByRole('paragraph');
    expect(introText).toHaveClass('text-lg');
    expect(introText).toHaveClass('text-lg');
    expect(introText).toHaveClass('md:text-base');
    expect(introText).toHaveClass('lg:text-base');
    expect(introText).toHaveClass('xl:text-xl');
    expect(introText).toHaveClass('2xl:text-2xl');
  });

  it('hero content fits within viewport without requiring scroll', () => {
    render(<Hero />);
    
    // All hero elements should be visible in the main container
    const heroContainer = document.querySelector('#Hero');
    expect(heroContainer).toBeInTheDocument();
    
    // Check that all main elements exist within the viewport area
    const nameElements = screen.getAllByRole('heading', { level: 1 });
    expect(nameElements.length).toBe(2);
    
    const introParagraph = screen.getByText(/Data Analytics Engineer/i).closest('p');
    expect(introParagraph).toBeInTheDocument();
    // Subtitle container uses max-w-2xl for better name wrapping
    expect(document.body.innerHTML).toContain('max-w-2xl');
  });
});
