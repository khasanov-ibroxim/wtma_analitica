"use client";
// src/components/exp/ExpertiseExplorer.tsx
// /expertise sahifasining "jonli" qismi: filter, saralash va kartochkalar grid.
// Sahifa (page.tsx) static bo'lgani uchun barcha filtrlash mantig'i shu client
// komponentda, brauzerda amalga oshadi (statik export bilan mos ishlaydi).

import { useMemo, useState, type ReactNode } from "react";
import ExpertPostCard from "./ExpertPostCard";
import ExpertiseFilters from "./Expertisefilters";
import { ExpertPost } from "@/data/data_exp";

interface CategoryCount {
    id: string;
    label: string;
    count: number;
}

interface ExpertCount {
    id: string;
    name: string;
    role: string;
    count: number;
}

type SortOrder = "new" | "old";

export default function ExpertiseExplorer({
                                              posts,
                                              categories,
                                              experts,
                                              lang,
                                              rightSidebar,
                                          }: {
    posts: ExpertPost[];
    categories: CategoryCount[];
    experts: ExpertCount[];
    lang: string;
    rightSidebar?: ReactNode;
}) {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedExpert, setSelectedExpert] = useState<string>("");
    const [dateFrom, setDateFrom] = useState<string>("");
    const [dateTo, setDateTo] = useState<string>("");
    const [sort, setSort] = useState<SortOrder>("new");
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const toggleCategory = (id: string) => {
        setSelectedCategories((prev) =>
            prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
        );
    };

    const hasActiveFilters =
        selectedCategories.length > 0 || !!selectedExpert || !!dateFrom || !!dateTo;

    const resetFilters = () => {
        setSelectedCategories([]);
        setSelectedExpert("");
        setDateFrom("");
        setDateTo("");
    };

    const filteredPosts = useMemo(() => {
        const result = posts.filter((post) => {
            if (
                selectedCategories.length > 0 &&
                !selectedCategories.includes(post.category)
            ) {
                return false;
            }
            if (selectedExpert && post.expert !== selectedExpert) return false;
            if (dateFrom && post.publishedAt < dateFrom) return false;
            if (dateTo && post.publishedAt > dateTo) return false;
            return true;
        });

        return result.sort((a, b) => {
            const diff = new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
            return sort === "new" ? diff : -diff;
        });
    }, [posts, selectedCategories, selectedExpert, dateFrom, dateTo, sort]);

    return (
        <>
            {/* Toolbar: son, saralash, mobil filter tugmasi */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-neutral-500">
                    Найдено{" "}
                    <span className="font-medium text-neutral-800">{filteredPosts.length}</span>{" "}
                    публикаций
                </p>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setMobileFiltersOpen((v) => !v)}
                        className="rounded-lg border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 lg:hidden"
                    >
                        Фильтры{hasActiveFilters ? ` (${selectedCategories.length + (selectedExpert ? 1 : 0)})` : ""}
                    </button>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-neutral-500">Сортировка:</span>
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value as SortOrder)}
                            className="rounded-lg border border-neutral-200 px-3 py-1.5 text-neutral-700"
                        >
                            <option value="new">Сначала новые</option>
                            <option value="old">Сначала старые</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] xl:grid-cols-[260px_1fr_280px]">
                {/* Filter sidebar (desktop: doim ko'rinadi, mobil: tugma bilan ochiladi) */}
                <div className={mobileFiltersOpen ? "block" : "hidden lg:block"}>
                    <ExpertiseFilters
                        categories={categories}
                        experts={experts}
                        selectedCategories={selectedCategories}
                        onToggleCategory={toggleCategory}
                        selectedExpert={selectedExpert}
                        onSelectExpert={setSelectedExpert}
                        dateFrom={dateFrom}
                        dateTo={dateTo}
                        onDateFromChange={setDateFrom}
                        onDateToChange={setDateTo}
                        onReset={resetFilters}
                        hasActiveFilters={hasActiveFilters}
                    />
                </div>

                {/* Kartochkalar grid */}
                <div>
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
                            {filteredPosts.map((post) => (
                                <ExpertPostCard key={post.id} post={post} lang={lang} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 py-16 text-center">
                            <p className="text-neutral-600">
                                По выбранным фильтрам публикации не найдены.
                            </p>
                            <button
                                type="button"
                                onClick={resetFilters}
                                className="mt-3 text-sm font-medium text-[#8a6d3b] hover:underline"
                            >
                                Сбросить фильтры
                            </button>
                        </div>
                    )}
                </div>

                {/* O'ng sidebar: Populyar temalar + iqtibos (desktopda xl dan boshlab) */}
                {rightSidebar && <div className="hidden xl:block">{rightSidebar}</div>}
            </div>
        </>
    );
}