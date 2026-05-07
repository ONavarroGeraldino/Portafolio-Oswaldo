import { NavLink } from '../atoms/NavLink';
import { LanguageSelector } from '../atoms/LanguageSelector';
import { useLanguage } from '../shared/context/LanguageContext';
import './NavLinks.css';

export function NavLinks() {
    const { t } = useLanguage();

    return (
        <ul className="nav-links">
            <NavLink href="#proyectos">{t.nav.proyectos}</NavLink>
            <NavLink href="#tecnologias">{t.nav.stack}</NavLink>
            <NavLink href="#sobre-mi">{t.nav.sobreMi}</NavLink>
            <NavLink href="#contacto" isCta>{t.nav.contacto}</NavLink>
            <li className="lang-wrapper">
                <LanguageSelector />
            </li>
        </ul>
    );
}
