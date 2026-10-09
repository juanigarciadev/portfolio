import type { ComponentType } from "react";
import Bootstrap from "@/components/icons/Bootstrap";
import Css from "@/components/icons/Css";
import Firebase from "@/components/icons/Firebase";
import Github from "@/components/icons/Github";
import Linkedin from "@/components/icons/Linkedin";
import Mail from "@/components/icons/Mail";
import NextJs from "@/components/icons/NextJs";
import ReactJS from "@/components/icons/ReactJS";
import Sass from "@/components/icons/Sass";
import Vercel from "@/components/icons/Vercel";
import Vite from "@/components/icons/Vite";
import Tailwind from "@/components/icons/Tailwind";
import Html from "@/components/icons/Html";
import TypeScript from "@/components/icons/TypeScript";
import NestJs from "@/components/icons/NestJs";
import Postgres from "@/components/icons/Postgres";
import MySql from "@/components/icons/MySql";
import Docker from "@/components/icons/Docker";
import Jenkins from "@/components/icons/Jenkins";
import Clerk from "@/components/icons/Clerk";
import Odoo from "@/components/icons/Odoo";
import Framer from "@/components/icons/Framer";
import Swiper from "@/components/icons/Swiper";

export type Technology = {
    name: string;
    icon?: ComponentType<{ className?: string }>;
};

export type ProjectBlock = {
    /** Subtítulo de la sección. */
    title?: string;
    /** Admite links con la sintaxis [texto](url). */
    text: string;
    /** Lista de puntos que se muestra debajo del texto. */
    bullets?: string[];
    image?: { src: string; alt: string };
    /** Sin imagen todavía: muestra una card vacía con esta descripción de qué va ahí. */
    placeholder?: string;
};

export type Project = {
    slug: string;
    name: string;
    category: "work" | "personal";
    context: string;
    description: string;
    technologies: Technology[];
    imageUrl?: string;
    websiteUrl?: string;
    repositoryUrl?: string;
    blocks: ProjectBlock[];
};

export const SOCIALS = [
        {
            title: 'Github',
            icon: Github,
            url: 'https://github.com/juanigarciadev',
        },
        {
            title: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/juanigarciadev/',
        },
        {
            title: 'Contact me',
            icon: Mail,
            url: 'mailto:juanigarciadev@gmail.com',
        },
]

export const TECHNOLOGIES = {
    REACTJS: {
        name: "ReactJS",
        icon: ReactJS,
    },
    TAILWINDCSS: {
        name: "TailwindCSS",
        icon: Tailwind,
    },
    VERCEL: {
        name: "Vercel",
        icon: Vercel,
    },
    FIREBASE: {
        name: "Firebase",
        icon: Firebase,
    },
    SASS: {
        name: "Sass",
        icon: Sass,
    },
    HTML: {
        name: "HTML5",
        icon: Html,
    },
    CSS: {
        name: "CSS",
        icon: Css,
    },
    BOOTSTRAP: {
        name: "Bootstrap",
        icon: Bootstrap,
    },
    VITE: {
        name: "Vite",
        icon: Vite,
    },
    NEXTJS: {
        name: "NextJS",
        icon: NextJs,
    },
    TYPESCRIPT: { name: "TypeScript", icon: TypeScript },
    NESTJS: { name: "NestJS", icon: NestJs },
    POSTGRES: { name: "PostgreSQL", icon: Postgres },
    MYSQL: { name: "MySQL", icon: MySql },
    CLERK: { name: "Clerk", icon: Clerk },
    ODOO: { name: "Odoo", icon: Odoo },
    DOCKER: { name: "Docker", icon: Docker },
    JENKINS: { name: "Jenkins", icon: Jenkins },
    DNDKIT: { name: "dnd-kit" },
    FRAMER: { name: "Framer Motion", icon: Framer },
    SWIPER: { name: "Swiper", icon: Swiper },
} satisfies Record<string, Technology>;

