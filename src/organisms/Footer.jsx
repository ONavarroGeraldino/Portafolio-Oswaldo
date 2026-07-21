import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { SocialIcon } from '../atoms/SocialIcon';
import './Footer.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-column">
                <p className="footer-copy">
                    &copy; {currentYear} <span className="name-highlight">Oswaldo Navarro</span>
                </p>

                <div className="footer-social">
                    <SocialIcon
                        href="mailto:oswaldonavarro0308@gmail.com"
                        icon={<FaEnvelope className="footer-icon" />}
                        label="Email"
                    />
                    <SocialIcon
                        href="https://github.com/ONavarroGeraldino"
                        icon={<FaGithub className="footer-icon" />}
                        label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                </div>

                <span className="footer-email-text">oswaldonavarro0308@gmail.com</span>

                <p className="footer-opencode">
                    Built with <a href="https://opencode.ai" target="_blank" rel="noopener noreferrer" className="opencode-link">opencode</a>
                </p>
            </div>
        </footer>
    );
}
