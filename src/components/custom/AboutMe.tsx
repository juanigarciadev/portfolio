"use client"
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { Tooltip } from "../ui/Tooltip";
import { TechIcon } from "./TechIcon";
import ArrowLeft from "../icons/ArrowLeft";
import { SOCIALS, TECHNOLOGIES, getProject } from "@/lib/mocks";
import { cn } from "@/lib/utils";

interface FloatingItemProps {
    scroll: MotionValue<number>;
    /** Desplazamiento vertical (px) al recorrer el hero con el scroll. */
    range: [number, number];
    rotate?: number;
    delay?: number;
    className?: string;
    children: React.ReactNode;
}

// Tres capas: parallax con el scroll, entrada y flotación continua.
const FloatingItem = ({ scroll, range, rotate = 0, delay = 0, className, children }: FloatingItemProps) => {
    const y = useTransform(scroll, [0, 1], range);
    return (
        <motion.div style={{ y, rotate }} className={cn("absolute", className)}>
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + delay }}
            >
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const FEATURED_CARDS = [
    { slug: "brodaverso", className: "left-[36%] top-[0%] w-[62%] z-10", range: [0, -150] as [number, number], rotate: -3, delay: 0 },
    { slug: "meal-management", className: "left-[0%] top-[24%] w-[52%] z-20", range: [0, 40] as [number, number], rotate: 4, delay: 0.3 },
    { slug: "grupo-broda-website", className: "left-[48%] top-[46%] w-[50%] z-10", range: [0, -70] as [number, number], rotate: -2, delay: 0.6 },
];

const STACK_DOCK = [
    TECHNOLOGIES.NEXTJS,
    TECHNOLOGIES.TYPESCRIPT,
    TECHNOLOGIES.TAILWINDCSS,
    TECHNOLOGIES.NESTJS,
    TECHNOLOGIES.POSTGRES,
    TECHNOLOGIES.DOCKER,
];

const AboutMe = () => {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const textY = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    const socials = SOCIALS.filter((social) => social.title !== "Contact me");

    return (
        <section ref={ref} className="relative min-h-screen overflow-hidden px-8 pb-24 pt-40 lg:pt-32 md:px-4">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#03082b_1px,transparent_1px),linear-gradient(to_bottom,#03082b_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_75%_45%,rgba(167,139,250,0.16),transparent)] lg:bg-[radial-gradient(ellipse_70%_35%_at_50%_70%,rgba(167,139,250,0.14),transparent)]" />

            <div className="relative z-10 mx-auto grid min-h-[calc(100vh-14rem)] max-w-6xl grid-cols-2 items-center gap-12 lg:min-h-0 lg:grid-cols-1 lg:gap-16">
                <motion.div style={{ y: textY, opacity: textOpacity }} className="flex flex-col items-start gap-6 lg:items-center lg:text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cardBorder bg-light px-4 py-1.5 text-xs uppercase tracking-widest">
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                        </span>
                        Building at Grupo Broda
                    </span>
                    <TextGenerateEffect
                        className="heroTitle w-full text-left font-semibold tracking-wide lg:text-center"
                        wordClassName="text-6xl xl:text-5xl md:text-4xl"
                        highlight={[2, 3, 6]}
                        words="I build web platforms people actually enjoy using."
                    />
                    <p className="max-w-xl text-xl tracking-wide text-neutral-300 md:text-lg">
                        Hey! I'm Juani, a frontend developer born and raised in Argentina. I turn complex company processes into fast, friendly products, from internal platforms used every day to open source UI.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-2 lg:justify-center">
                        <Link href="#work" className="group inline-flex items-center gap-2 rounded border border-cardBorder bg-corporative px-8 py-2 font-semibold text-corporativeDark transition-all hover:bg-corporativeDark hover:text-corporativeLight">
                            View my work
                            <ArrowLeft className="-rotate-90 fill-[#2a1e50] transition-colors group-hover:fill-[#e4dbff]" />
                        </Link>
                        <Link href="#contact" className="inline-flex items-center gap-2 rounded border border-cardBorder bg-black px-8 py-2 font-semibold transition-all hover:bg-light">
                            Contact me
                        </Link>
                        {socials.map((social) => (
                            <Tooltip key={social.title} label={social.title}>
                                <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.title} className="flex items-center justify-center rounded border border-cardBorder bg-black p-2.5 transition-all hover:bg-light">
                                    <social.icon className="size-5" />
                                </a>
                            </Tooltip>
                        ))}
                    </div>
                </motion.div>

                <div className="relative mx-auto aspect-square w-full max-w-[560px] md:max-w-[400px]">
                    {FEATURED_CARDS.map(({ slug, className, range, rotate, delay }) => {
                        const project = getProject(slug);
                        if (!project?.imageUrl) return null;
                        return (
                            <FloatingItem key={slug} scroll={scrollYProgress} range={range} rotate={rotate} delay={delay} className={className}>
                                <Link
                                    href={`/projects/${slug}`}
                                    className="group block overflow-hidden rounded-lg border border-cardBorder bg-light shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] transition-transform duration-300 hover:scale-105"
                                >
                                    <img src={project.imageUrl} alt={`${project.name} preview`} className="aspect-[16/10] w-full object-cover object-top" />
                                    <span className="flex items-center justify-between gap-2 px-3 py-2 text-[10px] uppercase tracking-widest text-neutral-300 md:text-[9px]">
                                        {project.name}
                                        <ArrowLeft className="size-3 rotate-180" />
                                    </span>
                                </Link>
                            </FloatingItem>
                        );
                    })}
                    <FloatingItem scroll={scrollYProgress} range={[0, 30]} delay={0.9} className="bottom-0 left-0 right-0 z-30 flex justify-center">
                        <div className="flex items-center gap-2 rounded-full border border-cardBorder bg-light/80 p-2 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9)] backdrop-blur">
                            {STACK_DOCK.map((technology) => (
                                <div key={technology.name} className="transition-transform duration-200 hover:-translate-y-1">
                                    <TechIcon technology={technology} size="md" />
                                </div>
                            ))}
                        </div>
                    </FloatingItem>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
