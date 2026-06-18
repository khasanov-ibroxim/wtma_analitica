"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

// ─── DATA ────────────────────────────────────────────────────────────────────

const tabs = [{title:"США" , tag:"usa"}, {title:"Саудовская Аравия" , tag:"baa"}, {title:"Япония" , tag:"japan"}, {title:"Германия" , tag:"gr"}];

const caseStudies: Record<string, { id: number; tag: string; title: string; image: string }[]> = {
    usa: [
        { id: 1, tag: 'usa', title: 'Market data deep-dive for a leading investment firm', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80' },
        { id: 2, tag: 'usa', title: 'Competitive intelligence platform build-out', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80' },
        { id: 3, tag: 'usa', title: 'Quantitative risk model for hedge fund portfolio', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80' },
        { id: 4, tag: 'usa', title: 'Consumer behaviour analytics redesign', image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80' },
        { id: 5, tag: 'usa', title: 'Real-time dashboard for financial KPIs', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' },
    ],
    baa: [
        { id: 1, tag: 'baa', title: 'Strategic growth plan for mid-market retailer', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
        { id: 2, tag: 'baa', title: 'Operational efficiency audit — logistics sector', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80' },
        { id: 3, tag: 'baa', title: 'Go-to-market strategy for SaaS startup', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
        { id: 4, tag: 'baa', title: 'M&A due-diligence support for tech acquirer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80' },
    ],
    japan: [
        { id: 1, tag: 'japan', title: 'Transformation roadmap for global bank', image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80' },
        { id: 2, tag: 'japan', title: 'Change management programme — pharma', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80' },
        { id: 3, tag: 'japan', title: 'Digital strategy advisory for media group', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' },
    ],
    gr: [
        { id: 1, tag: 'gr', title: 'Transformation roadmap for global bank', image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80' },
        { id: 2, tag: 'gr', title: 'Change management programme — pharma', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80' },
        { id: 3, tag: 'gr', title: 'Digital strategy advisory for media group', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' },
    ]
};

const awards = [
    { year: '2024', title: 'TradingTech Insight Award', location: 'Boston, Massachusetts', href: '#' },
    { year: '2023', title: 'InvestmentNews Award', location: 'World wide', href: '#' },
    { year: '2022', title: 'Micro Business Award', location: 'Brooklyn, NY', href: '#' },
    { year: '2021', title: 'Finance Excellence Award', location: 'New York, NY', href: '#' },
    { year: '2020', title: 'Global Markets Award', location: 'London, UK', href: '#' },
];

// ─── CARD WIDTH: responsive ──────────────────────────────────────────────────
const CARD_GAP = 16;
const SPEED = 0.1;

function getCardWidth() {
    if (typeof window === 'undefined') return 320;
    if (window.innerWidth < 480) return Math.min(window.innerWidth - 48, 300);
    if (window.innerWidth < 768) return 320;
    return 380;
}

// ─── CASE CARD ───────────────────────────────────────────────────────────────

function CaseCard({ item, cardWidth }: { item: { tag: string; title: string; image: string }; cardWidth: number }) {
    const [hovered, setHovered] = useState(false);
    console.log(item)
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative shrink-0 overflow-hidden"
            style={{ width: cardWidth, height: cardWidth < 340 ? 360 : 460, cursor: 'pointer' }}
        >
            <div className="absolute inset-0 overflow-hidden">
                <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hovered ? 1.05 : 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    draggable={false}
                />
            </div>

            <div className="absolute inset-0 z-10"
                 style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.0) 55%)' }} />

            {/* Tag */}
            <div className="absolute top-4 left-4 z-20">
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1.5">
          {item.tag}
        </span>
            </div>

            {/* Arrow */}
            <motion.div
                className="absolute top-4 right-4 z-20 w-8 h-8 bg-white flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
                transition={{ duration: 0.25 }}
            >
                <ArrowUpRight size={14} className="text-gray-900" />
            </motion.div>

            {/* Bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-20 px-5 pb-6">
                <h3 className="text-white text-base font-semibold leading-snug">{item.title}</h3>
                <motion.div
                    initial={false}
                    animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10, height: hovered ? 'auto' : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                >
                    <div className="pt-2.5 flex items-center gap-1.5 text-white/60 text-sm font-medium">
                        <span>View case study</span>
                        <ArrowUpRight size={12} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// ─── HOME S4 ─────────────────────────────────────────────────────────────────

export function HomeS4() {
    const [activeTab, setActiveTab] = useState('usa');
    const [cardWidth, setCardWidth] = useState(380);
    const tabsScrollRef = useRef<HTMLDivElement>(null);

    const trackRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef(0);
    const isDraggingRef = useRef(false);
    const dragStartXRef = useRef(0);
    const dragStartOffsetRef = useRef(0);
    const rafRef = useRef<number | null>(null);
    const singleWidthRef = useRef(0);

    useEffect(() => {
        const update = () => setCardWidth(getCardWidth());
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
        if (!isDraggingRef.current && sw > 0) {
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

    const items = caseStudies[activeTab];
    singleWidthRef.current = items.length * (cardWidth + CARD_GAP);
    const looped = [...items, ...items, ...items];

    const onPointerDown = (e: React.PointerEvent) => {
        isDraggingRef.current = true;
        dragStartXRef.current = e.clientX;
        dragStartOffsetRef.current = offsetRef.current;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (!isDraggingRef.current) return;
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
                    {/* Scrollable tabs */}
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

                    {/* More works button — hidden on very small screens, icon-only on sm */}
                    <button
                        className="hidden xs:flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-700 border border-gray-300 px-3 sm:px-4 py-2 mb-2 shrink-0 hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap"
                        style={{ borderRadius: 0 }}
                    >
                        <span className="hidden sm:inline">More Works</span>
                        <ArrowUpRight size={14} />
                    </button>
                </div>
            </div>

            {/* Swiper */}
            <div
                className="relative w-full overflow-hidden mt-5 sm:mt-6 cursor-grab active:cursor-grabbing select-none"
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
                        <CaseCard key={`${activeTab}-${item.id}-${i}`} item={item} cardWidth={cardWidth} />
                    ))}
                </div>
            </div>

            {/* Mobile "More Works" link */}
            <div className="xs:hidden flex justify-center pb-10 pt-2">
                <button className="flex items-center gap-1.5 text-sm font-medium text-gray-700 border border-gray-300 px-5 py-2.5">
                    More Works <ArrowUpRight size={14} />
                </button>
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

    return (
        <section className="w-full bg-white py-16 sm:py-24 lg:py-36 font-sans overflow-hidden max-w-full">
            <div className="mx-auto px-4 sm:px-8 lg:px-16 max-w-[1400px] w-full">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400 mb-3 sm:mb-4">
                        МОНИТОРИНГ
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-[76px] font-semibold text-gray-900 leading-tight tracking-tight">
                        Динамика цен на хлопок
                    </h2>
                </div>

                {/* Awards list */}
                <div className="relative">
                    {awards.map((award, i) => {
                        const isHovered = hoveredIndex === i;

                        return (
                            <div
                                key={i}
                                onMouseEnter={() => !isMobile && setHoveredIndex(i)}
                                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                                onTouchStart={() => isMobile && setHoveredIndex(i === hoveredIndex ? null : i)}
                                className="relative cursor-pointer"
                                style={{ borderTop: i === 0 ? '1px solid #e5e7eb' : 'none' }}
                            >
                                {/* Bottom border */}
                                <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-200 z-0" />
                                <motion.div
                                    className="absolute bottom-0 left-0 h-[2px] bg-gray-900 z-10"
                                    initial={{ width: '0%' }}
                                    animate={{ width: isHovered ? '100%' : '0%' }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                />

                                {/* Row */}
                                <div className="relative z-20 flex items-center gap-3 sm:gap-6 lg:gap-10 px-3 sm:px-6 lg:px-10 py-5 sm:py-7 lg:py-9">

                                    {/* Year */}
                                    <span className="text-sm sm:text-base text-gray-400 font-normal w-12 sm:w-16 lg:w-20 shrink-0 tabular-nums">
                    {award.year}
                  </span>

                                    {/* Title */}
                                    <motion.h3
                                        animate={{ color: isHovered ? '#111827' : '#374151' }}
                                        transition={{ duration: 0.25 }}
                                        className="flex-1 text-xl sm:text-2xl lg:text-4xl font-semibold leading-snug min-w-0"
                                    >
                                        {award.title}
                                    </motion.h3>

                                    {/* Floating badge */}
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
                                                <AwardIcon />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Location — hidden on mobile */}
                                    <div className="hidden md:flex items-center gap-2 shrink-0">
                                        <LocationIcon />
                                        <span className="text-sm lg:text-base text-gray-500 whitespace-nowrap">
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

export default function HomeSections() {
    return (
        <main className="min-h-screen bg-white">
            <HomeS3 />
            <HomeS4 />
        </main>
    );
}