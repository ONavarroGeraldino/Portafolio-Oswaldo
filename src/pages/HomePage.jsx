import { MainTemplate } from '../templates/MainTemplate';
import { AboutSection } from '../organisms/AboutSection';
import { ProjectsSection } from '../organisms/ProjectsSection';
import { TechSection } from '../organisms/TechSection';

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

            <section id="contacto">
            </section>
        </MainTemplate>
    );
}
