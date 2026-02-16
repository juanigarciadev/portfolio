"use client"
import React from "react";
import Link from "next/link";
import ArrowLeft from "../icons/ArrowLeft";
import { PROJECTS } from "@/lib/mocks";
import {motion} from 'framer-motion'

const Projects = () => {

    const itemVariants = {
        offscreen: { opacity: 0, y: 20 },
        onscreen: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
            delay: index * 0.3,
            duration: 0.5,
            },
        }),
    };

    return (
        <motion.section
        initial={{opacity: 0, y: '20px'}}
        whileInView={{opacity: 1, y: '0px'}}
        transition={{duration: 0.3}}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col bg-main gap-16 w-full px-96 xl:px-8 lg:px-4 sm:px-2" id="work">
            <h2 className="text-6xl title text-center font-semibold tracking-wide md:text-5xl">
                My <span className="text-corporative">featured</span> projects
            </h2>
            <div
            className="grid grid-cols-2 gap-8 2xl:flex 2xl:flex-col">
                {PROJECTS.map(({ name, description, technologies, imageUrl, projectInfo, index }) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.05 }}
                        variants={itemVariants}
                    >
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
                                <h3 className="title text-4xl text-corporative font-semibold" style={{ textShadow: "0px 2px 1px rgba(0,0,0,0.3)" }}>{name}</h3>
                                <p className="flex flex-wrap text-md text-neutral-300">{description}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;
