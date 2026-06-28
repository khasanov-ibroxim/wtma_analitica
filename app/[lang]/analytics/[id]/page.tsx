// app/[lang]/analytics/[id]/page.tsx
import { notFound } from "next/navigation";
import Pagehero from "@/components/UI/Pagehero";
import Analyitics1 from "@/components/analytics/analyitics_1";
import { getPostById, analyticsPosts } from "@/data/analyticsData";
import bg from "@/assets/ui/breadcrumb.png";

interface Props {
    params: Promise<{ lang: string; id: string }>;  // ← Promise, layout singari
}

export async function generateStaticParams() {
    return analyticsPosts.map((post) => ({ id: post.id }));
}

export default async function AnalyticsDetailPage({ params }: Props) {
    const { lang, id } = await params;  // ← await, layout singari

    const post = getPostById(id);
    if (!post) notFound();

    return (
        <div>
            <Pagehero
                title={post.title}
                watermarkText={post.watermarkText}
                backgroundImage={bg}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Аналитика рынков", href: `/${lang}/analytics` },
                    { label: post.title },
                ]}
            />
            <Analyitics1 post={post} lang={lang} />
        </div>
    );
}