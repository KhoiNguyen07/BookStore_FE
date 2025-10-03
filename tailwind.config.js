/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px", // mobile
          sm: "24px", // ≥ 640px
          md: "32px", // ≥ 768px
          lg: "40px", // ≥ 1024px
          xl: "52px", // ≥ 1280px (desktop lớn)
        },
      },
    },
  },
  plugins: [],
};
