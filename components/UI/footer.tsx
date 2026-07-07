'use client';

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import logo from '@/assets/logo.svg'

const FacebookIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
);

export default function Footer({ lang }: { lang: string }) {
    const navLinks = [
        { name: 'Главная',           href: `/${lang}` },
        { name: 'О нас',             href: `/${lang}/about` },
        { name: 'Блог',             href: `/${lang}/about` },
        { name: 'Контакты',          href: `/${lang}/contact` },
    ];
    const essentialLinks = [  { name: 'Аналитика рынков',  href: `/${lang}/analytics` },
        { name: 'Индекс хлопка',     href: `/${lang}/cotton-index` },
        { name: 'Архив котировок',   href: `/${lang}/archive` },
        { name: 'Центр экспертизы',  href: `/${lang}/expertise` },
        ];

    return (
        <footer className="w-full font-sans" style={{ background: '#eef0f8' }}>

            {/* TOP: 3-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#d1d5db]">

                {/* Col 1: Nav links */}
                <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 sm:py-20 gap-4 sm:gap-2">
                    {navLinks.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="no-underline transition-colors duration-200"
                            style={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: 'clamp(14px, 1vw, 16px)',
                                fontWeight: 400,
                                color: '#374151',
                                letterSpacing: '',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#1B222C')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Col 2: Logo + tagline + CTA */}
                <div className="flex flex-col items-center justify-center px-8 py-10 sm:py-20 gap-6 text-center">
                   <Link href={`/${lang}`}>
                       <Image src={logo} alt={"TEXAREA"}/>
                   </Link>

                </div>

                {/* Col 3: Essential links */}
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

                    </p>
                    {essentialLinks.map((item , index) => (
                        <Link
                            key={index}
                            href={item.href}
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
                            {item.name}
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
                                { icon: <LinkedInIcon />, href: '#' },
                                { icon: <FacebookIcon />, href: '#' },
                                { icon: <InstagramIcon />, href: '#' },
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
                            © 2026{' '}
                            <strong style={{ color: '#1B222C', fontWeight: 600 }}>Example,</strong>{' '}
                            All rights reserved.
                        </p>
                    </div>

                    {/* Right: office addresses */}
                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                        {[
                            { city: 'Ташкент', address: 'Улица Кукча Дарвоза, дом 314.', phone: '+998 93 809 99 98' },
                        ].map((office) => (
                            <div key={office.city} className="flex flex-col gap-1">
                                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 15, fontWeight: 600, color: '#1B222C' }}>
                                    {office.city}
                                </p>
                                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 13, color: '#6b7280' }}>
                                    {office.address}
                                </p>
                                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 13, color: '#6b7280' }}>
                                    Телефон: <span style={{ color: '#1B222C', fontWeight: 500 }}>{office.phone}</span>
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    );
}