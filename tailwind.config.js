/** @type {import('tailwindcss').Config} */
// module.exports = {
//   presets: [
//     require('tailwindcss-preset-email'),
//   ],
//   content: [
//     './components/**/*.html',
//     './emails/**/*.html',
//     './layouts/**/*.html',
//   ],
// }
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
        'ttoctosquares': ['TTOctosquares', 'Courier New', 'Courier', 'monospace'],
        'blender': ['Blender Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      screens: {
        sm: {max: '700px'},
        screen: {raw: 'screen'}, // Добавьте эту строку
      }
    },
  },
  plugins: [],
}
