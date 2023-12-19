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
            colors: {
                dark: {
                    '50': '#dbdbdb',
                    '100': '#cfcfcf',
                    '200': '#b8b8b8',
                    '300': '#969696',
                    '400': '#6e6e6e',
                    '500': '#545454',
                    '600': '#424242',
                    '700': '#363636',
                    '800': '#2b2b2b',
                    '900': '#1a1a1a',
                    '950': '#0d0d0d',
                },
            },
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
