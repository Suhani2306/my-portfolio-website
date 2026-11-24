"use client";

import React from "react";
import {motion} from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import {SparklesIcon} from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-28 md:mt-36 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-4 md:gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
                    <h1 className="Welcome-text text-[13px]">
                        Welcome To My Portfolio                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-4 md:mt-6 font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span className="text-2xl leading-snug md:text-base lg:text-lg xl:text-xl">
                        Hi, I am 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Suhani Maheshwari{" "}
                        </span>
                        - Frontend Engineer
                    </span>

                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-base md:text-lg text-gray-400 my-2 md:my-5 max-w-[600px]"
                >
                    Frontend engineer with 4+ years building production React/TypeScript apps — from design systems and reusable SDKs to full product architecture in a monorepo. Currently SDE II – Frontend at Javis.ai, and strong in performance, component libraries, and design-to-code workflows.
                </motion.p>
                <motion.div
                    variants={slideInFromLeft(1)}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
                >
                    <a
                        className="py-3 sm:py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg sm:min-w-[160px]"
                        href="https://www.linkedin.com/in/suhani-maheshwari-a6b7161a3/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn More!
                    </a>
                    <a
                        className="py-3 sm:py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg sm:min-w-[160px]"
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Resume
                    </a>
                </motion.div>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                    className="w-full max-w-[340px] md:max-w-none h-auto"
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;