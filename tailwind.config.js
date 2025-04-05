const { withUt } = require("uploadthing/tw");

/** @type {import('tailwindcss').Config} */
module.exports = withUt({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // You can keep these if you want, but the withUt wrapper should handle this automatically
    './node_modules/@uploadthing/react/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@uploadthing/react-upload-dropzone/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});