"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";



interface Props {
    lang: string;
}

const Navbar = ({ lang }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Главная',          href: `/${lang}` },
        { name: 'Аналитика рынков', href: `/${lang}/analytics` },
        { name: 'Индекс хлопка',    href: `/${lang}/cotton-index` },
        { name: 'Архив котировок',  href: `/${lang}/archive` },
        { name: 'Центр экспертизы', href: `/${lang}/expertise` },
        { name: 'Динамика рынка',   href: `/${lang}/market-dynamics` },
        { name: 'Контакты',         href: `/${lang}/contact` },
    ];
    // Home page da emasmi
    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        // Dastlabki holatni tekshir
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Inner page larda navbar har doim oq va fixed
    // Home page da: scroll bo'lmasa transparent, scroll bo'lsa oq+fixed
    const isFixed = !isHomePage || scrolled;
    const isSolid = !isHomePage || scrolled;
    const showTopBar = isHomePage && !scrolled;

    return (
        <div
            className={`navbar-wrapper ${isFixed ? 'navbar-fixed' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transition: 'background 0.3s ease, box-shadow 0.3s ease',
                background: isSolid ? '#ffffff' : 'transparent',
                boxShadow: isSolid ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
            }}
        >
            {/* TOP BAR — faqat home page da va scroll bo'lmagan holatda */}
            {showTopBar && (
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

            <header
                className="navbar"
                style={{
                    background: isSolid ? '#ffffff' : undefined,
                    borderBottom: isSolid ? '1px solid rgba(0,0,0,0.06)' : undefined,
                }}
            >
                {!isSolid && <div className="diagonal-bg" />}
                <div className="navbar-inner">
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

                    <ul className="nav-links">
                        {navLinks.map(({ name, href }) => (
                            <li key={href} className="text-center">
                                <Link
                                    href={href}
                                    className="nav-link"
                                    style={{
                                        color: isSolid ? undefined : '#ffffff',
                                    }}
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
                             style={{ color: isSolid ? undefined : '#ffffff' }}
                        >
                            {isMenuOpen
                                ? <path d="M6 18L18 6M6 6l12 12"/>
                                : <path d="M4 6h16M4 12h16M4 18h16"/>
                            }
                        </svg>
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="mobile-menu">
                        {navLinks.map(({ name, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className="mobile-nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                )}
            </header>
        </div>
    );
};

export default Navbar;