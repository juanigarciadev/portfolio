"use client";
import React, { useState } from "react";
import Copy from "../icons/Copy";
import Check from "../icons/Check";
import Mail from "../icons/Mail";

const Contact = () => {
    const [copy, setCopy] = useState(false);
    return (
        <section className="relative flex flex-col gap-8 w-full py-64 xl:px-16 lg:px-8 sm:px-2">
            <h3 className="text-6xl text-center font-semibold tracking-wide">
                Ready to <span className="text-corporative">work</span> with me?
            </h3>
            <div className="flex flex-col gap-4 items-center">
                <a href="mailto:juanigarciadev" className="relative inline-flex h-12 overflow-hidden rounded p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded bg-black px-8 py-2 font-semibold text-white backdrop-blur-3xl hover:bg-light transition-all"><Mail />Send me an email</span>
                </a>
                <span className="text-xs tracking-widest">OR</span>
                <div className="flex items-center gap-2 font-light w-fit border border-cardBorder bg-light rounded px-8 py-2">
                    <span className="font-semibold cursor-default select-none">Copy my email address</span>
                    <div>
                        {copy ? (
                            <div>
                                <div className="bg-black bg-opacity-80 border border-cardBorder p-2 rounded-lg cursor-pointer hover:bg-light transition-all">
                                    <Check />
                                </div>
                            </div>
                        ) : (
                            <div
                                onClick={() => {
                                    navigator.clipboard.writeText("juanigarciadev@gmail.com");
                                    setCopy(true);
                                    setTimeout(() => {
                                        setCopy(false);
                                    }, 1500);
                                }}>
                                {" "}
                                <div className="bg-black bg-opacity-80 border border-cardBorder p-2 rounded-lg cursor-pointer hover:bg-light transition-all">
                                    <Copy />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
