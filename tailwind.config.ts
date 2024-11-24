import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "20px",
        center: true,
      },
      dropShadow: {
        custom: "0 2px 0px rgba(0, 0, 0, 0.05)",
      },
      colors: {},
      fontFamily: {
        main: ["var(--font-mont)"],
        secondary: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
export default config;
