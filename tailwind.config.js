// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Add dark mode support if you plan to use it
  darkMode: ['class'],
  content: [
    // Point to your component files
    './src/**/*.{js,jsx,ts,tsx}',
    // And also to your story files so that Storybook can apply the styles
    './.storybook/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // You can add your custom shadcn/ui theme here
    },
  },
  plugins: [],
};
