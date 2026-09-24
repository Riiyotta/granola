/** @type {import('tailwindcss').Config} */
// The ported markup is styled by Granola's compiled Tailwind v4 sheet (src/styles/granola-main.css).
// Tailwind v3 only scans src/custom so its utilities never collide with those classes.
export default {
  content: ['./src/custom/**/*.{js,jsx}'],
  corePlugins: { preflight: false },
  theme: { extend: {} },
  plugins: [],
}
