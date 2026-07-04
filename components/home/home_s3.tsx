"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import usa_img from "@/assets/home/home_s3/usa.jpg"
import baa_img from "@/assets/home/home_s3/baa.jpg"
import gr_img from "@/assets/home/home_s3/gr.jpg"
import japan_img from "@/assets/home/home_s3/japan.jpg"
import marokka_img from "@/assets/home/home_s3/marokka.jpg"
import {StaticImageData} from "next/image";
import Link from "next/link";

// ─── ICONS ──────────────────────────────────────────────────────────────────

const ArrowUpRight = ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
         className={className}>
        <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
);

const LocationIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
         className="text-gray-400 shrink-0">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const AwardIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 10l3.09 6.26L34 17.27l-5 4.87 1.18 6.88L24 25.77l-6.18 3.25L19 22.14 14 17.27l6.91-1.01L24 10z"
              stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M14 28c-1.5 1-3 2.5-3.5 4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 30c-2 0.5-3.5 2-4 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M11 32.5c-1.5 1-2.5 3-2.5 5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M10.5 35c-1 1.5-1.2 3.5-0.5 5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M34 28c1.5 1 3 2.5 3.5 4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M36 30c2 0.5 3.5 2 4 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M37 32.5c1.5 1 2.5 3 2.5 5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M37.5 35c1 1.5 1.2 3.5 0.5 5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M24 37v5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 42h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const DownloadIcon = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3v12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 10l5 5 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 19h16" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

// ─── DATA ────────────────────────────────────────────────────────────────────

const tabs = [{title:"Все" , tag: "all"},{title:"США" , tag:"usa"}, {title:"Саудовская Аравия" , tag:"baa"}, {title:"Япония" , tag:"japan"}, {title:"Германия" , tag:"gr"}, {title:"Марокко" , tag:"mr"}];


const awards = [
    { year: '2026', title: 'США', subtitle: 'Ежемесячная динамика цен', location: 'США', zipFile: 'usa/USA_2026.zip' },
    { year: '2026', title: 'Китай', subtitle: 'Ежемесячная динамика цен', location: 'Китай', zipFile: 'china_dayli_dinamiks.zip' },
    { year: '2026', title: 'Бразилия', subtitle: 'Ежемесячная динамика цен', location: 'Бразилия', zipFile: 'br/Brazil_2026.zip' },
];

// ─── IMAGE NATURAL ASPECT RATIO: rasm o'lchami 2360x1400 (McKinsey-uslubidagi taqdimot muqovalari) ──
const IMAGE_ASPECT = 2360 / 1400;

// ─── CARD WIDTH: responsive, rasm balandligiga qarab hisoblanadi ───────────────
const CARD_GAP = 16;
const SPEED = 0.7;

function getCardHeight() {
    if (typeof window === 'undefined') return 380;
    if (window.innerWidth < 480) return 220;
    if (window.innerWidth < 768) return 300;
    if (window.innerWidth < 1024) return 360;
    return 420;
}

// ─── CASE CARD ───────────────────────────────────────────────────────────────
// Rasm to'liq ko'rinishi uchun object-contain ishlatiladi (kesilmaydi),
// karta o'lchami rasmning haqiqiy aspect ratio'siga qarab hisoblanadi.

