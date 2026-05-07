import './TechCard.css';

export function TechCard({ icon, name, techClass }) {
    return (
        <div className={`tech-card ${techClass}`}>
            <div className="tech-icon">
                {icon}
            </div>
            <span className="tech-name">{name}</span>
        </div>
    );
}
