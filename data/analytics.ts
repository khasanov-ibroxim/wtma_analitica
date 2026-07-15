import type { StaticImageData } from "next/image";

import usa from "@/assets/home/home_s3/usa.jpg";
import usa_2 from "@/assets/analytics/usa_2.png";
import baa from "@/assets/home/home_s3/baa.jpg";
import baa_2 from "@/assets/analytics/baa_2.png";
import japan from "@/assets/home/home_s3/japan.jpg";
import japan_2 from "@/assets/analytics/japan_2.png";
import marokka from "@/assets/home/home_s3/marokka.jpg";
import marokka_2 from "@/assets/analytics/marokko_2.png";
import gr from "@/assets/home/home_s3/gr.jpg";
import gr_2 from "@/assets/analytics/gr_2.png";

export interface AnalyticsPage {
    id: number;
    title: string;
    image: StaticImageData;
}

/** "Краткая информация о рынке" bloki uchun */
export interface MarketFacts {
    population: string;
    gdp: string;
    textileImport: string;
    mainSuppliers: string;
    mainCategories: string;
    currency: string;
    language: string;
    updatedAt: string;
}

/** "Ключевые показатели рынка" bloki uchun */
export interface MarketKpis {
    importValue: string;
    importYear: string;
    exportValue: string;
    exportYear: string;
    cagr: string;
    cagrPeriod: string;
    onlineShare: string;
    onlineShareLabel: string;
    avgCheck: string;
    avgCheckLabel: string;
}

export interface AnalyticsItem {
    id: string;
    country: string;
    title: string;
    breadcrumb: string;
    period: string;
    coverImage: StaticImageData;
    /** public/downloads ichidagi fayl nomi (masalan: "usa-market-analysis.pdf") */
    downloadFile: string;
    description: string[];
    heroSubtitle: string;
    aboutParagraph: string;
    facts: MarketFacts;
    kpis: MarketKpis;
    /** "О рынке" bo'limidagi rasm (davlat manzarasi/bayrog'i) */
    aboutImage: StaticImageData;
}

