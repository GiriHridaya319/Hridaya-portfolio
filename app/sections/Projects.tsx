'use client';

import SectionHeader from '@/components/SectionHeader';
import { projectsData } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
            <SectionHeader
                title="Featured Projects"
                subtitle="A selection of my work in AI, machine learning, and full-stack development."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
            >
                <a
                    href="https://github.com/GiriHridaya319"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors font-mono"
                >
                    View all projects on GitHub →
                </a>
            </motion.div>
        </section>
    );
}
