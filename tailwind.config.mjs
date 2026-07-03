/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        jakarta: ["var(--font-jakarta)"],
        nunito: ["var(--font-nunito)"],
        inter: ["var(--font-inter)"],
        "dm-sans": ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;