export const analyticsItems: AnalyticsItem[] = [
    {
        id: "usa-market-analysis",
        country: "Северная Америка",
        title: "США",
        breadcrumb: "Анализ рынка США",
        period: "2026",
        coverImage: usa,
        aboutImage: usa_2,
        downloadFile: "usa-market-analysis.pdf",
        heroSubtitle:
            "Комплексное исследование ключевого рынка для экспортёров текстильной продукции: объёмы, тренды, конкуренты и возможности роста.",
        description: [
            "Перед вами аналитический обзор текстильного рынка США, который уже с первых страниц погружает в реальную структуру спроса, конкуренции и возможностей для экспорта. Этот материал подготовлен как практический инструмент для понимания того, как работает один из крупнейших и наиболее требовательных рынков мира.",
            "Данные, аналитика и выводы, представленные в отчёте, отражают ключевые аспекты отрасли: от макроэкономических показателей и потребительских трендов до конкурентной среды и каналов продаж.",
        ],
        aboutParagraph:
            "Перед вами аналитический обзор текстильного рынка США, который уже с первых страниц погружает в реальную структуру спроса, конкуренции и возможностей для экспорта. Этот материал подготовлен как практический инструмент для понимания того, как работает один из крупнейших и наиболее требовательных рынков мира.",
        facts: {
            population: "334,9 млн",
            gdp: "$27,4 трлн",
            textileImport: "$148,6 млрд",
            mainSuppliers: "Китай, Вьетнам, Индия",
            mainCategories: "Одежда, ткани, трикотаж, домашний текстиль",
            currency: "USD",
            language: "Английский",
            updatedAt: "Май 2026",
        },
        kpis: {
            importValue: "$148,6 млрд",
            importYear: "2025 год",
            exportValue: "$37,2 млрд",
            exportYear: "2025 год",
            cagr: "+6,8%",
            cagrPeriod: "2021–2025",
            onlineShare: "31,4%",
            onlineShareLabel: "в текстильном ритейле",
            avgCheck: "$68,7",
            avgCheckLabel: "в розничных продажах",
        },
    },
    {
        id: "baa-market-analysis",
        country: "Азия",
        title: "Саудовская Аравия",
        breadcrumb: "Анализ рынка Саудовской Аравии",
        period: "2026",
        coverImage: baa,
        aboutImage: baa_2,
        downloadFile: "saudi-arabia-market-analysis.pdf",
        heroSubtitle:
            "Комплексное исследование текстильного рынка Саудовской Аравии: объёмы, тренды, конкуренты, цены и возможности для экспорта.",
        description: [
            "Перед вами аналитический обзор текстильного рынка Саудовской Аравии, который уже с первых страниц погружает в реальную структуру спроса, конкуренции и возможностей для экспорта.",
            "Материал подготовлен как практический инструмент для понимания того, как работает один из крупнейших и наиболее быстрорастущих рынков Ближнего Востока.",
        ],
        aboutParagraph:
            "Перед вами аналитический обзор текстильного рынка Саудовской Аравии, который уже с первых страниц погружает в реальную структуру спроса, конкуренции и возможностей для экспорта. Материал подготовлен как практический инструмент для понимания того, как работает один из крупнейших и наиболее быстрорастущих рынков Ближнего Востока.",
        facts: {
            population: "35,1 млн",
            gdp: "$1,1 трлн",
            textileImport: "$8,7 млрд",
            mainSuppliers: "Китай, Индия, Турция",
            mainCategories: "Одежда, ткани, трикотаж, домашний текстиль",
            currency: "SAR",
            language: "Арабский",
            updatedAt: "Май 2026",
        },
        kpis: {
            importValue: "$8,7 млрд",
            importYear: "2025 год",
            exportValue: "$2,3 млрд",
            exportYear: "2025 год",
            cagr: "+5,2%",
            cagrPeriod: "2021–2025",
            onlineShare: "18,6%",
            onlineShareLabel: "в текстильном ритейле",
            avgCheck: "182 SAR",
            avgCheckLabel: "в розничных продажах",
        },
    },
    {
        id: "japan-market-analysis",
        country: "Азия",
        title: "Япония",
        breadcrumb: "Анализ рынка Японии",
        period: "2026",
        coverImage: japan,
        aboutImage: japan_2,
        downloadFile: "japan-market-analysis.pdf",
        heroSubtitle:
            "Комплексное исследование текстильного рынка Японии: объёмы, тренды, конкуренты, цены и возможности для экспорта.",
        description: [
            "Перед вами аналитический обзор текстильного рынка Японии, который уже с первых страниц погружает в реальную структуру спроса, конкуренции и возможностей для экспорта.",
            "Материал подготовлен как практический инструмент для понимания того, как работает один из крупнейших и наиболее требовательных рынков мира.",
        ],
        aboutParagraph:
            "Перед вами аналитический обзор текстильного рынка Японии, который уже с первых страниц погружает в реальную структуру спроса, конкуренции и возможностей для экспорта. Материал подготовлен как практический инструмент для понимания того, как работает один из крупнейших и наиболее требовательных рынков мира.",
        facts: {
            population: "124,6 млн",
            gdp: "$4,2 трлн",
            textileImport: "$28,7 млрд",
            mainSuppliers: "Китай, Вьетнам, Индонезия",
            mainCategories: "Одежда, ткани, трикотаж, домашний текстиль",
            currency: "JPY",
            language: "Японский",
            updatedAt: "Май 2026",
        },
        kpis: {
            importValue: "$28,7 млрд",
            importYear: "2025 год",
            exportValue: "$9,6 млрд",
            exportYear: "2025 год",
            cagr: "+2,8%",
            cagrPeriod: "2021–2025",
            onlineShare: "22,1%",
            onlineShareLabel: "в текстильном ритейле",
            avgCheck: "¥6 850",
            avgCheckLabel: "в розничных продажах",
        },
    },
    {
        id: "gr-market-analysis",
        country: "Европа",
        title: "Германия",
        breadcrumb: "Анализ рынка Германии",
        period: "2026",
        coverImage: gr,
        aboutImage: gr_2,
        downloadFile: "germany-market-analysis.pdf",
        heroSubtitle:
            "Комплексное исследование текстильного рынка Германии: объёмы, тренды, конкуренты, цены и возможности для экспорта.",
        description: [
            "Перед вами аналитический обзор текстильного рынка Германии, который уже с первых страниц погружает в реальную структуру спроса, конкуренции и возможностей для экспорта.",
            "Материал подготовлен как практический инструмент для понимания того, как работает один из крупнейших и наиболее требовательных рынков мира.",
        ],
        aboutParagraph:
            "Перед вами аналитический обзор текстильного рынка Германии, который уже с первых страниц погружает в реальную структуру спроса, конкуренции и возможностей для экспорта. Материал подготовлен как практический инструмент для понимания того, как работает один из крупнейших и наиболее требовательных рынков мира.",
        facts: {
            population: "83,2 млн",
            gdp: "$4,7 трлн",
            textileImport: "$33,1 млрд",
            mainSuppliers: "Китай, Турция, Бангладеш",
            mainCategories: "Одежда, ткани, трикотаж, домашний текстиль",
            currency: "EUR",
            language: "Немецкий",
            updatedAt: "Май 2026",
        },
        kpis: {
            importValue: "$33,1 млрд",
            importYear: "2025 год",
            exportValue: "$21,3 млрд",
            exportYear: "2025 год",
            cagr: "+4,6%",
            cagrPeriod: "2021–2025",
            onlineShare: "27,8%",
            onlineShareLabel: "в текстильном ритейле",
            avgCheck: "€64,5",
            avgCheckLabel: "в розничных продажах",
        },
    },
    {
        id: "mr-market-analysis",
        country: "Африка",
        title: "Марокко",
        breadcrumb: "Анализ рынка Марокко",
        period: "2026",
        coverImage: marokka,
        aboutImage: marokka_2,
        downloadFile: "morocco-market-analysis.pdf",
        heroSubtitle:
            "Комплексное исследование текстильного рынка Марокко: объёмы, тренды, конкуренты, цены и возможности для экспорта.",
        description: [
            "Перед вами аналитический обзор текстильного рынка Марокко, который уже с первых страниц погружает в реальную структуру спроса, конкуренции и возможностей для экспорта.",
            "Материал подготовлен как практический инструмент для понимания того, как работает один из ключевых текстильных хабов Северной Африки.",
        ],
        aboutParagraph:
            "Перед вами аналитический обзор текстильного рынка Марокко, который уже с первых страниц погружает в реальную структуру спроса, конкуренции и возможностей для экспорта. Материал подготовлен как практический инструмент для понимания того, как работает один из ключевых текстильных хабов Северной Африки и важный партнёр для европейского рынка.",
        facts: {
            population: "36,9 млн",
            gdp: "$142,4 млрд",
            textileImport: "$5,1 млрд",
            mainSuppliers: "Китай, Турция, Испания",
            mainCategories: "Одежда, ткани, трикотаж, домашний текстиль",
            currency: "MAD",
            language: "Арабский, Французский",
            updatedAt: "Май 2026",
        },
        kpis: {
            importValue: "$5,1 млрд",
            importYear: "2025 год",
            exportValue: "$3,5 млрд",
            exportYear: "2025 год",
            cagr: "+4,1%",
            cagrPeriod: "2021–2025",
            onlineShare: "12,7%",
            onlineShareLabel: "в текстильном ритейле",
            avgCheck: "1 250 MAD",
            avgCheckLabel: "в розничных продажах",
        },
    },
];

export function getAnalyticsById(id: string): AnalyticsItem | undefined {
    return analyticsItems.find((item) => item.id === id);
}

export function getAllAnalyticsIds(): string[] {
    return analyticsItems.map((item) => item.id);
}