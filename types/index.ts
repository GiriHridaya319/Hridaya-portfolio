export interface Experience {
    id: string;
    company: string;
    location: string;
    role: string;
    period: string;
    description: string[];
    logo?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    githubLink?: string;
    liveLink?: string;
    image?: string;
}

export interface Skill {
    category: string;
    items: string[];
}

export interface Education {
    degree: string;
    institution: string;
    location: string;
    period: string;
}

export interface Achievement {
    title: string;
    description: string;
    link?: string;
}

export interface NavItem {
    name: string;
    href: string;
}
