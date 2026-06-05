"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    { id: 1, name: 'Sarah N. Newman', role: 'Founder, Newman',
        quote: '"Our focus is on delivering superior value to our clients for company modification. Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure your business succeeds. Thinking, writing and planning with brand for more than 50 years."',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80' },
    { id: 2, name: 'Marcus J. Williams', role: 'CEO, Brightline',
        quote: '"Working with this team transformed our operations completely. Their strategic insight and attention to detail helped us scale faster than we ever imagined."',
        avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80' },
    { id: 3, name: 'David Park', role: 'Founder, FinStack',
        quote: '"From day one they understood our vision and helped us build financial systems that scale. Unmatched depth of knowledge in both strategy and execution."',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
    { id: 4, name: 'Priya Chandrasekaran', role: 'Director, Apex Capital',
        quote: '"Exceptional expertise across every stage of our growth journey. The frameworks they built gave us the clarity to make bold, confident decisions."',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
    { id: 5, name: 'Lena Hoffmann', role: 'COO, Vantage EU',
        quote: '"The consulting programme they ran was a turning point. We left with a concrete roadmap and the confidence to execute it across three continents."',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80' },
    { id: 6, name: 'Amara Osei', role: 'VP Strategy, Kairos',
        quote: '"None bring this level of genuine commitment to client outcomes. Truly a long-term partner we rely on for every major decision."',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80' },
    { id: 7, name: 'James O. Thornton', role: 'Partner, Meridian Group',
        quote: '"Their market analysis reports are the gold standard in the industry. Rigorous, actionable, and always delivered on time."',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
];

const logos = [
    { name: '/OEVA',     font: '"Syne", sans-serif',         weight: 800, style: 'normal', spacing: '-0.03em', size: 26 },
    { name: 'Beanca',    font: '"Playfair Display", serif',  weight: 500, style: 'normal', spacing: '0.01em',  size: 26 },
    { name: 'Mosvolk',   font: '"Syne", sans-serif',         weight: 700, style: 'normal', spacing: '-0.02em', size: 24 },
    { name: 'Recoletta', font: '"Playfair Display", serif',  weight: 700, style: 'italic', spacing: '-0.01em', size: 24 },
    { name: 'vagoda',    font: '"DM Sans", sans-serif',      weight: 300, style: 'normal', spacing: '0.04em',  size: 26 },
    { name: 'Mosvolk',   font: '"Syne", sans-serif',         weight: 700, style: 'normal', spacing: '-0.02em', size: 24 },
];

const BASE = 54;
const ACTIVE = 86;
const zigzagY = (i: number) => (i % 2 === 0 ? 0 : 28);

// ── PROGRESS ARC ─────────────────────────────────────────────────────────────
function ProgressArc({ size }: { size: number }) {
    const sw = 2.5;
    const r = (size - sw * 2) / 2;
    const cx = size / 2;
    const cy = size / 2;
    const C = 2 * Math.PI * r;
    return (
        <svg
            width={size} height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="absolute inset-0 pointer-events-none"
            style={{ transform: 'rotate(-90deg)' }}
        >
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#d1d5db" strokeWidth={sw} />
            <motion.circle
                cx={cx} cy={cy} r={r}
                fill="none" stroke="#1B222C" strokeWidth={sw}
                strokeLinecap="round" strokeDasharray={C}
                animate={{ strokeDashoffset: [C, 0] }}
                transition={{ duration: 2.4, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 0.3 }}
                initial={{ strokeDashoffset: C }}
            />
        </svg>
    );
}

// ── LOGO SWIPER ───────────────────────────────────────────────────────────────
const GAP = 12;

function LogoSwiper() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef(0);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const startOffset = useRef(0);
    const cardWidthRef = useRef(0);
    const singleSetWidth = useRef(0);

    const items = [...logos, ...logos];

    const measure = useCallback(() => {
        if (!containerRef.current) return;
        const total = containerRef.current.offsetWidth;
        let perRow = 6;
        if (total < 900) perRow = 4;
        if (total < 560) perRow = 2.5;
        const cw = (total - GAP * (Math.ceil(perRow) - 1)) / perRow;
        cardWidthRef.current = cw;
        singleSetWidth.current = logos.length * (cw + GAP);
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
        }
    }, []);

    useEffect(() => {
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [measure]);

    const clamp = (v: number) => {
        const sw = singleSetWidth.current;
        if (sw === 0) return v;
        let n = v % sw;
        if (n > 0) n -= sw;
        if (n < -sw) n += sw;
        return n;
    };

    const applyTransform = () => {
        if (trackRef.current)
            trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    };

    const onPointerDown = (e: React.PointerEvent) => {
        isDragging.current = true;
        startX.current = e.clientX;
        startOffset.current = offsetRef.current;
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (!isDragging.current) return;
        offsetRef.current = clamp(startOffset.current + (e.clientX - startX.current));
        applyTransform();
    };

    const onPointerUp = () => { isDragging.current = false; };

    return (
        <div
            ref={containerRef}
            className="w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
            style={{ padding: `0 ${GAP}px`, boxSizing: 'border-box' }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
        >
            <div
                ref={trackRef}
                className="flex"
                style={{ gap: GAP, willChange: 'transform', userSelect: 'none' }}
            >
                {items.map((logo, i) => {
                    return (
                        <div
                            key={i}
                            className="bg-white flex items-center justify-center shrink-0"
                            style={{
                                width: cardWidthRef.current || 'auto',
                                minWidth: 140,
                                paddingTop: 28,
                                paddingBottom: 28,
                                paddingLeft: 16,
                                paddingRight: 16,
                            }}
                        >
                <span
                    style={{
                        fontFamily: logo.font,
                        fontWeight: logo.weight,
                        fontStyle: logo.style,
                        letterSpacing: logo.spacing,
                        fontSize: logo.size,
                        color: '#111827',
                        userSelect: 'none',
                        whiteSpace: 'nowrap',
                    }}
                >
                  {logo.name}
                </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// ── HOME S5 ───────────────────────────────────────────────────────────────────
export default function HomeS5() {
    const [active, setActive] = useState(0);
    const cur = testimonials[active];

    return (
        <section className="w-full bg-[#eef0f8]  font-sans  relative py-24 pb-20 mt-20">

            {/* 1. ROTATING BADGE */}
            <div className="flex justify-center pt-10 sm:pt-14  absolute  right-[45%] top-[-120px]   z-10">
                <div className="relative w-[130px] h-[130px] sm:w-[148px] sm:h-[148px]">
                    {/* White circle bg */}
                    <div className="absolute inset-0 rounded-full border border-gray-300 bg-white shadow-sm" />

                    {/* Rotating text ring */}
                    <motion.svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 148 148"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
                    >
                        <defs>
                            <path
                                id="circle-path"
                                d="M 74,74 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
                            />
                        </defs>
                        <text
                            fontSize="10.5"
                            fontWeight="500"
                            letterSpacing="3.2"
                            fill="#1B222C"
                            fontFamily="'DM Sans', sans-serif"
                        >
                            <textPath href="#circle-path">
                                HIRE US TODAY - HIRE US TODAY - asds
                            </textPath>
                        </text>
                    </motion.svg>

                    {/* Static center quote icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                            <path
                                d="M0 22V13.4C0 9.8 0.9 6.86667 2.7 4.6C4.56667 2.26667 7.2 0.666667 10.6 0L11.8 2.2C9.86667 2.73333 8.3 3.7 7.1 5.1C5.96667 6.43333 5.36667 8.06667 5.3 10H10.6V22H0ZM16.6 22V13.4C16.6 9.8 17.5 6.86667 19.3 4.6C21.1667 2.26667 23.8 0.666667 27.2 0L28 2.2C26.0667 2.73333 24.5 3.7 23.3 5.1C22.1667 6.43333 21.5667 8.06667 21.5 10H27.2V22H16.6Z"
                                fill="#1B222C"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* 2. MAIN CONTENT — watermark + text + avatars */}
            <div className="relative">
                {/* Watermark */}
                <div
                    className="absolute inset-x-0 top-0 flex justify-center pointer-events-none select-none overflow-hidden"
                    style={{ zIndex: 0 }}
                    aria-hidden="true"
                >
          <span
              className="font-bold leading-none tracking-tighter"
              style={{
                  fontFamily: '"Syne", sans-serif',
                  fontSize: 'clamp(120px, 22vw, 300px)',
                  color: 'rgba(27,34,44,0.04)',
                  marginTop: -10,
              }}
          >
           WTMA
          </span>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-[860px] mx-auto px-4 sm:px-8 flex flex-col items-center pt-16 sm:pt-20">

                    {/* Name + role */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`h-${active}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="text-center mb-5"
                        >
                            <p className="text-gray-900 font-semibold text-[17px] sm:text-lg">{cur.name}</p>
                            <p className="text-gray-400 text-sm mt-1">{cur.role}</p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Quote */}
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`q-${active}`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                            className="text-center text-gray-700 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.9] max-w-[640px] mb-12 sm:mb-16"
                        >
                            {cur.quote}
                        </motion.p>
                    </AnimatePresence>

                    {/* Avatars — zigzag */}
                    <div
                        className="flex items-start justify-center gap-2 sm:gap-3 mb-12 sm:mb-16"
                        style={{ minHeight: ACTIVE + zigzagY(1) }}
                    >
                        {testimonials.map((t, i) => {
                            const isActive = active === i;
                            const size = isActive ? ACTIVE : BASE;
                            return (
                                <motion.button
                                    key={t.id}
                                    onClick={() => setActive(i)}
                                    className="relative shrink-0 focus:outline-none"
                                    animate={{ y: zigzagY(i), width: size, height: size }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ width: size, height: size }}
                                >
                                    {isActive && <ProgressArc size={size} />}
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        draggable={false}
                                        className="rounded-full object-cover grayscale select-none absolute"
                                        style={{
                                            width: size - (isActive ? 10 : 4),
                                            height: size - (isActive ? 10 : 4),
                                            top: isActive ? 5 : 2,
                                            left: isActive ? 5 : 2,
                                            border: isActive ? 'none' : '1.5px solid #d1d5db',
                                        }}
                                    />
                                </motion.button>
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* 3. LOGO SWIPER */}
            <LogoSwiper />

        </section>
    );
}