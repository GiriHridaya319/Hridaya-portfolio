import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
        </main>
    );
}
