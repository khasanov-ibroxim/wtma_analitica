"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}`);
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`navbar-wrapper ${scrolled ? 'navbar-fixed' : ''}`}
            style={{
                position: scrolled ? 'fixed' : 'relative',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transition: 'background 0.3s ease, box-shadow 0.3s ease',
                background: scrolled ? '#ffffff' : 'transparent',
                boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
            }}
        >
            {/* ── TOP BAR (hide when scrolled) ── */}
            {!scrolled && (
                <div className="top-bar">
                    <div className="diagonal-bg" />
                    <div className="top-bar-inner">
                        <div className="top-bar-left">
                            {['About', 'Latest', 'Trending', 'FAQ'].map((item) => (
                                <Link key={item} href={`/${item.toLowerCase()}`} className="top-bar-link">
                                    {item}
                                </Link>
                            ))}
                        </div>
                        <div className="top-bar-right">
                            <div className="top-bar-item">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <line x1="2" y1="12" x2="22" y2="12"/>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                                </svg>
                                <select className="lang-select">
                                    <option value="en">English</option>
                                    <option value="uz">Ozbek</option>
                                    <option value="ru">Русский</option>
                                </select>
                            </div>
                            <div className="top-bar-item">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                </svg>
                                <span>10:00am – 06:00pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ── MAIN NAVBAR ── */}
            <header
                className="navbar"
                style={{
                    background: scrolled ? '#ffffff' : undefined,
                    borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : undefined,
                }}
            >
                {!scrolled && <div className="diagonal-bg" />}
                <div className="navbar-inner">
                    {/* Left: Search */}
                    <div className="search-wrap">
                        <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search here..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </div>

                    {/* Center: Logo */}
                    {/*<div className="logo-wrap">*/}
                    {/*    <Link href="/" className="logo">Adina.</Link>*/}
                    {/*</div>*/}

                    {/* Right: Nav */}
                    <ul className="nav-links">
                        {['Главная', 'Аналитика рынков', 'Индекс хлопка', 'Архив котировок', 'Центр экспертизы','Динамика рынка','Контакты'].map((item) => (
                            <li key={item} className={"text-center"}>
                                <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="nav-link">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile hamburger */}
                    <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                            {isMenuOpen
                                ? <path d="M6 18L18 6M6 6l12 12"/>
                                : <path d="M4 6h16M4 12h16M4 18h16"/>
                            }
                        </svg>
                    </button>
                </div>

                {/* Mobile dropdown */}
                {isMenuOpen && (
                    <div className="mobile-menu">
                        {['Главная', 'Аналитика рынков', 'Индекс хлопка', 'Архив котировок', 'Центр экспертизы','Динамика рынка','Контакты'].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                                className="mobile-nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                )}
            </header>
        </div>
    );
};

export default Navbar;