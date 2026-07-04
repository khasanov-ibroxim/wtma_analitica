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
                    className="object-cover object-top -z-20"
                />

                {/* O'qilishini yaxshilash uchun nozik overlay */}
                <div className="absolute inset-0 -z-10 bg-black/10" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center mt-50 text-center px-5 sm:px-10">



                    {/* Headline */}
                    <h1 className=" font-semibold font-montserrat text-[#211f1c] leading-[0.95] tracking-[-0.02em] text-[clamp(42px,9vw,150px)] drop-shadow-[0_2px_12px_rgba(255,255,255,0.6)]">
                        Tex Area Analytics
                    </h1>

                    {/* Subtitle */}
                    <p className="  font-montserrat mt-6 text-[14px] sm:text-[16px]  tracking-[0.05em] text-[#2f2c28] drop-shadow-[0_1px_6px_rgba(255,255,255,0.6)]">
                        Мировой текстильный поток данных
                    </p>

                    {/* Divider accent */}
                    <div className="mt-9 flex items-center gap-2">
                        <span className="h-px w-10 bg-[#c7c0b6]" />
                        <span className="w-1 h-1 rounded-full bg-[#9c3b2e]" />
                        <span className="h-px w-10 bg-[#c7c0b6]" />
                    </div>

                </div>
            </main>

            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-10" />
        </div>
    );
};

export default HomeHeader;