'use client';

import SectionHeader from '@/components/SectionHeader';
import { educationData, achievementsData } from '@/data/education';
import AnimatedCard from '@/components/AnimatedCard';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

export default function Education() {
    return (
        <section id="education" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
                {/* Education */}
                <div>
                    <SectionHeader title="Education" />
                    <div className="space-y-6">
                        {educationData.map((edu, i) => (
                            <AnimatedCard key={i} delay={i * 0.1}>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                                        <p className="text-primary text-sm mb-2">{edu.institution}</p>
                                        <div className="text-gray-500 text-xs flex items-center gap-4">
                                            <span>{edu.period}</span>
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div>
                    <SectionHeader title="Achievements" />
                    <div className="space-y-6">
                        {achievementsData.map((award, i) => (
                            <AnimatedCard key={i} delay={i * 0.1} className="border-accent-purple/10">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-accent-purple/10 text-accent-purple">
                                        <Award size={24} />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-bold text-white mb-1">{award.title}</h3>
                                            {award.link && (
                                                <a href={award.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-gray-400 text-sm">{award.description}</p>
                                    </div>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
