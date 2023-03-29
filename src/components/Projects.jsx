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
      skillImage: "https://cdn-icons-png.flaticon.com/512/919/919826.png",
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
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                className="w-full h-48 object-cover"
                src={project.image}
                alt={project.title}
              />
            </a>
            <div className="px-4 py-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <div className="flex items-center justify-between">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold mt-10 mb-5">Coding Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-transparent rounded-lg shadow-md overflow-hidden text-center"
          >
            <img
              src={skill.skillImage}
              alt={skill.title}
              className="w-full h-32 object-contain"
            />
            <h3 className="text-lg font-semibold my-3">{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
