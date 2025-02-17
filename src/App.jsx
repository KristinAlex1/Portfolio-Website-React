import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="relative h-screen w-full bg-slate-950">
        {/* Navbar - Fixed at the Top */}
        <Navbar />

        {/* Main Content with Centered Elements */}
        <div className="relative flex justify-center items-center h-full">
          {/* Left Gradient */}
          <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-radial from-pink-500/15 to-transparent blur-3xl"></div>

          {/* Right Gradient */}
          <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-radial from-pink-500/15 to-transparent blur-3xl"></div>
        </div>
      </div>
    </>
  );
}

export default App;
