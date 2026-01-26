'use client';

import { Project } from '@/types';
import AnimatedCard from './AnimatedCard';
import { Github, ExternalLink } from 'lucide-react';
import SkillBadge from './SkillBadge';
import Image from 'next/image';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <AnimatedCard delay={index * 0.1} className="flex flex-col h-full overflow-hidden p-0 group">
            <div className="relative w-full h-52 overflow-hidden">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent-purple/10 flex items-center justify-center">
                        <span className="text-primary/40 font-mono">0x_DATA_IMG</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 4).map((tech) => (
                        <SkillBadge key={tech} name={tech} />
                    ))}
                    {project.techStack.length > 4 && (
                        <span className="text-[10px] text-gray-500 font-mono self-center">
                            +{project.techStack.length - 4} more
                        </span>
                    )}
                </div>

                <div className="mt-auto flex gap-4 pt-4 border-t border-white/5">
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-all hover:scale-110"
                            title="View Source"
                        >
                            <Github size={18} />
                        </a>
                    )}
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-all hover:scale-110"
                            title="View Demo"
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>
        </AnimatedCard>
    );
}
