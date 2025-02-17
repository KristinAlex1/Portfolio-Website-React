import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="relative h-screen w-full bg-neutral-950">
      {/* ✅ Background Gradient Fix */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative flex justify-center items-center h-full">
        
      </div>
    </div>
  );
};

export default App;
