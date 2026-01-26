'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
    name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
    return (
        <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1 rounded-full text-xs font-mono glass-effect text-primary border border-primary/20"
        >
            {name}
        </motion.span>
    );
}
