"use client";

import i1 from "@/assets/about/imgi_5_about-slider-01.jpg"
import i2 from "@/assets/about/imgi_6_about-slider-02.jpg"
import i3 from "@/assets/about/imgi_7_about-slider-03.jpg"

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


const images = [
    { src: i1, alt: "Hamkasblar bilan ishlash" },
    { src: i2, alt: "Hujjatlarni ko'rib chiqish" },
    { src: i3, alt: "Tabriklash lahzasi" },
    { src: i1, alt: "Hamkasblar bilan ishlash" },
    { src: i2, alt: "Hujjatlarni ko'rib chiqish" },
    { src: i3, alt: "Tabriklash lahzasi" },

];

const AboutS1 = () => {
    return (
        <section className="relative w-full px-4 sm:px-6 lg:px-10 py-10 lg:py-20 overflow-visible">
            <Swiper
                modules={[Autoplay]}
                loop
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                spaceBetween={16}
                breakpoints={{
                    0: { slidesPerView: 1.15, spaceBetween: 16 },
                    640: { slidesPerView: 1.6, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 28 },
                }}
                className="!overflow-visible"
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full aspect-square overflow-hidden bg-neutral-100">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                                priority={i === 0}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
};

export default AboutS1;