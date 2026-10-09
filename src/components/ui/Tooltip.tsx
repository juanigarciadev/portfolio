import { cn } from "@/lib/utils";

interface TooltipProps {
    label: string;
    children: React.ReactNode;
    className?: string;
    side?: "top" | "bottom";
}

// Tooltip estilo shadcn (fondo claro, texto oscuro, flecha, fade + zoom), hecho solo con CSS.
export const Tooltip = ({ label, children, className, side = "bottom" }: TooltipProps) => (
    <span className={cn("group/tip relative inline-flex hover:z-20", className)}>
        {children}
        <span
            role="tooltip"
            className={cn(
                "pointer-events-none absolute left-1/2 z-50 w-max max-w-[16rem] -translate-x-1/2 scale-95 rounded-md bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-900 opacity-0 shadow-md transition duration-150 group-hover/tip:scale-100 group-hover/tip:opacity-100",
                side === "bottom" ? "top-full mt-2" : "bottom-full mb-2"
            )}
        >
            {label}
            <span
                className={cn(
                    "absolute left-1/2 size-2.5 -translate-x-1/2 rotate-45 rounded-[2px] bg-neutral-50",
                    side === "bottom" ? "-top-1" : "-bottom-1"
                )}
            />
        </span>
    </span>
);
