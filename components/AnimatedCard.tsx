'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5 }}
            className={cn(
                'glass-effect p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]',
                className
            )}
        >
            {children}
        </motion.div>
    );
}
