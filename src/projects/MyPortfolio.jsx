import React, { useEffect } from "react";
import { RxExternalLink, RxCube } from "react-icons/rx";
import { AiOutlineClockCircle } from "react-icons/ai";
import Contact from "../components/Contact/Contact";
import ReturnButtonContainer from "../components/ReturnButton/ReturnButtonContainer";

const MyPortfolio = () => {
  useEffect(() => {
    document.title = "My portfolio - juanigarciadev's portfolio";
    scroll({ top: 0 });
  }, []);
  return (
    <>
      <div className="flex flex-col w-screen py-40 px-16 gap-4">
        <ReturnButtonContainer />
        <h1 className="text-title font-bold pb-2">My portfolio</h1>
        <h3 className="text-subtitle text-neutral-400">
          Personal website to show my progress in the programming field (learned
          technologies, projects and personal publications).
        </h3>
        <section className="flex items-center gap-8 lg:flex-col lg:items-start lg:gap-4">
          <section className="flex gap-8 text-neutral-400">
            <h3 className="flex items-center gap-2 md:flex-col md:items-start">
              <RxCube />
              ReactJS (Vite), Tailwind, Vercel
            </h3>
            <h3 className="flex items-center gap-2 md:flex-col md:items-start">
              <AiOutlineClockCircle />
              Year 2023
            </h3>
          </section>
          <section className="flex gap-2 md:flex-col lg:w-full">
            <a
              className="secondaryButton gap-1 lg:w-full"
              href="https://github.com/juanigarciadev/TODOTECH-project"
              target="_blank"
            >
              View code
              <RxExternalLink />
            </a>
            <a
              className="button gap-1 lg:w-full"
              href="https://todotech.netlify.app/"
              target="_blank"
            >
              Live site
              <RxExternalLink />
            </a>
          </section>
        </section>
        <section className="bg-neutral-900 rounded-md h-full px-32 pt-32 bg-80% bg-no-repeat bg-[center_bottom] hover:bg-85% duration-300 hover:px-28 hover:pt-28 lg:px-8 lg:pt-8 lg:hover:px-6 lg:hover:pt-6 md:px-4 md:pt-4 md:hover:none md:hover:none">
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1694627377/portfolio_j7dmf2.png"
            alt=""
          />
        </section>
        <section className="flex flex-col gap-2 my-32 pl-[25%] lg:pl-0 md:my-20">
          <h3 className="text-subtitle font-bold">Explanation</h3>
          <p className="text-neutral-400 w-8/12 lg:w-full">
            What I am and what I have achieved concentrated in a place for the
            public knowledge of my person. I update it constantly. Blog in
            progress.
          </p>
        </section>
        <section className="grid grid-cols-2 grid-rows-2 gap-4 md:flex md:flex-col">
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1694627377/portfolio_j7dmf2.png"
            className="rounded-md border-neutral-900 border-1"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1694627222/portfolio-2_izz3js.png"
            className="rounded-md border-neutral-900 border-1"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1694627221/portfolio-4_shoenm.png"
            className="rounded-md border-neutral-900 border-1"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1694627221/portfolio-3_hjelgu.png"
            className="rounded-md border-neutral-900 border-1"
            alt=""
          />
        </section>
      </div>
      <Contact />
    </>
  );
};

export default MyPortfolio;
