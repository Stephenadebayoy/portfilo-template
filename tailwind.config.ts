/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/_shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      ms: "565px",
      xs: "576px",
      sm: "640px",
      md: "768px",
      mds: "800px",
      lmd: "960px",
      mdl: "900px",
      lg: "1024px",
      xlg: "1080px",
      xxlg: "1216px",
      lgs: "950px",
      custom: "1160px",
      xl: "1280px",
      xxl: "1420px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      animation: {
        "border-animate": "border-animate 0.3s ease-in-out",
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        shine: "shine var(--duration, 2s) infinite linear",
        meteor: "meteor 5s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        bounceSlow: "thinkingBounce 2s ease-in-out infinite",
        thinking: "thinking 1s ease-in-out infinite",
      },
      keyframes: {
        thinking: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        thinkingBounce: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(0.95)" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        shine: {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "50%": {
            backgroundPosition: "100% 100%",
          },
          "100%": {
            backgroundPosition: "0% 0%",
          },
        },
        "border-animate": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "#52575C",
        lightBlue: "#5A76D9",
        yellow: "#FFDE4E",
        blacky: "#1E1E28",
        poppy: "#FFC007",
        grey: {
          1: "#8A8A8C",
          2: "#52575C",
          3: "#77838D",
        },
        secondary: {
          DEFAULT: "#00233f",
        },
        primary: {
          DEFAULT: "#512da8",
        },
      },
    },
  },

  plugins: [],
};
export default config;
