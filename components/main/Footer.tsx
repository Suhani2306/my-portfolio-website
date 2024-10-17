import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-start justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="https://github.com/Suhani2306" target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer z-20">
                                <RxGithubLogo />
                                <span className="text-[15px] ml-[6px]">Github</span>
                            </a>
                        </p>
                        {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="https://x.com/suhanim23?s=08" target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer z-20">
                                <RxTwitterLogo />
                                <span className="text-[15px] ml-[6px]">Twitter</span>
                            </a>
                        </p> */}
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="https://www.instagram.com/suhani_mahe/" target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer z-20">
                                <RxInstagramLogo />
                                <span className="text-[15px] ml-[6px]">Instagram</span>
                            </a>
                        </p> */}
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="https://www.linkedin.com/in/suhani-maheshwari-a6b7161a3/" target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer z-20">
                                <RxLinkedinLogo />
                                <span className="text-[15px] ml-[6px]">Linkedin</span>
                            </a>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Contact</div>
                        {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">+91 6264705630</span>
                        </p> */}
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="mailto:suhanimaheshwari23@gmail.com" className="text-[15px] ml-[6px]">
                                suhanimaheshwari23@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
                <div className="mb-[20px] text-[15px] text-center"></div>
            </div>
        </div>
    );
}

export default Footer;
