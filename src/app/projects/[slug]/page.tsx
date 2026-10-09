import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Fragment } from "react";
import ArrowLeft from "@/components/icons/ArrowLeft";
import { FadeIn } from "@/components/custom/FadeIn";
import { TechIcon } from "@/components/custom/TechIcon";
import { ZoomableImage } from "@/components/custom/ZoomableImage";
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

const BrowserFrame = ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-hidden rounded-2xl border border-cardBorder bg-light shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2 border-b border-cardBorder bg-main px-4 py-3">
            <span className="size-2.5 rounded-full bg-neutral-700" />
            <span className="size-2.5 rounded-full bg-neutral-700" />
            <span className="size-2.5 rounded-full bg-neutral-700" />
        </div>
        {children}
    </div>
);

const ImagePlaceholder = ({ label }: { label: string }) => (
    <div className="flex h-96 w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-cardBorder bg-light text-center text-neutral-300">
        <span className="text-xs tracking-widest uppercase">Image pending</span>
        <span>{label}</span>
    </div>
);

const secondaryButton = "inline-flex items-center gap-2 rounded-full border border-cardBorder bg-black px-8 py-2.5 font-semibold transition-all hover:border-corporative hover:bg-light";
const primaryButton = "inline-flex items-center gap-2 rounded-full border border-cardBorder bg-corporative px-8 py-2.5 font-semibold text-corporativeDark transition-all hover:bg-corporativeDark hover:text-corporativeLight";

export default function ProjectPage({ params }: { params: Params }) {
    const project = getProject(params.slug);
    if (!project) notFound();

    const { name, context, description, technologies, imageUrl, websiteUrl, repositoryUrl, blocks } = project;
    const hasBlockImages = blocks.some((block) => block.image || block.placeholder);
    const hasBlockTitles = blocks.some((block) => block.title);

    return (
        <main className="container-page flex flex-col gap-12 pb-24 pt-32 md:pt-28">
            <FadeIn y="0px" className="flex flex-col gap-8">
                <Link href="/#work" className="inline-flex w-fit items-center gap-2 rounded-full border border-cardBorder px-5 py-2 text-sm transition-all hover:border-corporative hover:bg-light">
                    <ArrowLeft className="size-4" />All projects
                </Link>
                <div className="flex flex-col gap-5">
                    <span className="eyebrow">{context}</span>
                    <h1 className="title text-7xl font-semibold tracking-wide text-corporative md:text-5xl">{name}</h1>
                    <p className="max-w-3xl text-xl text-neutral-300">{description}</p>
                    {(repositoryUrl || websiteUrl) && (
                        <div className="flex flex-wrap gap-3 pt-2">
                            {websiteUrl && <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className={primaryButton}>Open Live Site<ArrowLeft className="rotate-[135deg] fill-[#2a1e50]" /></a>}
                            {repositoryUrl && <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className={secondaryButton}>Visit Repository</a>}
                        </div>
                    )}
                </div>
            </FadeIn>

            <FadeIn>
                {imageUrl ? (
                    <BrowserFrame>
                        <ZoomableImage src={imageUrl} alt={`${name} preview`} className="max-h-[36rem] w-full object-cover object-top" />
                    </BrowserFrame>
                ) : (
                    <ImagePlaceholder label={`${name} preview`} />
                )}
            </FadeIn>

            <div className="grid grid-cols-[1fr_280px] gap-16 lg:grid-cols-1 lg:gap-12">
                <section className={`flex flex-col ${hasBlockImages ? "gap-16" : hasBlockTitles ? "gap-12" : "gap-6"}`}>
                    {blocks.map(({ title, text, bullets, image, placeholder }, i) => (
                        <FadeIn key={i} className={`flex flex-col ${image || placeholder ? "gap-10" : "gap-6"}`}>
                            <div className="flex flex-col gap-4">
                                {title && <h2 className="title text-3xl font-semibold tracking-wide text-corporative md:text-2xl">{title}</h2>}
                                <p className="text-lg leading-relaxed text-neutral-200">{renderText(text)}</p>
                                {bullets && (
                                    <ul className="flex list-disc flex-col gap-2 pl-6 text-lg text-neutral-300 marker:text-corporative">
                                        {bullets.map((bullet, j) => <li key={j}>{renderText(bullet)}</li>)}
                                    </ul>
                                )}
                            </div>
                            {!image && placeholder && <ImagePlaceholder label={placeholder} />}
                            {image && (
                                <BrowserFrame>
                                    <ZoomableImage src={image.src} alt={image.alt} className="w-full" />
                                </BrowserFrame>
                            )}
                        </FadeIn>
                    ))}
                </section>

                <aside className="flex flex-col gap-6 self-start lg:order-first lg:static sticky top-28">
                    <div className="flex flex-col gap-3 rounded-2xl border border-cardBorder bg-light p-6">
                        <span className="eyebrow">Context</span>
                        <span className="text-lg">{context}</span>
                    </div>
                    <div className="flex flex-col gap-4 rounded-2xl border border-cardBorder bg-light p-6">
                        <span className="eyebrow">Stack</span>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((technology) => (
                                <TechIcon key={technology.name} technology={technology} size="md" />
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}
