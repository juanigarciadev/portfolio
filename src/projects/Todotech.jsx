import React, { useEffect } from "react";
import { RxExternalLink, RxCube } from "react-icons/rx";
import { AiOutlineClockCircle } from "react-icons/ai";
import Contact from "../components/Contact/Contact";
import ReturnButtonContainer from "../components/ReturnButton/ReturnButtonContainer";

const Todotech = () => {
  useEffect(() => {
    document.title = "TODOTECH - juanigarciadev's portfolio";
    scroll({ top: 0 });
  }, []);
  return (
    <>
      <div className="flex flex-col w-screen py-40 px-16 gap-4">
        <ReturnButtonContainer />
        <h1 className="text-title font-bold pb-2">TODOTECH</h1>
        <h3 className="text-subtitle text-neutral-400">
          E-commerce focused on the sale of pre-assembled computers, components
          and peripherals.
        </h3>
        <section className="flex items-center gap-8 lg:flex-col lg:items-start lg:gap-4">
          <section className="flex gap-8 text-neutral-400">
            <h3 className="flex items-center gap-2 md:flex-col md:items-start">
              <RxCube /> HTML, CSS, Bootstrap
            </h3>
            <h3 className="flex items-center gap-2 md:flex-col md:items-start">
              <AiOutlineClockCircle /> Year 2022
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
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1693907606/todotech_xeasla.png"
            alt=""
          />
        </section>
        <section className="flex flex-col gap-2 my-32 pl-[25%] lg:pl-0 md:my-20">
          <h3 className="text-subtitle font-bold">Explanation</h3>
          <p className="text-neutral-400 w-8/12 lg:w-full">
            My first project in Web Development, the idea started from the
            creation of an e-commerce. At first it was just the layout (HTML and
            CSS), but later I added vanilla JavaScript to add e-commerce, dark
            mode and login functionalities. It still has the original design
            that I did in its day but probably at some point of boredom I will
            make a second version updating everything with my knowledge of the
            moment.
          </p>
        </section>
        <section className="grid grid-cols-2 grid-rows-2 gap-4 md:flex md:flex-col">
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1693907606/todotech_xeasla.png"
            className="rounded-md"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1694567996/todotech-2_lfe2oz.png"
            className="rounded-md"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1694567996/todotech-3_ivsbbi.png"
            className="rounded-md"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1694567996/todotech-4_juz1ud.png"
            className="rounded-md"
            alt=""
          />
        </section>
      </div>
      <Contact />
    </>
  );
};

export default Todotech;
