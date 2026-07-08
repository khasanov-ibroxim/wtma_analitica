// src/components/archive/QuotesArchiveContent.tsx
// "Архив котировок" sahifasining Pagehero'dan PASTIDA turgan barcha kontentini
// render qiladigan universal komponent. Hamma narsa props orqali keladi —
// yangi mamlakat/yil/fayl qo'shish uchun faqat `countries` massivini to'ldirish kifoya,
// bu komponentga tegmasdan.
//
// Excel fayllarni yuklab olish uchun eski analyitics_1.tsx'dagi bilan bir xil pattern
// ishlatiladi: oddiy <a href={...} download> — hech qanday JS/state kerak emas,
// shuning uchun bu komponent server component (client bo'lishi shart emas).

import type { ReactNode } from "react";
import {ArrowRight} from "lucide-react";
import Image, {StaticImageData} from "next/image";
import winrar from "@/assets/countriy/winrar.png"
// ─── Props ──────────────────────────────────────────────────────────────────
export interface ArchiveFile {
    year: string;              // "2025"
    href: string;              // /downloads/usa/USA_2025.zip kabi fayl manzili
    label?: string;             // default: "Архивный файл"
    format?: string;            // default: "Excel (.xlsx)"
}

export interface ArchiveCountry {
    id: string;
    name: string;               // "США"
    flag: string | StaticImageData;             // emoji ("🇺🇸") yoki custom rasm/svg
    description: string;
    files: ArchiveFile[];
}

export interface ArchiveInfoStat {
    icon: ReactNode;
    label: string;
    value: string;
}

export interface QuotesArchiveContentProps {
    sectionTitle?: string;               // "Выберите страну"
    countries: ArchiveCountry[];

    infoTitle?: string;                  // "Что внутри архива?"
    infoDescription?: string;
    infoStats?: ArchiveInfoStat[];

    helpTitle?: string;                  // "Нужна помощь?"
    helpDescription?: string;
    helpCtaLabel?: string;               // "Связаться с экспертом"
    helpCtaHref?: string;
}

// ─── Ikonalar (tashqi paket kerak emas — oddiy inline SVG) ────────────────────
function GlobeIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );
}

function DownloadIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v12" />
            <polyline points="7 10 12 15 17 10" />
            <path d="M5 19h14" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    );
}

function CalendarIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    );
}

function RefreshIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
    );
}

function FileIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
        </svg>
    );
}

// Iconlarni tashqariga eksport qilamiz — boshqa sahifalarda infoStats/props
// tayyorlashda shu iconlardan foydalanish mumkin, qayta yozish shart emas.
export const ArchiveIcons = {
    globe: GlobeIcon,
    download: DownloadIcon,
    mail: MailIcon,
    arrowRight: ArrowRight,
    calendar: CalendarIcon,
    refresh: RefreshIcon,
    file: FileIcon,
};

// ─── Bitta yuklab olish tugmasi (excel fayl) ──────────────────────────────────
// Eski kodda ishlatilgan pattern: <a href={file.href} download> — brauzer
// faylni avtomatik yuklab oladi, hech qanday onClick/state kerak emas.
function ArchiveFileButton({ file }: { file: ArchiveFile }) {
    return (
        <a
            href={file.href}
            download
            className="flex items-center justify-between gap-2 rounded-xl border border-neutral-200 px-4 py-3 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
        >

            <div>
                <p className="text-sm font-semibold text-neutral-900">{file.year}</p>
                <p className="mt-0.5 text-xs text-neutral-400">
                    {file.label ?? "Архивный файл"}
                </p>
                <p className="text-xs text-neutral-400">{file.format ?? "Excel (.xlsx)"}</p>
            </div>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600">
                <DownloadIcon />
            </span>
        </a>
    );
}

// ─── Bitta mamlakat kartochkasi ────────────────────────────────────────────────
function CountryCard({ country }: { country: ArchiveCountry }) {
    return (
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-14 items-center justify-center overflow-hidden rounded-lg bg-neutral-100 text-2xl leading-none">
                    <Image src={country.flag} alt={"country"} />
                </span>
                <h3 className="text-lg font-semibold text-neutral-900">{country.name}</h3>
            </div>
            <p className="text-sm leading-relaxed text-neutral-500">{country.description}</p>

            {country.files.length > 1 && (
                <div className="mt-5 grid grid-cols-2 gap-3">
                    {country.files.map((file) => (
                        <ArchiveFileButton key={`${country.id}-${file.year}`} file={file} />
                    ))}
                </div>
            )}
            {country.files.length === 1 && (
                <div className="mt-5 grid grid-cols-1 gap-3">
                    {country.files.map((file) => (
                        <ArchiveFileButton key={`${country.id}-${file.year}`} file={file} />
                    ))}
                </div>
            )}
        </div>
    );
}

// ─── Asosiy komponent ──────────────────────────────────────────────────────────
export default function QuotesArchiveContent({
                                                 sectionTitle = "Выберите страну",
                                                 countries,
                                                 infoTitle = "Что внутри архива?",
                                                 infoDescription,
                                                 infoStats,
                                                 helpTitle = "Нужна помощь?",
                                                 helpDescription,
                                                 helpCtaLabel = "Связаться с экспертом",
                                                 helpCtaHref = "#contact",
                                             }: QuotesArchiveContentProps) {
    const resolvedInfoStats: ArchiveInfoStat[] =
        infoStats ?? [
            { icon: <CalendarIcon />, label: "", value: "3+ лет" },
            { icon: <RefreshIcon />, label: "обновление", value: "Ежегодное" },
            { icon: <FileIcon />, label: "Excel (.xlsx)", value: "Удобный формат" },
        ];

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            {/* Mamlakatlar */}
            <div className="mb-4 flex items-center gap-2 text-neutral-900">
                <GlobeIcon />
                <h2 className="text-lg font-semibold">{sectionTitle}</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {countries.map((country) => (
                    <CountryCard key={country.id} country={country} />
                ))}
            </div>

            {/* Info: arxiv ichida nima bor */}
            {(infoDescription || resolvedInfoStats.length > 0) && (
                <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                            <DownloadIcon />
                        </span>
                        <div>
                            <h3 className="text-base font-semibold text-neutral-900">{infoTitle}</h3>
                            {infoDescription && (
                                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-neutral-600">
                                    {infoDescription}
                                </p>
                            )}
                        </div>
                    </div>

                    {resolvedInfoStats.length > 0 && (
                        <div className="flex flex-wrap gap-6">
                            {resolvedInfoStats.map((stat) => (
                                <div key={stat.label} className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                                        {stat.icon}
                                    </span>
                                    <div className="leading-tight">
                                        <p className="text-sm font-semibold text-neutral-900">{stat.value}</p>
                                        <p className="text-xs text-neutral-500">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Yordam / kontakt CTA */}
            <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#f0ddc4] bg-[#FBF6EC] p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#8a6d3b]">
                        <MailIcon />
                    </span>
                    <div>
                        <h3 className="text-base font-semibold text-neutral-900">{helpTitle}</h3>
                        {helpDescription && (
                            <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-neutral-600">
                                {helpDescription}
                            </p>
                        )}
                    </div>
                </div>
                <a
                    href={helpCtaHref}
                    className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#1c2b3a] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#243748]"
                >
                    {helpCtaLabel}
                    <ArrowRight />
                </a>
            </div>
        </div>
    );
}