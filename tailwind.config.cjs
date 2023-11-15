/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                inv: "0 -10px 15px -3px rgb(67 56 202 / 0.1), 0 -4px 6px -4px rgb(67 56 202 / 0.1)",
            },
            animation: {
                slideLarge: "slideDivLarge 5s ease-in-out infinite alternate",
                slideSmall: "slideDivSmall 5s ease-in-out infinite alternate",
            },
            keyframes: {
                slideDivLarge: {
                    "0%": {
                        transform: "translateX(0%)",
                    },
                    "25%": {
                        transform: "translateX(25vw)",
                    },
                    "50%": {
                        transform: "translateX(50vw)",
                    },
                    "75%": {
                        transform: "translateX(75vw)",
                    },
                    "100%": {
                        transform: "translateX(calc(100vw - 12rem))",
                    },
                },
                slideDivSmall: {
                    "0%": {
                        transform: "translateX(0%)",
                    },
                    "25%": {
                        transform: "translateX(25vw)",
                    },
                    "50%": {
                        transform: "translateX(50vw)",
                    },
                    "75%": {
                        transform: "translateX(75vw)",
                    },
                    "100%": {
                        transform: "translateX(calc(100vw - 4rem))",
                    },
                },
            },
        },
    },
    plugins: [],
};
