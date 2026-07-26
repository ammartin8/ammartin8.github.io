/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: '#1a1410',
        cream: '#f5f0e8',
        caramel: '#c4956a',
        burnt: '#8b4513',
        electric: '#ff6b35',
        sage: '#4a5d4a',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        display: '700',
      },
    },
  },
  plugins: [],
}
