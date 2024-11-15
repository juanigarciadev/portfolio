import CubeIcon from '../../../components/icons/Cube'

export default function BlossomUI() {
    return(
        <main className="flex flex-col bg-main gap-16 w-full px-96 mt-12 xl:px-16 lg:px-8 sm:px-2">
            <div className="h-96 w-full rounded bg-cover bg-[url('https://res.cloudinary.com/diruiumfk/image/upload/v1724003620/blossomui_wcxsqc.png')] hover:bg-bottom hover:duration-1000 [&:not(:hover)]:bg-top [&:not(:hover)]:duration-1000">
            </div>
            <section className="flex flex-col gap-4">
                <h1 className="text-corporative text-6xl font-semibold tracking-wide">BlossomUI</h1>
                <p className="flex">Stylish, clean and reusable UI component library made with Tailwind. Open source and free.</p>
                <div className='inline-flex gap-2 items-center'>
                    <CubeIcon/>
                    <span className="text-xs tracking-widest">VITE, REACTJS, TAILWINDCSS & VERCEL</span>
                </div>
                <div className="flex gap-4 lg:flex-col">
                    <a href="https://github.com/juanigarciadev/BlossomUI" target="_blank" className="font-semibold border border-cardBorder px-8 py-2 rounded hover:bg-light transition-all 2xl:text-xs 2xl:w-full 2xl:text-center lg:p-4">Visit Repository</a>
                    <a href="https://blossomui.vercel.app/" target="_blank" className="text-corporativeDark font-semibold bg-corporative border border-cardBorder px-8 py-2 rounded hover:bg-corporativeDark transition-all hover:text-corporativeLight 2xl:text-xs 2xl:w-full 2xl:text-center lg:p-4">Open Live Site</a>
                </div>
            </section>
            <section className="flex flex-col gap-16">
                <p>BlossomUI is a library of open source, easily copyable and usable components made with TailwindCSS. This project seeks to help anyone who wants to follow a design scheme without breaking their head too much (because someone has already broken it before). Its use is completely free and non-profit.</p>
                <img src="https://res.cloudinary.com/diruiumfk/image/upload/v1731645428/badges-blossom_o8njtg.png" className='rounded' alt="Badges section view" />
                <p>
                This project was started as a personal challenge to improve my programming skills, always focused on helping others and promoting, through my knowledge, the personal development of other programmers who are looking to learn by helping them with a free and open-use library with which they do not They will have to create a design system from scratch, thus losing time in the development of their projects.
                </p>
                <img src="https://res.cloudinary.com/diruiumfk/image/upload/v1731645429/pricing-blossom_jlosq1.png" className='rounded' alt="Pricing section view" />
                <p>During the development of the library (which only I develop) I have managed to learn many very valuable things, such as the management of folders in a project that seeks to grow over time both in content and in users, the implementation of large amounts of content without greatly impacting site performance and writing clean, reusable code that you continue to understand as time passes.</p>
                <img src="https://res.cloudinary.com/diruiumfk/image/upload/v1731645428/rating-blossom_vsddj8.png" className='rounded' alt="Rating section view" />
                <p>Being open source, anyone can review and submit their PRs to add, improve or correct any element. A Figma view is being worked on to further accentuate the cohesion of the elements with each other by preventing anything from falling out of the design system.</p>
            </section>
        </main>
    )
}