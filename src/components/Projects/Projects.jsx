import React from "react";
import projects from "../../maps/projects";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <section className="flex flex-col items-center px-16 pt-32">
        <h3 className="text-sm w-auto text-neutral-400 pb-2">
          // Made with love {"<3"}
        </h3>
        <h3 className="text-title text-center font-bold pb-1.5">
          Stuff I’ve worked on
        </h3>
      </section>
      <section className="flex flex-col justify-center items-center pb-32 pt-8 px-16 gap-16 lg:gap-18 h-auto">
        {projects.map((project) => {
          const style = {
            backgroundImage: `url(${project.img})`,
          };
          return (
            <article
              className="grid grid-cols-2 w-3/4 gap-6 hover:scale-102 duration-300 lg:flex lg:flex-col-reverse lg:w-full lg:px-0 md:hover:scale-100"
              key={project.name}
            >
              <section className="flex flex-col w-full gap-6 justify-top">
                <h3 className="text-sm text-neutral-400">{project.tag}</h3>
                <section>
                  {project.logo != null ? (
                    <img
                      src={project.logo}
                      draggable="false"
                      className="w-64 select-none"
                      alt={project.name}
                    />
                  ) : (
                    <h3 className="text-title font-bold pb-1.5">
                      {project.name}
                    </h3>
                  )}
                </section>
                {project.badge ? (
                  <h3 className="flex justify-center items-center text-md text-black bg-yellow-400 w-32 h-8 rounded-md select-none">
                    {project.badge}
                  </h3>
                ) : null}
                <h3 className="text-md">{project.information}</h3>
                <section className="flex gap-2 flex-wrap">
                  {project.tools.map((tool) => {
                    return (
                      <h3
                        className="bg-neutral-800 p-1.5 rounded-md cursor-default select-none"
                        key={tool}
                      >
                        {tool}
                      </h3>
                    );
                  })}
                </section>
                <section className="flex gap-2 lg:justify-center lg:flex-col lg:items-center">
                  <Link
                    to={project.moreInfo}
                    className="secondaryButton gap-1 lg:w-full"
                  >
                    More information
                  </Link>
                  {project.name != "My portfolio" ? (
                    <button
                      className="button gap-1 lg:w-full"
                      onClick={() => window.open(project.url)}
                    >
                      Live site
                      <RxExternalLink />
                    </button>
                  ) : (
                    <button
                      disabled
                      className="disabledButton gap-1 lg:w-full"
                      onClick={() => window.open(project.url)}
                    >
                      Already here
                    </button>
                  )}
                </section>
              </section>
              <section
                className="bg-cover rounded-2xl w-full lg:h-[300px] "
                style={style}
              ></section>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
