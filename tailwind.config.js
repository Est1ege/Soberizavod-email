/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/*.html'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#4a9eff',
        'brand-dark': '#1a1f2e',
        'brand-dark-secondary': '#2a2f3e',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        'ttoctosquares': ['TTOctosquares', 'Courier New', 'Courier', 'monospace'],
        'blender': ['Blender Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
