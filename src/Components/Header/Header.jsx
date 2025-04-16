import React, { useState, useEffect } from 'react'
import "./Header.css"
import MenuData from "../../Data/MenuData.json"
import { Link, useLocation } from "react-router-dom"

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (e, item) => {
        e.preventDefault();

        if (item.name === 'ÜRÜNLER') return;

        const targetId = item.link.replace('#', '');

        if (location.pathname === '/') {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            localStorage.setItem('scrollToId', targetId);
            window.location.href = '/';
        }
    };

    return (
        <div className='header'>
            <div className='row-wrapper'>
                {/* Logo */}
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className='logo'>
                        <img src={"/assets/Kozanoglu_logo.png"} alt='Kozanoğlu Logo' />
                    </div>
                </Link>

                {/* Menu */}
                <div className='menu'>
                    <ul>
                        {MenuData.menu.map((item, index) => (
                            <li key={index}>
                                {item.name === "ÜRÜNLER" ? (
                                    <Link
                                        to="/urunler"
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setTimeout(() => {
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }, 100); // küçük bir gecikme, route geçişi sonrası scroll için
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a href={item.link} onClick={(e) => handleNavClick(e, item)}>
                                        {item.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                    <i className={isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
                </button>

                {/* Mobile Menu */}
                <nav className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {MenuData.menu.map((item, index) => (
                            <li key={index}>
                                {item.name === "ÜRÜNLER" ? (
                                    <Link to="/urunler" onClick={() => setIsMobileMenuOpen(false)}>
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a
                                        href={item.link}
                                        onClick={(e) => {
                                            setIsMobileMenuOpen(false);
                                            handleNavClick(e, item);
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};


export default Header;
