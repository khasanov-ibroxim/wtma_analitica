"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const milestones = [
    {
        id: "01",
        year: "1972",
        title: "Journey Was Started",
        desc:
            "We are constantly rethinking the future by creating the next generation of products, brands and services from a hybrid perspective.",
    },
    {
        id: "02",
        year: "2000",
        title: "100+ Worldwide Base",
        desc:
            "We are constantly rethinking the future by creating the next generation of products, brands and services from a hybrid perspective.",
    },
    {
        id: "03",
        year: "2022",
        title: "500+ Projects Done",
        desc:
            "We are constantly rethinking the future by creating the next generation of products, brands and services from a hybrid perspective.",
    },
    {
        id: "04",
        year: "2024",
        title: "Archive 1000+ Awards",
        desc:
            "We are constantly rethinking the future by creating the next generation of products, brands and services from a hybrid perspective.",
    },
];

// Har bir "01,02,03,04" belgisi — scroll paytida ekran markaziga kelganda
// border va matn opacity'si 1 ga o'tadi, aks holda xira (passiv) holatda turadi.
const TimelineMarker = ({ id }: { id: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isActive = useInView(ref, { margin: "-45% 0px -45% 0px" });

    return (
        <div
            ref={ref}
            className={`flex h-7 w-7 items-center justify-center border text-[11px] font-medium transition-all duration-500 ${
                isActive
                    ? "border-neutral-900 bg-neutral-900 text-white opacity-100"
                    : "border-neutral-300 bg-transparent text-neutral-400 opacity-40"
            }`}
        >
            {id}
        </div>
    );
};

const AboutS2 = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // Chiziqning umumiy progress'i — bo'lim boshlanishidan tugashigacha 0% -> 100%
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"],
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full px-4 sm:px-6 lg:px-10 py-16 lg:py-24"
        >
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
                {/* Chap ustun: sarlavha */}
                <div className="lg:sticky lg:top-32 lg:self-start">
                    <p className="text-xs uppercase tracking-wide text-neutral-400">
                        Started From 1972
                    </p>
                    <h2 className="mt-4 max-w-xs text-3xl font-light leading-snug text-neutral-900 sm:text-4xl">
                        Our business is taking care of your business.
                    </h2>
                </div>

                {/* O'ng ustun: timeline */}
                <div className="relative">
                    {/* fon chizig'i (statik, xira) */}
                    <div className="absolute left-[27px] top-1 bottom-1 w-px bg-neutral-200" />
                    {/* progress chizig'i (scroll bilan o'sadi) */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-[27px] top-1 w-px bg-neutral-900"
                    />

                    <div className="space-y-12 lg:space-y-16">
                        {milestones.map((m) => (
                            <div key={m.id} className="flex gap-6 lg:gap-8">
                                <div className="flex w-14 shrink-0 justify-center pt-7">
                                    <TimelineMarker id={m.id} />
                                </div>

                                <div className="flex-1 bg-indigo-50/60 p-7 sm:p-10">
                                    <p className="text-5xl font-light text-neutral-900 sm:text-6xl">
                                        {m.year}
                                    </p>
                                    <h3 className="mt-4 text-lg font-medium text-neutral-900">
                                        {m.title}
                                    </h3>
                                    <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500">
                                        {m.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutS2;