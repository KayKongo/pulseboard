/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand colors from Figma
        primary: {
          DEFAULT: "#1A3C3F",
          900: "#0B191A", // Dark mode background
        },
        secondary: {
          DEFAULT: "#3ABDB7",
          200: "#A4E1DE", // Dark mode nav highlight
        },
        alt: "#E5C3C0",

        // Status colors (extracted from your Figma)
        status: {
          completed: "#10B981",
          blocked: "#EF4444",
          "in-progress": "#3B82F6",
          "to-do": "#6B7280",
        },

        // Base colors
        white: "#FFFFFF",
        black: "#000000",
        blue: "#175CD3",

        // Neutral
        "light-gray": "#E9EAEB",

        // Semantic color variables (for theming)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1" }], // 12px
        sm: ["0.875rem", { lineHeight: "1" }], // 14px
        base: ["1rem", { lineHeight: "1.3" }], // 16px
        lg: ["1.125rem", { lineHeight: "1" }], // 18px
        xl: ["1.25rem", { lineHeight: "1" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "1" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "1" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "1" }], // 36px
        "5xl": ["3rem", { lineHeight: "1" }], // 48px
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};
