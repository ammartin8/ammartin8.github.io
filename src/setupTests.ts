import '@testing-library/jest-dom';
import { vi, beforeEach } from 'vitest';

// Extend DOM types for testing-library matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveClass(className: string): R;
      toHaveStyle(style: string): R;
      toBeInTheDocument(): R;
      toHaveAttribute(name: string, value?: string): R;
    }
  }
}

// Extend window for matchMedia mock
declare global {
  interface Window {
    matchMedia(query: string): MediaQueryList;
  }
}

// Setup proper mock implementation for matchMedia
beforeEach(() => {
  vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
  }));
});

export {};
