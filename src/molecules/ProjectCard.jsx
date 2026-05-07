import './ProjectCard.css';
import { useLanguage } from '../shared/context/LanguageContext';

export function ProjectCard({ title, desc, img, link }) {
    const { t } = useLanguage();

    return (
        <div className="project-card">
            <div className="project-image-wrapper">
                <img src={img} alt={title} />
            </div>
            <div className="project-info">
                <h3>{title}</h3>
                <p>{desc}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-view"
                >
                    {t.projects.viewDetails}
                </a>
            </div>
        </div>
    );
}
