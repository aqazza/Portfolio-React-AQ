import React from "react";
import "./Projects.css"; // import CSS file for styling

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/150",
      url: "https://example.com/project1",
      githubUrl: "https://github.com/username/project1",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/150",
      url: "https://example.com/project2",
      githubUrl: "https://github.com/username/project2",
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://via.placeholder.com/150",
      url: "https://example.com/project3",
      githubUrl: "https://github.com/username/project3",
    },
  ];

  return (
    <div>
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
