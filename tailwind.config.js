/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // Customizations like colors, fonts etc. can go here
      colors: {
        'deep-navy': '#0F172A',
        'slate-dark': '#1E293B',
        'accent-blue': '#3B82F6',
        'light-blue': '#60A5FA',
        'text-light': '#D1D5DB',
        'text-darker': '#9CA3AF',
        'heading-white': '#F9FAFB',
      }
    },
  },
  plugins: [],
}