'use client';

import { motion } from 'framer-motion';
import { Terminal, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

import Image from 'next/image';

export default function Hero() {
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = ['AI Engineer', 'ML Engineer', 'Full-Stack Developer'];
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const delay = isDeleting ? 100 : 200;

        const timer = setTimeout(() => {
            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                setText(currentRole.substring(0, isDeleting ? text.length - 1 : text.length + 1));
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex]);

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6">
            {/* Background Effect */}
            <div className="absolute inset-0 neural-bg opacity-30 pointer-events-none" />
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-purple/20 rounded-full blur-[120px] animate-pulse-slow" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-effect text-primary text-sm font-mono mb-6 border border-primary/20">
                            <Terminal size={14} />
                            <span>system.init("HridayaGiri")</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Hi, I&apos;m <span className="text-gradient">Hridaya Giri</span>
                        </h1>

                        <div className="h-12 md:h-16 mb-8">
                            <h2 className="text-2xl md:text-4xl text-gray-400 font-mono">
                                &gt; {text}
                                <span className="animate-pulse bg-primary inline-block w-2 md:w-3 h-6 md:h-10 ml-2" />
                            </h2>
                        </div>

                        <p className="text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed">
                            L1 Software Engineer (AI/ML) at VivaSoft Nepal with experience in developing AI-driven platforms, including voice agents, memory-aware chat systems, and real-time analytics dashboards.
                            Skilled in Python, FastAPI, LLMs, graph databases, and cloud deployment.
                            Passionate about building practical AI/ML solutions, optimizing real-time systems, and contributing to innovative, collaborative projects.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-16">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="px-8 py-4 bg-primary text-background font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
                            >
                                View Projects
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/api/download-cv"
                                className="px-8 py-4 glass-effect border border-white/10 font-bold rounded-xl flex items-center gap-2 hover:bg-white/5 transition-all"
                            >
                                <Download size={20} />
                                Download CV
                            </motion.a>
                        </div>

                        <div className="flex gap-6">
                            {[
                                { icon: Github, href: 'https://github.com/GiriHridaya319' },
                                { icon: Linkedin, href: 'https://linkedin.com/in/hridayagiri/' },
                                { icon: Mail, href: 'mailto:hridayagiri78@gmail.com' }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 + i * 0.1 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-primary transition-colors"
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative w-[500px] h-[500px]">
                            {/* Animated Frames */}
                            <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -rotate-6 animate-pulse" />
                            <div className="absolute inset-0 border-2 border-accent-purple/20 rounded-3xl rotate-3" />

                            <div className="relative w-full h-full rounded-3xl overflow-hidden glass-border p-2">
                                <Image
                                    src="/images/profile.jpg"
                                    alt="Hridaya Giri"
                                    fill
                                    className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                    priority
                                />
                            </div>

                            {/* Floating Tech Badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 glass-effect p-3 rounded-xl border border-primary/20"
                            >
                                <div className="text-primary font-mono text-sm">precision: 0.99</div>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 glass-effect p-3 rounded-xl border border-accent-purple/20"
                            >
                                <div className="text-accent-purple font-mono text-sm">status: learning</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
