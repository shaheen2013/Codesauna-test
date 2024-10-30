/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        bluish: "10px 20px 31px -10px rgba(0, 0, 255, 0.1)", // Adjust color and opacity as needed
      },
    },
  },
  plugins: [],
};
