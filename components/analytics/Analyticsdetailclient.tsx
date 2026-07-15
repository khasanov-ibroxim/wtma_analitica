"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { AnalyticsItem } from "@/data/analytics";
import { analyticsItems } from "@/data/analytics";

import {
    Download,
    Presentation,
    ArrowRight,
    ChevronRight,
    Users,
    Landmark,
    ArrowDownToLine,
    Handshake,
    Shirt,
    Coins,
    Languages,
    CalendarDays,
    LineChart,
    ArrowUpFromLine,
    Target,
    Tag,
    ShoppingCart,
    Store,
    Scale,
    Lightbulb,
    ArrowDownCircle,
    ArrowUpCircle,
    TrendingUp,
    Globe,
    Receipt,
    X,
    Check,
} from "lucide-react";

interface Props {
    item: AnalyticsItem;
}

const quickFacts = (item: AnalyticsItem) => [
    { icon: Users, label: "Население", value: item.facts.population },
    { icon: Landmark, label: "ВВП (номинал)", value: item.facts.gdp },
    { icon: ArrowDownToLine, label: "Импорт текстиля", value: item.facts.textileImport },
    { icon: Handshake, label: "Основные поставщики", value: item.facts.mainSuppliers },
    { icon: Shirt, label: "Основные категории", value: item.facts.mainCategories },
    { icon: Coins, label: "Валюта", value: item.facts.currency },
    { icon: Languages, label: "Язык", value: item.facts.language },
    { icon: CalendarDays, label: "Обновление отчёта", value: item.facts.updatedAt },
];

const reportContents = [
    { icon: LineChart, title: "Размер рынка", text: "Объёмы, динамика и перспективы роста" },
    { icon: ArrowDownToLine, title: "Анализ импорта", text: "Структура импорта и ключевые тренды" },
    { icon: ArrowUpFromLine, title: "Анализ экспорта", text: "Поставщики, объёмы и доли рынка" },
    { icon: Target, title: "Конкурентная среда", text: "Ключевые игроки и их стратегии" },
    { icon: Tag, title: "Цены и маржа", text: "Ценовые уровни и драйверы" },
    { icon: ShoppingCart, title: "Потребительский спрос", text: "Поведение, предпочтения и сегментация" },
    { icon: Store, title: "Каналы продаж", text: "Ритейл, e-commerce и дистрибуция" },
    { icon: Scale, title: "SWOT-анализ", text: "Сильные, слабые стороны и риски" },
    { icon: Lightbulb, title: "Возможности для экспорта", text: "Точки роста и рекомендации для производителей" },
];

