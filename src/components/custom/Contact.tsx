"use client";
import React, { useEffect, useRef, useState } from "react";
import Copy from "../icons/Copy";
import Check from "../icons/Check";
import Mail from "../icons/Mail";
import {motion} from 'framer-motion'

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

    return (
        <motion.section
        initial={{opacity: 0, y: '20px'}}
        whileInView={{opacity: 1, y: '0px'}}
        transition={{duration: 0.3}}
        viewport={{ once: true, amount: 0.2 }}
        className="relative flex flex-col gap-8 w-full py-64 xl:px-8 lg:px-4 sm:px-2 md:py-32 scroll-mt-24" id="contact">
            <h2 className="text-6xl title text-center font-semibold tracking-wide md:text-5xl">
                Ready to <span className="text-corporative font-semibold">work</span> with me?
            </h2>
            <div className="flex flex-col gap-4 items-center">
                <a href={`mailto:${EMAIL}`} className="relative inline-flex h-12 overflow-hidden rounded p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded bg-black px-8 py-2 font-semibold text-white backdrop-blur-3xl hover:bg-light transition-all md:text-lg"><Mail />Send me an email</span>
                </a>
                <span className="text-md tracking-widest">OR</span>
                <div className="flex items-center gap-2 font-light w-fit border border-cardBorder bg-light rounded px-8 py-2">
                    <span className="font-semibold cursor-default select-none md:text-lg">Copy my email address</span>
                    <button
                        type="button"
                        onClick={copyEmail}
                        disabled={copy}
                        aria-label={copy ? "Email address copied" : "Copy email address"}
                        className="bg-black bg-opacity-80 border border-cardBorder p-2 rounded-lg cursor-pointer hover:bg-light transition-all"
                    >
                        {copy ? <Check /> : <Copy />}
                    </button>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
