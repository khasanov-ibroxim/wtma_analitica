import Home_header from "@/components/home/home_header/home_header";
import HeaderBottom from "@/components/home/home_header/header_bottom";
import HomeS1 from "@/components/home/home_s1";
import HomeS2 from "@/components/home/home_s2";
import HomeS3 from "@/components/home/home_s3";

export default function Page() {
    return (
        <>
            <Home_header/>
            <HeaderBottom />
            <HomeS1/>
            <HomeS2/>
            <HomeS3/>
        </>
    );
}