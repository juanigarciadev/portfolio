import { cn } from "@/lib/utils";

interface TooltipProps {
    label: string;
    children: React.ReactNode;
    className?: string;
}

// Tooltip estilo shadcn (fondo claro, texto oscuro, flecha, fade + zoom), hecho solo con CSS.
export const Tooltip = ({ label, children, className }: TooltipProps) => (
    <span className={cn("group/tip relative inline-flex hover:z-20", className)}>
        {children}
        <span
            role="tooltip"
            className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-max max-w-[16rem] -translate-x-1/2 scale-95 rounded-md bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-900 opacity-0 shadow-md transition duration-150 group-hover/tip:scale-100 group-hover/tip:opacity-100"
        >
            {label}
            <span className="absolute -top-1 left-1/2 size-2.5 -translate-x-1/2 rotate-45 rounded-[2px] bg-neutral-50" />
        </span>
    </span>
);
