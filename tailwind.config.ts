import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#222222",
        },
        secondary: {
          "50": "#edfaff",
          "100": "#d6f2ff",
          "200": "#b5eaff",
          "300": "#83dfff",
          "400": "#48cbff",
          "500": "#1eadff",
          "600": "#068fff",
          "700": "#007bff",
          "800": "#085ec5",
          "900": "#0d519b",
          "950": "#0e315d",
        },
      },
      animation: {
        enter: "fadeInUp 300ms ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translate(0, 10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
