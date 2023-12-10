import React, { useState } from 'react';
import Logo from '../images/Logo.svg';
import Menu from '../images/menu.png';
import './Navbar.css'; // Make sure to create this CSS file

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
            <div className="navbar-logo">
                <a href="/"><img src={Logo} alt="Logo" className='Logo'/>
                 <div className='logo-text'>
                    Afforai
                 </div>
                </a> {/* Replace with your logo */}
            </div>
            <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
                <li><a href="/">Affiliate</a></li>
                <li><a href="/about">Pricing</a></li>
                <li><a href="/services">Testmonials</a></li>
                <li><a href="/contact">Help Center</a></li>
            </ul>
            <div className='nav-btns'>
                <button className='login-btn'>Log in</button>
                <button className='try-for-free-btn'>Try For Free</button>
                <button className={`menu-btn ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <img src={Menu} alt="Menu" className="menu" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
