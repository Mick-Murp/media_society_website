// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
        fontFamily: {
            galderBL: ['"Galderling Titling BL"', 'serif'],
            galderRG: ['"Galderling Titling RG"', 'sans-serif'],
        },
        colors: {
            primary: '#90d1bc',
            secondary: '#00a776',
            text: '#17202a',
            lightbg: '#f9fafb',
        },
        boxShadow: {
            custom: '0 4px 6px rgba(0, 0, 0, 0.1)',
            customHover: '0 8px 15px rgba(0,0,0,0.2)',
        },
        },
    },
}