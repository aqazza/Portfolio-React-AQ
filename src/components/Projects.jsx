import React from "react";
import { FaGithub } from "react-icons/fa";
import DymeScreenshot from "../assets/images/DymeScreenshot.png";
import UrbanInfo from "../assets/images/UrbanInfo.png";
import JukeJoint from "../assets/images/JukeJoint.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Juke Joint",
      description:
        "Built a music application that allows users to comment and interact with each other while enjoying endless music.",
      image: JukeJoint,
      url: "https://jukejoint.herokuapp.com/login",
      githubUrl: "https://github.com/aqazza/Juke-Joint",
    },
    {
      id: 2,
      title: "Dyme",
      description:
        "Software application designed to help users track their income and expenses and monitor their spending habits.",
      image: DymeScreenshot,
      url: "https://dyme.herokuapp.com/",
      githubUrl: "https://github.com/aqazza/Dyme",
    },
    {
      id: 3,
      title: "Urban Info",
      description:
        "This project provides the user with information about various urban area's qualities that the user can access to display on a map.",
      image: UrbanInfo,
      url: "https://noahfajarda.github.io/Urban-Info/",
      githubUrl: "https://github.com/aqazza/Urban-Info",
    },
  ];

  return (
    <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="text-primary mb-2 block text-lg font-semibold">
                Some of my Projects
              </span>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {projects.map((project) => (
            <div className="w-full px-4 md:w-1/2 lg:w-1/3" key={project.id}>
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="relative mb-8 overflow-hidden rounded">
                  <div className="border border-gray-300 shadow-sm">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full project-image"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition duration-300">
                    <p className="text-white text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                    <a href={project.url}>{project.title}</a>
                  </h3>

                  <div className="mt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition duration-200"
                    >
                      <FaGithub size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
