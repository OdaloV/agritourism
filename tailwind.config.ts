import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2E7D32", // Forest green
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFB74D", // Warm orange
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#8D6E63", // Earth brown
          foreground: "#FFFFFF",
        },
        // ... other colors
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
