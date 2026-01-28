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
                background: '#020617', // Deep Midnight Blue
                foreground: '#F8FAFC', // Slate 100
                primary: {
                    DEFAULT: '#F97316', // Vibrant Orange
                    dark: '#EA580C',    // Deep Orange
                },
                accent: {
                    blue: '#1E40AF',    // Royal Blue
                    orange: '#F97316',
                    black: '#020617',
                    slate: '#F8FAFC',
                },
                glass: 'rgba(255, 255, 255, 0.03)',
                'glass-border': 'rgba(255, 255, 255, 0.08)',
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
