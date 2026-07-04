// app/[lang]/archive/page.tsx
import { notFound } from "next/navigation";
import Pagehero from "@/components/UI/Pagehero";
import Analyitics1 from "@/components/analytics/analyitics_1";
import { getPostById } from "@/data/analyticsData";
import bgHero from "@/assets/archive/archive.jpg";
import bg from "@/assets/home/home_s2/archive.jpg";

interface Props {
    params: Promise<{ lang: string }>;
}

export default async function ArchivePage({ params }: Props) {
    const { lang } = await params;

    const post = getPostById("analytics_copy");
    if (!post) notFound();
    const archiveSer = [
        { name: "США ", children:[

                {name:"США_2025" , href:"/downloads/usa/USA_2025.zip"},
                {name:"США_2024" , href:"/downloads/usa/USA_2024.zip"}
            ]},
        { name: "Китай", children:[
                {name:"Китай_2025" , href:"/downloads/usa/CHINA_2025.zip"},
                {name:"Китай_2024" , href:"/downloads/usa/CHINA_2024.zip"}
            ]},
        { name: "Бразилия ", children:[

                {name:"Бразилия_2025" , href:"/downloads/br/Brazil_2025.rar"},
                {name:"Бразилия_2024" , href:"/downloads/br/Brazil_2024.rar"},
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
            <Analyitics1 post={post} lang={lang} services={archiveSer} heroImage={bg}/>
        </div>
    );
}