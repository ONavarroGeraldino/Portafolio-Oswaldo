import './SocialIcon.css';

export function SocialIcon({ href, icon, label, target, rel }) {
    return (
        <a
            href={href}
            className="social-icon-link"
            aria-label={label}
            target={target}
            rel={rel}
        >
            {icon}
        </a>
    );
}
