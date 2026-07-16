"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Globe2,
    RefreshCcw,
    ShieldCheck,
    FileText,
    ArrowRight,
    BarChart3,
    Users2,
    Mail,
    Download,
} from "lucide-react";
import home_header from "@/assets/home/IMG_2566.jpg"
import analy from "@/assets/home/home_compoent/analy.jpg"
import archive from "@/assets/home/home_compoent/archive.jpg"
import dinamic from "@/assets/home/home_s2/dinamic.jpg"
import indexMarket from "@/assets/home/home_compoent/cotton.jpg"
import tsent from "@/assets/home/home_compoent/exspertiza.jpg"
import person from "@/assets/home/home_s7/IMG_1851.jpg"

const features = [
    {
        icon: Globe2,
        title: "Глобальный охват",
        desc: "Анализируем более 80 стран",
    },
    {
        icon: RefreshCcw,
        title: "Ежедневное обновление",
        desc: "Актуальные данные и показатели",
    },
    {
        icon: ShieldCheck,
        title: "Надежные источники",
        desc: "Проверенные данные и методология",
    },
    {
        icon: FileText,
        title: "Удобные форматы",
        desc: "Понятные отчёты и Excel-файлы",
    },
];



const priceDynamicsDownloads = [
    { label: "США", file: "/downloads/usa/USA_2026.zip" },
    { label: "Китай", file: "/downloads/china/CHINA_2026.zip" },
    { label: "Бразилия", file: "/downloads/br/Brazil_2026.zip" },
];

const stats = [
    { icon: Globe2, value: "10+", label: "стран в аналитике", sub: "Покрываем ключевые рынки мира" },
    { icon: BarChart3, value: "3+ лет", label: "исторических данных", sub: "Глубокая аналитика и динамика" },
    { icon: FileText, value: "10+", label: "готовых отчётов", sub: "Маркетинговые исследования и экспертные отчёты" },
    { icon: Users2, value: "100+", label: "довольных клиентов", sub: "Фабрики, бренды, трейдеры и инвесторы" },
];

