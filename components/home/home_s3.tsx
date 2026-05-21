"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const awards = [
    {
        year: '2024',
        title: 'TradingTech Insight Award',
        location: 'Boston, Massachusetts',
        href: '#',
    },
    {
        year: '2023',
        title: 'InvestmentNews Award',
        location: 'World wide',
        href: '#',
    },
    {
        year: '2022',
        title: 'Micro Business Award',
        location: 'Brooklyn, NY',
        href: '#',
    },
    {
        year: '2021',
        title: 'Finance Excellence Award',
        location: 'New York, NY',
        href: '#',
    },
    {
        year: '2020',
        title: 'Global Markets Award',
        location: 'London, UK',
        href: '#',
    },
];

const AwardIcon = () => (
    <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M24 10l3.09 6.26L34 17.27l-5 4.87 1.18 6.88L24 25.77l-6.18 3.25L19 22.14 14 17.27l6.91-1.01L24 10z"
            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
        <path d="M14 28c-1.5 1-3 2.5-3.5 4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M12 30c-2 0.5-3.5 2-4 4" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M11 32.5c-1.5 1-2.5 3-2.5 5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M10.5 35c-1 1.5-1.2 3.5-0.5 5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M34 28c1.5 1 3 2.5 3.5 4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M36 30c2 0.5 3.5 2 4 4" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M37 32.5c1.5 1 2.5 3 2.5 5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M37.5 35c1 1.5 1.2 3.5 0.5 5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M24 37v5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 42h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export default function HomeS3() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-white py-20 sm:py-28 lg:py-36 font-sans">
            <div className="mx-auto px-6 sm:px-10 lg:px-16">

                {/* Header */}
                <div className="text-center mb-16 sm:mb-20">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400 mb-4">
                        Awards
                    </p>
                    <h2 className="text-5xl sm:text-6xl lg:text-[76px] font-semibold text-gray-900 leading-tight tracking-tight">
                        Awards & recognition
                    </h2>
                </div>

                {/* Awards list */}
                <div className="relative">
                    {awards.map((award, i) => {
                        const isHovered = hoveredIndex === i;

                        return (
                            <div
                                key={i}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="relative cursor-pointer group"
                                style={{ borderTop: i === 0 ? '1px solid #e5e7eb' : 'none' }}
                            >
                                {/* Progress border bottom — animates left to right */}
                                <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-200 z-0" />
                                <motion.div
                                    className="absolute bottom-0 left-0 h-[2px] bg-gray-900 z-10"
                                    initial={{ width: '0%' }}
                                    animate={{ width: isHovered ? '100%' : '0%' }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                />

                                {/* Row content */}
                                <div className="relative z-20 flex items-center gap-6 sm:gap-10 px-4 sm:px-8 lg:px-10 py-7 sm:py-9">

                                    {/* Year */}
                                    <span className="text-base sm:text-lg text-gray-400 font-normal w-14 sm:w-20 shrink-0 tabular-nums">
                                        {award.year}
                                    </span>

                                    {/* Title */}
                                    <motion.h3
                                        animate={{ color: isHovered ? '#111827' : '#374151' }}
                                        transition={{ duration: 0.25 }}
                                        className="flex-1 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug"
                                    >
                                        {award.title}
                                    </motion.h3>

                                    {/* Floating award badge */}
                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.5, y: 8 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.5, y: 8 }}
                                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                                className="absolute left-1/2 -translate-x-1/2 z-30 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1B222C] flex items-center justify-center"
                                                style={{
                                                    boxShadow: '0 12px 40px rgba(0,0,0,0.22)',
                                                    border: '2px solid rgba(255,255,255,0.12)',
                                                }}
                                            >
                                                <AwardIcon />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Location */}
                                    <div className="hidden sm:flex items-center gap-2.5 shrink-0">
                                        <svg
                                            width="16" height="16" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="1.8"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="text-gray-400 shrink-0"
                                        >
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                            <circle cx="12" cy="10" r="3"/>
                                        </svg>
                                        <span className="text-base text-gray-500">
                                            {award.location}
                                        </span>
                                    </div>

                                    {/* Arrow */}
                                    <motion.a
                                        href={award.href}
                                        animate={{ color: isHovered ? '#111827' : '#9ca3af' }}
                                        transition={{ duration: 0.25 }}
                                        className="shrink-0 p-1"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" strokeWidth="1.8"
                                             strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17L17 7M17 7H7M17 7v10"/>
                                        </svg>
                                    </motion.a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}