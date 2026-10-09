"use client"
import React from "react"
import Link from "next/link"
import { SpotlightCard } from "../ui/SpotlightCard"
import { SectionHeading } from "../ui/SectionHeading"
import { FadeIn } from "./FadeIn"

const RELATED_PROJECTS = [
    { label: "Brodaverso", href: "/projects/brodaverso" },
    { label: "Grupo Broda website", href: "/projects/grupo-broda-website" },
    { label: "Alma Chacras", href: "/projects/alma-chacras" },
];

const Experience = () => {
    return(
        <section className="container-page flex scroll-mt-24 flex-col gap-12 pb-0 pt-32 md:pt-20" id="experience">
            <FadeIn>
                <SectionHeading eyebrow="Experience">
                    My <span className="text-corporative">experience</span>
                </SectionHeading>
            </FadeIn>
            <FadeIn>
                <div className="relative flex gap-6 md:gap-4">
                    <div className="flex flex-col items-center">
                        <span className="mt-8 size-3 rounded-full bg-corporative shadow-[0_0_0_6px_rgba(167,139,250,0.15)]" />
                        <span className="mt-3 w-[3px] flex-1 rounded-full bg-gradient-to-b from-corporative/60 via-neutral-300/20 to-transparent" />
                    </div>
                    <SpotlightCard className="mb-32 flex-1 md:mb-20">
                        <div className="relative z-10 flex flex-col gap-6 p-8 md:p-6">
                            <div className="flex items-start justify-between gap-6 md:flex-col">
                                <div className="flex items-center gap-4">
                                    <img src="https://res.cloudinary.com/diruiumfk/image/upload/v1739851387/grupobroda-logo_pl5yx3.jpg" alt="Grupo Broda logo" className="size-16 min-w-16 rounded-xl"/>
                                    <div className="flex flex-col">
                                        <a href="https://grupobroda.com/" target="_blank" rel="noopener noreferrer" className="title text-3xl font-semibold text-corporative hover:underline md:text-2xl">Grupo Broda</a>
                                        <span className="text-lg">IT Analyst - Management control</span>
                                    </div>
                                </div>
                                <span className="shrink-0 rounded-full border border-cardBorder bg-main px-4 py-1.5 text-xs uppercase tracking-widest text-neutral-300">Feb. 2025 - At present</span>
                            </div>
                            <p className="max-w-3xl text-lg text-neutral-300">
                                I work as an IT Analyst where I apply my knowledge in multiple technologies and train in others. I am part of the management control team. I am mainly responsible for the maintenance and design of systems and web pages related to the company.
                            </p>
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="mr-2 text-xs uppercase tracking-widest text-neutral-400">Related projects</span>
                                {RELATED_PROJECTS.map(({ label, href }) => (
                                    <Link key={href} href={href} className="rounded-full border border-cardBorder bg-main px-4 py-1.5 text-sm transition-all hover:border-corporative hover:text-corporative">
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </FadeIn>
        </section>
    )
}

export default Experience
