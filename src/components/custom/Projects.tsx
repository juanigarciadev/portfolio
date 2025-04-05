import React from "react";
import ReactJS from "../icons/ReactJS";
import TailwindCSS from "../icons/Tailwind";
import Vercel from "../icons/Vercel";
import Firebase from "../icons/Firebase";
import Sass from "../icons/Sass";
import Html5 from "../icons/Html";
import Css from "../icons/Css";
import Bootstrap from "../icons/Bootstrap";
import Vite from "../icons/Vite";
import Link from "next/link";
import NextJs from "../icons/NextJs";
import ArrowLeft from "../icons/ArrowLeft";

const TECHNOLOGIES = {
    REACTJS: {
        name: "ReactJS",
        icon: ReactJS,
    },
    TAILWINDCSS: {
        name: "TailwindCSS",
        icon: TailwindCSS,
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
        icon: Html5,
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
    }
};

const PROJECTS = [
    {
        name: "BlossomUI",
        description: "Stylish, clean and reusable UI component library made with Tailwind. Open source and free.",
        technologies: [TECHNOLOGIES.VITE, TECHNOLOGIES.REACTJS, TECHNOLOGIES.TAILWINDCSS, TECHNOLOGIES.VERCEL],
        imageUrl: "https://res.cloudinary.com/diruiumfk/image/upload/v1724003620/blossomui_wcxsqc.png",
        projectInfo: "/projects/BlossomUI",
        websiteUrl: "https://blossomui.vercel.app/",
    },
    {
        name: "impuestAR",
        description: "Tool created for the easy and quick calculation of the different prices of the dollar, clearly segmented for popular understanding.",
        technologies: [TECHNOLOGIES.NEXTJS, TECHNOLOGIES.TAILWINDCSS, TECHNOLOGIES.VERCEL],
        imageUrl: "https://res.cloudinary.com/diruiumfk/image/upload/v1739848424/impuestar-image_i57yzl.png?quality=lossless",
        projectInfo: "/projects/impuestAR",
        websiteUrl: "https://impuestar.vercel.app/",
    },
    {
        name: "DevBoost",
        description: "E-commerce of an online learning academy related to programming. Selected courses can be purchased and the stock is updated in real time upon purchase, subtracting the product from a Firebase database.",
        technologies: [TECHNOLOGIES.REACTJS, TECHNOLOGIES.FIREBASE, TECHNOLOGIES.SASS],
        imageUrl: "https://res.cloudinary.com/diruiumfk/image/upload/v1739849923/devboost-image_zqty5e.png?quality=lossless",
        projectInfo: "/projects/DevBoost",
        websiteUrl: "https://devboost-shop.vercel.app/",
    }
];

const Projects = () => {
    return (
        <div className="flex flex-col bg-main gap-16 w-full px-96 xl:px-16 lg:px-8 sm:px-2" id="work">
            <h2 className="text-6xl text-center font-semibold tracking-wide md:text-3xl">
                My <span className="text-corporative">featured</span> projects
            </h2>
            <div className="grid grid-cols-2 gap-8 2xl:flex 2xl:flex-col">
                {PROJECTS.map(({ name, description, technologies, imageUrl, projectInfo }) => (
                    <Link href={projectInfo} key={name} className="relative flex flex-col w-full h-[20rem] bg-light border border-cardBorder rounded-lg gap-4 p-8 bg-contain bg-no-repeat bg-top group xl:bg-cover" style={{ backgroundImage: `url(${imageUrl})` }}>
                        <div className="absolute flex items-center justify-center right-5 top-5 rotate-180 rounded-full bg-[#080C29] border border-cardBorder p-1.5 group-hover:bg-[#1a245d] duration-200">
                            <ArrowLeft/>
                        </div>
                        <div className="absolute left-5 top-5 flex -space-x-2">
                            {technologies.map((technologie) => (
                                <article title={technologie.name} key={technologie.name} className="rounded-full bg-gradient-to-tl from-[#080C29] to-[#000319] border border-cardBorder p-1.5">
                                    <technologie.icon className="size-6" />
                                </article>
                            ))}
                        </div>
                        <div className="absolute from-black to-transparent bg-gradient-to-t w-full h-40 rounded-b-lg bottom-0 left-0"></div>
                        <div className="absolute bottom-5 left-5 flex flex-col gap-4 z-10">
                            <h3 className="text-3xl text-corporative font-semibold" style={{ textShadow: "0px 2px 1px rgba(0,0,0,0.3)" }}>{name}</h3>
                            <p className="flex flex-wrap text-sm text-neutral-300">{description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
