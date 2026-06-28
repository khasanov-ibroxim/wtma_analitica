// app/[lang]/analytics/page.tsx
import Link from "next/link";
import Pagehero from "@/components/UI/Pagehero";
import { analyticsPosts } from "@/data/analyticsData";
import bg from "@/assets/ui/breadcrumb.png";
import Image from "next/image";

interface Props {
    params: Promise<{ lang: string }>;  // ← Promise
}

export default async function AnalyticsListPage({ params }: Props) {
    const { lang } = await params;  // ← await

    return (
        <div>
            <Pagehero
                title="Аналитика рынков"
                watermarkText="WTMA ANALITIC"
                backgroundImage={bg}
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Аналитика рынков" }]}
            />

            <section className="w-full bg-white py-12 px-4 sm:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {analyticsPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/${lang}/analytics/${post.id}`}
                            className="group border border-gray-100 hover:border-gray-300 transition-colors overflow-hidden"
                        >
                            <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-5 flex flex-col gap-2">
                                <h3 className="text-base font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-500 line-clamp-2">
                                    {post.introParagraphs[0]}
                                </p>
                                <span className="mt-2 text-sm font-medium text-gray-800 flex items-center gap-1">
                  Read more
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}