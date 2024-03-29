import React, { useEffect } from "react";
import { BsGithub, BsLinkedin, BsBehance } from "react-icons/bs";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
  useEffect(() => {
    document.title = "juanigarciadev's portfolio";
  }, []);
  return (
    <>
      <div className="h-screen hero flex justify-center text-center px-24 lg:flex lg:items-center lg:px-0 md:flex md:items-center md:px-0 sm:flex sm:items-center sm:px-0">
        <section className="flex justify-center items-center flex-col gap-10">
          <h3 className="flex flex-row text-title pb-2 font-bold tracking-tight xl:flex xl:flex-col xl:items-center md:flex-wrap md:items-center md:text-center sm:px-6">
            <section className="flex w-auto">
              <h3 className="text-title  pb-1.5">{"{"}</h3>
              <span className="text-title font-bold tracking-tight lg:pb-1.5 titleGradient">
                Original&nbsp;
              </span>
            </section>
            and
            <span className="text-title font-bold tracking-tight xl:pb-1.5 titleGradient">
              &nbsp;modern&nbsp;
            </span>
            design at your fingertips.{"}"}
          </h3>
          <h3 className="text-subtitle text-neutral-400 w-8/12">
            Curious and creative front-end developer focused in creating useful,
            fun and friendly experiences.
          </h3>
          <section className="flex gap-6 w-full justify-center lg:flex-col lg:items-center md:items-center md:flex-col sm:items-center sm:flex-col">
            <button
              className="button lg:w-3/6"
              onClick={() => {
                window.scrollTo({ top: 8000, behavior: "smooth" });
              }}
            >
              Hire me
            </button>
            <button
              className="secondaryButton lg:w-3/6"
              onClick={() => window.open("https://github.com/juanigarciadev")}
            >
              <BsGithub />
              Github
            </button>
            <button
              className="secondaryButton lg:w-3/6"
              onClick={() =>
                window.open("https://www.linkedin.com/in/juanigarciadev")
              }
            >
              <BsLinkedin />
              LinkedIn
            </button>
            <button
              className="secondaryButton lg:w-3/6"
              onClick={() =>
                window.open("https://www.behance.net/juanigarciadev")
              }
            >
              <BsBehance />
              Behance
            </button>
          </section>
        </section>
      </div>
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
