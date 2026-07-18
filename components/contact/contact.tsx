"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Home,
    ChevronRight,
    Phone,
    Mail,
    Globe,
    MapPin,
    Clock,
    ArrowRight,
} from "lucide-react";

import contactBg from "@/assets/contact/contactBg.jpg"

/* Custom social icons (lucide-react has no brand logos) */
function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M21.05 3.79a1.2 1.2 0 0 0-1.24-.17L2.66 10.6a1.15 1.15 0 0 0 .07 2.15l4.44 1.44 1.7 5.45a1.16 1.16 0 0 0 1.94.47l2.55-2.4 4.36 3.2a1.2 1.2 0 0 0 1.9-.7l3.05-14.6a1.2 1.2 0 0 0-.62-1.32ZM9.86 13.9l-1.02 3.24-.9-3.02 9.7-6.53c.22-.15.45.12.26.3l-8.04 6Z" />
        </svg>
    );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="17.35" cy="6.65" r="1.15" fill="currentColor" />
        </svg>
    );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.23 4.32 15.32 4.25 14.26 4.25c-2.2 0-3.7 1.34-3.7 3.8v2.45H8v3h2.56V21h2.94Z" />
        </svg>
    );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M6.94 8.5a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88ZM5.2 20h3.5V10H5.2v10Zm6.2 0h3.5v-5.4c0-1.3.47-2.18 1.68-2.18 1 0 1.5.68 1.5 2.18V20h3.5v-6.1c0-3.06-1.64-4.48-3.83-4.48-1.77 0-2.56.98-3 1.66h.03V10h-3.38c.05 1 0 10 0 10Z" />
        </svg>
    );
}

const contactInfo = [
    {
        icon: Phone,
        title: "+998 93 809 99 98",
        subtitle: "Телефон",
        href: "tel:+998938099998",
    },
    {
        icon: Mail,
        title: "shams.yokubov@mail.ru",
        subtitle: "E-mail",
        href: "mailto:shams.yokubov@mail.ru",
    },
    {
        icon: Globe,
        title: "www.texarea.com",
        subtitle: "Веб-сайт",
        href: "https://texarea.com/",
    },
    {
        icon: MapPin,
        title: "Ташкент, Узбекистан , Улица Кукча Дарвоза, дом 314.",
        subtitle: "Адрес",
        href: undefined,
    },
    {
        icon: Clock,
        title: "Пн – Пт, 09:00 – 18:00",
        subtitle: "Рабочее время (UTC+5)",
        href: undefined,
    },
];

