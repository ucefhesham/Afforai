import React, { useState } from 'react';
import Logo from '../images/Logo.svg';
import Menu from '../images/menu.png';
import './Navbar.css'; // Make sure to create this CSS file

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='main-nav'>
            <nav className='navbar'>
                <div className="navbar-logo">
                    <a href="/"><img src={Logo} alt="Logo" className='Logo'/>
                     <div className='logo-text'>
                        Afforai
                     </div>
                    </a>
                </div>
                <ul className='navbar-links'>
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
            <div className='nav-div'>
                <ul className={`mob navbar-links ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <li><a href="/">Affiliate</a></li>
                    <li><a href="/about">Pricing</a></li>
                    <li><a href="/services">Testmonials</a></li>
                    <li><a href="/contact">Help Center</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
