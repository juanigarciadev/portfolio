import React from "react";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Behance from "../icons/Behance";
import Mail from "../icons/Mail";

const Footer = () => {
    const SOCIALS = [
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
            title: 'Behance',
            icon: Behance,
            url: 'https://www.behance.net/juanigarciadev',
        },
        {
            title: 'Contact me',
            icon: Mail,
            url: 'https://github.com/juanigarciadev',
        },
    ]
    return (
        <footer className="relative w-screen h-auto bg-main rounded-lg py-8 px-96">
            <div className="w-full h-auto bg-light border border-cardBorder rounded-lg">
                <div className="flex items-center justify-between w-full p-4">
                    <span className="text-xs tracking-widest">Everything, made with love. Always.</span>
                    <div className="flex gap-4">
                        {SOCIALS.map((social)=>{
                            return(
                                <a href={social.url} target="_blank" key={social.title} className="bg-main border border-cardBorder p-2 rounded-lg cursor-pointer hover:bg-light transition-all"><social.icon className='size-6'/></a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;