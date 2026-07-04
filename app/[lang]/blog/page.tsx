import React from "react";
import type { Metadata } from "next";
import BlogPageClient from "@/components/blog/BlogPageClient";

interface Props {
    params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;

    return {
        title: lang === 'ru' ? 'Блог | Tex Area Analytics' : 'Blog | Tex Area Analytics',
        description: lang === 'ru'
            ? 'Аналитика, исследования и новости мировой текстильной индустрии'
            : 'Analytics, research and news of the global textile industry',
    };
}

export default async function BlogPage({ params }: Props) {
    const { lang } = await params;

    return <BlogPageClient lang={lang} />;
}
