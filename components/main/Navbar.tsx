import { Nav_links, Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import MobileMenu from "../sub/MobileMenu";

const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto md:px-[10px]">
                <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
                    <Image
                        src="/NavLogo.png"
                        alt="logo"
                        width={70}
                        height={70}
                        className="cursor-pointer hover:animate-slowspin w-[48px] h-[48px] md:w-[70px] md:h-[70px]"
                    />
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                        Suhani Maheshwari
                    </span>
                </a>

                <div className="hidden md:w-[500px] md:flex md:flex-row md:items-center md:justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        {Nav_links.map((link) => (
                            <a key={link.href} href={link.href} className="cursor-pointer">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row items-center gap-4 md:gap-5">
                    {Socials.map(({ name, Icon, link }) => (
                        <a
                            href={link}
                            className="cursor-pointer text-gray-200 hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            key={name}
                        >
                            <Icon className="h-6 w-6" />
                        </a>
                    ))}
                    <MobileMenu />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
