import React from "react";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Behance from "../icons/Behance";
import Mail from "../icons/Mail";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { AuroraBackground } from "../ui/AuroraBackground";

const AboutMe = () => {
    const SOCIALS = [
        {
            title: "Github",
            icon: Github,
            url: "https://github.com/juanigarciadev",
        },
        {
            title: "LinkedIn",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/juanigarciadev/",
        },
        {
            title: "Behance",
            icon: Behance,
            url: "https://www.behance.net/juanigarciadev",
        },
        {
            title: "Contact me",
            icon: Mail,
            url: "mailto:juanigarciadev@gmail.com",
        },
    ];
    return (
        <AuroraBackground id="aboutMe">
            <div className="relative flex flex-col justify-center items-center gap-6 px-96 w-full py-64 xl:px-16 lg:px-8 md:gap-4 sm:px-2">
            <div className="hidden absolute bottom-0 left-0 right-0 -top-12 bg-[linear-gradient(to_right,#03082b_1px,transparent_1px),linear-gradient(to_bottom,#03082b_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] md:block"></div>
                <span className="z-10 text-xs tracking-widest">EVERYTHING, MADE WITH LOVE</span>
                <TextGenerateEffect className="w-full h-full z-10 text-center font-semibold tracking-wide" words="Original and modern design at your fingertips." />
                {/* <h1 className="z-10 text-6xl text-center font-semibold tracking-wide">
                <span className="text-corporative">Original</span> and <span className="text-corporative">modern</span> design at your fingertips.
            </h1> */}
                <p className="z-10 text-xl tracking-wider sm:text-center px-8 md:text-xs">Hey! I'm Juani, a Frontend Developer born and raised in Argentina.</p>
                <div className="z-10 flex gap-2 pt-8 md:flex-col md:items-center md:pt-2">
                    {SOCIALS.map((social) => {
                        return (
                            <a href={social.url} key={social.title} target="_blank" className="flex items-center gap-2 font-semibold w-fit border border-cardBorder bg-black rounded px-8 py-2 hover:bg-light transition-all md:text-xs md:w-full md:justify-center">
                                <social.icon className="size-4" />
                                {social.title}
                            </a>
                        );
                    })}
                </div>
            </div>
        </AuroraBackground>
    );
};

export default AboutMe;
