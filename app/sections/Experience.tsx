'use client';

import SectionHeader from '@/components/SectionHeader';
import { experienceData } from '@/data/experience';
import AnimatedCard from '@/components/AnimatedCard';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
            <SectionHeader
                title="Experience"
                subtitle="My professional journey in software engineering and AI/ML research."
            />

            <div className="relative border-l-2 border-primary/20 ml-4 md:ml-8 pl-8 space-y-12">
                {experienceData.map((exp, i) => (
                    <div key={exp.id} className="relative">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[41px] top-0 w-5 h-5 bg-background border-2 border-primary rounded-full z-10" />

                        <AnimatedCard delay={i * 0.1}>
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <Briefcase size={20} className="text-primary" />
                                        {exp.role}
                                    </h3>
                                    <div className="text-primary font-medium mt-1">{exp.company}</div>
                                </div>
                                <div className="flex flex-col gap-2 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        {exp.period}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} />
                                        {exp.location}
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {exp.description.map((item, j) => (
                                    <li key={j} className="text-gray-400 text-sm flex gap-3">
                                        <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </AnimatedCard>
                    </div>
                ))}
            </div>
        </section>
    );
}
