import React from "react";
import { notFound } from "next/navigation";
import { getAnalyticsById, getAllAnalyticsIds } from "@/data/analytics";
import AnalyticsDetailClient from "@/components/AnalyticsDetailClient";

interface PageProps {
    params: Promise<{ lang: string; id: string }>;
}

// Static export uchun: build vaqtida shu route ostidagi barcha [id] sahifalar
// oldindan generatsiya qilinadi (output: 'export' bilan ishlaydi).
export function generateStaticParams() {
    return getAllAnalyticsIds().map((id) => ({ id }));
}

// Faqat generateStaticParams'da ro'yxatga olingan id'lar mavjud bo'ladi,
// boshqa id kelsa build/runtime'da notFound() chaqiriladi.
export const dynamicParams = false;

const AnalyticsDetailPage = async ({ params }: PageProps) => {
    const { id } = await params;
    const item = getAnalyticsById(id);

    if (!item) {
        notFound();
    }

    return <AnalyticsDetailClient item={item!} />;
};

export default AnalyticsDetailPage;