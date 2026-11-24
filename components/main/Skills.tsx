import {
    Frontend_skill,
    Language_skill,
    Skill_categories,
    Tooling_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const iconRows = [Language_skill, Frontend_skill, Tooling_skill];

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-12 md:py-20 md:pb-40"
            style={{transform: "scale(0.9)"}}
        >
            <SkillText/>

            {iconRows.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="flex flex-row justify-center md:justify-around flex-wrap mt-4 gap-6 md:gap-5 items-center px-4 md:px-0"
                >
                    {row.map((image, index) => (
                        <SkillDataProvider
                            key={image.skill_name}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                            name={image.skill_name}
                        />
                    ))}
                </div>
            ))}

            <div className="w-full max-w-5xl mt-10 md:mt-12 px-4 md:px-6 flex flex-col gap-5">
                {Skill_categories.map((category) => (
                    <div
                        key={category.label}
                        className="flex flex-col md:flex-row md:items-start gap-3"
                    >
                        <span className="md:w-[120px] shrink-0 font-semibold text-white pt-1">
                            {category.label}
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 rounded-full border border-[#7042f861] bg-[#0300145e] text-gray-200 text-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
