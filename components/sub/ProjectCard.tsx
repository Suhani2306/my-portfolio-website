import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    date: string;
}

const ProjectCard = ({ src, title, description, date }: Props) => {
    // Split the description by '_'
    const descriptionItems = description.split('_');

    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
            {/* <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full object-contain"
            /> */}

            <div className="relative p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold text-white">{title}</h1>
                    <h4 className="text-base font-semibold text-white">{date}</h4>
                </div>

                <ul className="mt-4 list-disc list-inside text-gray-300 space-y-4 text-base leading-relaxed">
                    {descriptionItems.map((item, index) => (
                        item.trim() && <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;
