import { NavBar } from '../organisms/NavBar';
import { Footer } from '../organisms/Footer';
import './MainTemplate.css';

export function MainTemplate({ children }) {
    return (
        <div className="main-template">
            <NavBar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
