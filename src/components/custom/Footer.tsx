import React from "react";
import { SOCIALS } from "@/lib/mocks";

const Footer = () => {
    return (
        <footer
        className="relative w-screen h-auto bg-main py-8 px-96 xl:px-8 lg:px-4 sm:px-2">
            <div className="w-full h-auto bg-light border border-cardBorder rounded-lg">
                <div className="flex items-center justify-between w-full p-4 md:flex-col md:gap-4">
                    <span className="text-md tracking-widest">Everything, made with love. Always.</span>
                    <div className="flex gap-4 sm:gap-2">
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
