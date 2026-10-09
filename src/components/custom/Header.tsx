"use client"
import React from "react";
import Link from "next/link";
import {motion} from 'framer-motion'

const LINKS = [
    { label: "About Me", href: "/#aboutMe" },
    { label: "Work", href: "/#work" },
    { label: "Contact", href: "/#contact" },
];

const Header = () => {
    return (
        <motion.header
        initial={{opacity: 0, y: '-20px'}}
        animate={{opacity: 1, y: '0px'}}
        transition={{duration: 0.3, delay: 1.2}}
        className="fixed z-50 top-4 px-4 left-0 right-0 m-auto h-16 w-fit rounded-lg border border-cardBorder bg-light md:w-[86%] md:px-0">
            <nav className="h-full w-full">
                <ul className="flex justify-center items-center w-auto h-full gap-4 md:gap-2 md:text-md">
                    {LINKS.map(({ label, href }) => (
                        <li key={href}>
                            <Link href={href} className="anchorText">{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
};

export default Header;
