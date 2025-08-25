const config = {
  plugins: ["@tailwindcss/postcss"],
};

      content: [
        // Include paths to your template files where Tailwind classes are used
        '.pages/**/*.{ts,tsx}',
        './components/**/*./{ts,tsx}',
        './app/**/*./{ts,tsx}',
        './src/**/*.{js,jsx,ts,mjs,md,json,css,tsx}',
        './public/index.html',
      ],
      theme; {
        extend: {
          // Customize your theme here (colors, fonts, etc.)
        }
      }
      plugins: [
        // Add any Tailwind plugins here
      ]

export default config;
