// src/components/exp/ExpertPostCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ExpertPost, getCategoryById, getExpertById } from "@/data/data_exp";

function formatDate(dateStr: string) {
    const months = [
        "янв", "фев", "мар", "апр", "мая", "июн",
        "июл", "авг", "сен", "окт", "ноя", "дек",
    ];
    const d = new Date(dateStr);
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default function ExpertPostCard({
                                           post,
                                           lang = "ru",
                                       }: {
    post: ExpertPost;
    lang?: string;
}) {
    const category = getCategoryById(post.category);
    const expert = getExpertById(post.expert);

    return (
        <Link
            href={`/${lang}/expertise/${post.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-200/60"
        >
            <div className="relative aspect-[4/2.6] w-full overflow-hidden bg-neutral-100">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {category && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 backdrop-blur">
                        {category.label}
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-[#8a6d3b]">
                    {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-500">
                    {post.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
                    <div className="flex items-center gap-2">
                        {expert && (
                            <span className="text-xs font-medium text-neutral-600">
                                {expert.name}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                        <span>{formatDate(post.publishedAt)}</span>
                        {post.readTime && (
                            <>
                                <span>·</span>
                                <span>{post.readTime} мин</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
