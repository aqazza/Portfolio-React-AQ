import React from "react";
import profilePic from "../assets/images/profile-pic.jpg";
import "./About.css";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className="bg-blue-500 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:text-center">
          <h2 className="text-base text-white font-semibold tracking-wide uppercase">
            About Me
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            I'm passionate about creating new things and discovering new skills.
            I believe that the secret of getting ahead is getting started. In my
            free time, I enjoy soccer, hiking, and traveling.
          </p>
          <div className="mt-8 flex justify-center">
            <img
              className="rounded-full h-48 w-48 hover:shadow-lg"
              src={profilePic}
              alt="Profile"
            />
          </div>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
            Full-stack Web Developer | UCI Bootcamp Graduate | B.A. in Business
            Administration Marketing - CSUF
          </p>
        </div>
        <div className="mt-10 flex justify-center relative">
          <div className="flex flex-col items-center">
            <div className="hover-icon">
              <FontAwesomeIcon icon={faEdit} />
            </div>
            <h3 className="mt-6 text-white text-xl font-medium">Anas Qazza</h3>
            <div className="mt-2 text-white text-sm">
              <p>anasqazza@gmail.com</p>
              <p>(714) 204-5079</p>
              <p>Cypress, California</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
