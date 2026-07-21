import { useLanguage } from '../shared/context/LanguageContext';
import { SkillsBox } from '../molecules/SkillsBox';
import Antigravity from '../components/Antigravity';
import { FaArrowRight, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './MinimalPage.css';

const images = [
    'https://placehold.co/600x400/1e293b/7dd3fc?text=Portfolio',
    'https://placehold.co/600x400/1e293b/7dd3fc?text=Music',
    'https://placehold.co/600x400/1e293b/7dd3fc?text=Store',
    'https://placehold.co/600x400/1e293b/7dd3fc?text=Dashboard',
    'https://placehold.co/600x400/1e293b/7dd3fc?text=Events',
    'https://placehold.co/600x400/1e293b/7dd3fc?text=Movies',
];

export function MinimalPage() {
    const { t } = useLanguage();

    return (
        <div className="minimal-page">
            <div className="minimal-bg">
                <Antigravity
                    count={150}
                    magnetRadius={8}
                    ringRadius={5}
                    waveSpeed={0.2}
                    waveAmplitude={0.5}
                    particleSize={1.5}
                    lerpSpeed={0.05}
                    color="#7dd3fc"
                    autoAnimate={true}
                    particleVariance={0.5}
                    rotationSpeed={0}
                    depthFactor={0.5}
                    pulseSpeed={2}
                    particleShape="sphere"
                    fieldStrength={5}
                />
            </div>

            <nav className="minimal-nav">
                <a href="#about">{t.nav.sobreMi}</a>
                <a href="#projects">{t.nav.proyectos}</a>
                <a href="#tech">{t.nav.stack}</a>
                <a href="#contact">{t.nav.contacto}</a>
            </nav>

            <section className="minimal-hero" id="hero">
                <div className="minimal-hero-content">
                    <p className="minimal-label">Portfolio</p>
                    <h1 className="minimal-title">{t.nav.logo}</h1>
                    <p className="minimal-subtitle">
                        {t.about.p1.replace(/<[^>]*>/g, '').slice(0, 120)}...
                    </p>
                    <div className="minimal-hero-actions">
                        <a href="#projects" className="minimal-btn">
                            {t.projects.title} <FaArrowRight />
                        </a>
                    </div>
                </div>
            </section>

            <section className="minimal-about" id="about">
                <div className="minimal-about-content">
                    <p className="minimal-label">{t.about.subtitle}</p>
                    <h2 className="minimal-section-title">{t.about.title}</h2>
                    <p className="minimal-about-text" dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
                    <p className="minimal-about-text" dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
                </div>
            </section>

            <section className="minimal-projects" id="projects">
                <p className="minimal-label">{t.nav.proyectos}</p>
                <h2 className="minimal-section-title">{t.projects.title}</h2>
                <div className="minimal-projects-grid">
                    {t.projects.projects.map((project, i) => (
                        <a key={i} href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="minimal-project-card">
                            <div className="minimal-project-img">
                                <img src={images[i]} alt={project.title} />
                            </div>
                            <div className="minimal-project-info">
                                <span className="minimal-project-number">0{i + 1}</span>
                                <h3 className="minimal-project-title">{project.title}</h3>
                                <p className="minimal-project-desc">{project.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <section className="minimal-tech" id="tech">
                <p className="minimal-label">{t.nav.stack}</p>
                <h2 className="minimal-section-title">{t.tech.title}</h2>
                <SkillsBox />
            </section>

            <footer className="minimal-footer" id="contact">
                <div className="minimal-footer-content">
                    <h2 className="minimal-footer-title">{t.nav.contacto}</h2>
                    <p className="minimal-footer-text">
                        oswaldonavarro0308@gmail.com
                    </p>
                    <div className="minimal-footer-links">
                        <a href="mailto:oswaldonavarro0308@gmail.com" className="minimal-footer-link">
                            <FaEnvelope /> Email
                        </a>
                        <a href="https://github.com/ONavarroGeraldino" target="_blank" rel="noopener noreferrer" className="minimal-footer-link">
                            <FaGithub /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/oswaldo-navarro-2b3735249/" target="_blank" rel="noopener noreferrer" className="minimal-footer-link">
                            <FaLinkedin /> LinkedIn
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
