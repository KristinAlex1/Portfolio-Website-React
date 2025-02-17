import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="relative h-screen w-full bg-neutral-950">
      {/* ✅ Background Gradient Fix */}
      <div className="absolute inset-0 z-[-1] h-screen w-screen bg-neutral-950 bg-custom-gradient"></div>



      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative flex justify-center items-center h-full">
        
      </div>
    </div>
  );
};

export default App;
