import Link from 'next/link'
import CubeIcon from '../../../components/icons/Cube'
import ArrowLeft from '../../../components/icons/ArrowLeft'

export default function ImpuestAR() {
    return(
        <main className="flex flex-col bg-main gap-16 w-full px-96 mt-28 xl:px-16 lg:px-8 sm:px-2">
            <Link href={'/'} className='inline-flex items-center gap-2 font-semibold w-fit border border-cardBorder px-8 py-2 rounded hover:bg-light transition-all 2xl:text-xs 2xl:w-full 2xl:text-center lg:p-4'><ArrowLeft/>Return to home</Link>
            <div className="h-96 w-full rounded bg-cover bg-[url('https://res.cloudinary.com/diruiumfk/image/upload/v1739848424/impuestar-image_i57yzl.png?quality=lossless')] hover:bg-bottom hover:duration-1000 [&:not(:hover)]:bg-top [&:not(:hover)]:duration-1000">
            </div>
            <section className="flex flex-col gap-4">
                <h1 className="text-corporative text-6xl font-semibold tracking-wide">impuestAR</h1>
                <p className="flex">Tool created for the easy and quick calculation of the different prices of the dollar, clearly segmented for popular understanding.</p>
                <div className='inline-flex gap-2 items-center'>
                    <CubeIcon/>
                    <span className="text-xs tracking-widest">NEXTJS, TAILWINDCSS & VERCEL</span>
                </div>
                <div className="flex gap-4 lg:flex-col">
                    <a href="https://github.com/juanigarciadev/impuestAR" target="_blank" className="font-semibold border border-cardBorder px-8 py-2 rounded hover:bg-light transition-all 2xl:text-xs 2xl:w-full 2xl:text-center lg:p-4">Visit Repository</a>
                    <a href="https://impuestar.vercel.app/" target="_blank" className="text-corporativeDark font-semibold bg-corporative border border-cardBorder px-8 py-2 rounded hover:bg-corporativeDark transition-all hover:text-corporativeLight 2xl:text-xs 2xl:w-full 2xl:text-center lg:p-4">Open Live Site</a>
                </div>
            </section>
            <section className="flex flex-col gap-16">
                <p>ImpuestAR is an open-source tool that calculates the dollar exchange rates and subscription prices for various services. Depending on the type of dollar selected, different taxes are automatically applied to the total price. This tool provides users with the original price, the applicable taxes, and the final total (the sum of both). The dollar exchange rate is constantly updated in real-time using data from <a href="https://dolarapi.com/" target='_blank' className='text-corporative font-semibold cursor-pointer hover:underline'>DolarApi.com</a>, ensuring the calculations reflect the latest market rates.</p>
                <img src="https://res.cloudinary.com/diruiumfk/image/upload/v1739848715/impuestar-screen-1_ycbazt.png?quality=lossless" className='rounded' alt="Prices calculator" />
                <p>
                The project was created with the intention of simplifying the process of calculating these prices for individuals who need a quick and reliable way to break down costs, especially in an environment where currency rates constantly change.
                </p>
                <img src="https://res.cloudinary.com/diruiumfk/image/upload/v1739848715/impuestar-screen-2_ujmmbn.png?quality=lossless" className='rounded' alt="Subscription prices" />
                <p>Throughout the development process, I’ve focused on creating a simple and user-friendly interface, ensuring that the tool is easy to use for anyone. By keeping the project lightweight and straightforward, it remains efficient and accessible without unnecessary complexity.</p>
                <img src="https://res.cloudinary.com/diruiumfk/image/upload/v1739848714/impuestar-screen-3_eghd4l.png?quality=lossless" className='rounded' alt="More information about subscriptions" />
                <p>Since it’s open-source, anyone can review the code and contribute by suggesting improvements or adding new features, making it a collaborative effort that can grow over time.</p>
            </section>
        </main>
    )
}