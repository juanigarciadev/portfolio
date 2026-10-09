"use client"
import Link from "next/link";
import React from "react";
import Github from "../icons/Github";
import ArrowLeft from "../icons/ArrowLeft";
import { SpotlightCard } from "../ui/SpotlightCard";
import { TechIcon } from "./TechIcon";
import { FadeIn } from "./FadeIn";
import { TECHNOLOGIES } from "@/lib/mocks";

const MAIN_STACK = [
    TECHNOLOGIES.REACTJS,
    TECHNOLOGIES.NEXTJS,
    TECHNOLOGIES.TYPESCRIPT,
    TECHNOLOGIES.NESTJS,
    TECHNOLOGIES.POSTGRES,
    TECHNOLOGIES.MYSQL,
    TECHNOLOGIES.DOCKER,
    TECHNOLOGIES.JENKINS,
    TECHNOLOGIES.TAILWINDCSS,
    TECHNOLOGIES.VERCEL,
];

const Information = () => {
    return(
        <section className="container-page scroll-mt-24 py-32 md:py-20" id="aboutMe">
            <FadeIn className="flex flex-col gap-4">
                <div className="grid h-[600px] grid-cols-2 gap-4 md:flex md:h-auto md:flex-col">
                    <SpotlightCard>
                        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
                            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/diruiumfk/image/upload/v1732066935/blossomuibackground_lcnotm.png')] bg-contain bg-no-repeat bg-[position:bottom_10rem_right_-10rem] opacity-60 transition-opacity duration-300 group-hover/spot:opacity-90 md:bg-[length:100%] md:bg-[position:center_4rem] md:opacity-60" />
                        </div>
                        <div className="relative z-10 flex h-full flex-col justify-between gap-12 p-8 md:min-h-[26rem] md:p-6">
                            <span className="eyebrow">About me</span>
                            <span className="title text-4xl font-semibold leading-tight tracking-wide md:text-3xl">
                                Always improving to make <span className="text-corporative">stunning</span> sites.
                            </span>
                        </div>
                    </SpotlightCard>

                    <div className="grid grid-rows-2 gap-4 md:flex md:flex-col">
                        <SpotlightCard>
                            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
                                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/diruiumfk/image/upload/v1732063669/components_d52jfz.png')] bg-contain bg-no-repeat bg-[bottom_-5rem_right_-10rem] opacity-50 transition-opacity duration-300 group-hover/spot:opacity-80" />
                            </div>
                            <div className="relative z-10 flex h-full flex-col justify-between gap-6 p-8 md:p-6">
                                <div className="flex flex-col gap-3">
                                    <span className="eyebrow">What I'm doing</span>
                                    <span className="title text-2xl font-semibold leading-snug tracking-wide">Currently building a free-to-use Tailwind components library.</span>
                                </div>
                                <Link href="/projects/BlossomUI" className="inline-flex w-fit items-center gap-2 rounded-full border border-cardBorder bg-black px-6 py-2 font-semibold transition-all hover:border-corporative hover:bg-light">
                                    More information
                                    <ArrowLeft className="rotate-180" />
                                </Link>
                            </div>
                        </SpotlightCard>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                            <SpotlightCard>
                                <div className="relative z-10 flex h-full items-center justify-center p-6 md:py-8">
                                    <img className="w-36 rounded-lg" src="https://res.cloudinary.com/diruiumfk/image/upload/v1732068941/Flag_of_Argentina.svg_m9olkc.png" alt="argentinian flag" />
                                </div>
                            </SpotlightCard>
                            <SpotlightCard>
                                <div className="relative z-10 flex h-full flex-col gap-4 p-6">
                                    <span className="title text-2xl font-semibold tracking-wide">Main stack</span>
                                    <div className="flex flex-wrap gap-2">
                                        {MAIN_STACK.map((technology) => (
                                            <TechIcon key={technology.name} technology={technology} side="top" />
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </div>
                    </div>
                </div>

                <div className="grid h-[292px] grid-cols-4 gap-4 md:flex md:h-auto md:flex-col">
                    <SpotlightCard className="col-span-3">
                        <div className="relative z-10 flex h-full flex-col justify-center gap-3 p-8 md:p-6">
                            <span className="eyebrow">More about me</span>
                            <span className="title text-3xl font-semibold leading-snug tracking-wide md:text-2xl">
                                Curious and creative front-end developer focused on creating <span className="text-corporative">useful, fun and friendly</span> experiences.
                            </span>
                        </div>
                    </SpotlightCard>
                    <SpotlightCard>
                        <Link href="https://github.com/juanigarciadev" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="relative z-10 flex h-full min-h-[10rem] items-center justify-center p-8">
                            <Github className="size-28 transition-transform duration-300 group-hover/spot:scale-90" />
                            <span className="absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full border border-cardBorder bg-main transition-all duration-300 group-hover/spot:border-corporative group-hover/spot:bg-corporative">
                                <ArrowLeft className="rotate-[135deg] transition-colors duration-300 group-hover/spot:fill-[#2a1e50]" />
                            </span>
                        </Link>
                    </SpotlightCard>
                </div>
            </FadeIn>
        </section>
    )
}

export default Information
