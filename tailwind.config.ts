import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "var(--color-brand-teal)",
          "teal-dark": "var(--color-brand-teal-dark)",
          "teal-light": "var(--color-brand-teal-light)",
          orange: "var(--color-brand-orange)",
          "orange-hover": "var(--color-brand-orange-hover)",
          gold: "var(--color-brand-gold)",
          "gold-light": "var(--color-brand-gold-light)",
          bg: "var(--color-bg-light)",
          surface: "var(--color-surface)",
          "surface-accent": "var(--color-surface-accent)",
          text: "var(--color-text-main)",
          muted: "var(--color-text-muted)",
          border: "var(--color-border)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "var(--shadow-card)",
        glow: "var(--shadow-glow)",
        taskbar: "var(--shadow-taskbar)",
      },
      borderRadius: {
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
      },
    },
  },
  plugins: [],
};

export default config;
