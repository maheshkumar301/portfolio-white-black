/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "background": "rgb(var(--background) / <alpha-value>)",
        "foreground": "rgb(var(--foreground) / <alpha-value>)",
        "surface": "rgb(var(--surface) / <alpha-value>)",
        "surface-highlight": "rgb(var(--surface-highlight) / <alpha-value>)",
        "border": "rgb(var(--border) / <alpha-value>)",
        "muted": "rgb(var(--muted) / <alpha-value>)",
        "inverse": "rgb(var(--inverse) / <alpha-value>)",
        "inverse-foreground": "rgb(var(--inverse-foreground) / <alpha-value>)"
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
        "display": ["Oswald", "sans-serif"]
      },
      spacing: {
        "margin-desktop": "80px",
        "margin-mobile": "24px",
        "section-gap": "120px",
        "gutter": "24px"
      },
      fontSize: {
        "mega": ["8rem", { lineHeight: "1", letterSpacing: "-0.05em", fontWeight: "800" }],
        "title": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" }]
      }
    },
  },
  plugins: [],
}
