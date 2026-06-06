'use client';

import React, { useState, useEffect } from 'react';
import right_img from "@/assets/home_s6/imgi_34_video-02-bg.jpg"
import Image from "next/image";
import { Play, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const YOUTUBE_ID = 'dQw4w9WgXcQ'; // o'z video ID ingizga almashtiring

const HomeS6 = () => {
    const [hovered, setHovered] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    // Modal ochilganda scroll lock
    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [modalOpen]);

    // ESC tugmasi bilan yopish
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setModalOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <>
            <div className="py-24 overflow-hidden">
                <div className="container">
                    <div className="flex justify-between items-end gap-8">

                        {/* LEFT: Text + Arrow */}
                        <div className="w-[35%] flex flex-col justify-between gap-12 pb-16">

                            {/* Heading */}
                            <div>
                                <h2
                                    className="font-semibold leading-[1.05] tracking-[-0.03em] text-[#1B222C]"
                                    style={{ fontSize: 'clamp(48px, 5vw, 80px)' }}
                                >
                                    Get amazing
                                    <br />
                                    <span className="relative inline-block">
                                        <span className="relative z-10">experience</span>
                                        <span
                                            className="absolute bottom-[8%] left-0 w-full h-[30%] -z-0"
                                            style={{ background: 'rgba(230, 210, 200, 0.45)' }}
                                        />
                                    </span>
                                    {' '}with us
                                </h2>
                            </div>

                            {/* Animated Arrow Link */}
                            <Link
                                href="/"
                                className="group self-start"
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                aria-label="Learn more"
                            >
                                <motion.div
                                    className="relative flex items-center justify-center"
                                    style={{ width: 120, height: 120 }}
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
                                        width="44" height="44" viewBox="0 0 24 24"
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
                        <div className="w-[65%] h-screen relative overflow-hidden">
                            <Image
                                src={right_img}
                                alt="Experience"
                                fill
                                className="object-cover object-center"
                                priority
                            />

                            {/* Play button with ripple */}
                            <div className="absolute bottom-[100px] left-[100px]">
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
                                    className="relative z-10 w-[100px] h-[100px] bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer border border-white/30 hover:bg-white/30 transition-colors duration-300"
                                    aria-label="Play video"
                                >
                                    <Play size={40} className="text-white ml-1" fill="white" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ── VIDEO MODAL ── */}
            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        className="fixed inset-0 z-[9999] flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/85 cursor-pointer"
                            onClick={() => setModalOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Video container */}
                        <motion.div
                            className="relative z-10 w-full max-w-[900px] mx-4"
                            initial={{ scale: 0.88, opacity: 0, y: 24 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.88, opacity: 0, y: 16 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Close button — top right of video */}
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

                            {/* 16:9 iframe wrapper */}
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