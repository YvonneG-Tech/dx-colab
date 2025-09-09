import type { Config } from 'tailwindcss';

const config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{tsx,ts}',
        './app/**/*.{tsx,ts}',
        './layouts/**/*.{tsx,ts}',
        './components/**/*.{tsx,ts}',
        './src/**/*.{tsx,ts}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            }
        }
    },
    plugins: [],
} satisfies Config;
export default config;
