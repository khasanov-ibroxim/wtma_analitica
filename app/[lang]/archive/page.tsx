

import QuotesArchiveContent, {
    ArchiveCountry,
} from "@/components/UI/QuotesArchiveContent";
import PageHeader from "@/components/UI/PageHeader";
import chn from "@/assets/countriy/china.png"
import usa from "@/assets/countriy/usa.png"
import brazil from "@/assets/countriy/brazil.png"

interface Props {
    params: Promise<{ lang: string }>;
}

export default async function QuotesArchivePage({ params }: Props) {
    const { lang } = await params;

    // Mamlakatlar va ularning excel arxiv fayllari.
    const countries: ArchiveCountry[] = [
        {
            id: "usa",
            name: "США",
            flag: usa,
            description: "Архив котировок хлопка по рынку США. ",
            files: [
                { year: "2025", href: "/downloads/usa/USA_2025.zip" },
                { year: "2024", href: "/downloads/usa/USA_2024.zip" },
            ],
        },
        {
            id: "brazil",
            name: "Бразилия",
            flag: brazil,
            description: "Архив котировок хлопка по рынку Бразилии. ",
            files: [
                { year: "2025", href: "/downloads/br/Brazil_2025.rar" },
                { year: "2024", href: "/downloads/br/Brazil_2024.rar" },
            ],
        },
        {
            id: "china",
            name: "Китай",
            flag: chn,
            description: "Архив котировок хлопка по рынку Китая. ",
            files: [
                { year: "2025", href: "/downloads/china/CHINA_2025.zip" },
                { year: "2024", href: "/downloads/china/CHINA_2024.zip" },
            ],
        },
    ];

    return (
        <div>
            <PageHeader
                lang={lang}
                breadcrumbLabel="Архив котировок"
                title="Архив котировок"
                description="Исторические данные по мировым ценам на хлопок для анализа рыночных тенденций и принятия обоснованных решений."
            />


            <QuotesArchiveContent
                countries={countries}
                infoDescription="Каждый архив содержит Excel-файлы с ежедневными котировками хлопка."
                helpDescription="Наши эксперты готовы помочь вам с доступом к данным и ответить на ваши вопросы."
                helpCtaHref={`https://t.me/DrTex`}
            />
        </div>
    );
}