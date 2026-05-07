import { TechCard } from '../atoms/TechCard';
import { useLanguage } from '../shared/context/LanguageContext';
import {
    FileJson,
    FileCode,
    FileType,
    Code2,
    Wind,
    Atom,
    Server
} from 'lucide-react';
import './TechSection.css';

const techStack = [
    { name: 'JavaScript', icon: <FileJson />, class: 'js' },
    { name: 'HTML', icon: <FileCode />, class: 'html' },
    { name: 'CSS', icon: <FileType />, class: 'css' },
    { name: 'PHP', icon: <Server />, class: 'php' },
    { name: 'Laravel', icon: <Code2 />, class: 'laravel' },
    { name: 'Tailwind', icon: <Wind />, class: 'tailwind' },
    { name: 'React', icon: <Atom />, class: 'react' },
];

export function TechSection() {
    const { t } = useLanguage();

    return (
        <section id="tecnologias" className="tech-container">
            <h2 className="tech-title">{t.tech.title}</h2>

            <div className="tech-grid">
                {techStack.map((tech) => (
                    <TechCard
                        key={tech.name}
                        icon={tech.icon}
                        name={tech.name}
                        techClass={tech.class}
                    />
                ))}
            </div>
        </section>
    );
}
