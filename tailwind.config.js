/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#065f46', // Emerald 800
                    light: '#047857', // Emerald 700
                },
                secondary: {
                    DEFAULT: '#10b981', // Emerald 500
                    light: '#34d399', // Emerald 400
                },
                accent: '#facc15', // Yellow 400
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
