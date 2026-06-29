// app/[lang]/market-dynamics/page.tsx
import { notFound } from "next/navigation";
import Pagehero from "@/components/UI/Pagehero";
import Analyitics1 from "@/components/analytics/analyitics_1";
import { getPostById } from "@/data/analyticsData";
import bg from "@/assets/ui/breadcrumb.png";

interface Props {
    params: Promise<{ lang: string }>;
}

export default async function MarketDynamicsPage({ params }: Props) {
    const { lang } = await params;

    const post = getPostById("dinamic");
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