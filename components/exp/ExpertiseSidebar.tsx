// src/components/expertise/ExpertiseSidebar.tsx
"use client";

export default function ExpertiseSidebar() {
    return (
        <aside className="space-y-6">
            {/* Newsletter */}
            <div className="rounded-2xl border border-neutral-200 bg-[#FBF6EC] p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M3 6.5 12 13l9-6.5M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                            stroke="#8a6d3b"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <h3 className="text-sm font-semibold text-neutral-900">
                    Будьте в курсе отраслевых инсайтов
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                    Подпишитесь на рассылку экспертных материалов
                </p>
                <button
                    type="button"
                    className="mt-4 w-full rounded-lg bg-[#1c2b3a] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#12202c]"
                >
                    Подписаться
                </button>
            </div>
        </aside>
    );
}