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
        bg: "#FAFAFA", // Very light grey/off-white background
        surface: "#FFFFFF",
        dark: "#111827", // Very dark navy/charcoal
        "dark-muted": "#1F2937",
        accent: "#D4F844", // The bright lime green from screenshot
        "accent-hover": "#C0E625",
        "gray-50": "#F9FAFB",
        "gray-100": "#F3F4F6",
        "gray-200": "#E5E7EB",
        "gray-300": "#D1D5DB",
        "gray-400": "#9CA3AF",
        "gray-500": "#6B7280",
        white: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(56px, 7vw, 72px)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(40px, 5vw, 56px)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(32px, 4vw, 40px)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-lg": ["clamp(24px, 3vw, 32px)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-md": ["clamp(20px, 2.5vw, 24px)", { lineHeight: "1.3" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
        "body": ["16px", { lineHeight: "1.6" }],
        "body-sm": ["14px", { lineHeight: "1.6" }],
        "label": ["12px", { lineHeight: "1.5", letterSpacing: "0.05em" }],
        "nav": ["15px", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "112px",
        "section-mobile": "64px",
        "gutter": "24px",
      },
      borderRadius: {
        "card": "32px",
        "card-lg": "40px",
        "button": "100px",
      },
      boxShadow: {
        "card": "0 12px 40px -12px rgba(17, 24, 39, 0.05)",
        "card-hover": "0 20px 48px -12px rgba(17, 24, 39, 0.1)",
        "nav": "0 4px 24px rgba(17, 24, 39, 0.03)",
        "floating": "0 24px 64px -16px rgba(17, 24, 39, 0.08)",
      },
      transitionDuration: {
        "fast": "150ms",
        "normal": "300ms",
        "slow": "500ms",
      },
      transitionTimingFunction: {
        "ease-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "ease-in-out": "cubic-bezier(0.8, 0, 0.2, 1)", // Sleeker transition
      },
      maxWidth: {
        "content": "1280px",
      },
    },
  },
  plugins: [],
};
export default config;