export const PROJECTS: Project[] = [
    // --- Grupo Broda ---
    {
        slug: "brodaverso",
        name: "Brodaverso",
        category: "work",
        context: "Grupo Broda",
        description: "Internal platform of Grupo Broda: single sign-on that sends each team to its own tools for purchasing, finance, marketing, management control and HR, plus shared modules like tickets and announcements.",
        technologies: [TECHNOLOGIES.NEXTJS, TECHNOLOGIES.TYPESCRIPT, TECHNOLOGIES.TAILWINDCSS, TECHNOLOGIES.CLERK, TECHNOLOGIES.NESTJS, TECHNOLOGIES.POSTGRES, TECHNOLOGIES.ODOO, TECHNOLOGIES.DOCKER, TECHNOLOGIES.DNDKIT],
        imageUrl: "/images/brodaverso/home.jpeg",
        blocks: [
            {
                text: "Brodaverso is the internal web platform of Grupo Broda and the biggest project I have worked on. It started as a way to give each area of the company its own tool and it grew into a platform: one login, one design language and a set of modules that every team can rely on, instead of spreadsheets, chat messages and loose emails.",
            },
            {
                title: "One login for the whole company",
                text: "Employees sign in once with Clerk. Every team is a Clerk organization, and after signing in the home works as a hub: a tile for each module the person can access, such as purchasing, Progresivo Techbox, the gastronomy panel, announcements, tickets, news and management control. All the apps live under subdomains of the same domain and share the same Clerk instance, so the session carries over between them without asking the user to sign in again.",
                placeholder: "Sign in screen",
            },
            {
                title: "Architecture: independent apps that feel like one",
                text: "Each area is its own Next.js frontend, deployed independently, with its own backend when it needs one. The platform is deliberately not a monolith:",
                bullets: [
                    "Frontends in Next.js, React and TypeScript, with Tailwind CSS and shadcn-style components.",
                    "Dedicated APIs in NestJS for the modules that need business logic, and direct Postgres access with plain SQL for the smaller ones.",
                    "Integrations with the company's Odoo ERP for the data that already lives there.",
                    "Every module is deployed through our own CI/CD pipeline, with Docker-based setups and deployment guides.",
                    "Every module validates the Clerk session by itself, so a proxy or redirect never replaces the authorization of the module behind it.",
                ],
                placeholder: "One team's module (e.g. purchasing)",
            },
            {
                title: "A design system to keep everything consistent",
                text: "Every app follows the same design system, so they all look and behave alike. It documents color and typography, general layout, the filter and toolbar bar repeated in every module, buttons, menus, tables, modals, loading, error and empty states, feedback, and dark mode, plus a list of consistency rules. A new module starts from that system instead of from a blank page.",
            },
            {
                title: "Tickets: requests between teams",
                text: "The first shared module. Tickets replaces requests scattered across chat channels and emails: anyone in the company can ask something of another team, and the team handles it on a Kanban board.",
                bullets: [
                    "One board per team, with fully configurable columns (create, rename, color, reorder and delete) and drag & drop for both tickets and columns.",
                    "Multiple assignees, priority, due date, team-wide tags with custom colors, and a checklist with a progress bar visible from the card.",
                    "A single timeline for comments and activity, @mentions, a pinned comment per ticket, and attachments with an internal preview for images and PDFs.",
                    "Reassign, reject (with a mandatory reason), finish and reactivate, plus search and filters by text, priority, assignee, requester and month.",
                    "A personal view with everything you created, whatever the team, in a grid or a list. In-app notifications and a documents module with a Notion-style editor complete the module.",
                ],
                placeholder: "Tickets Kanban board",
            },
            {
                title: "Permissions that live on the server",
                text: "The person who opens a ticket for another team is a requester: they can always follow it and comment, and can edit it only while it is still in the default column. Once the team takes it, it becomes read-only for them, and only the team can manage tags, checklists or close it. If the creator belongs to the destination team, none of those limits apply. All of this is revalidated on the server on every mutation, not just hidden in the interface, and attachments are never exposed through a public storage URL but through an authenticated route.",
                placeholder: "Ticket detail",
            },
            {
                title: "Announcements for the stores",
                text: "A bulletin board where marketing, administration and purchasing publish notices with a cover and a rich description, written in a Notion-style block editor, that every FRAT store can read. A new store gets access automatically just by following the naming convention of its organization, with no redeploy.",
                placeholder: "Announcements board",
            },
            {
                title: "Technical decisions",
                text: "How the platform should grow is guided by written decisions:",
                bullets: [
                    "No ORM in the smaller modules: idempotent SQL migrations that are safe to run on every deploy, and a repository pattern that keeps Postgres, Clerk and file storage behind interfaces.",
                    "Fractional indexing for the order of tickets and columns, so moving a card never forces the whole column to be reindexed.",
                    "A proposal to share modules between frontends: Web Components for small embedded modules, and rewrites (or a load balancer if it scales) for large modules reachable under the same domain.",
                    "A permissions model that goes from one organization per app to a set of modules per organization, starting with configuration in code and moving later to the session token.",
                ],
            },
        ],
    },
    {
        slug: "meal-management",
        name: "Meal Management Platform",
        category: "work",
        context: "Public tender",
        description: "Food supply, special diets and production management platform for a public hospital: an API and an admin panel with full traceability.",
        technologies: [TECHNOLOGIES.NESTJS, TECHNOLOGIES.NEXTJS, TECHNOLOGIES.TYPESCRIPT, TECHNOLOGIES.MYSQL, TECHNOLOGIES.ODOO, TECHNOLOGIES.TAILWINDCSS],
        imageUrl: "/images/meal-management/home.jpg",
        blocks: [
            { text: "Built for a public tender to supply groceries, prepare meals and distribute them for a hospital. The tender requires an information system able to record daily production, control stock, distribute meals, handle special diets, receive goods and manage non-conformities, with full traceability. The system covers each of those points.", image: { src: "/images/meal-management/produccion.jpg", alt: "Daily production screen with the calendar and the production order generator" }, },
            { text: "The backend is a NestJS API with TypeORM on MySQL, JWT access and refresh tokens with global role guards, and Swagger documentation. Stock comes from Odoo, the source of truth, through XML-RPC, with a stub mode so development does not depend on a real instance.", image: { src: "/images/meal-management/api-docs.jpg", alt: "Swagger documentation of the platform API" }, },
            { text: "The frontend is a Next.js admin panel with a screen per module, a daily summary on the home page, forms validated with react-hook-form and zod, and authentication through httpOnly cookies handled server-side.", image: { src: "/images/meal-management/recetas.jpg", alt: "Recipes module of the admin panel" }, },
            {
                text: "Quality incidents are handled in their own module: non-conformities are reported with a category and a severity and tracked until they are resolved, filtering by open, in treatment or closed.",
                image: { src: "/images/meal-management/no-conformidades.jpg", alt: "Non-conformities module with status filters" },
            },
        ],
    },
    {
        slug: "grupo-broda-website",
        name: "Grupo Broda website",
        category: "work",
        context: "Grupo Broda",
        description: "Redesign of the corporate website of Grupo Broda, focused on performance and scalability.",
        technologies: [TECHNOLOGIES.NEXTJS, TECHNOLOGIES.TYPESCRIPT, TECHNOLOGIES.TAILWINDCSS, TECHNOLOGIES.FRAMER],
        imageUrl: "/projects/grupo-broda-website.jpg",
        websiteUrl: "https://grupobroda.com/",
        blocks: [
            { text: "A complete redesign of the corporate website of Grupo Broda, built with Next.js, React and Tailwind CSS, with performance and scalability as the main goals.", placeholder: "Full page screenshot" },
            { text: "Sections reveal as you scroll through animations and visibility detection, and a logo slider showcases the brands of the group.", placeholder: "Animated section or logo slider" },
        ],
    },
    {
        slug: "alma-chacras",
        name: "Alma Chacras",
        category: "work",
        context: "Grupo Broda",
        description: "Website of a residential complex with panoramic views over the Chacras de Coria valley, developed by Grupo Broda and studio A4.",
        technologies: [TECHNOLOGIES.REACTJS, TECHNOLOGIES.TYPESCRIPT, TECHNOLOGIES.VITE, TECHNOLOGIES.TAILWINDCSS, TECHNOLOGIES.FRAMER, TECHNOLOGIES.VERCEL],
        imageUrl: "/projects/alma-chacras.jpg",
        websiteUrl: "https://almachacras.com.ar",
        blocks: [
            { text: "Presentation site for Alma Chacras, a residential complex developed by Grupo Broda together with the studio A4, designed to show off its panoramic views and its modern architecture.", placeholder: "Home and gallery" },
            { text: "Built with React and TypeScript on Vite, styled with Tailwind CSS, animated with Framer Motion and Swiper galleries. It supports several languages and includes a contact form, and it is deployed on Vercel.", placeholder: "Contact form or mobile view" },
        ],
    },
    // --- Personal ---
    {
        slug: "BlossomUI",
        name: "BlossomUI",
        category: "personal",
        context: "Personal project",
        description: "Stylish, clean and reusable UI component library made with Tailwind. Open source and free.",
        technologies: [TECHNOLOGIES.VITE, TECHNOLOGIES.REACTJS, TECHNOLOGIES.TAILWINDCSS, TECHNOLOGIES.VERCEL],
        imageUrl: "https://res.cloudinary.com/diruiumfk/image/upload/v1724003620/blossomui_wcxsqc.png",
        websiteUrl: "https://blossomui.vercel.app/",
        repositoryUrl: "https://github.com/juanigarciadev/BlossomUI",
        blocks: [
            {
                text: "BlossomUI is a library of open source, easily copyable and usable components made with TailwindCSS. This project seeks to help anyone who wants to follow a design scheme without breaking their head too much (because someone has already broken it before). Its use is completely free and non-profit.",
                image: { src: "https://res.cloudinary.com/diruiumfk/image/upload/v1731645428/badges-blossom_o8njtg.png", alt: "Badges section of BlossomUI" },
            },
            {
                text: "This project started as a personal challenge to improve my programming skills, always focused on helping others: a free, open library so other programmers don't have to build a design system from scratch and lose time on their own projects.",
                image: { src: "https://res.cloudinary.com/diruiumfk/image/upload/v1731645429/pricing-blossom_jlosq1.png", alt: "Pricing section of BlossomUI" },
            },
            {
                text: "Developing it on my own has taught me many valuable things: organizing the folders of a project that will keep growing in content and users, adding large amounts of content without hurting site performance, and writing clean, reusable code that you can still understand as time passes.",
                image: { src: "https://res.cloudinary.com/diruiumfk/image/upload/v1731645428/rating-blossom_vsddj8.png", alt: "Rating section of BlossomUI" },
            },
            { text: "Being open source, anyone can review it and submit their PRs to add, improve or correct any element. A Figma view is being worked on to further strengthen the cohesion between elements and keep anything from falling out of the design system." },
        ],
    },
    {
        slug: "impuestAR",
        name: "impuestAR",
        category: "personal",
        context: "Personal project",
        description: "Tool created for the easy and quick calculation of the different prices of the dollar, clearly segmented for popular understanding.",
        technologies: [TECHNOLOGIES.NEXTJS, TECHNOLOGIES.TAILWINDCSS, TECHNOLOGIES.VERCEL],
        imageUrl: "https://res.cloudinary.com/diruiumfk/image/upload/v1739848424/impuestar-image_i57yzl.png?quality=lossless",
        websiteUrl: "https://impuestar.vercel.app/",
        repositoryUrl: "https://github.com/juanigarciadev/impuestAR",
        blocks: [
            {
                text: "ImpuestAR is an open-source tool that calculates the dollar exchange rates and subscription prices for various services. Depending on the type of dollar selected, different taxes are automatically applied to the total price. It shows the original price, the applicable taxes and the final total (the sum of both). The exchange rate is updated in real time with data from [DolarApi.com](https://dolarapi.com/), so the calculations reflect the latest market rates.",
                image: { src: "https://res.cloudinary.com/diruiumfk/image/upload/v1739848715/impuestar-screen-1_ycbazt.png?quality=lossless", alt: "Prices calculator" },
            },
            {
                text: "The project was created to simplify the calculation of these prices for people who need a quick and reliable way to break down costs, especially in an environment where currency rates constantly change.",
                image: { src: "https://res.cloudinary.com/diruiumfk/image/upload/v1739848715/impuestar-screen-2_ujmmbn.png?quality=lossless", alt: "Subscription prices" },
            },
            {
                text: "Throughout the development I focused on a simple and user-friendly interface that anyone can use. Keeping the project lightweight and straightforward makes it efficient and accessible without unnecessary complexity.",
                image: { src: "https://res.cloudinary.com/diruiumfk/image/upload/v1739848714/impuestar-screen-3_eghd4l.png?quality=lossless", alt: "More information about subscriptions" },
            },
            { text: "Since it's open-source, anyone can review the code and contribute by suggesting improvements or adding new features, making it a collaborative effort that can grow over time." },
        ],
    },
    {
        slug: "DevBoost",
        name: "DevBoost",
        category: "personal",
        context: "Personal project",
        description: "E-commerce of an online learning academy related to programming. Selected courses can be purchased and the stock is updated in real time upon purchase, subtracting the product from a Firebase database.",
        technologies: [TECHNOLOGIES.REACTJS, TECHNOLOGIES.FIREBASE, TECHNOLOGIES.SASS],
        imageUrl: "https://res.cloudinary.com/diruiumfk/image/upload/v1739849923/devboost-image_zqty5e.png?quality=lossless",
        websiteUrl: "https://devboost-shop.vercel.app/",
        repositoryUrl: "https://github.com/juanigarciadev/DevBoost",
        blocks: [
            {
                text: "This e-commerce platform is an open-source project focused on the sale of programming courses. It's a mockup that was created as my first project using React to learn the framework. It connects to Firebase, which allows real-time stock updates, so course availability is always displayed accurately.",
                image: { src: "https://res.cloudinary.com/diruiumfk/image/upload/v1739849922/devboost-screen-1_bdrfbw.png?quality=lossless", alt: "DevBoost screenshot 1" },
            },
            {
                text: "The project was built to gain hands-on experience with React and Firebase while creating a simple, functional interface. Even though the platform is not in use and won't be, it was a valuable way to learn how to manage data in real time and build a responsive web application.",
                image: { src: "https://res.cloudinary.com/diruiumfk/image/upload/v1739849922/devboost-screen-2_pypwry.png?quality=lossless", alt: "DevBoost screenshot 2" },
            },
            {
                text: "Throughout the development I focused on key React concepts and on integrating Firebase for dynamic features. It helped me solidify my skills in both, providing a solid foundation for future development.",
                image: { src: "https://res.cloudinary.com/diruiumfk/image/upload/v1739849922/devboost-screen-3_rwtk5f.png?quality=lossless", alt: "DevBoost screenshot 3" },
            },
            { text: "Since it's open-source, anyone can review the code, suggest improvements or explore it as a learning resource. The goal is to share the knowledge gained from this project and contribute to the open-source community." },
        ],
    },
];

export const getProject = (slug: string) => PROJECTS.find((project) => project.slug === slug);
