import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray">
            Hello I'm Balsam!
            <br className="hidden lg:inline-block" />
            I'm a big fan of doing fun things with AI, application development, and baking desserts that aren't too sweet.
          </h1>
          <p className="mb-8 leading-relaxed">
           I graduated in 2019 with a Bachelor's in Computer Engineering and Computer Science (CECS) and in 2020 with a Master of Engineering in CECS from the University of Louisville.
            I'm currently pursuing a Master's in Artificial Intelligence at Pennsylvania University while working full time as a software engineer.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-yellow-900 border-0 py-2 px-6 focus:outline-none hover:bg-rose-400 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-yellow-900 border-0 py-2 px-6 focus:outline-none hover:bg-rose-400 rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Brot.png"
          />
        </div>
      </div>
    </section>
  );
}
