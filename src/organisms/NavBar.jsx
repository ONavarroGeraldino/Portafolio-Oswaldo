import { NavLinks } from '../molecules/NavLinks';
import './NavBar.css';

export function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="#">&lt;Dev&gt;</a>
            </div>
            <NavLinks />
        </nav>
    );
}
