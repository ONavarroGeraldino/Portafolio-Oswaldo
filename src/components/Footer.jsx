import { FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-column">
        {/* Nombre y Copy */}
        <p className="footer-copy">
          &copy; {currentYear} <span className="name-highlight">Oswaldo Navarro</span>
        </p>

        {/* Iconos de Redes */}
        <div className="footer-social">
          <a 
            href="mailto:oswaldonavarro0308@gmail.com" 
            className="footer-link email"
            aria-label="Email"
          >
            <FaEnvelope className="footer-icon" />
          </a>
          
          <a 
            href="https://github.com/ONavarroGeraldino" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link github"
            aria-label="GitHub"
          >
            <FaGithub className="footer-icon" />
          </a>
        </div>

        {/* Texto del correo (opcional, para mayor claridad) */}
        <span className="footer-email-text">oswaldonavarro0308@gmail.com</span>
      </div>
    </footer>
  );
};

export default Footer;