export default function HomeComponent({lang}:{lang:string}) {
    const services = [
        {
            title: "Аналитика рынков",
            desc: "Глубокие исследования международных рынков, спроса, трендов и конкурентов.",
            image: analy,
            link:`/${lang}/analytics/usa-market-analysis/`
        },
        {
            title: "Индекс хлопка",
            desc: "Актуальные котировки хлопка и аналитика ценовых индексов на мировом рынке.",
            image: indexMarket,
            link:`/${lang}/cotton-index/`
        },
        {
            title: "Архив котировок",
            desc: "Исторические данные по котировкам хлопка в удобном формате.",
            image: archive,
            link:`/${lang}/archive/`
        },
        {
            title: "Центр экспертизы",
            desc: "Экспертные статьи, обзоры, аналитика и практические рекомендации.",
            image: tsent,
            link:`/${lang}/expertise/`
        },
    ];
    return (
        <div className="min-h-screen bg-white text-slate-900">

            <section className="relative overflow-hidden">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:grid-cols-[0.95fr_1.2fr] lg:gap-4 lg:pb-20 lg:pt-16">
                    {/* Left */}
                    <div>
            <span className="inline-block rounded-full border border-[#0B1E3A]/15 bg-[#0B1E3A]/5 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-[#0B1E3A] sm:text-xs">
              АНАЛИТИКА. ДАННЫЕ. СТРАТЕГИЯ. РЕЗУЛЬТАТ.
            </span>

                        <h1 className="mt-6 text-3xl font-extrabold leading-[1.15] text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                            Аналитическая платформа для текстильной индустрии
                        </h1>

                        <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
                            Предоставляем актуальные рыночные данные, отраслевую аналитику
                            и инструменты для принятия стратегических решений на глобальном
                            рынке.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <button className="flex items-center gap-2 rounded-lg bg-[#0B1E3A] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#132a4d]">
                                Исследования рынков
                                <ArrowRight size={16} />
                            </button>
                            <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50">
                                Наши отчёты
                                <FileText size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Right - laptop photo, bleeds past the content edge, edges fade into page */}
                    <div className="relative -mx-4 sm:mx-0 lg:-mr-10 xl:-mr-24 2xl:-mr-32">
                        <div className="relative aspect-[4/3] w-full lg:aspect-[11/8]">
                            <Image
                                src={home_header}
                                alt="Tex Area Analytics dashboard"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 60vw"
                                className="object-contain object-right"
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-24 lg:w-32" />
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent sm:h-16" />
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent sm:h-12" />
                        </div>
                    </div>
                </div>

                {/* Features bar */}
                <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
                    <div className="grid grid-cols-1 gap-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_10px_40px_-15px_rgba(11,30,58,0.15)] sm:grid-cols-2 sm:gap-8 sm:p-8 lg:grid-cols-4">
                        {features.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="flex items-start gap-3.5">
                                <Icon size={26} strokeWidth={1.75} className="mt-0.5 shrink-0 text-[#3F6FDE]" />
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">
                                        {title}
                                    </p>
                                    <p className="mt-1 text-sm leading-snug text-slate-500">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="bg-slate-50/60 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                        {services.map((service) => (
                            <Link href={service.link}
                                  key={service.title}
                                  className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <h3 className="text-base font-bold text-slate-900">
                                    {service.title}
                                </h3>

                                <div className="mt-4 h-32 w-full overflow-hidden rounded-xl bg-slate-100">
                                    <div className="relative h-full w-full">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-500">
                                    {service.desc}
                                </p>

                                <Link
                                    href={service.link}
                                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1E3A] hover:underline"
                                >
                                    Подробнее
                                    <ArrowRight size={14} />
                                </Link>
                            </Link>
                        ))}

                        {/* Динамика рынка — скачивание отчётов по странам вместо картинки */}
                        <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                            <h3 className="text-base font-bold text-slate-900">
                                Динамика цен на хлопок 2026
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                Скачайте отчёт по динамике цен для нужной страны.
                            </p>

                            <div className="mt-4 flex flex-1 flex-col justify-center gap-2.5">
                                {priceDynamicsDownloads.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.file}
                                        download
                                        className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#0B1E3A]/20 hover:bg-[#0B1E3A]/5 hover:text-[#0B1E3A]"
                                    >
                                        {item.label}
                                        <Download size={15} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ABOUT / STATS ================= */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="rounded-2xl border border-slate-100 bg-white p-10 shadow-sm">
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
                            <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#0B1E3A]/60">
                  О ПЛАТФОРМЕ
                </span>
                                <h2 className="mt-3 text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">
                                    Tex Area Analytics — ваш надежный источник данных для роста
                                    и развития бизнеса
                                </h2>
                                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                                    Мы объединяем данные, аналитику и экспертизу, чтобы помочь
                                    компаниям текстильной и швейной отрасли принимать
                                    обоснованные решения, находить новые возможности и уверенно
                                    развиваться на глобальном рынке.
                                </p>
                                <Link href={`/${lang}/about`} className="mt-6 flex w-sm justify-center items-center gap-2 rounded-lg bg-[#0B1E3A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#132a4d]">
                                    Подробнее о платформе
                                    <ArrowRight size={16} />
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                                {stats.map(({ icon: Icon, value, label, sub }) => (
                                    <div key={label}>
                                        <Icon size={22} className="text-[#0B1E3A]" />
                                        <p className="mt-3 text-3xl font-extrabold text-slate-900">
                                            {value}
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-slate-700">
                                            {label}
                                        </p>
                                        <p className="mt-1 text-xs leading-relaxed text-slate-400">
                                            {sub}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= QUOTE / FOUNDER ================= */}
            <section className="pb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-[#0B1E3A] sm:grid-cols-[280px_1fr]">
                        <div className="relative h-64 w-full sm:h-auto">
                            <Image
                                src={person}
                                alt="Шамсидин Ёкубов"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col justify-center gap-6 p-10">
                            <blockquote className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                                «Будущее принадлежит тем, кто способен понимать рынок
                                быстрее, чем он меняется.»
                            </blockquote>

                            <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
                                Сегодня аналитика становится основой стратегического
                                лидерства в мировой текстильной индустрии. Мы Tex Area
                                Analytics объединяем отраслевую экспертизу, современные
                                методы исследования и глубокое понимание международных
                                рынков, чтобы помогать компаниям видеть перспективы раньше
                                конкурентов.
                            </p>

                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-bold text-white">
                                        Шамсидин Ёкубов
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        Основатель Tex Area Analytics
                                    </p>
                                </div>
                                <Link href={'https://t.me/DrTex'} className="flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                                    Подробнее о компании
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA STRIP ================= */}
            <section className="border-t border-slate-100 py-10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
                    <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B1E3A]/5 text-[#0B1E3A]">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">
                                Нужна помощь с анализом рынка?
                            </p>
                            <p className="text-sm text-slate-500">
                                Наши эксперты готовы помочь вам с доступом к данным и
                                ответить на ваши вопросы.
                            </p>
                        </div>
                    </div>

                    <Link href={"https://t.me/DrTex"} className="flex shrink-0 items-center gap-2 rounded-lg bg-[#0B1E3A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#132a4d]">
                        Связаться с экспертом
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}