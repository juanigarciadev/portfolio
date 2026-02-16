"use client"
import Link from "next/link";
import React from "react";
import Github from "../icons/Github";
import ArrowLeft from "../icons/ArrowLeft";
import {motion} from 'framer-motion'

const Information = () => {
    return(
        <motion.div
        initial={{opacity: 0, y: '20px'}}
        whileInView={{opacity: 1, y: '0px'}}
        transition={{duration: 0.3}}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col bg-main gap-16 w-full px-96 xl:px-16 lg:px-8 md:pb-32 sm:px-2 h-auto" id="aboutMe">
            <div className="grid grid-rows-2 gap-4 md:hidden">
                <div className="grid grid-cols-2 w-full h-[600px] rounded gap-4 md:flex-col">
                    <div className="inline-flex items-end rounded border border-cardBorder bg-light p-4 bg-[bottom_10rem_right_-10rem] bg-contain bg-no-repeat bg-[url('https://res.cloudinary.com/diruiumfk/image/upload/v1732066935/blossomuibackground_lcnotm.png')]">
                        <span className="title text-wrap text-3xl font-semibold tracking-wide md:text-2xl">Always improving to make stunning sites.</span>
                    </div>
                    <div className="w-full grid grid-rows-2 gap-4 rounded">
                        <div className="flex flex-col gap-4 w-full rounded border border-cardBorder bg-light p-4 bg-no-repeat bg-[bottom_-5rem_right_-10rem] bg-contain bg-[url('https://res.cloudinary.com/diruiumfk/image/upload/v1732063669/components_d52jfz.png')]">
                        <div className="flex flex-col gap-2">
                            <span className="z-10 text-xs tracking-widest">WHAT I'M DOING</span>
                            <span className="title text-wrap text-3xl font-semibold tracking-wide md:text-2xl">Currently building a free-to-use Tailwind components library.</span>
                        </div>
                            <Link href='/projects/BlossomUI' className="flex items-center gap-2 font-semibold w-fit border border-cardBorder bg-black rounded px-8 py-2 hover:bg-light transition-all md:text-xs md:w-full md:justify-center">More information</Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4 rounded">
                            <div className="inline-flex items-center justify-center rounded border border-cardBorder bg-light">
                                <img className="rounded w-40" src="https://res.cloudinary.com/diruiumfk/image/upload/v1732068941/Flag_of_Argentina.svg_m9olkc.png" alt="argentinian flag" />
                            </div>
                            <div className="flex flex-col gap-4 rounded border border-cardBorder bg-light relative p-4">
                                <span className="title text-wrap text-3xl font-semibold tracking-wide md:text-2xl">Main stack</span>
                                <img src="https://res.cloudinary.com/diruiumfk/image/upload/v1732069165/stack_xlwn3o.png" alt="technologies stack" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-4 h-[292px] gap-4 rounded md:flex md:flex-col md:w-full md:h-auto">
                    <div className="inline-flex items-center col-span-3 rounded border border-cardBorder bg-light p-4">
                        <div className="flex flex-col gap-2">
                            <span className="z-10 text-xs tracking-widest">MORE ABOUT ME</span>
                            <span className="title text-wrap text-3xl font-semibold tracking-wide md:text-2xl">Curious and creative front-end developer focused in creating useful, fun and friendly experiences.
                            </span>
                        </div>
                    </div>
                    <Link href={'https://github.com/juanigarciadev'} target="_blank" className="relative group flex items-center justify-center rounded border border-cardBorder bg-light cursor-pointer hover:bg-main">
                        <Github className='size-32 group-hover:size-28 duration-100'/>
                        <div className="absolute bg-black right-3 bottom-3 bg-opacity-80 border border-cardBorder p-2 rounded-lg cursor-pointer group-hover:bg-light transition-all">
                            <ArrowLeft className='rotate-[135deg]'/>
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Information