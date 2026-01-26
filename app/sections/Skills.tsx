'use client';

import SectionHeader from '@/components/SectionHeader';
import { skillsData } from '@/data/skills';
import SkillBadge from '@/components/SkillBadge';
import AnimatedCard from '@/components/AnimatedCard';
import {
    Code2,
    BrainCircuit,
    Layers,
    Database,
    Network,
    Settings,
    Cloud,
    Wrench
} from 'lucide-react';

const categoryIcons: Record<string, any> = {
    'Programming Languages': Code2,
    'AI / ML Libraries & Tools': BrainCircuit,
    'Frameworks & Platforms': Layers,
    'Databases & Search': Database,
    'Data Integration & ETL': Network,
    'Voice & Real-Time Systems': Settings,
    'Cloud & Infrastructure': Cloud,
    'Development Tools': Wrench,
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
            <SectionHeader
                title="Skills Matrix"
                subtitle="A comprehensive overview of my technical expertise in AI/ML and software engineering."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.map((category, i) => {
                    const Icon = categoryIcons[category.category] || Settings;
                    return (
                        <AnimatedCard key={i} delay={i * 0.05} className="group border-white/5 hover:border-primary/20 relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 text-primary/5 group-hover:text-primary/10 transition-colors">
                                <Icon size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                        {category.category}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill) => (
                                        <SkillBadge key={skill} name={skill} />
                                    ))}
                                </div>
                            </div>
                        </AnimatedCard>
                    );
                })}
            </div>
        </section>
    );
}
