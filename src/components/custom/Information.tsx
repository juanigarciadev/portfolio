"use client"
import Link from "next/link";
import React from "react";
import Github from "../icons/Github";
import ArrowLeft from "../icons/ArrowLeft";
import { SpotlightCard } from "../ui/SpotlightCard";
import { SectionHeading } from "../ui/SectionHeading";
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
        <section className="container-page flex scroll-mt-24 flex-col gap-12 py-24 md:py-16" id="aboutMe">
            <FadeIn>
                <SectionHeading eyebrow="About me">
                    Always improving to make <span className="text-corporative">stunning</span> sites.
                </SectionHeading>
            </FadeIn>
            <div className="grid grid-cols-3 gap-4 lg:grid-cols-2 md:grid-cols-1">
                <FadeIn className="col-span-2 lg:col-span-2 md:col-span-1">
                    <SpotlightCard className="h-full">
                        <div className="relative z-10 flex h-full flex-col justify-between gap-12 p-8 md:p-6">
                            <span className="eyebrow">More about me</span>
                            <p className="title text-4xl font-semibold leading-tight tracking-wide md:text-3xl">
                                Curious and creative front-end developer focused on creating <span className="text-corporative">useful, fun and friendly</span> experiences.
                            </p>
                        </div>
                    </SpotlightCard>
                </FadeIn>

                <FadeIn>
                    <SpotlightCard className="h-full">
                        <div className="relative z-10 flex h-full flex-col justify-between gap-8 p-8 md:p-6">
                            <img className="w-24 rounded" src="https://res.cloudinary.com/diruiumfk/image/upload/v1732068941/Flag_of_Argentina.svg_m9olkc.png" alt="argentinian flag" />
                            <div className="flex flex-col gap-1">
                                <span className="eyebrow">Based in</span>
                                <span className="title text-3xl font-semibold tracking-wide">Argentina</span>
                            </div>
                        </div>
                    </SpotlightCard>
                </FadeIn>

                <FadeIn className="lg:col-span-2 md:col-span-1">
                    <SpotlightCard className="h-full">
                        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
                            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/diruiumfk/image/upload/v1732063669/components_d52jfz.png')] bg-contain bg-no-repeat bg-[bottom_-6rem_right_-9rem] opacity-50 transition-opacity duration-300 group-hover/spot:opacity-80" />
                        </div>
                        <div className="relative z-10 flex h-full flex-col gap-6 p-8 md:p-6">
                            <div className="flex flex-col gap-3">
                                <span className="eyebrow">What I'm doing</span>
                                <span className="title text-2xl font-semibold leading-snug tracking-wide">Currently building a free-to-use Tailwind components library.</span>
                            </div>
                            <Link href="/projects/BlossomUI" className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-cardBorder bg-black px-6 py-2 font-semibold transition-all hover:border-corporative hover:bg-light">
                                More information
                                <ArrowLeft className="rotate-180" />
                            </Link>
                        </div>
                    </SpotlightCard>
                </FadeIn>

                <FadeIn className="lg:col-span-2 md:col-span-1">
                    <SpotlightCard className="h-full">
                        <div className="relative z-10 flex h-full flex-col gap-6 p-8 md:p-6">
                            <span className="eyebrow">Main stack</span>
                            <div className="flex flex-wrap gap-3">
                                {MAIN_STACK.map((technology) => (
                                    <TechIcon key={technology.name} technology={technology} size="md" side="top" />
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>
                </FadeIn>

                <FadeIn className="lg:col-span-2 md:col-span-1">
                    <SpotlightCard className="h-full">
                        <Link href="https://github.com/juanigarciadev" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="relative z-10 flex h-full min-h-[12rem] items-center justify-center p-8">
                            <Github className="size-24 transition-transform duration-300 group-hover/spot:scale-90" />
                            <span className="absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full border border-cardBorder bg-main transition-all duration-300 group-hover/spot:border-corporative group-hover/spot:bg-corporative">
                                <ArrowLeft className="rotate-[135deg] transition-colors duration-300 group-hover/spot:fill-[#2a1e50]" />
                            </span>
                        </Link>
                    </SpotlightCard>
                </FadeIn>
            </div>
        </section>
    )
}

export default Information
