import Link from 'next/link'
import CubeIcon from '../../../components/icons/Cube'
import ArrowLeft from '../../../components/icons/ArrowLeft'

export default function DevBoost() {
    return(
        <main className="flex flex-col bg-main gap-16 w-full px-96 mt-28 xl:px-16 lg:px-8 sm:px-2">
            <Link href={'/'} className='inline-flex items-center gap-2 font-semibold w-fit border border-cardBorder px-8 py-2 rounded hover:bg-light transition-all 2xl:text-xs 2xl:w-full 2xl:text-center lg:p-4'><ArrowLeft/>Return to home</Link>
            <div className="h-96 w-full rounded bg-cover bg-[url('https://res.cloudinary.com/diruiumfk/image/upload/v1739849923/devboost-image_zqty5e.png?quality=lossless')] hover:bg-bottom hover:duration-1000 [&:not(:hover)]:bg-top [&:not(:hover)]:duration-1000">
            </div>
            <section className="flex flex-col gap-4">
                <h1 className="text-corporative text-6xl font-semibold tracking-wide">DevBoost</h1>
                <p className="flex">E-commerce for the acquisition of courses from an online programming learning academy.</p>
                <div className='inline-flex gap-2 items-center'>
                    <CubeIcon/>
                    <span className="text-xs tracking-widest">REACTJS, FIREBASE & SASS</span>
                </div>
                <div className="flex gap-4 lg:flex-col">
                    <a href="https://github.com/juanigarciadev/DevBoost" target="_blank" className="font-semibold border border-cardBorder px-8 py-2 rounded hover:bg-light transition-all 2xl:text-xs 2xl:w-full 2xl:text-center lg:p-4">Visit Repository</a>
                    <a href="https://devboost-shop.vercel.app/" target="_blank" className="text-corporativeDark font-semibold bg-corporative border border-cardBorder px-8 py-2 rounded hover:bg-corporativeDark transition-all hover:text-corporativeLight 2xl:text-xs 2xl:w-full 2xl:text-center lg:p-4">Open Live Site</a>
                </div>
            </section>
            <section className="flex flex-col gap-16">
                <p>This e-commerce platform is an open-source project focused on the sale of programming courses. It’s a mockup that was created as my first project using React to learn the framework. The platform features a connection to Firebase, which allows real-time stock updates, ensuring that course availability is always displayed accurately.</p>
                <img src="https://res.cloudinary.com/diruiumfk/image/upload/v1739849922/devboost-screen-1_bdrfbw.png?quality=lossless" className='rounded' alt="Badges section view" />
                <p>
                The project was built with the purpose of gaining hands-on experience with React and Firebase while creating a simple, functional interface. Even though the platform is not in use and won't be, it served as a valuable learning tool for understanding how to manage data in real-time and build a responsive web application.
                </p>
                <img src="https://res.cloudinary.com/diruiumfk/image/upload/v1739849922/devboost-screen-2_pypwry.png?quality=lossless" className='rounded' alt="Pricing section view" />
                <p>Throughout the development, I focused on familiarizing myself with key React concepts and integrating Firebase for dynamic features. This project helped me solidify my skills in both React and Firebase, providing a solid foundation for future development.</p>
                <img src="https://res.cloudinary.com/diruiumfk/image/upload/v1739849922/devboost-screen-3_rwtk5f.png?quality=lossless" className='rounded' alt="Rating section view" />
                <p>Since it’s open-source, anyone can review the code, suggest improvements, or explore it as a learning resource. The goal is to share the knowledge gained from this project and contribute to the open-source community.</p>
            </section>
        </main>
    )
}