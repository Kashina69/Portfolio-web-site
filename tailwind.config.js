/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    safelist: ['animate-[fade-in-up_2s_ease-in-out]', 'animate-[zoom-in_1s_ease-in-out]']
  },
  plugins: [],
}