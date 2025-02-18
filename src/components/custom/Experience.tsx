import React from "react"

const Experience = () => {
    return(
        <section className="flex flex-col bg-main gap-16 w-full px-96 xl:px-16 lg:px-8 sm:px-2 mb-64 md:mb-32">
            <h3 className="text-6xl text-center font-semibold tracking-wide md:text-3xl">
                My <span className="text-corporative">experience</span>
            </h3>
            <article className="inline-flex gap-4 lg:flex-col">
                <div className="inline-flex flex-col gap-4 items-center lg:items-start">
                    <img src="https://res.cloudinary.com/diruiumfk/image/upload/v1739851387/grupobroda-logo_pl5yx3.jpg" alt="Grupo Broda logo" className="min-w-16 w-16 rounded"/>
                    <span className="w-[3px] h-full bg-neutral-300/10 lg:hidden -mt-6"></span>
                </div>
                <div className="inline-flex flex-col gap-2">
                    <a href="https://grupobroda.com/" target="_blank" className="text-3xl text-corporative font-semibold md:text-xl hover:underline">Grupo Broda</a>
                    <div>
                        <h3>IT Analyst - Management control</h3>
                        <span>2025 - At present</span>
                    </div>
                    <div>
                        <p className="text-neutral-300">
                            I work as an IT Analyst where I apply my knowledge in multiple technologies and train in others. I am part of the management control team. I am mainly responsible for the maintenance and design of systems and web pages related to the company.
                        </p>
                    </div>
    </div>
            </article>
        </section>
    )
}

export default Experience