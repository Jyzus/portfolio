import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        principal: {
          100: "#fdbbc8",
          200: "#fb8fa4",
          300: "#f76280",
          400: "#f24166",
          500: "#ed254d",
          600: "#dd1f4c",
          700: "#c81849",
          800: "#b41047",
          900: "#910042",
        },
        complementario: {
          100: "#98f4dc",
          200: "#25edc5",
          300: "#00e1ad",
          400: "#00d49b",
          500: "#00c88b",
          600: "#00b87d",
          700: "#00a66b",
          800: "#00955d",
          900: "#00773d",
        },
        analogo: {
          100: "#fab1dd",
          200: "#f578c7",
          300: "#ed25b1",
          400: "#e600a1",
          500: "#d60091",
        },
        negativo: "#070600",
        positivo: "#f7f7ff",
      },
      fontFamily: {
        sans: ["Montserrat", "san-serif"],
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        logo: "url('/img/logo-nobg.png')",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
