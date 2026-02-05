import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'electric-green': '#00FF7F',
        'coral': '#f96465',
        'sunny-yellow': '#FFD93D',
        'deep-blue': '#4A90E2',
        'sandy-beige': '#F4EAD5',
      },
      fontFamily: {
        sans: ['Fira Code', 'monospace'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
