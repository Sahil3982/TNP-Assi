/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: 'rgb(16, 48, 89)',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'logo': "url('../public/Background.png')",
      },
    },
  },
  plugins: [],
}
