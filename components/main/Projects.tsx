import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Experience } from "@/constants";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center top-0 md:mt-[-60px] mb-12 md:mb-20"
            id="projects"
        >
            <h1 className="text-3xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-8 md:py-20 text-center px-4">
                Professional Experience
            </h1>
            <div className="h-full w-full max-w-5xl flex flex-col gap-8 px-4 md:px-10">
                {Experience.map((job) => (
                    <ProjectCard
                        key={`${job.company}-${job.role}`}
                        company={job.company}
                        role={job.role}
                        location={job.location}
                        date={job.date}
                        points={job.points}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
