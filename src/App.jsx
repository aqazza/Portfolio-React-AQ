import { useState } from "react";
import React from "react";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
