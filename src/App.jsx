import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      
        <Navbar />
        <Hero />
        <About/>
        <Technologies/>
        <Project/>
        <Contact/>
      
    </>
  );
};

export default App;
