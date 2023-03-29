import { useState } from "react";
import React from "react";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
