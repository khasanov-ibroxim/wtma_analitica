'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import person_img from "@/assets/home_s7/imgi_36_h1-counter.jpg";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({
                     to,
                     suffix = '',
                     duration = 1800,
                 }: {
    to: number;
    suffix?: string;
    duration?: number;
}) {
    const [val, setVal] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    useEffect(() => {
        if (!inView) return;
        const start = performance.now();
        const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(ease * to));
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [inView, to, duration]);

    return (
        <span ref={ref}>
            {val}
            {suffix}
        </span>
    );
}

// ── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({
                      value,
                      suffix,
                      label,
                      delay,
                  }: {
    value: number;
    suffix: string;
    label: string;
    delay: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2"
        >
            <p
                className="font-semibold leading-none text-[#1B222C]"
                style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.03em' }}
            >
                <Counter to={value} suffix={suffix} />
            </p>
            <div className="w-full h-px bg-[#1B222C]/10 my-1" />
            <p className="text-[14px] leading-snug text-[#6b7280] max-w-[180px]"
               style={{ fontFamily: '"DM Sans", sans-serif' }}>
                {label}
            </p>
        </motion.div>
    );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function HomeS7() {
    return (
        <section className="w-full bg-white py-16 lg:py-28 overflow-hidden font-sans">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
                <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-0">

                    {/* LEFT: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-[36%] relative shrink-0"
                        style={{ minHeight: 380 }}
                    >
                        <Image
                            src={person_img}
                            alt="Team member"
                            fill
                            className="object-cover object-top grayscale-[15%]"
                            priority
                        />

                        {/* Floating "E." badge — faqat desktopda ko'rinadi */}
                        <div
                            className="hidden lg:flex absolute bottom-[28%] right-[-28px] z-10 w-[88px] h-[88px] rounded-full bg-white border border-[#e5e7eb] items-center justify-center shadow-sm"
                        >
                            {[0, 0.8, 1.6].map((delay, i) => (
                                <motion.span
                                    key={i}
                                    className="absolute inset-0 rounded-full border border-[#1B222C]/20"
                                    animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeOut",
                                        delay,
                                    }}
                                />
                            ))}
                            <span
                                className="text-[28px] font-semibold text-[#1B222C]"
                                style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '-0.01em' }}
                            >
                                E.
                            </span>
                        </div>
                    </motion.div>

                    {/* CENTER: Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 flex flex-col justify-center px-0 lg:px-12 xl:px-16 py-6 lg:py-0 gap-8"
                    >
                        <strong className={"text-2xl"}>«Будущее принадлежит тем, кто способен понимать рынок быстрее, чем он меняется.»</strong>
                        <p
                            className="text-[#1B222C] "
                            style={{ fontSize: 'clamp(15px, 1.35vw, 19px)', fontFamily: '"DM Sans", sans-serif', fontWeight: 400 }}
                        >
                            Сегодня аналитика становится основой стратегического лидерства в мировой текстильной индустрии. Изменения в глобальной торговле, производстве и потребительском спросе требуют от бизнеса новых подходов к принятию решений и управлению развитием.
                        </p>

                        <div className="w-12 h-px bg-[#1B222C]/20" />

                        <p
                            className="text-[#6b7280] p-0 m-0"
                            style={{ fontSize: 'clamp(14px, 1.2vw, 17px)', fontFamily: '"DM Sans", sans-serif', fontWeight: 400 }}
                        >
                            В Tex Area Analytics мы объединяем отраслевую экспертизу, современные методы исследования и глубокое понимание международных рынков, чтобы помогать компаниям видеть перспективы раньше конкурентов и уверенно адаптироваться к новым экономическим реалиям.
                        </p>
    <p>Наша цель — предоставлять не просто данные, а интеллектуальные решения, способные формировать устойчивые конкурентные преимущества и открывать новые возможности для роста на глобальном рынке.</p>
                        <p
                            className="text-[#6b7280] "
                            style={{ fontSize: 'clamp(14px, 1.2vw, 17px)', fontFamily: '"DM Sans", sans-serif', fontWeight: 400 }}
                        >
                            Шамсиддин Ёкубов <br/>
                            Основатель Tex Area Analytics

                        </p>
                    </motion.div>

                    {/* RIGHT: Stats */}
                    <div className="w-full lg:w-[24%] shrink-0 flex flex-row lg:flex-col justify-around lg:justify-center gap-8 lg:gap-12 lg:pl-10 xl:pl-14 lg:border-l border-t lg:border-t-0 border-[#e5e7eb] pt-8 lg:pt-0">
                        <StatCard value={10} suffix="+" label="опыт в маркетинге" delay={0.2} />
                        <StatCard value={90} suffix="+" label="фабрик отрасли" delay={0.35} />
                    </div>

                </div>
            </div>
        </section>
    );
}