function CaseCard({ item, cardHeight }: { item: { tag: string; title: string; image: StaticImageData , link:string}; cardHeight: number }) {
    const [hovered, setHovered] = useState(false);
    const cardWidth = Math.round(cardHeight * IMAGE_ASPECT);

    return (
        <Link href={item.link}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative shrink-0 overflow-hidden bg-[#0a0e1a]"
            style={{ width: cardWidth, height: cardHeight, cursor: 'pointer' }}
        >
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <motion.img
                    src={item.image.src}
                    alt={item.title}
                    className="w-full h-full object-contain"
                    animate={{ scale: hovered ? 1.03 : 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    draggable={false}
                />
            </div>

            {/* Arrow */}
            <motion.div
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-7 h-7 sm:w-8 sm:h-8 bg-white flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
                transition={{ duration: 0.25 }}
            >
                <ArrowUpRight size={14} className="text-gray-900" />
            </motion.div>
        </Link>
    );
}

// ─── HOME S4 ─────────────────────────────────────────────────────────────────

export function HomeS4({lang}: { lang: string }) {
    const [activeTab, setActiveTab] = useState('all');
    const [cardHeight, setCardHeight] = useState(420);
    const tabsScrollRef = useRef<HTMLDivElement>(null);

    const trackRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef(0);
    const isDraggingRef = useRef(false);
    const dragStartXRef = useRef(0);
    const dragStartOffsetRef = useRef(0);
    const rafRef = useRef<number | null>(null);
    const singleWidthRef = useRef(0);
    const itemsCountRef = useRef(0);
    const caseStudies: Record<string, { id: number; tag: string; title: string; image: StaticImageData ; link:string }[]> = {
        usa: [
            { id: 1, tag: 'usa', title: 'Market data deep-dive for a leading investment firm', image: usa_img , link:`${lang}/analytics/usa-market-analysis`},
        ],
        baa: [
            { id: 1, tag: 'baa', title: 'Strategic growth plan for mid-market retailer', image: baa_img , link:`${lang}/analytics/baa-market-analysis`},
        ],
        japan: [
            { id: 1, tag: 'japan', title: 'Transformation roadmap for global bank', image: japan_img, link:`${lang}/analytics/japan-market-analysis`}
        ],
        gr: [
            { id: 1, tag: 'gr', title: 'Transformation roadmap for global bank', image: gr_img, link:`${lang}/analytics/gr-market-analysis` },
        ],
        mr: [
            { id: 1, tag: 'mr', title: 'Transformation roadmap for global bank', image: marokka_img, link:`${lang}/analytics/mr-market-analysis` },
        ]
    };

    useEffect(() => {
        const update = () => setCardHeight(getCardHeight());
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    useEffect(() => {
        offsetRef.current = 0;
        if (trackRef.current) trackRef.current.style.transform = `translateX(0px)`;
    }, [activeTab]);

    const applyTransform = useCallback(() => {
        if (trackRef.current) trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }, []);

    const loop = useCallback(() => {
        const sw = singleWidthRef.current;
        const canLoop = itemsCountRef.current > 1;
        if (!isDraggingRef.current && sw > 0 && canLoop) {
            offsetRef.current -= SPEED;
            if (offsetRef.current <= -sw) offsetRef.current += sw;
            applyTransform();
        }
        rafRef.current = requestAnimationFrame(loop);
    }, [applyTransform]);

    useEffect(() => {
        rafRef.current = requestAnimationFrame(loop);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, [loop]);

    const items = activeTab === 'all'
        ? Object.values(caseStudies).flat()
        : (caseStudies[activeTab] ?? []);

    itemsCountRef.current = items.length;
    const cardWidth = Math.round(cardHeight * IMAGE_ASPECT);
    singleWidthRef.current = items.length * (cardWidth + CARD_GAP);

    const looped = items.length > 1 ? [...items, ...items, ...items] : items;
    const isLoopable = items.length > 1;

    const onPointerDown = (e: React.PointerEvent) => {
        if (!isLoopable) return;
        isDraggingRef.current = true;
        dragStartXRef.current = e.clientX;
        dragStartOffsetRef.current = offsetRef.current;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (!isDraggingRef.current || !isLoopable) return;
        const sw = singleWidthRef.current;
        let next = dragStartOffsetRef.current + (e.clientX - dragStartXRef.current);
        if (next <= -sw) next += sw;
        if (next > 0) next -= sw;
        offsetRef.current = next;
        applyTransform();
    };

    const onPointerUp = () => { isDraggingRef.current = false; };

    return (
        <section className="w-full bg-white pt-16 sm:pt-20 pb-0 font-sans overflow-hidden max-w-full">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 w-full">

                {/* Header */}
                <div className="mb-8 sm:mb-10">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400 mb-3">
                        МЕЖДУНАРОДНЫЕ РЫНКИ
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-[72px] font-semibold text-gray-900 leading-[1.05] tracking-tight">
                        Анализ текстильных <br className="hidden sm:block" /> рынков по странам
                    </h2>
                </div>

                {/* Tabs row */}
                <div className="flex items-end justify-between border-b border-gray-200 gap-2">
                    <div
                        ref={tabsScrollRef}
                        className="flex items-center gap-0.5 overflow-x-auto scrollbar-none flex-1 min-w-0"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {tabs.map((tab,index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(tab.tag)}
                                className="relative px-3 sm:px-4 py-3 text-[13px] sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0"
                                style={{
                                    color: activeTab === tab.tag ? '#111827' : '#9ca3af',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                {tab.title}
                                {activeTab === tab.tag && (
                                    <motion.div
                                        layoutId="tab-underline-s4"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900"
                                        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Swiper */}
            <div
                className={`relative w-full overflow-hidden mt-5 sm:mt-6 select-none ${isLoopable ? 'cursor-grab active:cursor-grabbing' : ''}`}
                style={{ paddingLeft: 16, paddingBottom: 40 }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerLeave={onPointerUp}
            >
                <div
                    ref={trackRef}
                    className="flex"
                    style={{ gap: CARD_GAP, willChange: 'transform' }}
                >
                    {looped.map((item, i) => (
                        <CaseCard key={`${activeTab}-${item.id}-${i}`} item={item} cardHeight={cardHeight} />
                    ))}
                </div>
            </div>

        </section>
    );
}

// ─── HOME S3 ─────────────────────────────────────────────────────────────────

export function HomeS3() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 640);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const handleDownload = (zipFile: string) => {
        const link = document.createElement('a');
        link.href = `downloads/${zipFile}`;
        link.download = zipFile;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="w-full bg-white py-16 sm:py-24 lg:py-36 font-sans overflow-hidden max-w-full">
            <div className="mx-auto px-4 sm:px-8 lg:px-16 max-w-[1400px] w-full">

                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400 mb-3 sm:mb-4">
                        МОНИТОРИНГ
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-[76px] font-semibold text-gray-900 leading-tight tracking-tight">
                        Динамика цен на хлопок
                    </h2>
                </div>

                <div className="relative">
                    {awards.map((award, i) => {
                        const isHovered = hoveredIndex === i;

                        return (
                            <div
                                key={i}
                                onMouseEnter={() => !isMobile && setHoveredIndex(i)}
                                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                                onTouchStart={() => isMobile && setHoveredIndex(i === hoveredIndex ? null : i)}
                                onClick={() => handleDownload(award.zipFile)}
                                className="relative cursor-pointer"
                                style={{ borderTop: i === 0 ? '1px solid #e5e7eb' : 'none' }}
                            >
                                <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-200 z-0" />
                                <motion.div
                                    className="absolute bottom-0 left-0 h-[2px] bg-gray-900 z-10"
                                    initial={{ width: '0%' }}
                                    animate={{ width: isHovered ? '100%' : '0%' }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                />

                                <div className="relative z-20 flex items-center gap-3 sm:gap-6 lg:gap-10 px-3 sm:px-6 lg:px-10 py-5 sm:py-7 lg:py-9">

                                    <span className="text-sm sm:text-base text-gray-400 font-normal w-12 sm:w-16 lg:w-20 shrink-0 tabular-nums">
                    {award.year}
                  </span>

                                    <motion.h3
                                        animate={{ color: isHovered ? '#111827' : '#374151' }}
                                        transition={{ duration: 0.25 }}
                                        className="flex-1 text-xl sm:text-2xl lg:text-4xl font-semibold leading-snug min-w-0"
                                    >
                                        {award.title}
                                        <span className="block text-sm sm:text-base lg:text-lg font-normal text-gray-400 mt-1">
                                            {award.subtitle}
                                        </span>
                                    </motion.h3>

                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.5, y: 8 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.5, y: 8 }}
                                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                                className="absolute left-1/2 -translate-x-1/2 z-30 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-[#1B222C] flex items-center justify-center"
                                                style={{
                                                    boxShadow: '0 12px 40px rgba(0,0,0,0.22)',
                                                    border: '2px solid rgba(255,255,255,0.12)',
                                                }}
                                            >
                                                <DownloadIcon />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="hidden md:flex items-center gap-2 shrink-0">
                                        <LocationIcon />
                                        <span className="text-sm lg:text-base text-gray-500 whitespace-nowrap">
                      {award.location}
                    </span>
                                    </div>

                                    <motion.a
                                        href={`/downloads/${award.zipFile}`}
                                        animate={{ color: isHovered ? '#111827' : '#9ca3af' }}
                                        transition={{ duration: 0.25 }}
                                        className="shrink-0 p-1"
                                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleDownload(award.zipFile); }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17L17 7M17 7H7M17 7v10" />
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

// ─── DEFAULT EXPORT (preview both) ───────────────────────────────────────────

export default function HomeSections({lang}:{lang:string}) {
    return (
        <main className="min-h-screen bg-white">
            <HomeS3 />
            <HomeS4  lang={lang}/>
        </main>
    );
}