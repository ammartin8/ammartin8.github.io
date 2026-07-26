// Type declarations for testing-library matchers
declare module '@testing-library/jest-dom' {
  export interface Matchers<R> {
    toBeInTheDocument(): R;
    toHaveClass(className: string): R;
    toHaveStyle(style: string): R;
    toHaveAttribute(name: string, value?: string): R;
  }
}

export {};
