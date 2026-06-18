import React from 'react';
import Link from "next/link";

const HomeHeader = () => {
    return (
        <div className={"relative  w-full"}>
            <main className="hero ">
                <div className="diagonal-bg" />

                <div className="hero-text-wrap ">
                    <div className="marquee">
                        <h1 className="hero-headline">
                           Tex Area Analitics
                        </h1>

                        <h1 className="hero-headline">
                            Tex Area Analitics
                        </h1>
                    </div>
                </div>
            </main>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-10" />

        </div>
    );
};

export default HomeHeader;