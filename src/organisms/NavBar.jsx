import { useState, useEffect } from 'react';
import { NavLinks } from '../molecules/NavLinks';
import { useLanguage } from '../shared/context/LanguageContext';
import './NavBar.css';

export function NavBar() {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="logo">
                <a href="#">{t.nav.logo}</a>
            </div>
            <NavLinks />
        </nav>
    );
}
