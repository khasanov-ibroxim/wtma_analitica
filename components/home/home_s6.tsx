import React from 'react';
import right_img from "@/assets/home_s6/imgi_34_video-02-bg.jpg"
import Image from "next/image";
import {ArrowUpRight} from "lucide-react";
import Link from "next/link";

const HomeS6 = () => {
    return (
        <div className={"py-24"}>
            <div className="container">
                <div className="flex justify-between items-end">
                    <div className="w-[30%] flex justify-center items-center">
                        <Link href="/" className={"group"}>
                            <ArrowUpRight size={100} />
                        </Link>
                    </div>
                    <div className="w-[70%] h-screen">
                        <Image src={right_img} alt={"asdas"} className={"object-cover object-center h-full"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeS6;