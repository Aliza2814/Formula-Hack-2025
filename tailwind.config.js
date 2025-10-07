/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF1801",
        "background-dark": "#121212",
        "card-dark": "#1A1A1A",
        "text-dark": "#E0E0E0",
        "secondary-dark": "#282828",
        accent: "#FF1801",
        "text-accent": "#FF1801",
        "dark-gradient-start": "#0A0A0A",
        "dark-gradient-end": "#1A1A1A",
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
        lg: "16px",
        xl: "20px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
