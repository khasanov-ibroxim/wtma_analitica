

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
            description: "Архив котировок хлопка по рынку США. Исторические данные с 2010 года.",
            files: [
                { year: "2026", href: "/downloads/usa/USA_2026.zip" }
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
                description="Аналитика, мнения и практический опыт экспертов текстильной отрасли со всего мира."
            />


            <QuotesArchiveContent
                countries={countries}
                infoDescription="Каждый архив содержит Excel-файлы с ежедневными котировками хлопка, включая цены открытия, закрытия, максимальные и минимальные значения."
                helpDescription="Наши эксперты готовы помочь вам с доступом к данным и ответить на ваши вопросы."
                helpCtaHref={`/${lang}/contacts`}
            />
        </div>
    );
}