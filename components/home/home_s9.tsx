'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const posts = [
    {
        id: 1,
        date: 'Sep 30, 2024',
        category: 'Economy',
        title: 'Day to day work made our life simple and easy',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
        href: '#',
    },
    {
        id: 2,
        date: 'Sep 30, 2024',
        category: 'Investment',
        title: 'The essential steps for business success',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
        href: '#',
    },
    {
        id: 3,
        date: 'Sep 30, 2024',
        category: 'Research',
        title: 'Business management for all future successful projects',
        image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80',
        href: '#',
    },
];

function ArrowButton({ hovered }: { hovered: boolean }) {
    return (
        <motion.div
            className="w-10 h-10 rounded-full border border-[#d1d5db] flex items-center justify-center"
            animate={{
                backgroundColor: hovered ? '#1B222C' : '#ffffff',
                borderColor: hovered ? '#1B222C' : '#d1d5db',
            }}
            transition={{ duration: 0.25 }}
        >
            <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ color: hovered ? '#ffffff' : '#1B222C' }}
                transition={{ duration: 0.25 }}
            >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
            </motion.svg>
        </motion.div>
    );
}

function PostCard({ post, index }: { post: typeof posts[0]; index: number }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image */}
            <Link href={post.href} className="block overflow-hidden aspect-[4/3]">
                <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hovered ? 1.04 : 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    draggable={false}
                />
            </Link>

            {/* Meta */}
            <p
                className="text-[13px] text-[#9ca3af]"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
                {post.date}{' '}
                <span className="text-[#9ca3af]">/</span>{' '}
                {post.category}
            </p>

            {/* Title */}
            <Link href={post.href} className="no-underline">
                <motion.h3
                    className="text-[22px] sm:text-[24px] font-semibold leading-snug"
                    animate={{ color: hovered ? '#000000' : '#1B222C' }}
                    transition={{ duration: 0.2 }}
                    style={{
                        fontFamily: '"DM Sans", sans-serif',
                        letterSpacing: '-0.02em',
                    }}
                >
                    {post.title}
                </motion.h3>
            </Link>

            {/* Arrow button */}
            <Link href={post.href} className="mt-2 inline-block">
                <ArrowButton hovered={hovered} />
            </Link>
        </motion.article>
    );
}

export default function HomeS9() {
    return (
        <section className="w-full bg-white py-16 sm:py-20 lg:py-28 font-sans">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-10 sm:mb-14"
                >
                    <p
                        className="text-[12px] sm:text-[13px] text-[#9ca3af] mb-3"
                        style={{ fontFamily: '"DM Sans", sans-serif' }}
                    >
                        Insights
                    </p>
                    <h2
                        className="text-[#1B222C] font-semibold leading-tight"
                        style={{
                            fontSize: 'clamp(32px, 5vw, 64px)',
                            fontFamily: '"DM Sans", sans-serif',
                            letterSpacing: '-0.03em',
                        }}
                    >
                        Latest news coming
                    </h2>
                </motion.div>

                {/* Posts grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {posts.map((post, i) => (
                        <PostCard key={post.id} post={post} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}