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
            className="relative w-full overflow-hidden min-h-[440px] sm:min-h-[520px]"
            style={{ height: "100svh" }}
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

            {/* Title + Breadcrumb — mobil: pastma-past va markazda, desktop: yonma-yon */}
            <div
                className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-5 sm:gap-6 md:gap-4 w-full h-full px-5 sm:px-8 md:px-12 lg:px-16"
            >
                <h1
                    className="text-white font-bold m-0 leading-tight max-w-full break-words"
                    style={{ fontSize: "clamp(2.2rem, 7vw, 4.5rem)", letterSpacing: "-0.02em" }}
                >
                    {title}
                </h1>

                {breadcrumbs.length > 0 && (
                    <nav
                        className="flex items-center flex-wrap shrink-0 border border-white/55 px-4 py-2 sm:px-5 sm:py-2.5"
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs.map((crumb, index) => {
                            const isLast = index === breadcrumbs.length - 1;
                            return (
                                <span key={index} className="flex items-center">
                                    {!isLast && crumb.href ? (
                                        <Link
                                            href={crumb.href}
                                            className="text-white/70 text-xs sm:text-sm font-normal hover:text-white transition-colors"
                                        >
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span className={isLast ? "text-white text-xs sm:text-sm font-semibold" : "text-white/70 text-xs sm:text-sm"}>
                                            {crumb.label}
                                        </span>
                                    )}
                                    {!isLast && (
                                        <span className="text-white/50 mx-1.5 sm:mx-2 text-xs sm:text-sm">/</span>
                                    )}
                                </span>
                            );
                        })}
                    </nav>
                )}
            </div>

            {/* Watermark — juda kichik ekranlarda matnni band qilmasligi uchun yashiriladi */}
            {watermarkText && (
                <div
                    aria-hidden="true"
                    className="hidden sm:block absolute bottom-0 left-0 right-0 z-10 font-black tracking-wide whitespace-nowrap overflow-hidden px-6 md:px-10 leading-none pointer-events-none select-none"
                    style={{
                        fontSize: "clamp(3rem, 9vw, 8rem)",
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