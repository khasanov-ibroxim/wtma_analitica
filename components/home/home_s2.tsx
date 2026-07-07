"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import {Props} from "next/script";
import analy from "@/assets/home/home_s2/analy.jpg"
import archive from "@/assets/home/home_s2/archive.jpg"
import dinamic from "@/assets/home/home_s2/dinamic.jpg"
import indexMarket from "@/assets/home/home_s2/indexMarket.jpg"
import tsent from "@/assets/home/home_s2/exspertize.jpg"

const panels = [
    {
        id: '01',
        link:"/analytics",
        tag: 'Аналитика рынков',
        title: 'Аналитика рынков',
        description: 'Ключевые тренды и показатели отрасли. ',
        image: analy,
    },
    {
        id: '02',
        link:"/cotton-index",
        tag: 'Индекс хлопка ',
        title: 'Индекс хлопка ',
        description: 'Ежедневный мониторинг цен на хлопок. ',
        image: indexMarket,
    },
    {
        id: '03',
        link:"/archive",
        tag: 'Архив котировок ',
        title: 'Архив котировок ',
        description: 'Исторические данные и аналитика цен. ',
        image: archive,
    },
    {
        id: '04',
        link:"/expertise",
        tag: 'Центр экспертизы ',
        title: 'Центр экспертизы ',
        description: 'Экспертные мнения и отраслевые оценки. ',
        image: tsent,
    },

];

export default function HomeS2({lang}: {lang: string})  {
    const [hovered, setHovered] = useState<number | null>(null);

    const activeBg = hovered !== null ? panels[hovered].image : panels[0].image;

    return (
        <section
            className="relative w-full font-sans overflow-hidden"
            style={{ height: '100vh', minHeight: 480, maxHeight: 720, maxWidth: '100vw' }}
        >
            {/* ── SINGLE BACKGROUND IMAGE (crossfade) ── */}
            <AnimatePresence>
                <motion.div
                    key={activeBg.src}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${activeBg.src})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: 'easeInOut' }}
                />
            </AnimatePresence>

            {/* ── GLOBAL DARK OVERLAY ── */}
            <div className="absolute inset-0 bg-black/55 z-10" />

            {/* ── PANELS ── */}
            <div className="relative z-20 flex h-full w-full overflow-x-auto md:overflow-x-visible">
                {panels.map((panel, i) => {
                    const isActive = hovered === i;

                    return (
                        <Link href={`/${lang}${panel.link}`}
                            key={panel.id}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            className="relative flex-1 h-full flex flex-col justify-between cursor-pointer overflow-hidden border-r border-white/10 last:border-r-0 min-w-[120px] sm:min-w-[150px]"
                        >
                            {/* ── RIGHT EDGE white line animating top→bottom on hover ── */}
                            <motion.div
                                className="absolute right-0 top-0 z-30 bg-white"
                                style={{ width: 2 }}
                                initial={{ height: 0, top: 0 }}
                                animate={isActive
                                    ? { height: '100%', top: 0, opacity: 1 }
                                    : { height: 0, top: 0, opacity: 0 }
                                }
                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            />

                            {/* ── TOP: vertical tag ── */}
                            <div className="flex justify-end pt-4 pr-4 shrink-0">
                <span
                    className="text-white text-[10px] font-medium tracking-[0.15em] uppercase whitespace-nowrap"
                    style={{ writingMode: 'vertical-rl', opacity: 0.65 }}
                >
                  {panel.tag}
                </span>
                            </div>

                            {/* ── BOTTOM: content ── */}
                            <div className="px-5 sm:px-7 pb-8 sm:pb-10 overflow-hidden">

                                {/* desc + button — animates from below, only on hover */}
                                <motion.div
                                    initial={false}
                                    animate={isActive
                                        ? { opacity: 1, y: 0, height: 'auto' }
                                        : { opacity: 0, y: 24, height: 0 }
                                    }
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden"
                                    style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                                >
                                    <div className="pb-4">
                                        <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-[220px]">
                                            {panel.description}
                                        </p>
                                        <button
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-2 border border-white text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
                                        >
                                            Подробно
                                            <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                                                <path
                                                    d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
                                                    stroke="currentColor" strokeWidth="1.8"
                                                    strokeLinecap="round" strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </motion.div>

                                {/* Title — always visible, never moves */}
                                <h3 className="text-white font-semibold text-base sm:text-lg leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                                    {panel.title}
                                </h3>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}