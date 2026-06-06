'use client';

import React from 'react';
import right_img from "@/assets/home_s6/imgi_34_video-02-bg.jpg"
import Image from "next/image";
import {ArrowUpRight , Play} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
                    <div className="w-[70%] h-screen relative">
                        <Image src={right_img} alt={"asdas"} className={"object-cover object-center h-full"}/>

                        <div className="absolute bottom-[100px] left-[100px]">
                            {/* Ripple 1 */}
                            <motion.span
                                className="absolute inset-0 rounded-full border border-gray-400/80"
                                animate={{
                                    scale: [1, 2.5],
                                    opacity: [1, 0],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                }}
                            />

                            {/* Ripple 2 */}
                            <motion.span
                                className="absolute inset-0 rounded-full border border-gray-400/80"
                                animate={{
                                    scale: [1, 2.5],
                                    opacity: [1, 0],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                    delay: 0.8,
                                }}
                            />

                            {/* Ripple 3 */}
                            <motion.span
                                className="absolute inset-0 rounded-full border border-gray-400/80"
                                animate={{
                                    scale: [1, 2.5],
                                    opacity: [1, 0],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                    delay: 1.6,
                                }}
                            />

                            {/* Play Button */}
                            <button
                                className="
            relative z-10
            w-[100px] h-[100px]
            bg-gray-400/80
            rounded-full
            flex items-center justify-center
            cursor-pointer
        "
                            >
                                <Play size={50} color="white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeS6;