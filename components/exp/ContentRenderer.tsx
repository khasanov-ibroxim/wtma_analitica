// src/components/exp/ContentRenderer.tsx
// Maqola kontentini (ContentBlock[]) render qiladigan komponent.
// Yangi blok turi qo'shilsa (data_exp.ts dagi ContentBlock union'ga),
// shu yerga mos "case" qo'shish kifoya — page.tsx o'zgarmaydi.

import Image from "next/image";
import { ContentBlock } from "@/data/data_exp";

export default function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
    return (
        <div className="space-y-6">
            {blocks.map((block, index) => {
                switch (block.type) {
                    case "paragraph":
                        return (
                            <p
                                key={index}
                                className="text-base leading-relaxed text-neutral-700 sm:text-[17px]"
                            >
                                {block.text}
                            </p>
                        );

                    case "heading": {
                        const Tag = block.level === 3 ? "h3" : "h2";
                        return (
                            <Tag
                                key={index}
                                className={
                                    block.level === 3
                                        ? "text-xl font-semibold text-neutral-900 pt-2"
                                        : "text-2xl font-semibold tracking-tight text-neutral-900 pt-2"
                                }
                            >
                                {block.text}
                            </Tag>
                        );
                    }

                    case "image":
                        return (
                            <figure key={index} className="!my-8">
                                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100">
                                    <Image
                                        src={block.src}
                                        alt={block.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 768px"
                                    />
                                </div>
                                {block.caption && (
                                    <figcaption className="mt-2.5 text-center text-sm text-neutral-400">
                                        {block.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );

                    case "list": {
                        const ListTag = block.style === "ordered" ? "ol" : "ul";
                        return (
                            <div key={index}>
                                {block.title && (
                                    <p className="mb-3 font-medium text-neutral-900">{block.title}</p>
                                )}
                                <ListTag
                                    className={
                                        block.style === "ordered"
                                            ? "list-decimal space-y-2 pl-5 marker:font-medium marker:text-[#8a6d3b]"
                                            : "space-y-2 pl-0"
                                    }
                                >
                                    {block.items.map((item, i) => (
                                        <li
                                            key={i}
                                            className={
                                                block.style === "unordered"
                                                    ? "flex items-start gap-2.5 text-neutral-700"
                                                    : "text-neutral-700 leading-relaxed"
                                            }
                                        >
                                            {block.style === "unordered" && (
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a6d3b]" />
                                            )}
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ListTag>
                            </div>
                        );
                    }

                    case "quote":
                        return (
                            <blockquote
                                key={index}
                                className="border-l-4 border-[#8a6d3b] bg-[#FBF6EC] py-4 pl-5 pr-4 italic text-neutral-800"
                            >
                                <p className="leading-relaxed">{block.text}</p>
                                {block.author && (
                                    <footer className="mt-2 text-sm font-medium not-italic text-neutral-500">
                                        — {block.author}
                                    </footer>
                                )}
                            </blockquote>
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
}