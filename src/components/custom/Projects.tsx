"use client"
import React from "react";
import Link from "next/link";
import ArrowLeft from "../icons/ArrowLeft";
import { SpotlightCard } from "../ui/SpotlightCard";
import { SectionHeading } from "../ui/SectionHeading";
import { TechIcon } from "./TechIcon";
import { FadeIn } from "./FadeIn";
import { PROJECTS, type Project } from "@/lib/mocks";
import { cn } from "@/lib/utils";

const GROUPS: { category: Project["category"]; title: string }[] = [
    { category: "work", title: "At Grupo Broda & beyond" },
    { category: "personal", title: "Personal projects" },
];

const ProjectImage = ({ project, className }: { project: Project; className?: string }) => (
    <div className={cn("relative overflow-hidden bg-main", className)}>
        {project.imageUrl ? (
            <img
                src={project.imageUrl}
                alt={`${project.name} preview`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/spot:scale-105"
            />
        ) : (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_right,#0b1140_1px,transparent_1px),linear-gradient(to_bottom,#0b1140_1px,transparent_1px)] bg-[size:24px_24px]">
                <span className="title text-3xl text-neutral-600">{project.name}</span>
            </div>
        )}
    </div>
);

const TechRow = ({ project }: { project: Project }) => (
    <div className="flex flex-wrap items-center gap-2">
        {project.technologies.filter((technology) => technology.icon).map((technology) => (
            <TechIcon key={technology.name} technology={technology} side="top" />
        ))}
    </div>
);

const ArrowButton = () => (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-cardBorder bg-main transition-all duration-300 group-hover/spot:border-corporative group-hover/spot:bg-corporative">
        <ArrowLeft className="rotate-180 transition-colors duration-300 group-hover/spot:fill-[#2a1e50]" />
    </span>
);

const ProjectCard = ({ project }: { project: Project }) => (
    <SpotlightCard className="h-full">
        <Link href={`/projects/${project.slug}`} className="relative z-10 flex h-full flex-col">
            <ProjectImage project={project} className="aspect-[16/10] rounded-t-2xl" />
            <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="text-xs uppercase tracking-widest text-neutral-400">{project.context}</span>
                <h3 className="title text-3xl font-semibold text-corporative">{project.name}</h3>
                <p className="line-clamp-3 text-neutral-300">{project.description}</p>
                <div className="mt-auto flex items-end justify-between gap-4 pt-4">
                    <TechRow project={project} />
                    <ArrowButton />
                </div>
            </div>
        </Link>
    </SpotlightCard>
);

const FeaturedCard = ({ project }: { project: Project }) => (
    <SpotlightCard>
        <Link href={`/projects/${project.slug}`} className="relative z-10 grid grid-cols-[1.35fr_1fr] lg:grid-cols-1">
            <ProjectImage project={project} className="min-h-[22rem] rounded-l-2xl lg:aspect-[16/10] lg:min-h-0 lg:rounded-l-none lg:rounded-t-2xl" />
            <div className="flex flex-col gap-4 p-8 md:p-6">
                <span className="inline-flex w-fit items-center rounded-full border border-corporative/40 bg-corporative/10 px-3 py-1 text-xs uppercase tracking-widest text-corporative">Featured</span>
                <span className="text-xs uppercase tracking-widest text-neutral-400">{project.context}</span>
                <h3 className="title text-5xl font-semibold text-corporative md:text-4xl">{project.name}</h3>
                <p className="text-lg text-neutral-300">{project.description}</p>
                <div className="mt-auto flex items-end justify-between gap-4 pt-4">
                    <TechRow project={project} />
                    <span className="inline-flex shrink-0 items-center gap-2 font-semibold">Read the case <ArrowButton /></span>
                </div>
            </div>
        </Link>
    </SpotlightCard>
);

const Projects = () => {
    return (
        <section className="container-page flex scroll-mt-24 flex-col gap-16 py-32 md:py-20" id="work">
            <FadeIn>
                <SectionHeading eyebrow="Selected work" description="Internal platforms, websites and open source: the things I have built and shipped.">
                    My <span className="text-corporative">featured</span> projects
                </SectionHeading>
            </FadeIn>
            {GROUPS.map(({ category, title }) => {
                const projects = PROJECTS.filter((project) => project.category === category);
                const [first, ...rest] = projects;
                const featured = category === "work" ? first : undefined;
                const grid = featured ? rest : projects;
                return (
                    <div key={category} className="flex flex-col gap-6">
                        <FadeIn><h3 className="eyebrow">{title}</h3></FadeIn>
                        {featured && <FadeIn><FeaturedCard project={featured} /></FadeIn>}
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                            {grid.map((project) => (
                                <FadeIn key={project.slug} className="h-full">
                                    <ProjectCard project={project} />
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default Projects;
