import { useState } from "react";
import React from "react";
import Contact from "./components/Contact";
// import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import About from "./components/About";
function App() {
  return (
    <div>
      <Header />
      {/* <NavBar /> */}
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
