"use client";
import u1 from "@/assets/about/imgi_8_td-h5-team-01.jpg"
import u2 from "@/assets/about/imgi_11_td-h5-team-04.jpg"
import u3 from "@/assets/about/imgi_10_td-h5-team-03.jpg"
import u4 from "@/assets/about/imgi_9_td-h5-team-02.jpg"

import Image from "next/image";
import { FaFacebookF, FaXTwitter, FaBehance, FaLinkedinIn } from "react-icons/fa6";

const advisors = [
    {
        name: "Miranda H. Halim",
        role: "Founder",
        img: u1,
    },
    {
        name: "Teresa L. Marion",
        role: "Financial Officer",
        img: u2,
    },
    {
        name: "Donna D. Dicken",
        role: "Head of Customer Relations",
        img: u3,
    },
    {
        name: "Rosalina D. William",
        role: "Chief Executive Officer",
        img: u4,
    },
];

const AboutS3 = () => {
    return (
        <section className="w-full bg-indigo-50/40 px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
            <div className="mx-auto max-w-6xl">
                <div className="text-center">
                    <p className="text-xs uppercase tracking-wide text-neutral-400">
                        НАША КОМАНДА
                    </p>
                    <h2 className="mt-3 text-3xl font-light text-neutral-900 sm:text-4xl">
                        Люди отраслевой аналитики
                    </h2>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
                    {advisors.map((a) => (
                        <div key={a.name}>
                            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
                                <Image
                                    src={a.img}
                                    alt={a.name}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-sm font-medium text-neutral-900 sm:text-base">
                                {a.name}
                            </h3>
                            <p className="mt-1 text-xs text-neutral-400">{a.role}</p>
                            <div className="mt-3 flex items-center gap-3 text-neutral-400">
                                <FaFacebookF className="h-3 w-3" />
                                <FaXTwitter className="h-3 w-3" />
                                <FaBehance className="h-3.5 w-3.5" />
                                <FaLinkedinIn className="h-3 w-3" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row">
                    <p className="text-sm text-neutral-600">
                        Want to work with us right away?
                    </p>
                    <button className="flex items-center gap-2 bg-neutral-900 px-5 py-3 text-sm text-white">
                        Join Our Team <span>↗</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutS3;