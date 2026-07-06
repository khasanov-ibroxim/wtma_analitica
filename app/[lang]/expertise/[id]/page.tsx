// src/app/[lang]/expertise/[id]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/UI/PageHeader";
import ExpertPostCard from "@/components/exp/ExpertPostCard";
import ContentRenderer from "@/components/exp/ContentRenderer";
import {
    getPostById,
    getAllExpertPosts,
    getNextPost,
    getPrevPost,
    getCategoryById,
    getExpertById,
} from "@/data/data_exp";

// Static export uchun: barcha [id] larni oldindan generatsiya qilamiz
export async function generateStaticParams() {
    return getAllExpertPosts().map((post) => ({ id: post.id }));
}

// SEO: har bir maqola uchun dinamik metadata
export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const post = getPostById(id);

    if (!post) {
        return { title: "Материал не найден | TEXARE ANALITICA" };
    }

    const title = post.seo?.metaTitle ?? `${post.title} | TEXARE ANALITICA`;
    const description = post.seo?.metaDescription ?? post.excerpt;

    return {
        title,
        description,
        keywords: post.seo?.keywords,
        openGraph: {
            title,
            description,
            type: "article",
            images: [{ url: post.coverImage.src }],
            publishedTime: post.publishedAt,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [post.coverImage.src],
        },
    };
}

function formatDate(dateStr: string) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря",
    ];
    const d = new Date(dateStr);
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default async function ExpertisePostPage({
                                                    params,
                                                }: {
    params: Promise<{ lang: string; id: string }>;
}) {
    const { lang, id } = await params; // Next.js 15: params har doim await qilinishi kerak
    const post = getPostById(id);

    if (!post) {
        notFound();
    }

    const nextPost = getNextPost(id);
    const prevPost = getPrevPost(id);
    const category = getCategoryById(post.category);
    const expert = getExpertById(post.expert);

    // JSON-LD structured data — Google uchun Article schema (SEO)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: [post.coverImage.src],
        datePublished: post.publishedAt,
        author: expert ? {
            "@type": "Person",
            name: expert.name,
            jobTitle: expert.role,
        } : undefined,
        publisher: {
            "@type": "Organization",
            name: "TEXARE ANALITICA",
        },
    };

    return (
        <main className="min-h-screen bg-white">
            {/* eslint-disable-next-line react/no-danger */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <PageHeader
                lang={lang}
                breadcrumbLabel={post.title}
                title={category?.label || "Экспертиза"}
                description={undefined}
            />

            <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
                {/* Meta row */}
                <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                    {category && (
                        <span className="rounded-full bg-neutral-100 px-3 py-1 font-medium text-neutral-700">
                            {category.label}
                        </span>
                    )}
                    <span>{formatDate(post.publishedAt)}</span>
                    {post.readTime && (
                        <>
                            <span aria-hidden="true">·</span>
                            <span>{post.readTime} мин чтения</span>
                        </>
                    )}
                </div>

                <h1 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
                    {post.title}
                </h1>

                <p className="mt-4 text-lg leading-relaxed text-neutral-500">{post.excerpt}</p>

                {/* Expert info */}
                {expert && (
                    <div className="mt-6 flex items-center gap-3 border-y border-neutral-100 py-4">
                        <div>
                            <p className="text-sm font-medium text-neutral-900">{expert.name}</p>
                            <p className="text-xs text-neutral-500">{expert.role}</p>
                        </div>
                    </div>
                )}

                {/* Cover image (hero) */}
                <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 768px"
                    />
                </div>

                {/* Flexible content: paragraflar, rasmlar, ro'yxatlar, quote va h.k. */}
                <div className="mt-8">
                    <ContentRenderer blocks={post.content} />
                </div>

                {/* Prev / Next navigation */}
                <div className="mt-12 grid grid-cols-1 gap-4 border-t border-neutral-100 pt-8 sm:grid-cols-2">
                    {prevPost ? (
                        <Link
                            href={`/${lang}/expertise/${prevPost.id}`}
                            className="group rounded-xl border border-neutral-200 p-4 transition-colors hover:border-neutral-300"
                        >
                            <span className="text-xs text-neutral-400">← Предыдущая</span>
                            <p className="mt-1 line-clamp-2 text-sm font-medium text-neutral-800 group-hover:text-[#8a6d3b]">
                                {prevPost.title}
                            </p>
                        </Link>
                    ) : (
                        <div />
                    )}
                    {nextPost && (
                        <Link
                            href={`/${lang}/expertise/${nextPost.id}`}
                            className="group rounded-xl border border-neutral-200 p-4 text-right transition-colors hover:border-neutral-300"
                        >
                            <span className="text-xs text-neutral-400">Следующая →</span>
                            <p className="mt-1 line-clamp-2 text-sm font-medium text-neutral-800 group-hover:text-[#8a6d3b]">
                                {nextPost.title}
                            </p>
                        </Link>
                    )}
                </div>
            </article>
        </main>
    );
}