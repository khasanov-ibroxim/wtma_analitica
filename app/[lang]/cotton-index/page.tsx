

import QuotesArchiveContent, {
    ArchiveCountry,
} from "@/components/UI/QuotesArchiveContent";
import PageHeader from "@/components/UI/PageHeader";
import chn from "@/assets/countriy/china.png"
import usa from "@/assets/countriy/usa.png"
import brazil from "@/assets/countriy/brazil.png"
import {CalendarIcon, FileIcon} from "lucide-react";

interface Props {
    params: Promise<{ lang: string }>;
}

function RefreshIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
    );
}

export default async function QuotesArchivePage({ params }: Props) {
    const { lang } = await params;

    const infoStat = [
        { icon: <CalendarIcon />, label: "исторических данных", value: "2026" },
        { icon: <RefreshIcon />, label: "обновление", value: "Ежемесячное" },
        { icon: <FileIcon />, label: "Excel (.xlsx)", value: "Удобный формат" },
    ];

    const countries: ArchiveCountry[] = [
        {
            id: "usa",
            name: "США",
            flag: usa,
            description: "Архив котировок хлопка по рынку США. Исторические данные с 2010 года.",
            files: [
                { year: "2026", href: "/downloads/usa/USA_2026.zip" }
            ],
        },
        {
            id: "china",
            name: "Китай",
            flag: chn,
            description: "Архив котировок хлопка по рынку Китай. Исторические данные с 2010 года.",
            files: [
                { year: "2026", href: "/downloads/china/CHINA_2026.zip" }
            ],
        },
        {
            id: "brazil",
            name: "Бразилия",
            flag: brazil,
            description: "Архив котировок хлопка по рынку Бразилии. Исторические данные с 2010 года.",
            files: [
                { year: "2026", href: "/downloads/br/Brazil_2026.zip" }
            ],
        },
    ];

    return (
        <div>
            <PageHeader
                lang={lang}
                breadcrumbLabel="Индекс хлопка"
                title="Индекс хлопка"
                description="Актуальные мировые котировки, динамика цен и аналитика рынка хлопка для принятия обоснованных закупочных и экспортных решений."
            />


            <QuotesArchiveContent
                countries={countries}
                infoStats={infoStat}
                infoDescription="Каждый архив содержит Excel-файлы с ежедневными котировками хлопка."
                helpDescription="Наши эксперты готовы помочь вам с доступом к данным и ответить на ваши вопросы."
                helpCtaHref={`https://t.me/DrTex`}
            />
        </div>
    );
}