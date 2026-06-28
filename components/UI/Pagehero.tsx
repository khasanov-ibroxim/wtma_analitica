import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import bg from "@/assets/ui/breadcrumb.png";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageHeroProps {
    title: string;
    backgroundImage?: string | StaticImageData;
    breadcrumbs?: BreadcrumbItem[];
    watermarkText?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
                                               title,
                                               backgroundImage = bg,
                                               breadcrumbs = [],
                                               watermarkText,
                                           }) => {
    return (

        <section
            className="relative w-full overflow-hidden"
            style={{ height: "100vh" }}
        >
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/38" />
            </div>

            {/* Title (chap) + Breadcrumb (o'ng) — vertikal markazda */}
            <div
                className="relative z-10 flex items-center justify-between w-full h-full px-16 md:px-8 sm:px-5"
            >
                <h1
                    className="text-white font-bold m-0 leading-tight"
                    style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", letterSpacing: "-0.02em" }}
                >
                    {title}
                </h1>

                {breadcrumbs.length > 0 && (
                    <nav
                        className="flex items-center shrink-0 border border-white/55 px-5 py-2.5"
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs.map((crumb, index) => {
                            const isLast = index === breadcrumbs.length - 1;
                            return (
                                <span key={index} className="flex items-center">
                                    {!isLast && crumb.href ? (
                                        <Link
                                            href={crumb.href}
                                            className="text-white/70 text-sm font-normal hover:text-white transition-colors"
                                        >
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span className={isLast ? "text-white text-sm font-semibold" : "text-white/70 text-sm"}>
                                            {crumb.label}
                                        </span>
                                    )}
                                    {!isLast && (
                                        <span className="text-white/50 mx-2 text-sm">/</span>
                                    )}
                                </span>
                            );
                        })}
                    </nav>
                )}
            </div>

            {/* Watermark */}
            {watermarkText && (
                <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 z-10 font-black tracking-wide whitespace-nowrap overflow-hidden px-10 leading-none pointer-events-none select-none"
                    style={{
                        fontSize: "clamp(3.5rem, 9vw, 8rem)",
                        color: "transparent",
                        WebkitTextStroke: "1px rgba(255,255,255,0.13)",
                    }}
                >
                    {watermarkText}
                </div>
            )}
        </section>
    );
};

export default PageHero;