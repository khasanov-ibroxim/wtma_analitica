// app/[lang]/analytics/page.tsx
import { notFound } from "next/navigation";
import Pagehero from "@/components/UI/Pagehero";
import Analyitics1 from "@/components/analytics/analyitics_1";
import { getPostById } from "@/data/analyticsData";
import bg from "@/assets/home/home_s2/analy.jpg";

interface ServiceLink {
    name: string;
    href: string;
}

interface Props {
    params: Promise<{ lang: string }>;
}

export default async function AnalyticsPage({ params }: Props) {
    const { lang } = await params;

    const post = getPostById("analytc");
    if (!post) notFound();

    // Barcha elementlar public/downloads/ papkasidagi zip fayllarga ishora qiladi
    const analySer: ServiceLink[] = [
        { name: "China Daily Dynamics", href: `/downloads/china_dayli_dinamiks.zip` },
        { name: "Индекс хлопка",        href: `/downloads/cotton-index.zip` },
        { name: "Архив котировок",      href: `/downloads/archive.zip` },
        { name: "Центр экспертизы",     href: `/downloads/expertise.zip` },
        { name: "Динамика рынков",      href: `/downloads/market-dynamics.zip` },
    ];

    return (
        <div>
            <Pagehero
                title={post.title}
                watermarkText={post.watermarkText}
                backgroundImage={bg}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: post.title },
                ]}
            />
            <Analyitics1 post={post} lang={lang}  />
        </div>
    );
}