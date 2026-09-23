import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#08090A",
          soft: "#0D0E10",
        },
        card: {
          DEFAULT: "#111315",
          soft: "#151719",
        },
        ink: {
          DEFAULT: "#F5F5F5",
          muted: "#9CA3AF",
        },
        accent: {
          blue: "#5B8CFF",
          cyan: "#67E8F9",
          indigo: "#818CF8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
      },
      keyframes: {
        "dash": {
          from: { strokeDashoffset: "1" },
          to: { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
