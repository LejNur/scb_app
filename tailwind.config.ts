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
        chartreuse: "#E4FF59",
        chartreuseDarker: "#C3D94C",
        successGreen: "#70CD70",
        forestGreen: "#2E8B57",
        dangerRed: "#EB6860",
        dangerRedDark: "#DC3545",
        softWhite: "#F5F5F5",
        softSage: "#CBD2B9",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
} satisfies Config;
