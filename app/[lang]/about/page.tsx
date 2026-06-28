import React from 'react';
import About_s1 from "@/components/about/about_s1";
import AboutS2 from "@/components/about/about_s2";
import AboutS4 from "@/components/about/about_s4";
import AboutS3 from "@/components/about/about_s3";
import Pagehero from "@/components/UI/Pagehero";
import bg from "@/assets/ui/breadcrumb.png";

const Page = () => {
    return (
        <div>
            <Pagehero
                title="About Us"
                watermarkText="WTMA ANALITIC"
                backgroundImage={bg}
                breadcrumbs={[{label: "Home", href: "/"}, {label: "about us"}]}
            />
            <About_s1/>
            <AboutS2/>
            <AboutS3/>
            <AboutS4/>
        </div>
    );
};

export default Page;