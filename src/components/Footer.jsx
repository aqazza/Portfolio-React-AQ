import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center">
      <div className="flex my-4">
        <a
          href="https://github.com/aqazza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-gray-800 mx-2"
        >
          <FaGithub size={20} />
        </a>
        {/* <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 mx-2"
        >
          <FaInstagram size={20} />
        </a> */}
        <a
          href="https://www.linkedin.com/in/anas-qazza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-gray-800 mx-2"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>
      <p className="text-yellow-600 text-sm mt-4">
        &copy; {new Date().getFullYear()} Anas Qazza
      </p>
    </footer>
  );
};

export default Footer;