const AnalyticsDetailClient = ({ item }: Props) => {
    const pathname = usePathname();
    const lang = pathname?.split("/")[1] || "ru";
    const otherStudies = analyticsItems.filter((i) => i.id !== item.id);

    const kpis = [
        { icon: ArrowDownCircle, label: "Импорт текстиля", value: item.kpis.importValue, hint: item.kpis.importYear },
        { icon: ArrowUpCircle, label: "Экспорт текстиля", value: item.kpis.exportValue, hint: item.kpis.exportYear },
        { icon: TrendingUp, label: "Рост рынка (CAGR)", value: item.kpis.cagr, hint: item.kpis.cagrPeriod },
        { icon: Globe, label: "Доля онлайн-продаж", value: item.kpis.onlineShare, hint: item.kpis.onlineShareLabel },
        { icon: Receipt, label: "Средний чек (одежда)", value: item.kpis.avgCheck, hint: item.kpis.avgCheckLabel },
    ];

    // --- Yuklab olish modali holati ---
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // TODO: bu yerga real yuborish logikasi (Telegram / Google Sheets / API) qo'shiladi
            // Muvaffaqiyatli yuborilgandan so'ng faylni avtomatik yuklab berish uchun:
            // window.open(`/downloads/${item.downloadFile}`, "_blank");
            await new Promise((resolve) => setTimeout(resolve, 800));
            setIsSubmitted(true);
            setForm({ firstName: "", lastName: "", phone: "", message: "" });
            setTimeout(() => {
                setIsModalOpen(false);
                setIsSubmitted(false);
            }, 1800);
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsSubmitted(false);
    };

    return (
        <div className="min-h-screen bg-[#F7F8FA] mt-20">
            {/* Breadcrumb */}
            <div className="mx-auto max-w-[1280px] px-4 pt-6 sm:px-6 lg:px-8">
                <nav className="flex items-center gap-2 text-sm text-slate-500">
                    <Link href={`/${lang}`} className="transition-colors hover:text-[#0B1B3A]">
                        Главная
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <Link href={`/${lang}/analytics`} className="transition-colors hover:text-[#0B1B3A]">
                        Аналитика рынков
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <span className="font-medium text-[#0B1B3A]">{item.title}</span>
                </nav>
            </div>

            {/* Hero */}
            <section className="mx-auto max-w-[1280px] px-4 pt-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
                    {/* Left: title + CTA */}
                    <div className="flex flex-col justify-center">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C0392B]">
                            {item.country} · {item.period}
                        </p>
                        <h1 className="text-4xl font-bold uppercase leading-[1.08] tracking-tight text-[#0B1B3A] sm:text-5xl">
                            {item.title}
                        </h1>
                        <h2 className="mt-2 text-xl font-semibold leading-snug text-[#0B1B3A] sm:text-2xl">
                            {item.breadcrumb}
                        </h2>
                        <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-slate-500">
                            {item.heroSubtitle}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-2 rounded-lg bg-[#0B1B3A] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#132a54]"
                            >
                                Скачать полный отчёт
                                <Download size={18} />
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0B1B3A] transition-colors hover:border-slate-300 hover:bg-slate-50"
                            >
                                Презентация отчёта
                                <Presentation size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Right: cover card */}
                    <div className="relative aspect-[15/10] w-full overflow-hidden rounded-2xl bg-[#0B1B3A] shadow-xl">
                        <Image
                            src={item.coverImage}
                            alt={`Анализ текстильного рынка ${item.title}`}
                            fill
                            priority
                            className="object-cover "
                        />

                    </div>
                </div>
            </section>

            {/* Quick facts */}
            <section className="mx-auto max-w-[1280px] px-4 pt-10 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
                    <h3 className="mb-6 text-lg font-bold text-[#0B1B3A]">Краткая информация о рынке</h3>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                        {quickFacts(item).map((fact) => (
                            <div key={fact.label} className="flex items-start gap-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-[#0B1B3A]">
                                    <fact.icon size={20} strokeWidth={1.7} />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-xs font-medium text-slate-400">{fact.label}</p>
                                    <p className="mt-0.5 truncate text-[15px] font-semibold text-[#0B1B3A]" title={fact.value}>
                                        {fact.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About the market */}
            <section className="mx-auto max-w-[1280px] px-4 pt-10 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
                        <h3 className="mb-4 text-lg font-bold text-[#0B1B3A]">О рынке</h3>
                        {item.description.map((paragraph, idx) => (
                            <p key={idx} className="mb-4 text-[15px] leading-relaxed text-slate-500 last:mb-0">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="relative min-h-[400px] overflow-hidden rounded-2xl shadow-sm ">
                        <Image
                            src={item.aboutImage}
                            alt={`${item.title} — текстильный рынок`}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* What's inside the report */}
            <section className="mx-auto max-w-[1280px] px-4 pt-10 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
                    <h3 className="mb-6 text-lg font-bold text-[#0B1B3A]">Что внутри отчёта</h3>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
                        {reportContents.map((rc) => (
                            <div key={rc.title} className="flex items-start gap-3.5">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B1B3A]/5 text-[#0B1B3A]">
                                    <rc.icon size={22} strokeWidth={1.7} />
                                </span>
                                <div>
                                    <p className="text-[15px] font-semibold text-[#0B1B3A]">{rc.title}</p>
                                    <p className="mt-1 text-sm leading-snug text-slate-500">{rc.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key KPIs */}
            <section className="mx-auto max-w-[1280px] px-4 pt-10 sm:px-6 lg:px-8">
                <h3 className="mb-5 text-lg font-bold text-[#0B1B3A]">Ключевые показатели рынка</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {kpis.map((kpi) => (
                        <div key={kpi.label} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                            <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-[#0B1B3A]">
                                <kpi.icon size={22} strokeWidth={1.7} />
                            </span>
                            <p className="text-xs font-medium text-slate-400">{kpi.label}</p>
                            <p className="mt-1 text-2xl font-bold text-[#0B1B3A]">{kpi.value}</p>
                            <p className="mt-0.5 text-xs text-slate-400">{kpi.hint}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Related studies */}
            <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
                <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#0B1B3A]">Другие исследования</h3>
                    <Link
                        href={`/${lang}/analytics`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1B3A] transition-colors hover:text-[#C0392B]"
                    >
                        Все исследования
                        <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {otherStudies.map((study) => (
                        <Link
                            key={study.id}
                            href={`/${lang}/analytics/${study.id}`}
                            className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="relative aspect-[4/3] w-full overflow-hidden">
                                <Image
                                    src={study.coverImage}
                                    alt={study.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <span className="absolute right-2.5 top-2.5 rounded-md bg-white/90 px-2 py-0.5 text-[11px] font-bold text-[#0B1B3A]">
                                    {study.period}
                                </span>
                            </div>
                            <div className="p-4">
                                <p className="text-sm font-semibold text-[#0B1B3A]">{study.title}</p>
                                <p className="mt-1 text-xs leading-snug text-slate-500">{study.breadcrumb}</p>
                                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#0B1B3A] opacity-0 transition-opacity group-hover:opacity-100">
                                    Смотреть
                                    <ArrowRight size={14} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Download modal — "Скачать полный отчёт" bosilganda ochiladi */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
                        onClick={closeModal}
                    />

                    {/* Modal card */}
                    <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 fade-in duration-200 max-h-[90vh] overflow-y-auto">
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={closeModal}
                            aria-label="Закрыть"
                            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            <X size={18} />
                        </button>

                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center py-10 text-center">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 mb-4">
                                    <Check size={26} strokeWidth={2.5} className="text-green-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-black mb-1">Заявка отправлена!</h3>
                                <p className="text-sm text-gray-500">Мы свяжемся с вами в ближайшее время.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl sm:text-2xl font-bold text-black mb-1">
                                    Скачать отчёт
                                </h3>
                                <p className="text-sm text-gray-500 mb-6">
                                    Заполните форму, и мы вышлем вам полную версию отчёта «{item.title}»
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-xs font-medium text-gray-600 mb-1.5">
                                                Имя
                                            </label>
                                            <input
                                                id="firstName"
                                                name="firstName"
                                                type="text"
                                                required
                                                value={form.firstName}
                                                onChange={handleChange}
                                                placeholder="Иван"
                                                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-black placeholder:text-gray-400 outline-none transition-colors focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-xs font-medium text-gray-600 mb-1.5">
                                                Фамилия
                                            </label>
                                            <input
                                                id="lastName"
                                                name="lastName"
                                                type="text"
                                                required
                                                value={form.lastName}
                                                onChange={handleChange}
                                                placeholder="Иванов"
                                                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-black placeholder:text-gray-400 outline-none transition-colors focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-medium text-gray-600 mb-1.5">
                                            Телефон
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+998 90 123 45 67"
                                            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-black placeholder:text-gray-400 outline-none transition-colors focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-medium text-gray-600 mb-1.5">
                                            Сообщение
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={3}
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Ваш комментарий..."
                                            className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-black placeholder:text-gray-400 outline-none transition-colors focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full rounded-lg bg-black py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                                    >
                                        {isSubmitting ? "Отправка..." : "Отправить"}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnalyticsDetailClient;