import React from "react";
// import "./Experience.css";

const Experience = () => {
  const experience = [
    {
      id: 1,
      title: "Sales Development Representative",
      company: "Service Titan",
      date: "Aug 2021 - May 2022",
      description:
        "Responsible for identifying potential customers and generating leads to promote the company's products and services. Working closely with the sales team.",
    },
    {
      id: 2,
      title: "Full Stack Web Developer",
      company: "UCI Coding Bootcamp",
      date: "Sept. 2022 - March 2023",
      description:
        "Acquired proficiency in a range of programming languages and tools, such as HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, and React.",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {experience.map((job) => (
          <div key={job.id} className="bg-transparent shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
            <p className="text-white mb-2">{job.company}</p>{" "}
            {/* Update font color to white */}
            <p className="text-white mb-4">{job.date}</p>
            <ul className="list-disc ml-4">
              {job.description.split("\n").map((item, index) => (
                <li key={index} className="text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
