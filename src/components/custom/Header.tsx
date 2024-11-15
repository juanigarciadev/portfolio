import React from "react";

const Header = () => {
    return (
        <header className="fixed z-50 top-4 px-4 left-0 right-0 m-auto h-16 w-fit rounded-lg border border-cardBorder bg-light md:h-12 md:px-0">
            <nav className="h-full w-full">
                <ul className="flex justify-center items-center w-auto h-full gap-4 md:gap-2 md:text-xs">
                    <a href="#aboutMe" className="inline-flex gap-2 px-8 py-2 cursor-pointer hover:bg-neutral-300 hover:bg-opacity-10 hover:rounded transition-all select-none md:px-4 md:py-0 md:hover:bg-transparent">About Me</a>
                    <a href="#work" className="inline-flex gap-2 px-8 py-2 cursor-pointer hover:bg-neutral-300 hover:bg-opacity-10 hover:rounded transition-all select-none md:px-4 md:py-0 md:hover:bg-transparent">Work</a>
                    <a href="#contact" className="inline-flex gap-2 px-8 py-2 cursor-pointer hover:bg-neutral-300 hover:bg-opacity-10 hover:rounded transition-all select-none md:px-4 md:py-0 md:hover:bg-transparent">Contact</a>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
