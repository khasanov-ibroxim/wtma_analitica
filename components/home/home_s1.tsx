"use client"
import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const services = [
    {
        id: '01',
        label: 'HR Researches',
        title: 'Unique & modern business tips for our clients.',
        description: 'Elevate your experience with our premium services tailored to your needs.',
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=700&q=80',
    },
    {
        id: '02',
        label: 'Data Analysis',
        title: 'Unique & modern business tips for our clients.',
        description: 'Elevate your experience with our premium services tailored to your needs.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80',
    },
    {
        id: '03',
        label: 'Unique & modern',
        title: 'Unique & modern business tips for our clients.',
        description: 'Elevate your experience with our premium services tailored to your needs.',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80',
    },
];

export default function HomeS1() {
    const [active, setActive] = useState(0);

    return (
        <section
            className="container min-h-screen bg-[#fff] flex items-center py-10 px-4 sm:px-6 lg:px-10 font-sans overflow-hidden w-full max-w-full">
            <div className="w-full mx-auto flex flex-col lg:flex-row gap-8 lg:gap-8 items-stretch max-w-full">

                {/* LEFT: Services cards - MOBILE SWIPER */}
                <div className="w-full lg:w-[50%] shrink-0">

                    {/* Mobile: Full card swiper */}
                    <div className="lg:hidden">
                        <div className="relative" style={{minHeight: 480}}>
                            {services.map((s, i) => (
                                <AnimatePresence key={s.id} mode="wait">
                                    {active === i && (
                                        <motion.div
                                            initial={{opacity: 0, x: 100}}
                                            animate={{opacity: 1, x: 0}}
                                            exit={{opacity: 0, x: -100}}
                                            transition={{duration: 0.4, ease: [0.22, 1, 0.36, 1]}}
                                            className="absolute inset-0 flex flex-col bg-[#E4E9F4] rounded-lg overflow-hidden"
                                        >
                                            {/* Number */}
                                            <div className="pt-6 pl-6">
                                                <span className="text-4xl font-semibold text-gray-900">
                                                    {s.id}
                                                </span>
                                            </div>

                                            {/* Image */}
                                            <div className="mx-0 overflow-hidden h-48 mt-4">
                                                <img
                                                    src={s.image}
                                                    alt={s.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="flex flex-col gap-3 px-6 pt-6 pb-6 flex-1">
                                                <h3 className="text-gray-900 font-semibold text-lg leading-snug">
                                                    {s.title}
                                                </h3>
                                                <p className="text-gray-500 text-sm leading-relaxed">
                                                    {s.description}
                                                </p>

                                                <div className="flex items-end justify-between mt-auto pt-4">
                                                    <button
                                                        className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                                                    >
                                                        Read More
                                                        <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                                                            <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
                                                                  stroke="currentColor" strokeWidth="1.8"
                                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </button>
                                                    <span
                                                        className="select-none pointer-events-none font-bold text-white/50 text-6xl"
                                                        aria-hidden="true"
                                                    >
                                                        {s.id}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            ))}
                        </div>

                        {/* Dots navigation */}
                        <div className="flex justify-center gap-2 mt-6">
                            {services.map((s, i) => (
                                <button
                                    key={s.id}
                                    onClick={() => setActive(i)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        active === i ? 'bg-gray-900 w-8' : 'bg-gray-300'
                                    }`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Desktop: Original accordion */}
                    <div className="hidden lg:flex items-center justify-center gap-5 flex-row shrink-0 self-stretch"
                         style={{minHeight: 480}}>
                        {services.map((s, i) => {
                            const isActive = active === i;
                            return (
                                <motion.div
                                    key={s.id}
                                    layout
                                    animate={{
                                        width: isActive ? 380 : 72,
                                        backgroundColor: isActive ? '#ffffff' : '#e4e9f4',
                                    }}
                                    transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
                                    onClick={() => setActive(i)}
                                    className="relative flex flex-col justify-between cursor-pointer overflow-hidden shrink-0 self-stretch border-r border-[#cdd3e0] last:border-r-0"
                                    style={{minHeight: 480}}
                                >
                                    {/* Number */}
                                    <div className="pt-6 text-center shrink-0">
                                        <span
                                            className="text-[40px] font-semibold tracking-tight"
                                        >
                                            {s.id}
                                        </span>
                                    </div>

                                    {/* ACTIVE content */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                className="absolute inset-0 flex flex-col justify-between pt-14 overflow-hidden bg-[#E4E9F4]"
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1, transition: {duration: 0.35, delay: 0.22}}}
                                                exit={{opacity: 0, transition: {duration: 0.12}}}
                                            >
                                                <div className="mx-0 overflow-hidden" style={{height: 220}}>
                                                    <motion.img
                                                        src={s.image}
                                                        alt={s.title}
                                                        className="w-full h-full object-cover"
                                                        initial={{scale: 1.07}}
                                                        animate={{scale: 1}}
                                                        transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-2 px-5 pt-4 pb-6 flex-1">
                                                    <h3 className="text-gray-900 font-semibold text-[17px] leading-snug">
                                                        {s.title}
                                                    </h3>
                                                    <p className="text-gray-500 text-sm leading-relaxed">
                                                        {s.description}
                                                    </p>

                                                    <div className="flex items-end justify-between mt-auto pt-3">
                                                        <button
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                                                        >
                                                            Read More
                                                            <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                                                                <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
                                                                      stroke="currentColor" strokeWidth="1.8"
                                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                                            </svg>
                                                        </button>
                                                        <span
                                                            className="select-none pointer-events-none font-bold text-white/50"
                                                            style={{fontSize: 72, lineHeight: 1}}
                                                            aria-hidden="true"
                                                        >
                                                            {s.id}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* INACTIVE: rotated label */}
                                    <AnimatePresence>
                                        {!isActive && (
                                            <motion.div
                                                className="pb-6 flex justify-center shrink-0"
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1, transition: {delay: 0.25}}}
                                                exit={{opacity: 0, transition: {duration: 0.1}}}
                                            >
                                                <span
                                                    className="text-[18px] font-medium tracking-[0.13em] uppercase whitespace-nowrap "
                                                    style={{
                                                        writingMode: 'vertical-rl',
                                                        transform: 'rotate(180deg)',
                                                        margin: '20px'
                                                    }}
                                                >
                                                    {s.label}
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* ══════════════════
            RIGHT: STATIC
        ══════════════════ */}
                <div
                    className="flex-1 flex flex-col justify-around gap-4 lg:pl-10 xl:pl-16 py-6 lg:py-2 relative overflow-hidden">

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 mb-3 sm:mb-5">
                            Экспертная аналитика
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-[58px] font-medium text-gray-900 leading-[1.08] tracking-tight">
                            Аналитика. <br/>
                            Экспертиза.<br/>
                            Прогнозы.
                        </h2>
                    </div>

                    <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-md mt-4 lg:mt-0">
                        Центр экспертизы предоставляет глубокий анализ отраслевых процессов, оценку рыночной конъюнктуры
                        и экспертные прогнозы. Мы помогаем компаниям понимать факторы, влияющие на развитие текстильного
                        рынка, и принимать решения на основе данных.
                    </p>
                </div>

            </div>
        </section>
    );
}