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
        successGreen: "#28A745",
        errorRed: "#DC3545",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
} satisfies Config;
