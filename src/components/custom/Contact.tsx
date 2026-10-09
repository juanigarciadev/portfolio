"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Copy from "../icons/Copy";
import Check from "../icons/Check";
import Mail from "../icons/Mail";
import { FadeIn } from "./FadeIn";
import { Tooltip } from "../ui/Tooltip";
import { SOCIALS } from "@/lib/mocks";

const EMAIL = "juanigarciadev@gmail.com";

const Contact = () => {
    const [copy, setCopy] = useState(false);
    const timeout = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => () => clearTimeout(timeout.current), []);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
        } catch {
            return;
        }
        setCopy(true);
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => setCopy(false), 1500);
    };

    const socials = SOCIALS.filter((social) => social.title !== "Contact me");

    return (
        <section className="container-page scroll-mt-24 py-32 md:py-20" id="contact">
            <FadeIn>
                <div className="relative overflow-hidden rounded-3xl border border-cardBorder bg-light px-8 py-24 text-center md:px-6 md:py-16">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(167,139,250,0.2),transparent)]" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0b1140_1px,transparent_1px),linear-gradient(to_bottom,#0b1140_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_100%,#000_20%,transparent_100%)]" />
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <span className="eyebrow">Contact</span>
                        <h2 className="title max-w-3xl text-6xl font-semibold tracking-wide md:text-4xl">
                            Ready to <span className="text-corporative">work</span> with me?
                        </h2>
                        <p className="max-w-xl text-lg text-neutral-300">Have a project in mind, or just want to say hi? My inbox is open.</p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <a href={`mailto:${EMAIL}`} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-black px-8 py-2 font-semibold text-white backdrop-blur-3xl transition-all hover:bg-light"><Mail />Send me an email</span>
                            </a>
                            {/* El botón cambia de ancho entre el email y "Copied!": layout lo anima en vez de saltar. */}
                            <motion.button
                                layout
                                type="button"
                                onClick={copyEmail}
                                disabled={copy}
                                aria-label={copy ? "Email address copied" : "Copy email address"}
                                style={{ borderRadius: 9999 }}
                                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                                className="inline-flex h-12 items-center gap-3 overflow-hidden border border-cardBorder bg-main px-6 font-semibold hover:border-corporative"
                            >
                                <AnimatePresence mode="popLayout" initial={false}>
                                    {/* Texto e icono se animan juntos como una sola unidad. */}
                                    <motion.span
                                        key={copy ? "copied" : "email"}
                                        layout="position"
                                        initial={{ opacity: 0, filter: "blur(4px)" }}
                                        animate={{ opacity: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, filter: "blur(4px)" }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center gap-3 whitespace-nowrap"
                                    >
                                        {copy ? "Copied!" : EMAIL}
                                        {copy ? <Check /> : <Copy />}
                                    </motion.span>
                                </AnimatePresence>
                            </motion.button>
                        </div>
                        <div className="flex gap-3 pt-2">
                            {socials.map((social) => (
                                <Tooltip key={social.title} label={social.title}>
                                    <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.title} className="rounded-full border border-cardBorder bg-main p-3 transition-all hover:-translate-y-0.5 hover:border-corporative">
                                        <social.icon className="size-5" />
                                    </a>
                                </Tooltip>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
};

export default Contact;
