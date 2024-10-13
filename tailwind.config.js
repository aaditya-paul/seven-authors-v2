/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navBarBGPrimary: "var(--navBarBGPrimary)",
        fontColorActive: "var(--fontColorActive)",
        bgColor: "var(--bgColor)",
        borderColor: "var(--borderColor)",
        fontPrimary: "var(--font-primary)",
      },
      backgroundImage: {
        // "bgCurly": "url('/public/assets/img/bg.png')",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        sometype: ["var(--font-sometype)", "sans-serif"],
        irish: ["var(--font-irish)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
