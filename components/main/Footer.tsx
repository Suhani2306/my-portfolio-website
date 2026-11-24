import React from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import { Contact_email, Socials } from "@/constants";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] border-t border-[#2A0E61] md:border-t-0">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-start justify-around flex-wrap gap-y-6 md:gap-y-0 pt-4 md:pt-0">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Profiles</div>
                        {Socials.map(({ name, Icon, link }) => (
                            <p key={name} className="flex flex-row items-center my-[8px] md:my-[15px] cursor-pointer">
                                <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    <Icon />
                                    <span className="text-[15px] ml-[6px]">{name}</span>
                                </a>
                            </p>
                        ))}
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Contact</div>
                        <p className="flex flex-row items-center my-[8px] md:my-[15px] cursor-pointer">
                            <a href={`mailto:${Contact_email}`} className="flex items-center">
                                <RxEnvelopeClosed />
                                <span className="text-[15px] ml-[6px]">{Contact_email}</span>
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
