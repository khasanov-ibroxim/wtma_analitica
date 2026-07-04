import React from 'react';
import About_s1 from "@/components/about/about_s1";
import AboutS2 from "@/components/about/about_s2";
import AboutS4 from "@/components/about/about_s4";
import AboutS3 from "@/components/about/about_s3";
import Pagehero from "@/components/UI/Pagehero";
import bg from "@/assets/about/KOMANDA.jpg";

const Page = () => {
    return (
        <div>
            <Pagehero
                title="О нас"
                watermarkText=""
                backgroundImage={bg}
                breadcrumbs={[{label: "Главная", href: "/"}, {label: "О нас"}]}
            />
            <About_s1/>
            <AboutS2/>

            <AboutS4/>
        </div>
    );
};

export default Page;