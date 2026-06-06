'use client';

import React from 'react';
import Link from 'next/link';

const navLinks = ['Home', 'Portfolio', 'Service', 'Contact', 'Blog'];
const essentialLinks = ['Privacy Policy', 'Terms and conditions', 'Cookie Policy', 'Careers'];

const FacebookIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
);

const XIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);

const YoutubeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
);

const BeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.228 9.525c.418 0 .75-.099 1-.298.248-.199.373-.516.373-.952 0-.408-.12-.701-.361-.882C9-.307 8.672-.208 8.228-.208H5.5v1.633h2.728zM8.531 12.947c.49 0 .868-.12 1.135-.358.268-.239.401-.597.401-1.073 0-.452-.14-.793-.422-1.024-.281-.23-.664-.345-1.147-.345H5.5v2.8h3.031z"/>
        <path d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM14.04 7.354h4.299V8.51H14.04V7.354zM11.77 13.22c-.27.484-.651.857-1.143 1.12-.492.261-1.075.392-1.752.392H3.5V5.5h5.254c1.388 0 2.367.34 2.94 1.02.572.678.671 1.484.302 2.418.251.328.433.7.548 1.117.115.416.127.837.034 1.258-.14.595-.36 1.063-.611 1.547zm6.854-.365c-.088.505-.288.95-.598 1.337-.31.386-.703.679-1.179.879-.476.2-1.018.3-1.626.3-1.29 0-2.288-.38-2.994-1.14-.707-.76-1.06-1.8-1.06-3.12 0-1.28.36-2.316 1.08-3.11.72-.793 1.703-1.19 2.949-1.19 1.273 0 2.256.41 2.952 1.23.695.82 1.026 1.973.992 3.46H13.16c.044.59.22 1.047.53 1.37.309.324.727.485 1.254.485.37 0 .684-.09.94-.27.256-.18.43-.43.522-.748h2.218z"/>
        <path d="M15.58 11.39h2.19c-.05-.52-.211-.913-.483-1.179-.272-.266-.62-.399-1.045-.399-.45 0-.81.14-1.077.42-.268.28-.424.666-.469 1.158h.884z"/>
    </svg>
);

export default function Footer() {
    return (
        <footer className="w-full font-sans" style={{ background: '#eef0f8' }}>

            {/* TOP: 3-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#d1d5db]">

                {/* Col 1: Nav links */}
                <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 sm:py-20 gap-4 sm:gap-5">
                    {navLinks.map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                            className="no-underline transition-colors duration-200"
                            style={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: 'clamp(18px, 2vw, 26px)',
                                fontWeight: 400,
                                color: '#374151',
                                letterSpacing: '-0.01em',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#1B222C')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Col 2: Logo + tagline + CTA */}
                <div className="flex flex-col items-center justify-center px-8 py-10 sm:py-20 gap-6 text-center">
                    <h2
                        style={{
                            fontFamily: '"Playfair Display", serif',
                            fontSize: 'clamp(26px, 3vw, 38px)',
                            fontWeight: 700,
                            color: '#1B222C',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        Adina.
                    </h2>
                    <p
                        style={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: 'clamp(14px, 1.4vw, 20px)',
                            fontWeight: 400,
                            color: '#6b7280',
                            lineHeight: 1.6,
                            maxWidth: 280,
                        }}
                    >
                        Make your business boom with our adina.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 no-underline px-6 py-3.5 transition-all duration-200 hover:opacity-85 hover:-translate-y-px"
                        style={{
                            background: '#1B222C',
                            color: '#ffffff',
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: 14,
                            fontWeight: 500,
                            letterSpacing: '0.02em',
                            borderRadius: 2,
                        }}
                    >
                        Let's Chat
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                    </Link>
                </div>

                {/* Col 3: Essential links — "Essntial" typo tuzatildi */}
                <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 sm:py-20 gap-2">
                    <p
                        className="mb-4"
                        style={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: 'clamp(16px, 1.8vw, 24px)',
                            fontWeight: 600,
                            color: '#1B222C',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        Essential
                    </p>
                    {essentialLinks.map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="no-underline transition-colors duration-200 py-1"
                            style={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: 14,
                                fontWeight: 400,
                                color: '#6b7280',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#1B222C')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-[#d1d5db]">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

                    {/* Left: social + copyright */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            {[
                                { icon: <FacebookIcon />, href: '#' },
                                { icon: <XIcon />, href: '#' },
                                { icon: <YoutubeIcon />, href: '#' },
                                { icon: <BeIcon />, href: '#' },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    className="transition-opacity duration-200 hover:opacity-60"
                                    style={{ color: '#1B222C' }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 13, color: '#6b7280' }}>
                            © 2024{' '}
                            <strong style={{ color: '#1B222C', fontWeight: 600 }}>Example,</strong>{' '}
                            All rights reserved.
                        </p>
                    </div>

                    {/* Right: office addresses */}
                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                        {[
                            { city: 'Canada', address: '71 South Los Carneros Road,', phone: '+51 174 705 812' },
                            { city: 'Germany', address: '71 South Los Carneros Road,', phone: '+51 174 705 812' },
                        ].map((office) => (
                            <div key={office.city} className="flex flex-col gap-1">
                                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 15, fontWeight: 600, color: '#1B222C' }}>
                                    {office.city}
                                </p>
                                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 13, color: '#6b7280' }}>
                                    {office.address}
                                </p>
                                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 13, color: '#6b7280' }}>
                                    Phone: <span style={{ color: '#1B222C', fontWeight: 500 }}>{office.phone}</span>
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    );
}