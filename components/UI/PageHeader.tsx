// src/components/common/PageHeader.tsx
// Har qanday ichki sahifada (Ekspertiza, Analitika, Indeks va h.k.) ishlatsa bo'ladigan
// umumiy sahifa header'i. Fonda paxta rasmi (watermark) chiqadi.
//
// Ishlatish:
// <PageHeader
//   breadcrumbLabel="Центр экспертизы"
//   title="Центр экспертизы"
//   description="Аналитика, мнения и практический опыт экспертов текстильной отрасли со всего мира."
// />

import Link from "next/link";
import Image from "next/image";
import HeaderImg from "@/assets/ui/IMG_2040.jpg"

interface PageHeaderProps {
    title: string;
    description?: string;
    breadcrumbLabel: string;
    lang?: string;
    homeLabel?: string;
}

export default function PageHeader({
                                       title,
                                       description,
                                       breadcrumbLabel,
                                       lang = "ru",
                                       homeLabel = "Главная",
                                   }: PageHeaderProps) {
    return (
        <section className="relative overflow-hidden bg-[#F7F5F1] pt-[calc(50px+4rem)] h-[50vh]">
            {/* Watermark: paxta rasmi — mobile'da matn orqasida to'liq fon, desktop'da o'ng tomonda katta */}
            <div className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16] md:opacity-100 md:left-auto md:right-0 md:w-[60%] lg:w-[52%]">
                <Image
                    src={HeaderImg}
                    alt=""
                    fill
                    priority
                    className="object-cover object-center md:object-right"
                />
                {/* Desktop: chap tomondan fon rangiga silliq o'tish */}
                <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-[#F7F5F1] to-transparent md:block" />
                {/* Mobile: rasm ustidan fon rangi bilan yengil overlay, matn o'qilishi uchun */}
                <div className="absolute inset-0 bg-[#F7F5F1]/60 md:hidden" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
                {/* Breadcrumb */}
                <nav className="mb-6 flex items-center gap-2 text-sm text-neutral-500" aria-label="Breadcrumb">
                    <Link
                        href={`/${lang}`}
                        className="flex items-center gap-1.5 transition-colors hover:text-neutral-800"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                                d="M3 10.5 12 3l9 7.5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5.5 9.5V20a1 1 0 0 0 1 1H17.5a1 1 0 0 0 1-1V9.5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {homeLabel}
                    </Link>
                    <span className="text-neutral-300">/</span>
                    <span className="font-medium text-neutral-800">{breadcrumbLabel}</span>
                </nav>

                {/* Title + description */}
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                        {title}
                    </h1>
                    {description && (
                        <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}