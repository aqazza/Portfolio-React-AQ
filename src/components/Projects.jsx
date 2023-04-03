import React from "react";
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
    <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap justify-center">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span class="text-primary mb-2 block text-lg font-semibold">
                Some of my Projects
              </span>
            </div>
          </div>
        </div>
        <div class="-mx-4 flex flex-wrap">
          {projects.map((project) => (
            <div class="w-full px-4 md:w-1/2 lg:w-1/3" key={project.id}>
              <div class="mx-auto mb-10 max-w-[370px]">
                <div class="relative mb-8 overflow-hidden rounded">
                  <img
                    src={project.image}
                    alt={project.title}
                    class="w-full project-image"
                  />
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition duration-300">
                    <p class="text-white text-base">{project.description}</p>
                  </div>
                </div>
                <div>
                  <h3 class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                    <a href={project.url}>{project.title}</a>
                  </h3>

                  <div class="mt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition duration-200"
                    >
                      View Code
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
