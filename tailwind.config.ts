import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", lg: "3rem" },
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#081526",
          900: "#050E1B",
          800: "#081526",
          700: "#0B1B30",
          600: "#102544",
          500: "#1A2F4F",
        },
        gold: {
          DEFAULT: "#C9A961",
          50:  "#FBF6E9",
          100: "#F3E7C2",
          200: "#E5C988",
          300: "#D6B673",
          400: "#C9A961",
          500: "#B5944C",
          600: "#8E7136",
          700: "#6A5325",
        },
        ivory: "#F5F1EA",
        bone:  "#FAF7F1",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        sans:  ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widestx: "0.32em",
      },
      boxShadow: {
        gold: "0 10px 40px -12px rgba(201,169,97,0.45)",
        ink:  "0 24px 60px -20px rgba(8,21,38,0.55)",
      },
      backgroundImage: {
        "ink-gradient": "linear-gradient(135deg,#050E1B 0%,#081526 45%,#102544 100%)",
        "gold-gradient": "linear-gradient(135deg,#E5C988 0%,#C9A961 50%,#8E7136 100%)",
        "noise": "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      animation: {
        "fade-up":   "fadeUp 0.9s ease-out both",
        "shimmer":   "shimmer 2.4s linear infinite",
        "float":     "float 6s ease-in-out infinite",
        "marquee":   "marquee 40s linear infinite",
      },
      keyframes: {
        fadeUp:  { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        float:   { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
    },
  },
  plugins: [],
};
export default config;
