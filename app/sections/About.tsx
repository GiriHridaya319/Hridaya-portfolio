'use client';

import SectionHeader from '@/components/SectionHeader';
import AnimatedCard from '@/components/AnimatedCard';
import { Brain, Cpu, Rocket, Users } from 'lucide-react';
import Image from 'next/image';

const strengths = [
    {
        icon: Brain,
        title: 'AI/ML Engineering',
        desc: 'Specializing in LLMs, RAG, and memory-management systems for intelligent agents.'
    },
    {
        icon: Cpu,
        title: 'Backend Engineering',
        desc: 'Building robust, scalable backends with Python, Go, and FastAPI, focusing on performance.'
    },
    {
        icon: Rocket,
        title: 'Scalable Systems',
        desc: 'Deploying production-ready AI platforms on AWS/GCP with real-time monitoring.'
    },
    {
        icon: Users,
        title: 'Collaborative Growth',
        desc: 'Passionate about simplifying complex ideas and growing in fast-paced AI environments.'
    }
];

export default function About() {
    return (
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
            <SectionHeader
                title="About Me"
                subtitle="L1 Software Engineer (Backend & AI/ML) at VivaSoft Nepal, specializing in building scalable AI-driven backends."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-1 relative group">
                    <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl">
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
                        <Image
                            src="/images/profile.jpg"
                            alt="Hridaya Giri Professional"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
                </div>

                <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-6 text-foreground/60 leading-relaxed text-lg">
                        <p>
                            I am a Software Engineer with a deep focus on <span className="text-foreground font-semibold">Backend Development</span> and AI/ML systems.
                            Currently, I work at Vivasoft Nepal, where I specialize in building the backbone of AI-driven applications, including voice agents, conversational systems, and high-performance analytics dashboards.
                            I am passionate about designing architectures that are not only intelligent but also scalable and robust.
                        </p>
                        <p>
                            With hands-on experience in STT/TTS models, LLM-based applications, and FastAPI, I bridge the gap between AI research and production-ready backend services.
                            I leverage graph databases like Neo4j, vector stores like Qdrant, and cloud platforms like AWS/GCP to build memory-aware, real-time AI agents.
                            My goal is to evolve into a proficient Backend Architect, creating systems that power the next generation of AI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {strengths.map((s, i) => (
                            <AnimatedCard key={i} delay={i * 0.1}>
                                <s.icon className="text-primary mb-4" size={28} />
                                <h4 className="text-foreground font-bold mb-2">{s.title}</h4>
                                <p className="text-foreground/40 text-sm">{s.desc}</p>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
