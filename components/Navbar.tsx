'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '@/lib/constants';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
            scrolled ? 'glass-effect py-3' : 'bg-transparent'
        )}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    href="#"
                    className="text-xl font-bold text-gradient font-mono"
                >
                    HG.AI
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item, i) => (
                        <motion.a
                            key={item.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            href={item.href}
                            className="text-sm font-medium text-gray-400 hover:text-primary transition-colors"
                        >
                            {item.name}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-effect mt-4 rounded-2xl overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-400 hover:text-primary transition-colors py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
