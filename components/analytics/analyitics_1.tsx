"use client";
import { useState } from "react";
import Link from "next/link";
import { AnalyticsPost, getNextPost } from "@/data/analyticsData";
import Image from "next/image";

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
    post: AnalyticsPost;
    lang: string;
}

// ─── Circle Progress ──────────────────────────────────────────────────────────
function CircleProgress({ percent, value, label }: { percent: number; value: string; label: string }) {
    const r = 42;
    const circ = 2 * Math.PI * r;
    const offset = circ - (percent / 100) * circ;
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative w-28 h-28">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r={r} fill="none" stroke="#e5e7eb" strokeWidth="7" />
                    <circle
                        cx="50" cy="50" r={r}
                        fill="none"
                        stroke="#111827"
                        strokeWidth="7"
                        strokeDasharray={circ}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                    />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-900">
          {value}
        </span>
            </div>
            <span className="text-sm text-gray-500 font-medium">{label}</span>
        </div>
    );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
    const [open, setOpen] = useState(!!defaultOpen);
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-3 w-full text-left group"
            >
                <span className="text-gray-400 text-base w-4 flex-shrink-0">{open ? "—" : "+"}</span>
                <span className={`text-sm font-medium transition-colors ${open ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"}`}>
          {q}
        </span>
            </button>
            {open && a && (
                <p className="mt-3 ml-7 text-sm text-gray-500 leading-relaxed">{a}</p>
            )}
        </div>
    );
}

// ─── Arrow Icon ───────────────────────────────────────────────────────────────
function ArrowRight({ color = "currentColor" }: { color?: string }) {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
        </svg>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Analyitics1({ post, lang }: Props) {
    const nextPost = getNextPost(post.id);

    return (
        <section className="w-full bg-white py-12 px-4 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">

                {/* LEFT / MAIN */}
                <div className="flex flex-col gap-10">

                    {/* Hero Image */}
                    <div className="w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden bg-gray-100">
                        <Image
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Intro Details */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{post.introTitle}</h2>
                        <div className="flex flex-col gap-4 text-sm text-gray-600 leading-relaxed">
                            {post.introParagraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>

                    {/* Stats + FAQ */}
                    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 items-start">
                        <div className="flex sm:flex-col gap-8 sm:gap-12">
                            {post.stats.map((s) => (
                                <CircleProgress key={s.label} percent={s.percent} value={s.value} label={s.label} />
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <div className="border-t border-gray-200" />
                            {post.faqs.map((f) => (
                                <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={f.defaultOpen} />
                            ))}
                        </div>
                    </div>

                    {/* Bottom text */}
                    <div className="flex flex-col gap-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-8">
                        {post.bottomParagraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>

                    {/* Next Post */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <div className="grid grid-cols-3 gap-1">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400 block" />
                            ))}
                        </div>
                        <Link
                            href={`/${lang}/analytics/${nextPost.id}`}
                            className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors"
                        >
                            Next Post <ArrowRight />
                        </Link>
                    </div>
                </div>

                {/* RIGHT / SIDEBAR */}
                <aside className="flex flex-col gap-6">

                    {/* Our Services */}
                    <div className="border border-gray-200 p-6">
                        <h3 className="text-base font-semibold text-gray-900 mb-3">Our Services</h3>
                        <div className="border-t border-gray-200 mb-1" />
                        <ul className="flex flex-col">
                            {post.services.map((s) => (
                                <li key={s.name} className="border-b border-gray-100 last:border-none">
                                    <Link
                                        href={s.href}
                                        className="flex items-center justify-between py-3 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                                    >
                                        {s.name}
                                        <ArrowRight />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Downloads */}
                    <div className="flex flex-col gap-3">
                        {post.downloads.map((d) => (
                            <Link
                                key={d.label}
                                href={d.href}
                                className="flex items-center justify-between bg-slate-100 hover:bg-slate-200 px-4 py-4 text-sm text-gray-800 font-medium transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <rect x="1" y="1" width="10" height="16" rx="1" fill="#1e293b"/>
                                        <path d="M9 1v5h5" fill="white" stroke="#1e293b" strokeWidth="1"/>
                                        <path d="M3 8h7M3 11h5" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                                    </svg>
                                    {d.label}
                                </div>
                                <ArrowRight color="#9ca3af" />
                            </Link>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="border border-gray-100 p-6">
                        <h3 className="text-base font-semibold text-gray-900 mb-5">How can we help you?</h3>
                        <div className="flex flex-col">
                            <div className="flex items-center border-b border-gray-200 py-3 gap-2">
                                <input type="text" placeholder="Your name" className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent" />
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                                </svg>
                            </div>
                            <div className="flex items-center border-b border-gray-200 py-3 gap-2">
                                <input type="email" placeholder="Email address" className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent" />
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </div>
                            <div className="flex items-start border-b border-gray-200 py-3 gap-2">
                                <textarea placeholder="Message" rows={4} className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent resize-none" />
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                                    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                                </svg>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="mt-5 flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium px-5 py-3 transition-colors cursor-pointer"
                        >
                            Get In Touch
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                            </svg>
                        </button>
                    </div>

                </aside>
            </div>
        </section>
    );
}