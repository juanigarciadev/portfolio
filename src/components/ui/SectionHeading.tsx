import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    eyebrow: string;
    children: React.ReactNode;
    description?: string;
    className?: string;
}

export const SectionHeading = ({ eyebrow, children, description, className }: SectionHeadingProps) => (
    <div className={cn("flex flex-col gap-4", className)}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="title max-w-3xl text-5xl font-semibold tracking-wide md:text-4xl">{children}</h2>
        {description && <p className="max-w-2xl text-lg text-neutral-300">{description}</p>}
    </div>
);
