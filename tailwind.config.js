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
    },
  },
  plugins: [],
};
