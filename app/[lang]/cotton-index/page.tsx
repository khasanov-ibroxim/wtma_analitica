// app/[lang]/cotton-index/page.tsx
import { notFound } from "next/navigation";
import Pagehero from "@/components/UI/Pagehero";
import Analyitics1 from "@/components/analytics/analyitics_1";
import { getPostById } from "@/data/analyticsData";
import bgHero from "@/assets/cottonIndex/cotton.jpg";
import bg from "@/assets/home/home_s2/indexMarket.jpg";

interface Props {
    params: Promise<{ lang: string }>;
}

export default async function CottonIndexPage({ params }: Props) {
    const { lang } = await params;

    const post = getPostById("cotton");
    if (!post) notFound();
    const indexSer: ServiceLink[] = [
        { name: "США ", children:[
                {name:"США_2026" , href:"/downloads/usa/USA_2026.zip"},
            ]},
        { name: "Бразилия ", children:[
                {name:"Бразилия_2026" , href:"/downloads/br/Brazil_2026.zip"},

            ]},
    ];

    return (
        <div>
            <Pagehero
                title={post.title}
                watermarkText={post.watermarkText}
                backgroundImage={bgHero}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Аналитика рынков", href: `/${lang}/analytics` },
                    { label: post.title },
                ]}
            />
            <Analyitics1 post={post} lang={lang} services={indexSer} heroImage={bg}/>
        </div>
    );
}