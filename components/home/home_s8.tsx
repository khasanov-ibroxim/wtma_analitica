'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const socials = [
    { label: 'Bē', href: '#' },
    { label: 'in', href: '#' },
    { label: 'X',  href: '#' },
    { label: 'f',  href: '#' },
];

const team = [
    {
        name: 'Alson P. Paladin',
        role: 'CEO & Founder',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        socials,
    },
    {
        name: 'Teresa L. Marion',
        role: 'Hr Specialist',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
        socials,
    },
    {
        name: 'Donna D. Dicken',
        role: 'Economy Manager',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
        socials,
    },
    {
        name: 'Dianne M. Mason',
        role: 'Legal Officer',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
        socials,
    },
];

const ShareIcon = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
);

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
    const [hovered, setHovered] = useState(false);

    // Each social link fans out along the right edge of the circle
    // We place them as absolute positioned bubbles that slide out on hover
    const AVATAR_SIZE = 220;
    const RADIUS = AVATAR_SIZE / 2;

    // Positions for 4 links arranged vertically on the right side, fanning out
    const linkPositions = [
        { right: -52, top: 20 },   // Bē  — top
        { right: -52, top: 68 },   // in
        { right: -52, top: 116 },  // X
        { right: -52, top: 164 },  // f   — bottom
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-5"
        >
            {/* Hover zone — extra padding on right for links */}
            <div
                className="relative"
                style={{ width: AVATAR_SIZE + 56, height: AVATAR_SIZE }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Avatar circle */}
                <div
                    className="rounded-full overflow-hidden grayscale absolute left-0 top-0"
                    style={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
                >
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                    />
                </div>

                {/* Social link bubbles */}
                <AnimatePresence>
                    {hovered && member.socials.map((s, i) => (
                        <motion.a
                            key={s.label}
                            href={s.href}
                            onClick={(e) => e.preventDefault()}
                            initial={{ opacity: 0, x: -18, scale: 0.5 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -14, scale: 0.5 }}
                            transition={{
                                duration: 0.3,
                                delay: i * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="absolute z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#1B222C] hover:text-white transition-colors duration-200"
                            style={{
                                right: 0,
                                top: linkPositions[i].top,
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: 12,
                                fontWeight: 700,
                                textDecoration: 'none',
                                color: '#1B222C',
                            }}
                        >
                            {s.label}
                        </motion.a>
                    ))}
                </AnimatePresence>

                {/* Share button — always on circle bottom-right */}
                <div
                    className="absolute z-30 w-10 h-10 rounded-full bg-[#1B222C] text-white flex items-center justify-center shadow-md"
                    style={{ bottom: 8, left: AVATAR_SIZE - 28 }}
                >
                    <ShareIcon />
                </div>
            </div>

            {/* Name & Role */}
            <div className="text-center">
                <p
                    className="text-[#1B222C] font-semibold text-[18px] leading-snug"
                    style={{ fontFamily: '"DM Sans", sans-serif', letterSpacing: '-0.01em' }}
                >
                    {member.name}
                </p>
                <p
                    className="text-[#9ca3af] text-[13.5px] mt-0.5"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                >
                    {member.role}
                </p>
            </div>
        </motion.div>
    );
}

export default function HomeS8() {
    return (
        <section className="w-full py-20 lg:py-28 font-sans" style={{ background: '#eef0f8' }}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <p
                        className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#9ca3af] mb-3"
                        style={{ fontFamily: '"DM Sans", sans-serif' }}
                    >
                        Our Team
                    </p>
                    <h2
                        className="text-[#1B222C] font-semibold leading-tight"
                        style={{
                            fontSize: 'clamp(40px, 5.5vw, 72px)',
                            fontFamily: '"DM Sans", sans-serif',
                            letterSpacing: '-0.025em',
                        }}
                    >
                        Meet our legends
                    </h2>
                </motion.div>

                {/* Team grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 justify-items-center">
                    {team.map((member, i) => (
                        <TeamCard key={member.name} member={member} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}