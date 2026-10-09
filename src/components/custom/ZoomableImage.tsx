"use client"
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

interface ZoomableImageProps {
    src: string;
    alt: string;
    className?: string;
}

// Imagen que se abre en grande al hacer clic. Se cierra con clic afuera, con la X o con Esc.
export const ZoomableImage = ({ src, alt, className }: ZoomableImageProps) => {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={`Open larger image: ${alt}`}
                className="group relative block w-full cursor-zoom-in"
            >
                <img src={src} alt={alt} loading="lazy" decoding="async" className={className} />
                <span className="pointer-events-none absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-cardBorder bg-main/80 opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100 md:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M15 3h6v6" />
                        <path d="M9 21H3v-6" />
                        <path d="m21 3-7 7" />
                        <path d="m3 21 7-7" />
                    </svg>
                </span>
            </button>
            {mounted &&
                createPortal(
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                role="dialog"
                                aria-modal="true"
                                aria-label={alt}
                                onClick={() => setOpen(false)}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/85 p-6 backdrop-blur-sm md:p-2"
                            >
                                <motion.img
                                    src={src}
                                    alt={alt}
                                    onClick={(event) => event.stopPropagation()}
                                    initial={{ scale: 0.95 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="max-h-[92vh] max-w-[96vw] cursor-default rounded-2xl object-contain shadow-2xl"
                                />
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    aria-label="Close image"
                                    className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-cardBorder bg-main/80 transition-colors hover:border-corporative md:right-3 md:top-3"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
        </>
    );
};
