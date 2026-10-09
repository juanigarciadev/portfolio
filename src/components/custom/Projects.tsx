"use client"
import React from "react";
import Link from "next/link";
import ArrowLeft from "../icons/ArrowLeft";
import { TechIcon } from "./TechIcon";
import { PROJECTS, type Project } from "@/lib/mocks";
import {motion} from 'framer-motion'

const GROUPS: { category: Project["category"]; title: string }[] = [
    { category: "work", title: "At Grupo Broda & beyond" },
    { category: "personal", title: "Personal projects" },
];

const itemVariants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: (index % 2) * 0.15,
            duration: 0.5,
        },
    }),
};

const Projects = () => {
    return (
        <motion.section
        initial={{opacity: 0, y: '20px'}}
        whileInView={{opacity: 1, y: '0px'}}
        transition={{duration: 0.3}}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col bg-main gap-16 w-full px-96 xl:px-8 lg:px-4 sm:px-2 scroll-mt-24" id="work">
            <h2 className="text-6xl title text-center font-semibold tracking-wide md:text-5xl">
                My <span className="text-corporative font-semibold">featured</span> projects
            </h2>
            {GROUPS.map(({ category, title }) => (
                <div key={category} className="flex flex-col gap-8">
                    <h3 className="text-md tracking-widest uppercase">{title}</h3>
                    <div className="grid grid-cols-2 gap-8 2xl:flex 2xl:flex-col">
                        {PROJECTS.filter((project) => project.category === category).map(({ slug, name, context, description, technologies, imageUrl }, index) => (
                            <motion.div
                                key={slug}
                                custom={index}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.05 }}
                                variants={itemVariants}
                            >
                                <Link
                                    href={`/projects/${slug}`}
                                    className={`relative flex flex-col w-full h-[26rem] border border-cardBorder rounded-lg gap-4 p-8 group ${imageUrl ? "bg-light bg-cover bg-no-repeat bg-top" : "bg-gradient-to-br from-light to-main"}`}
                                    style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
                                >
                                    <div className="absolute flex items-center justify-center right-5 top-5 rotate-180 rounded-full bg-[#080C29] border border-cardBorder p-1.5 group-hover:bg-[#1a245d] duration-200">
                                        <ArrowLeft/>
                                    </div>
                                    <div className="absolute left-5 top-5 flex -space-x-2">
                                        {technologies.filter((technology) => technology.icon).map((technology) => <TechIcon key={technology.name} technology={technology} />)}
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 rounded-b-lg bg-gradient-to-t from-black/75 via-black/45 to-transparent px-5 pb-5 pt-16 z-10">
                                        <span className="text-xs tracking-widest uppercase text-neutral-300">{context}</span>
                                        <h3 className="title text-4xl text-corporative font-semibold" style={{ textShadow: "0px 1px 4px rgba(0,0,0,0.8)" }}>{name}</h3>
                                        <p className="flex flex-wrap text-md text-neutral-200 line-clamp-2 [text-shadow:0_1px_3px_rgba(0,0,0,0.9)]">{description}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </motion.section>
    );
};

export default Projects;
