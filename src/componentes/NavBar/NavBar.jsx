import './NavBar.css';
import { NavLink, Link } from "react-router-dom";
import { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header-container"> 
            <nav className="custom-navbar">
                <Link to="/" className="logo-container">
                    <span className="logo-name">Luciano</span>
                    <span className="logo-surname">Rodriguez</span>
                </Link>
                
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <NavLink to="/" className={({ isActive }) => isActive ? "Link active" : "Link"}>Sobre mí</NavLink>
                    <NavLink to="/Curriculum" className={({ isActive }) => isActive ? "Link active" : "Link"}>Curriculum</NavLink>
                    <NavLink to="/Proyectos" className={({ isActive }) => isActive ? "Link active" : "Link"}>Proyectos</NavLink>
                    <NavLink to="/Contacto" className={({ isActive }) => isActive ? "Link active" : "Link"}>Contacto</NavLink>
                </div>

                <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;