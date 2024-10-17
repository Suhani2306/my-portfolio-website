import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center top-0 mt-[-60px] mb-40"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Professional Experience
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/NextWebsite.png"
                    title="Software Engineer - LogiNext"
                    date="(July 2023 - Present)"
                    description="Transformed LogiNext website from PHP to Next.js, significantly boosting SEO and achieving a
                    performance score of 90-100, while ensuring responsiveness and minimal load times._Developed over 16 common components for the in-house UI library using Storybook, and managed the
                    production publishing process._Experienced in migrating over 18 modules from AngularJS to React within a single quarter, supporting
                    the company's shift to a unified framework codebase._Led junior developers by providing guidance on coding practices, ensuring adherence to company
                    policies, and conducting sessions on new features._Reduced organizational Firebase costs by 60% through the optimization of web sockets."
                />
                <ProjectCard
                    src="/CardImage.png"
                    date="(July 2022 - June 2023)"
                    title="Junior Software Engineer - LogiNext"
                    description="Collaborated with product managers to develop complex features across product, primarily using React,
                    enhancing functionality and user experience._Implemented diverse functionalities using Leafet maps, including markers, heat maps, tracking maps,
                    and polygon and circle plotting._Conducted technical sessions to facilitate learning and knowledge sharing among developers, fostering
                    collaborative team environment._Developed complex features using React-forms to streamline user interactions and improve data
                    handling."
                />
                <ProjectCard
                    src=""
                    title="Software Engineer Intern - LogiNext"
                    date="(Jan 2022 - June 2022)"
                    description="Developed four new features using both React and Angular improving overall user experience and
                    functionality._Actively participated in company-wide bugathon, resolving 12 production bugs in a single day,
                    demonstrating strong problem-solving skills and commitment to quality."
                />
            </div>
        </div>
    );
};

export default Projects;
