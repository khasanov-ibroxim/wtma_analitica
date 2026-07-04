'use client';

import React, { useState, useEffect } from 'react';
import right_img from "@/assets/home/home_s6/home_s6_bg.jpg"
import Image from "next/image";
import { Play, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const YOUTUBE_ID = 'dQw4w9WgXcQ';

const HomeS6 = () => {
    const [hovered, setHovered] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [modalOpen]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setModalOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <>
            <div className="py-12 lg:py-24 overflow-hidden">
                <div className="px-5">
                    <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8 lg:items-end">

                        {/* LEFT: Text + Arrow */}
                        <div className="w-full lg:w-[45%] flex flex-col justify-between gap-8 lg:gap-12 pb-0 lg:pb-16 order-2 lg:order-1">
                            <div>
                                <h2
                                    className="font-semibold leading-[1.05] tracking-[-0.03em] text-[#1B222C]"
                                    style={{ fontSize: 'clamp(36px, 5vw, 80px)' }}
                                >
                                    Будущее
                                    <br />
                                    <span className="relative inline-block">
                                        <span className="relative z-10">рынка начинается</span>
                                        <span
                                            className="absolute bottom-[8%] left-0 w-full h-[30%] -z-0"
                                            style={{ background: 'rgba(230, 210, 200, 0.45)' }}
                                        />
                                    </span>
                                    {' '} с понимания данных
                                </h2>
                            </div>

                            <Link
                                href="/"
                                className="group self-start"
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                aria-label="Learn more"
                            >
                                <motion.div
                                    className="relative flex items-center justify-center"
                                    style={{ width: 100, height: 100 }}
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 rounded-full border-2 border-[#1B222C]"
                                        animate={hovered ? { rotate: 180, scale: 1.15 } : { rotate: 0, scale: 1 }}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                    <motion.div
                                        className="absolute rounded-full border border-dashed border-[#1B222C]/30"
                                        style={{ inset: -10 }}
                                        animate={hovered ? { rotate: -90, opacity: 1 } : { rotate: 0, opacity: 0.4 }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                    <motion.svg
                                        width="40" height="40" viewBox="0 0 24 24"
                                        fill="none" stroke="#1B222C" strokeWidth="1.6"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        animate={hovered ? { x: 4, y: -4 } : { x: 0, y: 0 }}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                                    </motion.svg>
                                </motion.div>
                                <motion.p
                                    className="mt-3 text-[13px] font-medium tracking-[0.08em] uppercase text-[#1B222C]/50 text-center"
                                    animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Explore
                                </motion.p>
                            </Link>
                        </div>

                        {/* RIGHT: Image with play button */}
                        <div className="w-full lg:w-[55%] h-[50vh] sm:h-[60vh] lg:h-screen relative overflow-hidden order-1 lg:order-2">
                            <Image
                                src={right_img}
                                alt="Experience"
                                fill
                                className="object-cover object-center"
                                priority
                            />

                            {/* Play button — mobilda markazda, desktopda chapda */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-[100px] lg:translate-x-0 lg:bottom-[100px]">
                                {[0, 0.8, 1.6].map((delay, i) => (
                                    <motion.span
                                        key={i}
                                        className="absolute inset-0 rounded-full border border-white/60"
                                        animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay }}
                                    />
                                ))}
                                <button
                                    onClick={() => setModalOpen(true)}
                                    className="relative z-10 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer border border-white/30 hover:bg-white/30 transition-colors duration-300"
                                    aria-label="Play video"
                                >
                                    <Play size={32} className="text-white ml-1 lg:hidden" fill="white" />
                                    <Play size={40} className="text-white ml-1 hidden lg:block" fill="white" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* VIDEO MODAL */}
            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        className="fixed inset-0 z-[9999] flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-black/85 cursor-pointer"
                            onClick={() => setModalOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <motion.div
                            className="relative z-10 w-full max-w-[900px] mx-4"
                            initial={{ scale: 0.88, opacity: 0, y: 24 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.88, opacity: 0, y: 16 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <button
                                onClick={() => setModalOpen(false)}
                                className="absolute -top-12 right-0 flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 z-20"
                                aria-label="Close video"
                            >
                                <span className="text-[13px] font-medium tracking-wide uppercase" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                                    Close
                                </span>
                                <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors duration-200">
                                    <X size={16} />
                                </div>
                            </button>
                            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                                    title="Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ border: 'none' }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HomeS6;