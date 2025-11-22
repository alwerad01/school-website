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
                    DEFAULT: '#0f172a', // Slate 900
                    light: '#1e293b', // Slate 800
                },
                secondary: {
                    DEFAULT: '#f59e0b', // Amber 500
                    light: '#fbbf24', // Amber 400
                },
                accent: '#0ea5e9', // Sky 500
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
