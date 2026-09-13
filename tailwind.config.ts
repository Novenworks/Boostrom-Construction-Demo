import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#F8F4EC",
          100: "#EFE6D6",
          200: "#E0D3BE",
        },
        ink: {
          500: "#6E655B",
          700: "#3F372F",
          900: "#1C1712",
        },
        espresso: "#241E18",
        clay: {
          500: "#C46238",
          600: "#A44E2C",
        },
        brass: "#C4A574",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
