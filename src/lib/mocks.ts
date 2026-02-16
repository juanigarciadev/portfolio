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
    }
};

export const PROJECTS = [
    {
        index: 0,
        name: "BlossomUI",
        description: "Stylish, clean and reusable UI component library made with Tailwind. Open source and free.",
        technologies: [TECHNOLOGIES.VITE, TECHNOLOGIES.REACTJS, TECHNOLOGIES.TAILWINDCSS, TECHNOLOGIES.VERCEL],
        imageUrl: "https://res.cloudinary.com/diruiumfk/image/upload/v1724003620/blossomui_wcxsqc.png",
        projectInfo: "/projects/BlossomUI",
        websiteUrl: "https://blossomui.vercel.app/",
    },
    {
        index: 1,
        name: "impuestAR",
        description: "Tool created for the easy and quick calculation of the different prices of the dollar, clearly segmented for popular understanding.",
        technologies: [TECHNOLOGIES.NEXTJS, TECHNOLOGIES.TAILWINDCSS, TECHNOLOGIES.VERCEL],
        imageUrl: "https://res.cloudinary.com/diruiumfk/image/upload/v1739848424/impuestar-image_i57yzl.png?quality=lossless",
        projectInfo: "/projects/impuestAR",
        websiteUrl: "https://impuestar.vercel.app/",
    },
    {
        index: 2,
        name: "DevBoost",
        description: "E-commerce of an online learning academy related to programming. Selected courses can be purchased and the stock is updated in real time upon purchase, subtracting the product from a Firebase database.",
        technologies: [TECHNOLOGIES.REACTJS, TECHNOLOGIES.FIREBASE, TECHNOLOGIES.SASS],
        imageUrl: "https://res.cloudinary.com/diruiumfk/image/upload/v1739849923/devboost-image_zqty5e.png?quality=lossless",
        projectInfo: "/projects/DevBoost",
        websiteUrl: "https://devboost-shop.vercel.app/",
    }
];
