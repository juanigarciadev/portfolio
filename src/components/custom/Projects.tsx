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
};

const PROJECTS = [
    {
        name: "BlossomUI - Components library for Tailwind.",
        description: "Stylish, clean and reusable UI component library made with Tailwind. Open source and free.",
        technologies: [TECHNOLOGIES.VITE, TECHNOLOGIES.REACTJS, TECHNOLOGIES.TAILWINDCSS, TECHNOLOGIES.VERCEL],
        imageUrl: "https://res.cloudinary.com/diruiumfk/image/upload/v1724037882/blossomui-project_ls2ycj.png",
        repository: "https://github.com/juanigarciadev/BlossomUI",
        websiteUrl: "https://blossomui.vercel.app/",
    },
    {
        name: "Script - Programming courses ecommerce.",
        description: "E-commerce of an online learning academy related to programming. Selected courses can be purchased and the stock is updated in real time upon purchase, subtracting the product from a Firebase database.",
        technologies: [TECHNOLOGIES.REACTJS, TECHNOLOGIES.FIREBASE, TECHNOLOGIES.SASS],
        imageUrl: "https://res.cloudinary.com/diruiumfk/image/upload/v1724037882/script-project_yyubsb.png",
        repository: "https://github.com/juanigarciadev/script",
        websiteUrl: "https://script-ecommerce.vercel.app/",
    },
    {
        name: "TODOTECH - Peripherals and PCs ecommerce.",
        description: "E-commerce focused on the sale of pre-assembled computers, components and peripherals.",
        technologies: [TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.BOOTSTRAP],
        imageUrl: "https://res.cloudinary.com/diruiumfk/image/upload/v1724037882/todotech-project_igb34c.png",
        repository: "https://github.com/juanigarciadev/TODOTECH-project",
        websiteUrl: "https://todotech.netlify.app/",
    },
];

const Projects = () => {
    return (
        <div className="flex flex-col bg-main gap-16 w-full px-96">
            <h2 className="text-6xl text-center font-semibold tracking-wide">
                My <span className="text-corporative">featured</span> projects
            </h2>
            <div className="grid grid-cols-2 gap-8">
                {PROJECTS.map(({ name, description, technologies, imageUrl, repository, websiteUrl }) => (
                    <article key={name} className="flex flex-col w-full h-auto bg-light border border-cardBorder rounded-lg gap-4 p-8 shadow-md shadow-[#312E81]">
                        <img className="rounded-lg w-full" src={imageUrl} alt={`Screenshot of ${name}`} />
                        <div className="flex flex-col gap-4">
                            <h3 className="text-3xl text-corporative font-semibold">{name}</h3>
                            <p className="flex flex-wrap">{description}</p>
                            <div className="flex -space-x-2">
                                {technologies.map((technologie) => (
                                    <article key={technologie.name} className="rounded-full bg-gradient-to-tl from-[#080C29] to-[#000319] border border-cardBorder p-1.5">
                                        <technologie.icon className="size-6" />
                                    </article>
                                ))}
                            </div>
                            <div className="flex gap-4 items-center">
                                <a className="font-semibold border border-cardBorder px-8 py-2 rounded hover:bg-main transition-all" href={repository} target="_blank">
                                    Visit Repository
                                </a>
                                <a className="text-corporativeDark font-semibold bg-corporative border border-cardBorder px-8 py-2 rounded hover:bg-corporativeDark transition-all hover:text-corporativeLight" href={websiteUrl} target="_blank">
                                    Open Live Site
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Projects;
