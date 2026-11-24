import React from "react";
import { Certifications, Education as EducationData } from "@/constants";

const Education = () => {
    return (
        <section
            id="education"
            className="flex flex-col items-center justify-center mb-16 md:mb-40"
        >
            <h1 className="text-3xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-8 md:pb-16 text-center px-4">
                Education &amp; Certifications
            </h1>
            <div className="w-full max-w-5xl flex flex-col md:flex-row gap-5 md:gap-8 px-4 md:px-10">
                <div className="flex-1 rounded-lg shadow-lg border border-[#2A0E61] bg-[#0300145e] p-5 md:p-6">
                    <h2 className="text-lg md:text-xl font-semibold text-white">{EducationData.institute}</h2>
                    <p className="mt-2 text-gray-300">{EducationData.degree}</p>
                    <p className="mt-4 text-sm text-gray-400">
                        {EducationData.date} · {EducationData.location}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{EducationData.grade}</p>
                </div>
                <div className="flex-1 rounded-lg shadow-lg border border-[#2A0E61] bg-[#0300145e] p-5 md:p-6">
                    <h2 className="text-lg md:text-xl font-semibold text-white">Certifications</h2>
                    <ul className="mt-4 space-y-3">
                        {Certifications.map((cert) => (
                            <li key={cert.name} className="text-gray-300">
                                {cert.name}
                                <span className="block text-sm text-gray-400">{cert.issuer}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;
