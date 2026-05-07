import fotoPerfil from '../shared/assets/images/Oswaldo.png';
import { SkillsBox } from '../molecules/SkillsBox';
import { useLanguage } from '../shared/context/LanguageContext';
import './AboutSection.css';

export function AboutSection() {
    const { t } = useLanguage();

    return (
        <section id="sobre-mi" className="about-section">
            <div className="container">
                <div className="about-content">
                    <span className="sub-title">{t.about.subtitle}</span>
                    <h1>{t.about.title}</h1>

                    <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />

                    <p dangerouslySetInnerHTML={{ __html: t.about.p2 }} />

                    <SkillsBox />
                </div>

                <div className="about-image">
                    <div className="image-wrapper">
                        <img
                            src={fotoPerfil}
                            alt={t.about.profileAlt}
                            className="profile-pic"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
