import { SkillItem } from '../atoms/SkillItem';
import { useLanguage } from '../shared/context/LanguageContext';
import './SkillsBox.css';

export function SkillsBox() {
    const { t } = useLanguage();

    return (
        <div className="skills-box">
            <h3>{t.about.skillsTitle}</h3>
            <ul className="skills-list">
                {t.tech.skills.map((skill, index) => (
                    <SkillItem key={index} label={skill} accent={index === 2 || index === 3} />
                ))}
            </ul>
        </div>
    );
}
