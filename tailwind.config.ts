/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#0B0F14',
                foreground: '#FFFFFF',
                primary: {
                    DEFAULT: '#00F0FF', // Neon Blue/Cyan
                    dark: '#00B8C4',
                },
                accent: {
                    purple: '#A855F7',
                    green: '#22C55E',
                },
                glass: 'rgba(255, 255, 255, 0.03)',
                'glass-border': 'rgba(255, 255, 255, 0.1)',
            },
            fontFamily: {
                sans: ['Inter', 'var(--font-inter)', 'sans-serif'],
                mono: ['JetBrains Mono', 'var(--font-mono)', 'monospace'],
            },
            backgroundImage: {
                'neural-grid': "url('/images/grid.svg')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
    plugins: [],
}
