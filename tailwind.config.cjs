/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          900: '#0F172A',
          700: '#1E293B',
          200: '#7477FF',
          400: '#3A3B7F'
        }
      },

      fontFamily: {
        'inter': ['inter', 'sans-serif'],
        'pacifico': ['pacifico', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
