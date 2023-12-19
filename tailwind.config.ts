import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                playing: {
                    '0%': { height: '4px' },
                    '50%': { height: '16px' },
                    '100%': { height: '4px' },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
export default config;
