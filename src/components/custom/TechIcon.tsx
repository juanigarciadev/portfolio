import { Tooltip } from "../ui/Tooltip";
import type { Technology } from "@/lib/mocks";

interface TechIconProps {
    technology: Technology;
    size?: "sm" | "md";
    side?: "top" | "bottom";
}

// Icono de tecnología con tooltip. Sin icono, cae a una pastilla de texto.
export const TechIcon = ({ technology, size = "sm", side = "bottom" }: TechIconProps) => {
    const { name, icon: Icon } = technology;
    const padding = size === "md" ? "p-2" : "p-1.5";

    if (!Icon) {
        return (
            <span className={`rounded-full bg-gradient-to-tl from-[#080C29] to-[#000319] border border-cardBorder px-3 ${size === "md" ? "py-2" : "py-1.5"} text-xs font-semibold leading-6`}>
                {name}
            </span>
        );
    }

    return (
        <Tooltip label={name} side={side}>
            <article aria-label={name} className={`rounded-full bg-gradient-to-tl from-[#080C29] to-[#000319] border border-cardBorder ${padding}`}>
                <Icon className={size === "md" ? "size-7" : "size-6"} />
            </article>
        </Tooltip>
    );
};
