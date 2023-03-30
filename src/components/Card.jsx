import React, { useEffect, useRef } from "react";
import "./Card.css";

const Card = () => {
  const subtitleRef = useRef(null);

  useEffect(() => {
    const createWord = (text, index) => {
      const word = document.createElement("span");

      word.innerHTML = `${text} `;

      word.classList.add("card-subtitle-word");

      word.style.transitionDelay = `${index * 40}ms`;

      return word;
    };

    const addWord = (text, index) =>
      subtitleRef.current.appendChild(createWord(text, index));

    const createSubtitle = (text) => text.split(" ").map(addWord);

    createSubtitle(
      "But in a much more real sense, I have no idea what I'm doing."
    );
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">I know exactly what I'm doing</h3>
        <h4 className="card-subtitle" ref={subtitleRef}></h4>
      </div>
      <i className="fa-solid fa-hat-witch card-icon"></i>
    </div>
  );
};

export default Card;
