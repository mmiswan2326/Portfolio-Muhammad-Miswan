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
        bg: "#0b0b0f",
        surface: "#13151a",
        card: "#15171d",
        card2: "#1a1c23",
        border: "rgba(255,255,255,0.08)",
        borderHover: "rgba(255,138,61,0.4)",
        primary: "#ff6b00",
        secondary: "#ff8a3d",
        accent: "#ffa94d",
        success: "#22c55e",
        dim: "#b8bdc7",
        faint: "#7a7f89",
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
        spin360: "spin360 6s linear infinite",
        shine: "shine 1.1s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
