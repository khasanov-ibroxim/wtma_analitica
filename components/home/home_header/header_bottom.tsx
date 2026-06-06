import React from 'react';
import bg_img from "@/assets/home_header_bottom/h1-bg.jpg"
import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';

const HeaderBottom = () => {
    return (
        <div className="relative w-full h-[45vh] sm:h-[55vh] lg:h-[70vh] overflow-hidden max-w-full">

            <Image
                src={bg_img}
                alt="bg"
                fill
                className="object-cover object-bottom"
                priority
            />

            <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center lg:justify-around h-full px-4 sm:px-6 lg:px-0 gap-6 lg:gap-0 max-w-full overflow-hidden">

                {/* Left text */}
                <div className="max-w-3xl p-4 sm:p-6 lg:p-10 text-center lg:text-left w-full overflow-hidden">

                    <h1 className="text-3xl sm:text-5xl lg:text-[80px] leading-[0.9] font-semibold text-[#1B222C] tracking-[-2px] sm:tracking-[-3px] lg:tracking-[-4px] break-words">
                        Achieve
                    </h1>

                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-6 mt-2 w-full overflow-hidden">
                        <h1 className="text-3xl sm:text-5xl lg:text-[80px] leading-[0.9] font-semibold text-[#1B222C] tracking-[-2px] sm:tracking-[-3px] lg:tracking-[-4px] break-words w-full">
                            <span className="flex items-center justify-center lg:justify-start flex-wrap">
                                <ArrowUpRight size={32} className="sm:w-14 sm:h-14 lg:w-20 lg:h-20 flex-shrink-0" /> results with
                            </span>
                            modern idea
                        </h1>
                    </div>
                </div>

                {/* Right info block */}
                <div className="flex items-center gap-3 sm:gap-5">

                    {/* Globe icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.8}
                            stroke="white"
                            className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9Zm0 0c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9m0-18c-2.5 2.5-4 5.7-4 9s1.5 6.5 4 9m-8-9h16"
                            />
                        </svg>
                    </div>

                    {/* Text */}
                    <p className="text-sm sm:text-lg lg:text-2xl leading-[1.4] text-[#1B222C] font-medium">
                        Expertise advice for
                        <br />
                        your business plans
                    </p>
                </div>
            </div>

        </div>
    );
};

export default HeaderBottom;