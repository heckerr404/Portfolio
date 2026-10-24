/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial Paper & Ink Palette
        'paper': '#F2F0EA',
        'paper-light': '#FAF9F5',
        'paper-dark': '#E6E4DC',
        'ink': '#111111',
        'ink-soft': '#1C1C1C',
        'ink-card': '#161616',
        'signal-red': '#FF1738',
        'red-deep': '#D60D2B',
        'neutral-grey': '#C9C9C4',
        'grey-muted': '#72726E',
        'tape': 'rgba(242, 232, 210, 0.85)',

        // Backwards compatibility mappings
        'bg-primary': '#F2F0EA',
        'bg-secondary': '#FAF9F5',
        'bg-tertiary': '#E6E4DC',
        'text-primary': '#111111',
        'text-secondary': '#4A4A46',
        'text-muted': '#72726E',
        'accent': '#FF1738',
        'accent-dim': '#D60D2B',
        'border': '#D1CFC9',
        'border-hover': '#111111',
      },
      fontFamily: {
        'display': ['"Anton"', '"Space Grotesk"', 'sans-serif'],
        'archivo': ['"Archivo Black"', '"Space Grotesk"', 'sans-serif'],
        'grotesk': ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        'body': ['"Inter"', 'system-ui', 'sans-serif'],
        'hand': ['"Caveat"', 'cursive'],
        'mono': ['"SF Mono"', 'Consolas', 'Menlo', 'monospace'],
      },
      fontSize: {
        'giant': ['clamp(3.5rem, 11vw, 12rem)', { lineHeight: '0.88', letterSpacing: '-0.02em' }],
        'hero': ['clamp(3rem, 9vw, 9.5rem)', { lineHeight: '0.90', letterSpacing: '-0.02em' }],
        'section': ['clamp(2.5rem, 6vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'project': ['clamp(1.75rem, 3.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section': 'clamp(4rem, 9vw, 9rem)',
      },
      boxShadow: {
        'paper': '0 4px 20px -2px rgba(17, 17, 17, 0.08), 0 2px 6px -1px rgba(17, 17, 17, 0.04)',
        'paper-lg': '0 20px 35px -5px rgba(17, 17, 17, 0.12), 0 10px 15px -5px rgba(17, 17, 17, 0.06)',
        'stamp': 'inset 0 0 0 2px #FF1738',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'smooth-out': 'cubic-bezier(0.0, 0.0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
