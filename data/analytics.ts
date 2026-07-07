import type { StaticImageData } from "next/image";


import usa from "@/assets/home/home_s3/usa.jpg";
import baa from "@/assets/home/home_s3/baa.jpg";
import japan from "@/assets/home/home_s3/japan.jpg";
import marokka from "@/assets/home/home_s3/marokka.jpg";
import gr from "@/assets/home/home_s3/gr.jpg";

export interface AnalyticsPage {
    id: number;
    title: string;
    image: StaticImageData;
}

export interface AnalyticsItem {
    id: string;
    country:string;
    title: string;
    breadcrumb: string;
    period: string;
    coverImage: StaticImageData;
    /** public/downloads ichidagi fayl nomi (masalan: "usa-market-analysis.pdf") */
    downloadFile: string;
    description: string[];

}

export const analyticsItems: AnalyticsItem[] = [
    {
        id: "usa-market-analysis",
        country:"Северная Америка",
        title: "Анализ рынка США",
        breadcrumb: "Анализ рынка",
        period: "2026",
        coverImage: usa,
        downloadFile: "usa-market-analysis.pdf",
        description: [
            "Перед вами аналитический обзор текстильного рынка США, который уже с первых страниц погружает в реальную структуру спроса, конкуренции и возможностей для экспорта. Этот материал подготовлен как практический инструмент для понимания того, как работает один из крупнейших и наиболее требовательных рынков мира.",
            "Данный анализ выходит за рамки теории и отражает ключевые аспекты отрасли: от структуры текстильного производства и импортозависимости до поведения покупателей, логики принятия решений и формирования цен.",
        ],

    },
    {
        id: "baa-market-analysis",
        country:"Азия",
        title: "Анализ рынка Саудовская Аравия",
        breadcrumb: "Анализ рынка",
        period: "2026",
        coverImage: baa,
        downloadFile: "uzbekistan-market-analysis.pdf",
        description: [
            "Обзор внутреннего текстильного рынка Узбекистана: производственные мощности, экспортный потенциал и динамика внутреннего спроса.",
            "Материал включает структуру отрасли, ключевых игроков и логику ценообразования на локальном рынке.",
        ]
    },
    {
        id: "japan-market-analysis",
        country:"Азия",
        title: "Анализ рынка Япония",
        breadcrumb: "Анализ рынка",
        period: "2026",
        coverImage: japan,
        downloadFile: "uzbekistan-market-analysis.pdf",
        description: [
            "Обзор внутреннего текстильного рынка Узбекистана: производственные мощности, экспортный потенциал и динамика внутреннего спроса.",
            "Материал включает структуру отрасли, ключевых игроков и логику ценообразования на локальном рынке.",
        ]
    },
    {
        id: "gr-market-analysis",
        country:"Европа",
        title: "Анализ рынка Германия",
        breadcrumb: "Анализ рынка",
        period: "2026",
        coverImage: gr,
        downloadFile: "uzbekistan-market-analysis.pdf",
        description: [
            "Обзор внутреннего текстильного рынка Узбекистана: производственные мощности, экспортный потенциал и динамика внутреннего спроса.",
            "Материал включает структуру отрасли, ключевых игроков и логику ценообразования на локальном рынке.",
        ]
    },
    {
        id: "mr-market-analysis",
        country:"Африка",
        title: "Анализ рынка Марокко",
        breadcrumb: "Анализ рынка",
        period: "2026",
        coverImage: marokka,
        downloadFile: "uzbekistan-market-analysis.pdf",
        description: [
            "Обзор внутреннего текстильного рынка Узбекистана: производственные мощности, экспортный потенциал и динамика внутреннего спроса.",
            "Материал включает структуру отрасли, ключевых игроков и логику ценообразования на локальном рынке.",
        ]
    },
];

export function getAnalyticsById(id: string): AnalyticsItem | undefined {
    return analyticsItems.find((item) => item.id === id);
}

export function getAllAnalyticsIds(): string[] {
    return analyticsItems.map((item) => item.id);
}