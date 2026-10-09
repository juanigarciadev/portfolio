import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Fragment } from "react";
import { TechIcon } from "@/components/custom/TechIcon";
import ArrowLeft from "@/components/icons/ArrowLeft";
import { FadeIn } from "@/components/custom/FadeIn";
import { PROJECTS, getProject } from "@/lib/mocks";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
    return PROJECTS.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
    const project = getProject(params.slug);
    if (!project) return {};
    return {
        title: `${project.name} | juanigarciadev`,
        description: project.description,
        openGraph: {
            title: project.name,
            description: project.description,
            images: project.imageUrl ? [project.imageUrl] : undefined,
        },
    };
}

// Convierte [texto](url) en links.
const renderText = (text: string) =>
    text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match) return <Fragment key={i}>{part}</Fragment>;
        return (
            <a key={i} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-corporative font-semibold cursor-pointer hover:underline">
                {match[1]}
            </a>
        );
    });

const ImagePlaceholder = ({ label }: { label: string }) => (
    <div className="flex h-96 w-full flex-col items-center justify-center gap-2 rounded border border-dashed border-cardBorder bg-light text-center text-neutral-300">
        <span className="text-xs tracking-widest uppercase">Image pending</span>
        <span>{label}</span>
    </div>
);

const secondaryButton = "font-semibold border border-cardBorder px-8 py-2 rounded hover:bg-light transition-all 2xl:w-full 2xl:text-center lg:p-4";
const primaryButton = "text-corporativeDark font-semibold bg-corporative border border-cardBorder px-8 py-2 rounded hover:bg-corporativeDark transition-all hover:text-corporativeLight 2xl:w-full 2xl:text-center lg:p-4";

export default function ProjectPage({ params }: { params: Params }) {
    const project = getProject(params.slug);
    if (!project) notFound();

    const { name, context, description, technologies, imageUrl, websiteUrl, repositoryUrl, blocks } = project;
    const hasBlockImages = blocks.some((block) => block.image || block.placeholder);
    const hasBlockTitles = blocks.some((block) => block.title);

    return (
        <main className="text-lg flex flex-col bg-main gap-16 w-full px-96 mt-28 xl:px-8 lg:px-4 sm:px-2">
            <FadeIn y="0px" className="flex flex-col gap-10">
                <Link href="/" className="inline-flex items-center gap-2 font-semibold w-fit border border-cardBorder px-8 py-2 rounded hover:bg-light transition-all 2xl:w-full 2xl:text-center lg:p-4">
                    <ArrowLeft />Return to home
                </Link>
                {!imageUrl && <ImagePlaceholder label={`${name} preview`} />}
                {imageUrl && (
                    <div
                        role="img"
                        aria-label={`${name} preview`}
                        style={{ backgroundImage: `url(${imageUrl})` }}
                        className="h-96 w-full rounded bg-cover hover:bg-bottom hover:duration-1000 [&:not(:hover)]:bg-top [&:not(:hover)]:duration-1000"
                    />
                )}
            </FadeIn>
            <FadeIn className="flex flex-col gap-4">
                <span className="text-xs tracking-widest uppercase">{context}</span>
                <h1 className="title text-corporative text-6xl font-semibold tracking-wide md:text-5xl">{name}</h1>
                <p className="flex">{description}</p>
                <div className="flex flex-wrap gap-2 items-center">
                    {technologies.map((technology) => <TechIcon key={technology.name} technology={technology} size="md" />)}
                </div>
                {(repositoryUrl || websiteUrl) && (
                    <div className="flex gap-4 lg:flex-col">
                        {repositoryUrl && <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className={secondaryButton}>Visit Repository</a>}
                        {websiteUrl && <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className={primaryButton}>Open Live Site</a>}
                    </div>
                )}
            </FadeIn>
            <section className={`flex flex-col pb-16 ${hasBlockImages ? "gap-16" : hasBlockTitles ? "gap-12" : "gap-6"}`}>
                {blocks.map(({ title, text, bullets, image, placeholder }, i) => (
                    <FadeIn key={i} className={`flex flex-col ${image || placeholder ? "gap-16" : "gap-6"}`}>
                        <div className="flex flex-col gap-4">
                            {title && <h2 className="title text-3xl text-corporative font-semibold tracking-wide md:text-2xl">{title}</h2>}
                            <p>{renderText(text)}</p>
                            {bullets && (
                                <ul className="flex list-disc flex-col gap-2 pl-6 text-neutral-300 marker:text-corporative">
                                    {bullets.map((bullet, j) => <li key={j}>{renderText(bullet)}</li>)}
                                </ul>
                            )}
                        </div>
                        {!image && placeholder && <ImagePlaceholder label={placeholder} />}
                        {image && <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="rounded" />}
                    </FadeIn>
                ))}
            </section>
        </main>
    );
}
