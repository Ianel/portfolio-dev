/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                inv: "0 -10px 15px -3px rgb(67 56 202 / 0.1), 0 -4px 6px -4px rgb(67 56 202 / 0.1)",
            },
        },
    },
    plugins: [],
};
