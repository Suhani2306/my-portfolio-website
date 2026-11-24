import React from "react";

interface Props {
    company: string;
    role: string;
    location: string;
    date: string;
    points: string[];
}

const ProjectCard = ({ company, role, location, date, points }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0300145e]">
            <div className="relative p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                    <div>
                        <h2 className="text-lg md:text-xl font-semibold text-white">{role}</h2>
                        <h3 className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {company}
                        </h3>
                    </div>
                    <div className="mt-1 md:mt-0 md:text-right text-gray-400 text-sm shrink-0">
                        <span className="font-semibold text-white md:block">{date}</span>
                        <span className="md:hidden"> · </span>
                        <span className="md:block">{location}</span>
                    </div>
                </div>

                <ul className="mt-4 list-disc list-outside pl-5 text-gray-300 space-y-3 text-[15px] md:text-base leading-relaxed">
                    {points.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;
