"use client"
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
}

// Card con un foco de luz violeta que sigue al mouse.
export const SpotlightCard = ({ children, className }: SpotlightCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const element = ref.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        element.style.setProperty("--x", `${event.clientX - rect.left}px`);
        element.style.setProperty("--y", `${event.clientY - rect.top}px`);
    };

    return (
        <div
            ref={ref}
            onMouseMove={onMouseMove}
            className={cn("group/spot relative rounded-2xl border border-cardBorder bg-light transition-colors duration-300 hover:border-corporative/40", className)}
        >
            <div
                className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
                style={{ background: "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(167,139,250,0.13), transparent 60%)" }}
            />
            {children}
        </div>
    );
};
