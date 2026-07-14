import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B1F1A",
        surface: "#102A24",
        card: "#132E27",
        card2: "#163831",
        border: "rgba(37,76,63,0.28)",
        borderHover: "rgba(37,76,63,0.55)",
        primary: "#7FB685",
        secondary: "#A7D7A9",
        accent: "#4ADE80",
        success: "#4ADE80",
        dim: "#B8C7BE",
        faint: "#9FB5A8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      borderRadius: {
        xl2: "20px",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(40px,-30px) scale(1.08)" },
        },
        shadowZoom: {
          "0%, 100%": { boxShadow: "0 30px 80px -40px rgba(255,255,255,0.12)" },
          "50%": { boxShadow: "0 40px 100px -20px rgba(255,255,255,0.18)" },
        },
        spin360: {
          to: { transform: "rotate(360deg)" },
        },
        shine: {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "100%": { transform: "translateX(250%) skewX(-20deg)" },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
        floaty: "floaty 5s ease-in-out infinite",
        drift: "drift 22s ease-in-out infinite",
        shadowZoom: "shadowZoom 6s ease-in-out infinite",
        spin360: "spin360 6s linear infinite",
        shine: "shine 1.1s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
