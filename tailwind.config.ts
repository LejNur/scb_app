import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        smokyBlack: "#100C0B",
        chartreuse: "#E0FC58",
        chartreuseDarker: "#C3D94C",
        successGreen: "#28A745",
        dangerRed: "#DC3545",
        dangerRedDark: "#A12735",
        softWhite: "#F5F5F5",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
} satisfies Config;
