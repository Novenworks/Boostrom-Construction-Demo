import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1c1916",
        bark: "#2b241e",
        copper: "#b45a32",
        copperDark: "#8f4223",
        sand: "#e7dccb",
        cream: "#f7f2ea",
        mist: "#f3eee6",
        stone: "#6b635a",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
