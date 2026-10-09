"use client"
import React from "react"
import Link from "next/link"
import {motion} from 'framer-motion'

const Experience = () => {
    return(
        <motion.section
        initial={{opacity: 0, y: '20px'}}
        whileInView={{opacity: 1, y: '0px'}}
        transition={{duration: 0.3}}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col bg-main gap-16 w-full px-96 xl:px-8 lg:px-4 sm:px-2 mb-64 md:mb-32">
            <h2 className="text-6xl title text-center font-semibold tracking-wide md:text-5xl">
                My <span className="text-corporative font-semibold">experience</span>
            </h2>
            <article className="inline-flex gap-4 lg:flex-col">
                <motion.div
                initial={{opacity: 0, x: '-20px'}}
                whileInView={{opacity: 1, x: '0px'}}
                transition={{duration: 0.3}}
                viewport={{ once: true, amount: 0.6 }}
                className="inline-flex flex-col gap-4 items-center lg:items-start">
                    <img src="https://res.cloudinary.com/diruiumfk/image/upload/v1739851387/grupobroda-logo_pl5yx3.jpg" alt="Grupo Broda logo" className="min-w-16 w-16 rounded"/>
                    <span className="w-[3px] h-[calc(100%+50px)] bg-gradient-to-b from-neutral-300/10 via-neutral-300/10 to-neutral-300/0 lg:hidden -mt-6"></span>
                </motion.div>
                <motion.div
                initial={{opacity: 0, x: '20px'}}
                whileInView={{opacity: 1, x: '0px'}}
                transition={{duration: 0.3}}
                viewport={{ once: true, amount: 0.6 }}
                className="text-lg pb-10 inline-flex flex-col gap-2">
                    <a href="https://grupobroda.com/" target="_blank" rel="noopener noreferrer" className="title text-4xl text-corporative md:text-3xl hover:underline">Grupo Broda</a>
                    <div>
                        <h3>IT Analyst - Management control</h3>
                        <span>Feb. 2025 - At present</span>
                    </div>
                    <div>
                        <p className="text-neutral-300">
                            I work as an IT Analyst where I apply my knowledge in multiple technologies and train in others. I am part of the management control team. I am mainly responsible for the maintenance and design of systems and web pages related to the company.
                        </p>
                        <p className="text-neutral-300 pt-4">
                            Related projects:{" "}
                            <Link href="/projects/brodaverso" className="text-corporative font-semibold hover:underline">Brodaverso</Link>,{" "}
                            <Link href="/projects/grupo-broda-website" className="text-corporative font-semibold hover:underline">Grupo Broda website</Link> and{" "}
                            <Link href="/projects/alma-chacras" className="text-corporative font-semibold hover:underline">Alma Chacras</Link>.
                        </p>
                    </div>
                </motion.div>
            </article>
        </motion.section>
    )
}

export default Experience