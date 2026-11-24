import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export const Socials = [
    {
        name: "GitHub",
        Icon: RxGithubLogo,
        link: "https://github.com/Suhani2306",
    },
    {
        name: "LinkedIn",
        Icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/suhani-maheshwari-a6b7161a3/",
    },
];

export const Contact_email = "suhanimaheshwari23@gmail.com";

export const Nav_links = [
    { label: "About me", href: "#about-me" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#projects" },
    { label: "Education", href: "#education" },
];

// Skill icons (only skills from the resume that have an icon in /public)
export const Language_skill = [
    { skill_name: "HTML 5", Image: "/html.png", width: 80, height: 80 },
    { skill_name: "CSS", Image: "/css.png", width: 80, height: 80 },
    { skill_name: "JavaScript", Image: "/js.png", width: 65, height: 65 },
    { skill_name: "TypeScript", Image: "/ts.png", width: 80, height: 80 },
];

export const Frontend_skill = [
    { skill_name: "React", Image: "/react.png", width: 80, height: 80 },
    { skill_name: "Next.js", Image: "/next.png", width: 80, height: 80 },
    { skill_name: "Redux", Image: "/redux.png", width: 80, height: 80 },
    { skill_name: "TanStack Query", Image: "/reactquery.png", width: 80, height: 80 },
    { skill_name: "Tailwind CSS", Image: "/tailwind.png", width: 80, height: 80 },
];

export const Tooling_skill = [
    { skill_name: "Node.js", Image: "/node-js.png", width: 80, height: 80 },
    { skill_name: "Express.js", Image: "/express.png", width: 70, height: 70 },
    { skill_name: "Git", Image: "/git.png", width: 55, height: 55 },
    { skill_name: "Vite", Image: "/vite.png", width: 55, height: 55 },
    { skill_name: "Figma", Image: "/figma.png", width: 50, height: 50 },
    { skill_name: "Jira", Image: "/jira.png", width: 80, height: 80 },
];

// Full categorized list, as on the resume
export const Skill_categories = [
    { label: "Languages", items: ["JavaScript", "TypeScript"] },
    {
        label: "Frontend",
        items: [
            "React.js", "Next.js", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Radix UI", "CVA",
            "TanStack Query", "Zustand", "Zod", "Socket.io", "WebSockets",
        ],
    },
    { label: "Backend", items: ["Node.js", "Express.js"] },
    { label: "Testing", items: ["React Testing Library", "Vitest"] },
    {
        label: "Tools",
        items: [
            "Git", "Vite", "Turborepo", "pnpm", "Webpack", "ESLint", "Biome", "CI/CD", "Jira",
            "Cursor", "Claude Code", "Storybook", "Figma to Code",
        ],
    },
    { label: "Database", items: ["MongoDB"] },
];

export const Experience = [
    {
        company: "Javis.ai",
        role: "Software Development Engineer II – Frontend",
        location: "Remote",
        date: "March 2025 – Present",
        points: [
            "Solely architected and built Genie, the company's AI product, end-to-end within a shared pnpm/Turborepo monorepo. Built a type-safe SDK (@javis/genie-sdk) covering conversation, instructions, model, and provider surfaces, along with a 30+ component design system and the customer-facing platform, website, and app shell.",
            "Owned every layer of the frontend stack, including TanStack Query, typed error handling over a resilient HTTP core with cookie-session authentication, Tailwind CSS v4 with OKLCH design tokens, Radix UI, CVA, and product applications under an ADR-governed architecture with enforced import boundaries and CI gates.",
            "Led the modularization of Genie by extracting a reusable SDK separate from the core codebase and modernizing legacy implementations instead of directly porting them.",
            "Built a component-driven UI foundation with light/dark themes, token parity validation, and a local preview gallery for visual verification before releases.",
        ],
    },
    {
        company: "LogiNext Solutions Inc.",
        role: "Software Engineer – UI",
        location: "Mumbai, India",
        date: "July 2023 – February 2025",
        points: [
            "Migrated the LogiNext website from PHP to Next.js, significantly improving SEO, responsiveness, and achieving Lighthouse performance scores of 90–100.",
            "Developed 16+ reusable components for the internal UI library using Storybook and managed production package publishing.",
            "Migrated 18+ AngularJS modules to React within a single quarter, supporting the organization's transition to a unified frontend framework.",
            "Led junior developers by providing guidance on coding practices, ensuring adherence to company policies, and conducting sessions on new features.",
            "Reduced Firebase costs by approximately 80% by optimizing WebSocket usage.",
            "Contributed to the architecture of a highly scalable tracking-link system serving over 1 million customers.",
        ],
    },
    {
        company: "LogiNext Solutions Inc.",
        role: "Junior Software Engineer – UI",
        location: "Mumbai, India",
        date: "July 2022 – June 2023",
        points: [
            "Collaborated with product managers to build complex product features using React.",
            "Implemented advanced mapping capabilities with Leaflet, including markers, heat maps, live tracking, polygons, and circle plotting.",
            "Conducted technical sessions to promote knowledge sharing across the engineering team.",
            "Developed complex form workflows using React to improve user interaction and data handling.",
        ],
    },
    {
        company: "LogiNext Solutions Inc.",
        role: "Software Engineer Intern – UI",
        location: "Mumbai, India",
        date: "January 2022 – June 2022",
        points: [
            "Developed four product features using React and Angular.",
            "Participated in a company-wide bugathon, resolving 12 production bugs in a single day.",
        ],
    },
    {
        company: "FinIQ Consulting",
        role: "Technical Summer Intern",
        location: "Remote",
        date: "June 2021 – August 2021",
        points: [
            "Developed web pages in Angular based on product requirements.",
            "Designed and managed country-specific SQL databases to support regional data management.",
        ],
    },
];

export const Education = {
    institute: "Indian Institute of Information Technology, Pune",
    degree: "Bachelor of Technology (B.Tech), Electronics and Communication Engineering",
    location: "Pune, India",
    date: "August 2018 – June 2022",
    grade: "CGPA: 8.85",
};

export const Certifications = [
    { name: "The Complete 2021 Web Development Bootcamp", issuer: "Udemy" },
    { name: "Global Certification on Business and Operations Analytics", issuer: "IIM Mumbai" },
    { name: "SQL – MySQL for Data Analytics and Business Intelligence", issuer: "Udemy" },
    { name: "Product Management", issuer: "Great Learning" },
];
