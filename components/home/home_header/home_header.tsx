import React from 'react';
import Image from 'next/image';
import cottonBg from '@/assets/home/home_header/home_header.jpg'; // yuklangan rasm shu yerga qo'yiladi

const HomeHeader = () => {
    return (
        <div className="relative w-full">
            <main className="relative flex flex-col justify-center overflow-hidden min-h-[calc(100vh-108px)]">

                {/* Background image */}
                <Image
                    src={cottonBg}
                    alt="Ripe cotton seed pods on branch against wooden backdrop"
                    fill
                    priority
                    className="object-cover object-top -z-20  scale-105"
                />

                {/* Fonni qoraytirish uchun to'qroq overlay (matn oq bo'lgani uchun) */}
                <div className="absolute inset-0 -z-10 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center mt-50 text-center px-5 sm:px-10">



                    {/* Headline */}
                    <h1 className=" font-semibold font-montserrat text-white leading-[0.95] tracking-[-0.02em] text-[clamp(42px,9vw,150px)] drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)]">
                        Tex Area Analytics
                    </h1>

                    {/* Subtitle */}
                    <p className="  font-montserrat mt-6 text-[14px] sm:text-[16px]  tracking-[0.05em] text-white/85 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)]">
                        Мировой текстильный поток данных
                    </p>

                    {/* Divider accent */}
                    {/*<div className="mt-9 flex items-center gap-2">*/}
                    {/*    <span className="h-px w-10 bg-white/40" />*/}
                    {/*    <span className="w-1 h-1 rounded-full bg-[#e0846b]" />*/}
                    {/*    <span className="h-px w-10 bg-white/40" />*/}
                    {/*</div>*/}

                </div>
            </main>

            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10" />
        </div>
    );
};

export default HomeHeader;