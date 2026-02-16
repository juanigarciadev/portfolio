"use client"
import React from "react";
import {motion} from 'framer-motion'

const Header = () => {
    return (
        <motion.header
        initial={{opacity: 0, y: '-20px'}}
        animate={{opacity: 1, y: '0px'}}
        transition={{duration: 0.3, delay: 1.2}}
        className="fixed z-50 top-4 px-4 left-0 right-0 m-auto h-16 w-fit rounded-lg border border-cardBorder bg-light md:w-[86%] md:px-0">
            <nav className="h-full w-full">
                <ul className="flex justify-center items-center w-auto h-full gap-4 md:gap-2 md:text-md">
                    <a href="/#aboutMe" className="anchorText">About Me</a>
                    <a href="/#work" className="anchorText">Work</a>
                    <a href="/#contact" className="anchorText">Contact</a>
                </ul>
            </nav>
        </motion.header>
    );
};

export default Header;
