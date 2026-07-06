// src/app/[lang]/expertise/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/components/UI/PageHeader";
import ExpertiseExplorer from "@/components/exp/ExpertiseExplorer";
import {
    getAllExpertPosts,
    getCategoriesWithCounts,
    getExpertsWithCounts,
} from "@/data/data_exp";

export const metadata: Metadata = {
    title: "Центр экспертизы | TEXARE ANALITICA",
    description:
        "Аналитика, мнения и практический опыт экспертов текстильной отрасли со всего мира. Актуальные материалы по рынку хлопка, производству, логистике и трендам.",
    openGraph: {
        title: "Центр экспертизы | TEXARE ANALITICA",
        description:
            "Аналитика, мнения и практический опыт экспертов текстильной отрасли со всего мира.",
        type: "website",
    },
};

export default async function ExpertisePage({
                                                params,
                                            }: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params; // Next.js 15: params awaited bo'lishi kerak
    const posts = getAllExpertPosts();
    const categories = getCategoriesWithCounts();
    const experts = getExpertsWithCounts();

    return (
        <main className="min-h-screen bg-white">
            <PageHeader
                lang={lang}
                breadcrumbLabel="Центр экспертизы"
                title="Центр экспертизы"
                description="Аналитика, мнения и практический опыт экспертов текстильной отрасли со всего мира."
            />

            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <ExpertiseExplorer
                    posts={posts}
                    categories={categories}
                    experts={experts}
                    lang={lang}
                    rightSidebar={
                        <div className="sticky top-6 space-y-6">
                            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                                <h2 className="mb-3 text-base font-semibold text-neutral-900">
                                    Популярные темы
                                </h2>
                                <ul className="space-y-2.5 text-sm text-neutral-600">
                                    <li>Ситуация на рынке хлопка</li>
                                    <li>Ценовая динамика</li>
                                    <li>Устойчивое производство</li>
                                    <li>Мировые тренды</li>
                                    <li>Технологические инновации</li>
                                </ul>
                            </div>
                            <blockquote className="rounded-2xl bg-[#1c2b3a] p-6 text-white">
                                <p className="text-lg leading-relaxed">
                                    Мнения экспертов помогают принимать обоснованные решения в быстро
                                    меняющемся мире текстильной индустрии.
                                </p>
                                <footer className="mt-4 text-sm font-medium tracking-wide text-white/70">
                                    TEXARE ANALITICA
                                </footer>
                            </blockquote>
                        </div>
                    }
                />
            </div>
        </main>
    );
}