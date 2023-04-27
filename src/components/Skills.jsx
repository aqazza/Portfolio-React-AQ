import React from "react";
import CSS from "../assets/images/CSS.png";
import Node from "../assets/images/Node.png";
import mongoDB from "../assets/images/mongoDB.png";
import HTML from "../assets/images/HTML.png";
import Javascript from "../assets/images/Javascript.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "HTML",
      skillImage: HTML,
    },
    {
      id: 2,
      title: "CSS",
      skillImage: CSS,
    },
    {
      id: 3,
      title: "JavaScript",
      skillImage: Javascript,
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
    <div className="container mx-auto px-4 lg:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"></div>
      <h2 className="text-lg font-bold mt-20 mb-10">Coding Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-10">
        {skills.map((skill) => (
          <div className="bg-transparent rounded-lg shadow-md overflow-hidden text-center">
            <img
              className="w-full h-32 object-contain"
              src={skill.skillImage}
              alt={skill.title}
            />
            <h3 className="text-lg font-semibold my-4">{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
