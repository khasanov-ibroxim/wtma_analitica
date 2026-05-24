import React from 'react';
import Link from "next/link";

const HomeHeader = () => {
    return (
        <div className={"relative overflow-hidden max-w-full"}>
            <main className="hero overflow-hidden">
                <div className="diagonal-bg" />

                <div className="hero-text-wrap overflow-hidden">
                    <div className="marquee">
                        <h1 className="hero-headline">
                            Business Agency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </h1>

                        <h1 className="hero-headline">
                            Business Agency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </h1>
                    </div>
                </div>
            </main>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-10" />

        </div>
    );
};

export default HomeHeader;