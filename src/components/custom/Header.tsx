import React from "react";

const Header = () => {
    return (
        <header className="fixed z-50 top-4 px-4 left-0 right-0 m-auto h-16 w-fit rounded-lg border border-cardBorder bg-light">
            <nav className="h-full w-full">
                <ul className="flex justify-center items-center w-auto h-full gap-4">
                    <li className="inline-flex gap-2 px-8 py-2 cursor-pointer hover:bg-neutral-300 hover:bg-opacity-10 hover:rounded transition-all select-none">About Me</li>
                    <li className="inline-flex gap-2 px-8 py-2 cursor-pointer hover:bg-neutral-300 hover:bg-opacity-10 hover:rounded transition-all select-none">Skills</li>
                    <li className="inline-flex gap-2 px-8 py-2 cursor-pointer hover:bg-neutral-300 hover:bg-opacity-10 hover:rounded transition-all select-none">Experience</li>
                    <li className="inline-flex gap-2 px-8 py-2 cursor-pointer hover:bg-neutral-300 hover:bg-opacity-10 hover:rounded transition-all select-none">Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
