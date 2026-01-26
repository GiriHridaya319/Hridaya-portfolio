import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
    title: 'Hridaya Giri | AI/ML Software Engineer',
    description: 'Portfolio of Hridaya Giri - L1 Software Engineer (AI/ML) specializing in LLMs, RAG, and AI agents.',
    keywords: ['AI Engineer', 'ML Engineer', 'Software Engineer', 'Hridaya Giri', 'Python', 'FastAPI', 'Next.js'],
    openGraph: {
        title: 'Hridaya Giri | AI/ML Software Engineer',
        description: 'Portfolio of Hridaya Giri - Specializing in production AI systems.',
        type: 'website',
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${mono.variable} font-sans bg-background text-white antialiased`}>
                <Navbar />
                {children}
                <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Hridaya Giri.</p>
                </footer>
            </body>
        </html>
    );
}
