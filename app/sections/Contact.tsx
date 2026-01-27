'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import AnimatedCard from '@/components/AnimatedCard';
import { Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setStatus('success');
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
            <SectionHeader
                title="Get In Touch"
                subtitle="I'm always open to discussing new AI/ML projects, opportunities, or collaborations."
            />

            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                        <p className="text-gray-400">
                            Feel free to reach out through any of these channels.
                            I usually respond within 24 hours.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { icon: Mail, label: 'Email', value: 'hridayagiri78@gmail.com', href: 'mailto:hridayagiri78@gmail.com' },
                            { icon: Phone, label: 'Phone', value: '+977-9866072017', href: 'tel:+9779866072017' },
                            { icon: MapPin, label: 'Location', value: 'Kalanki, Kathmandu, Nepal', href: '#' }
                        ].map((item, i) => (
                            <a
                                href={item.href}
                                key={i}
                                className="flex items-center gap-4 p-4 rounded-xl glass-effect border-white/5 hover:border-primary/20 transition-all group"
                            >
                                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-all">
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                                    <div className="text-white font-medium">{item.value}</div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="p-6 rounded-2xl glass-effect border-primary/20 bg-primary/5">
                        <h4 className="text-primary font-bold mb-2 flex items-center gap-2">
                            <CheckCircle2 size={18} />
                            Open for Opportunities
                        </h4>
                        <p className="text-sm text-gray-400">
                            Currently looking for AI/ML Software Engineer roles or research collaborations.
                        </p>
                    </div>
                </div>

                <AnimatedCard>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 font-mono">NAME</label>
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 font-mono">EMAIL</label>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-mono">SUBJECT</label>
                            <input
                                required
                                name="subject"
                                type="text"
                                placeholder="AI Project Collaboration"
                                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-mono">MESSAGE</label>
                            <textarea
                                required
                                name="message"
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                            />
                        </div>

                        <button
                            disabled={status === 'loading'}
                            type="submit"
                            className="w-full py-4 bg-primary text-background font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {status === 'loading' ? (
                                <div className="w-6 h-6 border-4 border-background border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    <Send size={20} />
                                    Send Message
                                </>
                            )}
                        </button>

                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl flex items-center gap-3"
                                >
                                    <CheckCircle2 size={20} />
                                    Message sent successfully!
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl flex items-center gap-3"
                                >
                                    <AlertCircle size={20} />
                                    Failed to send message. Please try again.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </AnimatedCard>
            </div>
        </section>
    );
}
