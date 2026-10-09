import React from "react";
import Link from "next/link";
import { SOCIALS } from "@/lib/mocks";

const FOOTER_LINKS = [
    { label: "About", href: "/#aboutMe" },
    { label: "Experience", href: "/#experience" },
    { label: "Work", href: "/#work" },
    { label: "Contact", href: "/#contact" },
];

const Footer = () => {
    return (
        <footer className="relative w-full rounded-t-3xl border border-b-0 border-cardBorder bg-light">
            <div className="container-page flex flex-col gap-10 py-12">
                <div className="grid grid-cols-3 items-start gap-8 md:grid-cols-1">
                    <div className="flex flex-col gap-3">
                        <span className="title text-2xl font-semibold tracking-wide">juanigarciadev<span className="text-corporative">.</span></span>
                        <p className="max-w-xs text-neutral-300">Frontend developer from Argentina. Everything, made with love. Always.</p>
                    </div>
                    <nav>
                        <ul className="flex flex-col gap-2">
                            {FOOTER_LINKS.map(({ label, href }) => (
                                <li key={href}>
                                    <Link href={href} className="text-neutral-300 transition-colors hover:text-corporative">{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex gap-3 justify-self-end md:justify-self-start">
                        {SOCIALS.map((social) => (
                            <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.title} key={social.title} className="rounded-full border border-cardBorder bg-light p-3 transition-all hover:-translate-y-0.5 hover:border-corporative/40">
                                <social.icon className="size-5" />
                            </a>
                        ))}
                    </div>
                </div>
                <span className="text-xs uppercase tracking-widest text-neutral-500">© {new Date().getFullYear()} Juan Ignacio García</span>
            </div>
        </footer>
    );
};

export default Footer;
