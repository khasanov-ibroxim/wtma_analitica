"use client";
// src/components/exp/ExpertiseFilters.tsx
// Chap tarafdagi filter paneli: kategoriyalar, ekspert va sana bo'yicha filtrlash.
// Barcha holat (state) yuqori komponentda (ExpertiseExplorer) saqlanadi,
// bu yerga faqat qiymatlar va callback'lar props orqali uzatiladi.

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

interface ExpertiseFiltersProps {
    categories: CategoryCount[];
    experts: ExpertCount[];
    selectedCategories: string[];
    onToggleCategory: (id: string) => void;
    selectedExpert: string;
    onSelectExpert: (id: string) => void;
    dateFrom: string;
    dateTo: string;
    onDateFromChange: (value: string) => void;
    onDateToChange: (value: string) => void;
    onReset: () => void;
    hasActiveFilters: boolean;
}

export default function ExpertiseFilters({
                                             categories,
                                             experts,
                                             selectedCategories,
                                             onToggleCategory,
                                             selectedExpert,
                                             onSelectExpert,
                                             dateFrom,
                                             dateTo,
                                             onDateFromChange,
                                             onDateToChange,
                                             onReset,
                                             hasActiveFilters,
                                         }: ExpertiseFiltersProps) {
    return (
        <aside className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-base font-semibold text-neutral-900">Фильтры</h2>
                    {hasActiveFilters && (
                        <button
                            type="button"
                            onClick={onReset}
                            className="text-sm text-neutral-500 underline-offset-2 hover:text-[#8a6d3b] hover:underline"
                        >
                            Сбросить
                        </button>
                    )}
                </div>

                {/* Kategoriyalar */}
                <div>
                    <h3 className="mb-3 text-sm font-medium text-neutral-900">Категории</h3>
                    <ul className="space-y-2.5">
                        {categories.map((cat) => {
                            const checked = selectedCategories.includes(cat.id);
                            return (
                                <li key={cat.id}>
                                    <label className="flex cursor-pointer items-center justify-between gap-2 text-sm">
                                        <span className="flex items-center gap-2.5">
                                            <input
                                                type="checkbox"
                                                checked={checked}
                                                onChange={() => onToggleCategory(cat.id)}
                                                className="h-4 w-4 shrink-0 rounded border-neutral-300 text-[#8a6d3b] focus:ring-[#8a6d3b]"
                                            />
                                            <span
                                                className={
                                                    checked
                                                        ? "font-medium text-neutral-900"
                                                        : "text-neutral-600"
                                                }
                                            >
                                                {cat.label}
                                            </span>
                                        </span>
                                        <span className="text-xs text-neutral-400">{cat.count}</span>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Ekspert */}
                <div className="mt-6 border-t border-neutral-100 pt-5">
                    <h3 className="mb-3 text-sm font-medium text-neutral-900">Эксперт</h3>
                    <select
                        value={selectedExpert}
                        onChange={(e) => onSelectExpert(e.target.value)}
                        className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-[#8a6d3b] focus:outline-none focus:ring-1 focus:ring-[#8a6d3b]"
                    >
                        <option value="">Выберите эксперта</option>
                        {experts.map((exp) => (
                            <option key={exp.id} value={exp.id}>
                                {exp.name} ({exp.count})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Sana */}
                <div className="mt-6 border-t border-neutral-100 pt-5">
                    <h3 className="mb-3 text-sm font-medium text-neutral-900">Дата публикации</h3>
                    <div className="space-y-2">
                        <input
                            type="date"
                            value={dateFrom}
                            onChange={(e) => onDateFromChange(e.target.value)}
                            className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-[#8a6d3b] focus:outline-none focus:ring-1 focus:ring-[#8a6d3b]"
                            aria-label="Дата от"
                        />
                        <input
                            type="date"
                            value={dateTo}
                            onChange={(e) => onDateToChange(e.target.value)}
                            className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-[#8a6d3b] focus:outline-none focus:ring-1 focus:ring-[#8a6d3b]"
                            aria-label="Дата до"
                        />
                    </div>
                </div>
            </div>

            {/* Newsletter blok */}
            <div className="rounded-2xl border border-neutral-200 bg-[#FBF6EC] p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg">
                    ✉️
                </div>
                <h3 className="text-sm font-semibold text-neutral-900">
                    Будьте в курсе отраслевых инсайтов
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                    Подпишитесь на рассылку экспертных материалов
                </p>
                <button
                    type="button"
                    className="mt-4 w-full rounded-lg bg-[#1c2b3a] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#243748]"
                >
                    Подписаться
                </button>
            </div>
        </aside>
    );
}