import Home_header from "@/components/home/home_header/home_header";
import HeaderBottom from "@/components/home/home_header/header_bottom";
import HomeS1 from "@/components/home/home_s1";
import HomeS2 from "@/components/home/home_s2";
import HomeS3 from "@/components/home/home_s3";
import HomeS5 from "@/components/home/home_s5";
import HomeS6 from "@/components/home/home_s6";
import HomeS7 from "@/components/home/home_s7";
import HomeComponent from "@/components/home/homeComponent";

interface Props {
    params: Promise<{ lang: string }>;
}

export default async function Page({ params }: Props) {
    const { lang } = await params;
    return (
        <>
            <HomeComponent lang={lang} />

        </>
    );
}