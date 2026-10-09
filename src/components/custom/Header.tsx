"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {motion} from 'framer-motion'

const LINKS = [
    { label: "About", id: "aboutMe" },
    { label: "Experience", id: "experience" },
    { label: "Work", id: "work" },
    { label: "Contact", id: "contact" },
];

const Header = () => {
    const pathname = usePathname();
    const [active, setActive] = useState("");

    // Resalta la sección que está en pantalla (solo en el home).
    useEffect(() => {
        if (pathname !== "/") {
            setActive("");
            return;
        }
        const sections = ["top", ...LINKS.map((link) => link.id)]
            .map((id) => document.getElementById(id))
            .filter((element): element is HTMLElement => element !== null);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id === "top" ? "" : entry.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [pathname]);

    return (
        <motion.header
        initial={{opacity: 0, y: '-20px'}}
        animate={{opacity: 1, y: '0px'}}
        transition={{duration: 0.3, delay: 0.4}}
        className="fixed inset-x-0 top-4 z-50 px-4">
            <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-cardBorder bg-main/70 px-3 py-2 backdrop-blur-md md:justify-center">
                <Link href="/" className="title px-4 text-lg font-semibold tracking-wide md:hidden">
                    juanigarciadev<span className="text-corporative">.</span>
                </Link>
                <nav>
                    <ul className="flex items-center gap-1">
                        {LINKS.map(({ label, id }) => (
                            <li key={id}>
                                <Link
                                    href={`/#${id}`}
                                    className={`block rounded-full px-4 py-2 text-sm transition-colors md:px-3 ${active === id ? "bg-light text-white" : "text-neutral-400 hover:text-white"}`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Link href="/#contact" className="rounded-full bg-corporative px-5 py-2 text-sm font-semibold text-corporativeDark transition-all hover:bg-corporativeDark hover:text-corporativeLight md:hidden">
                    Let's talk
                </Link>
            </div>
        </motion.header>
    );
};

export default Header;
