/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3b82f6", // Example premium blue, can be customized
                secondary: "#10b981", // Example premium emerald
                dark: "#0f172a",      // Slate 900
                light: "#f8fafc",     // Slate 50
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
