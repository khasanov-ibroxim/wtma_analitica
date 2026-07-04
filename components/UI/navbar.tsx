"use client"
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { analyticsItems } from "@/data/analytics";
import Image from "next/image";
import logo from "@/assets/logoWidth.png"
interface Props {
    lang: string;
}

const Navbar = ({ lang }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
    const [mounted, setMounted] = useState(false);

    const analyticsTriggerRef = useRef<HTMLLIElement>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const pathname = usePathname();

    const navLinks = [
        { name: 'Главная',          href: `/${lang}` },
        { name: 'О нас',          href: `/${lang}/about` },
        { name: 'Блог',          href: `/${lang}/blog` },
        { name: 'Аналитика рынков', href: ``, key: 'analytics' },
        { name: 'Индекс хлопка',    href: `/${lang}/cotton-index` },
        { name: 'Архив котировок',  href: `/${lang}/archive` },
        { name: 'Центр экспертизы', href: `/${lang}/expertise` },
        { name: 'Динамика рынка',   href: `/${lang}/market-dynamics` },
        { name: 'Контакты',         href: `/${lang}/contact` },
    ];

    // Home page da emasmi
    const isHomePage = pathname === '/';

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        // Dastlabki holatni tekshir
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const clearCloseTimer = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };

    const openDropdown = () => {
        clearCloseTimer();
        const rect = analyticsTriggerRef.current?.getBoundingClientRect();
        if (rect) {
            setDropdownPos({
                top: rect.bottom + 8,
                left: rect.left + rect.width / 2,
            });
        }
        setIsDropdownOpen(true);
    };

    const scheduleCloseDropdown = () => {
        clearCloseTimer();
        closeTimer.current = setTimeout(() => setIsDropdownOpen(false), 150);
    };

    // Scroll/resize bo'lganda dropdown pozitsiyasini yopib qo'yamiz (qayta hover qilinganda to'g'ri joyda chiqadi)
    useEffect(() => {
        if (!isDropdownOpen) return;
        const close = () => setIsDropdownOpen(false);
        window.addEventListener('scroll', close, { passive: true });
        window.addEventListener('resize', close);
        return () => {
            window.removeEventListener('scroll', close);
            window.removeEventListener('resize', close);
        };
    }, [isDropdownOpen]);

    // Inner page larda navbar har doim oq va fixed
    // Home page da: scroll bo'lmasa transparent, scroll bo'lsa oq+fixed
    const isFixed = !isHomePage || scrolled;
    const isSolid = !isHomePage || scrolled;
    const showTopBar = isHomePage && !scrolled;

    const dropdownMenu = isDropdownOpen && (
        <ul
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleCloseDropdown}
            style={{
                position: 'fixed',
                top: dropdownPos.top,
                left: dropdownPos.left,
                transform: 'translateX(-50%)',
                minWidth: 280,
                background: '#ffffff',
                borderRadius: 10,
                boxShadow: '0 12px 30px rgba(0,0,0,0.18)',
                padding: '8px 0',
                listStyle: 'none',
                margin: 0,
                zIndex: 9999,
            }}
        >
            {analyticsItems.map((item) => (
                <li key={item.id}>
                    <Link
                        href={`/${lang}/analytics/${item.id}`}
                        onClick={() => setIsDropdownOpen(false)}
                        style={{
                            display: 'block',
                            padding: '10px 18px',
                            color: '#1a1a1a',
                            fontSize: 14,
                            whiteSpace: 'nowrap',
                            textAlign: 'left',
                            transition: 'background 0.15s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f2fb')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );

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
<Image src={logo} alt={"asd"} height={100} width={150}/>
                    <ul className="nav-links">
                        {navLinks.map(({ name, href, key }) => (
                            <li
                                key={href}
                                className="text-center"
                                ref={key === 'analytics' ? analyticsTriggerRef : undefined}
                                onMouseEnter={key === 'analytics' ? openDropdown : undefined}
                                onMouseLeave={key === 'analytics' ? scheduleCloseDropdown : undefined}
                            >
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
                        {navLinks.map(({ name, href, key }) => (
                            <React.Fragment key={href}>
                                <Link
                                    href={href}
                                    className="mobile-nav-link"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {name}
                                </Link>
                                {key === 'analytics' && (
                                    <div style={{ paddingLeft: 16 }}>
                                        {analyticsItems.map((item) => (
                                            <Link
                                                key={item.id}
                                                href={`/${lang}/analytics/${item.id}`}
                                                className="mobile-nav-link"
                                                style={{ fontSize: 13, opacity: 0.8 }}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </header>

            {/* Dropdown document.body ga portal qilinadi — shu tufayli navbar/header ichidagi
                overflow:hidden yoki stacking-context (masalan diagonal-bg effekti) uni kesib
                tashlay olmaydi. */}
            {mounted && dropdownMenu && createPortal(dropdownMenu, document.body)}
        </div>
    );
};

export default Navbar;