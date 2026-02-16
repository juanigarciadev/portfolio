"use client"
import React from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { SOCIALS } from "@/lib/mocks";
import {motion} from 'framer-motion'

const AboutMe = () => {
    return (
        <motion.section
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.3}}
        viewport={{ once: true, amount: 0.2 }}
        className="min-h-screen">
            <div className="relative flex flex-col justify-center items-center gap-6 px-96 w-full py-64 xl:px-16 lg:px-8 md:gap-4 sm:px-2">
            <div className="absolute bottom-0 left-0 right-0 -top-12 bg-[linear-gradient(to_right,#03082b_1px,transparent_1px),linear-gradient(to_bottom,#03082b_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] md:block"></div>
                <span className="z-10 text-xs tracking-widest">EVERYTHING, MADE WITH LOVE</span>
                <TextGenerateEffect className="heroTitle w-full h-full z-10 text-center font-semibold tracking-wide" words="Original and modern design at your fingertips." />
                <p className="z-10 text-xl tracking-wider sm:text-center px-8 md:text-sm">Hey! I'm Juani, a Frontend Developer born and raised in Argentina.</p>
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
        </motion.section>
    );
};

export default AboutMe;