const socials = [
    { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
    { icon: TelegramIcon, label: "Telegram", href: "https://t.me/DrTex" },
    { icon: InstagramIcon, label: "Instagram", href: "#" },
    { icon: FacebookIcon, label: "Facebook", href: "#" },
];

const subjectOptions = [
    "Общий вопрос",
    "Доступ к аналитике",
    "Партнёрство",
    "Техническая поддержка",
    "Другое",
];

const countryOptions = [
    "Узбекистан",
    "Казахстан",
    "Кыргызстан",
    "Таджикистан",
    "Туркменистан",
    "Другое",
];

export default function ContactPage() {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);

        // TODO: bu yerga real API chaqiruvini ulang
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
        }, 900);
    }

    return (
        <div className="min-h-screen bg-slate-50 mt-20">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:py-14">
                {/* Breadcrumbs */}
                <nav className="mb-6 flex items-center gap-1.5 text-sm text-slate-500 sm:mb-8">
                    <Link
                        href="/"
                        className="flex items-center gap-1.5 transition-colors hover:text-[#0B1E3A]"
                    >
                        <Home size={15} />
                        Главная
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <span className="font-medium text-slate-700">Контакты</span>
                </nav>

                {/* Hero: heading + photo */}
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
                    <div className="lg:pt-2">
                        <h1 className="text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl">
                            Свяжитесь
                            <br />с нами
                        </h1>
                        <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500">
                            Мы готовы ответить на ваши вопросы, предоставить доступ к
                            аналитике и обсудить индивидуальные решения для вашего бизнеса.
                        </p>
                    </div>

                    <div className="relative h-[280px] w-full overflow-hidden rounded-2xl sm:h-[380px] lg:h-[460px]">
                        <Image
                            src={contactBg}
                            alt="Текстильное производство Tex Area Analytics"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Info card + Form card — pulled up to overlap the bottom of the hero photo on desktop */}
                <div className="relative z-10 mt-8 grid grid-cols-1 items-start gap-6 lg:-mt-24 lg:grid-cols-[0.62fr_1fr] lg:gap-6">
                    {/* Contact information */}
                    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
                        <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                            Контактная информация
                        </h2>

                        <ul className="mt-6 space-y-5">
                            {contactInfo.map(({ icon: Icon, title, subtitle, href }) => {
                                const content = (
                                    <>
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1E3A]/5 text-[#0B1E3A]">
                                            <Icon size={19} strokeWidth={1.8} />
                                        </span>
                                        <span>
                                            <span className="block text-sm font-semibold text-slate-900 sm:text-[15px]">
                                                {title}
                                            </span>
                                            <span className="block text-sm text-slate-400">
                                                {subtitle}
                                            </span>
                                        </span>
                                    </>
                                );

                                return (
                                    <li key={subtitle}>
                                        {href ? (
                                            <a
                                                href={href}
                                                className="flex items-center gap-3.5 rounded-lg transition-opacity hover:opacity-70"
                                            >
                                                {content}
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-3.5">
                                                {content}
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-7 border-t border-slate-100 pt-6">
                            <p className="text-sm font-semibold text-slate-900">
                                Мы в социальных сетях
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                {socials.map(({ icon: Icon, label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1E3A]/5 text-[#0B1E3A] transition-colors hover:bg-[#0B1E3A] hover:text-white"
                                    >
                                        <Icon className="h-[18px] w-[18px]" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
                        <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                            Отправьте нам сообщение
                        </h2>

                        {submitted ? (
                            <div className="mt-8 flex flex-col items-center justify-center rounded-xl bg-emerald-50 px-6 py-14 text-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                    <ArrowRight size={20} />
                                </div>
                                <p className="mt-4 text-base font-semibold text-slate-900">
                                    Сообщение отправлено
                                </p>
                                <p className="mt-1.5 max-w-xs text-sm text-slate-500">
                                    Спасибо за обращение — наша команда свяжется с вами в
                                    ближайшее время.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-sm font-semibold text-[#0B1E3A] hover:underline"
                                >
                                    Отправить ещё одно сообщение
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Ваше имя"
                                        required
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-[#0B1E3A] focus:bg-white focus:ring-2 focus:ring-[#0B1E3A]/10"
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Компания"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-[#0B1E3A] focus:bg-white focus:ring-2 focus:ring-[#0B1E3A]/10"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="relative">
                                        <select
                                            name="country"
                                            defaultValue=""
                                            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-10 text-sm text-slate-800 outline-none transition-colors focus:border-[#0B1E3A] focus:bg-white focus:ring-2 focus:ring-[#0B1E3A]/10 [&:invalid]:text-slate-400"
                                        >
                                            <option value="" disabled hidden>
                                                Страна
                                            </option>
                                            {countryOptions.map((c) => (
                                                <option key={c} value={c}>
                                                    {c}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronRight
                                            size={16}
                                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-400"
                                        />
                                    </div>

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="E-mail"
                                        required
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-[#0B1E3A] focus:bg-white focus:ring-2 focus:ring-[#0B1E3A]/10"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Телефон"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-[#0B1E3A] focus:bg-white focus:ring-2 focus:ring-[#0B1E3A]/10"
                                    />

                                    <div className="relative">
                                        <select
                                            name="subject"
                                            defaultValue=""
                                            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-10 text-sm text-slate-800 outline-none transition-colors focus:border-[#0B1E3A] focus:bg-white focus:ring-2 focus:ring-[#0B1E3A]/10"
                                        >
                                            <option value="" disabled hidden>
                                                Тема обращения
                                            </option>
                                            {subjectOptions.map((s) => (
                                                <option key={s} value={s}>
                                                    {s}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronRight
                                            size={16}
                                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-400"
                                        />
                                    </div>
                                </div>

                                <textarea
                                    name="message"
                                    placeholder="Сообщение"
                                    required
                                    rows={5}
                                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-[#0B1E3A] focus:bg-white focus:ring-2 focus:ring-[#0B1E3A]/10"
                                />

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2F4CDD] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#253ec2] disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {submitting ? "Отправка..." : "Отправить сообщение"}
                                    <ArrowRight size={16} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}