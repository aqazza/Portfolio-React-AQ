import React from "react";
import DymeScreenshot from "../assets/images/DymeScreenshot.png";
import UrbanInfo from "../assets/images/UrbanInfo.png";
import JukeJoint from "../assets/images/JukeJoint.png";
import CSS from "../assets/images/CSS.png";
import Node from "../assets/images/Node.png";
import mongoDB from "../assets/images/mongoDB.png";

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
        "The main objective of this project was to provide the user with information about important urban areas. It features different area qualities that the user can access to display more detailed information about urban areas.",
      image: UrbanInfo,
      url: "https://noahfajarda.github.io/Urban-Info/",
      githubUrl: "https://github.com/aqazza/Urban-Info",
    },
  ];

  const skills = [
    {
      id: 1,
      title: "HTML",
      skillImage:
        "https://play-lh.googleusercontent.com/MPDzYIvnXkFgILeyVYa1ZrBhWrQI6voJQ83R3TGhUvU4jjcV3ClQVlhuWDucmSkSwqc",
    },
    {
      id: 2,
      title: "CSS",
      skillImage: CSS,
    },
    {
      id: 3,
      title: "JavaScript",
      skillImage:
        "https://play-lh.googleusercontent.com/IHMe-gJ6G4rf5-TVlDZOtcW-3EDBwJ4p2qomk86O6qkjjutl5ePczGmyqCDOvhGJ1w",
    },
    {
      id: 4,
      title: "React",
      skillImage:
        "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
    },
    {
      id: 5,
      title: "Node.js",
      skillImage: Node,
    },
    {
      id: 6,
      title: "MongoDB",
      skillImage: mongoDB,
    },
  ];

  return (
    <div class="container mx-auto px-4 lg:px-0">
      <h2 class="text-3xl font-bold mb-10">Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                class="w-full h-48 object-cover"
                src={project.image}
                alt={project.title}
              />
            </a>
            <div class="p-4">
              <h3 class="text-lg font-medium text-gray-900 mb-2">
                {project.title}
              </h3>
              <p class="text-gray-700 mb-4">{project.description}</p>
              <div class="flex justify-between">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-indigo-600 hover:text-indigo-900"
                >
                  Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-indigo-600 hover:text-indigo-900"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 class="text-3xl font-bold mt-20 mb-10">Coding Skills</h2>
      <div class="grid grid-cols-2 md:grid-cols-3  gap-10">
        {skills.map((skill) => (
          <div class="bg-transparent rounded-lg shadow-md overflow-hidden text-center">
            <img
              class="w-full h-32 object-contain"
              src={skill.skillImage}
              alt={skill.title}
            />
            <h3 class="text-lg font-semibold my-4">{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
