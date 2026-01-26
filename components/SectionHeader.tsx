'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
        <div className="mb-12">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4"
            >
                <span className="text-primary">#</span>
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 max-w-2xl"
                >
                    {subtitle}
                </motion.p>
            )}
            <div className="h-1 w-20 bg-primary mt-2 rounded-full" />
        </div>
    );
}
