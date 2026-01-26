import { Project } from '../types';

export const projectsData: Project[] = [
    {
        id: 'vivadai',
        title: 'VivaDai — Memory Management Chat System & Voice Agent',
        description: 'Designed and developed a memory-management AI chat system with a real-time voice agent. Integrated RAG + Neo4j for knowledge retrieval and Qdrant for NoSQL storage to maintain context and team updates.',
        techStack: ['Python', 'FastAPI', 'FastRTC', 'Gemini API', 'Neo4j', 'Qdrant', 'AWS'],
        image: '/images/projects/vivadai.png'
    },
    {
        id: 'novara',
        title: 'Novara Interview Engine — Core R&D',
        description: 'Built an AI-driven interview engine combining LLM + graph + database for candidate assessment. Designed adaptive, cost-efficient interviews with dynamic flows based on candidate performance.',
        techStack: ['Python', 'NetworkX', 'Gemini API'],
        image: '/images/projects/novara.png'
    },
    {
        id: 'aakashwani',
        title: 'Aakashwani & Dogmatix — AI voice agent Platform',
        description: 'Developed an AI-powered voice calling platform for inbound/outbound calls. Built middleware connecting Asterisk PBX with Gemini live API for real-time voice interactions.',
        techStack: ['Python', 'FastAPI', 'PJSIP', 'Asterisk', 'Redis', 'RabbitMQ', 'WebSockets', 'Gemini API'],
        image: '/images/projects/aakashwani.png'
    },
    {
        id: 'kothon',
        title: 'Kothon Analytics Dashboard',
        description: 'Cloud-hosted AI voice agent and analytics platform with real-time monitoring and observability using Prometheus and Grafana. Built features to track churn risk and customer engagement.',
        techStack: ['Golang', 'Python', 'Gemini API', 'Prometheus', 'Grafana', 'GCP'],
        image: '/images/projects/kothon.png'
    },
    {
        id: 'bookmentor',
        title: 'BookMentorAI - RAG based chatbot',
        description: 'Developed a hybrid retriever combining BM25 and vector embeddings with cross-encoder reranking. Integrated LLaMA 3.2 for retrieval-augmented generation.',
        techStack: ['Python', 'Transformers', 'BM25', 'Vector Search', 'LLaMA 3.2', 'Ollama API'],
        githubLink: 'https://github.com/GiriHridaya319/BookMentorAI-RAG-CHATBOT.git',
        image: '/images/projects/bookmentor.png'
    },
    {
        id: 'garbage-classification',
        title: 'Multi-Class Garbage Classification',
        description: 'Fine-tuned ResNet50 model to classify images into 12 garbage categories. Built a FastAPI backend and deployed using Docker.',
        techStack: ['Python', 'PyTorch', 'OpenCV', 'ResNet50', 'FastAPI', 'Docker'],
        githubLink: 'https://github.com/GiriHridaya319/Multi-Class-Garbage-Classification-using-Finetuned-ResNet50.git',
        image: '/images/projects/garbage.png'
    },
    {
        id: 'knowyourhair',
        title: 'KnowYourHair – Hair Loss Risk Prediction',
        description: 'AI-powered web app predicting hair loss risk using Random Forest and hybrid product recommendation system.',
        techStack: ['Python', 'Django', 'Scikit-learn', 'Pandas', 'NumPy'],
        githubLink: 'https://github.com/GiriHridaya319/KnowYourHair.git',
        image: '/images/projects/hair.png'
    },
    {
        id: 'taxi-analytics',
        title: 'Taxi Trip Data Analytics',
        description: 'End-to-end ETL pipeline using SSIS to clean and transform taxi trip data. Modeled data in star schema and developed SSAS cubes.',
        techStack: ['SSIS', 'SSMS', 'SSAS', 'Power BI', 'SQL'],
        image: '/images/projects/taxi.png'
    },
    {
        id: 'yourcricmentor',
        title: 'YourCricMentor - Cricket Evaluation',
        description: 'Web application to manage cricket test details and player results. Facilitates player registration and coach evaluations.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Java EE', 'MySQL'],
        githubLink: 'https://github.com/GiriHridaya319/Web-application-YourCricMentor-JEE-Framework.git',
        image: '/images/projects/cricket.png'
    },
    {
        id: 'nepali-housing',
        title: 'Nepali Housing Price Prediction',
        description: 'Cleaned and analyzed a Nepali housing dataset. Built ML models (Random Forest and Linear Regression) to predict house prices.',
        techStack: ['Python', 'Pandas', 'Random Forest', 'Linear Regression', 'Streamlit'],
        githubLink: 'https://github.com/GiriHridaya319/Nepali-House-Price-Prediction/tree/main',
        image: '/images/projects/housing.png'
    }
];
