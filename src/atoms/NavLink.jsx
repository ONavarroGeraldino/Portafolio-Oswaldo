import './NavLink.css';

export function NavLink({ href, children, isCta = false }) {
    return (
        <li className={`nav-link-item ${isCta ? 'cta' : ''}`}>
            <a href={href}>{children}</a>
        </li>
    );
}
