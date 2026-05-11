import { MainTemplate } from '../templates/MainTemplate';
import { AboutSection } from '../organisms/AboutSection';
import { ProjectsSection } from '../organisms/ProjectsSection';
import { TechSection } from '../organisms/TechSection';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './HomePage.css';

export function HomePage() {
    return (
        <MainTemplate>
            <section id="sobre-mi">
                <AboutSection />
            </section>

            <section id="proyectos">
                <ProjectsSection />
            </section>

            <section id="tecnologias">
                <TechSection />
            </section>

            <section id="contacto" className="contact-section">
                <div className="contact-container">
                    <h2 className="contact-title">Contacto</h2>
                    <p className="contact-subtitle">
                        ¿Tienes un proyecto en mente? Hablemos.
                    </p>
                    <div className="contact-links">
                        <a
                            href="mailto:oswaldonavarro0308@gmail.com"
                            className="contact-btn"
                        >
                            <FaEnvelope /> Enviar correo
                        </a>
                        <a
                            href="https://github.com/ONavarroGeraldino"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn outline"
                        >
                            <FaGithub /> GitHub
                        </a>
                    </div>
                </div>
            </section>
        </MainTemplate>
    );
}
