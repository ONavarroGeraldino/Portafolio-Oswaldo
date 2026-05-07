import './SkillItem.css';

export function SkillItem({ icon, label, accent = false }) {
    return (
        <li className={`skill-item ${accent ? 'accent-skill' : ''}`}>
            <i className="dev-icon"></i>
            {label}
        </li>
    );
}
