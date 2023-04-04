import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import {Link} from "react-router-dom"
export default function Projects() {
  return (
    <section id="projects" className="text-white bg-rose-300 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-yellow-900">
            Projects I've Worked On
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <Link to={project.link}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 hover:bg-rose-500 border-gray-800 bg-gray-500 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-900 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
