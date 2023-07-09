import React from "react";
import Typed from "react-typed";

const Main = () => {
  const copyScriptLink = () => {
    const scriptLink =
      'loadstring(game:HttpGet("https://raw.githubusercontent.com/xQuartyx/DonateMe/main/ScriptLoader"))()';
    navigator.clipboard
      .writeText(scriptLink)
      .then(() => {
        alert("Script copied to the clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy URL to the clipboard:", error);
      });
  };

  return (
    <div className="text-white text-center">
      <div className="max-w-[790px] mt-[-50px] w-full h-screen mx-auto flex flex-col justify-center">
        <div className="md:text-5xl sm:text-6xl font-bold md:py-6">
          <Typed
            strings={[
              "Quartyz | Mukuro hub script",
              "Supports multiple maps",
              "Enjoy using the script!"
            ]}
            typeSpeed={65}
            backSpeed={65}
            loop
          />
        </div>

        <div className="flex justify-center items-center space-x-4 space-y-2 md:space-y-0 md:space-x-2 font-mono">
          <button className="rounded-lg bg-black border-2 border-cyan-50 text-lg px-4 py-2 hover:underline" onClick={copyScriptLink}>
            Get Script
          </button>

          <button className="rounded-lg bg-black border-2 border-cyan-50 text-lg px-4 py-2 hover:underline">
            <a href="https://quartyz.dev/" target="_blank" rel="noopener noreferrer" className="text-white" >
              Get Key
            </a>
          </button>

          <button className="rounded-lg bg-black border-2 border-cyan-50 text-lg px-4 py-2 hover:underline">
            <a href="https://discord.gg/nFpQXeG38x" target="_blank" rel="noopener noreferrer" className="text-white">
              Discord
            </a>
          </button>

          <button className="rounded-lg bg-black border-2 border-cyan-50 text-lg px-4 py-2 hover:underline">
            <a href="/feature" rel="noopener noreferrer" className="text-white">
              Feature
            </a>
          </button>

          <button className="rounded-lg bg-black border-2 border-cyan-50 text-lg px-4 py-2 hover:underline">
            <a href="/support" rel="noopener noreferrer" className="text-white">
              Support
            </a>
          </button>

          <button className="rounded-lg bg-black border-2 border-cyan-50 text-lg px-4 py-2 hover:underline">
            <a href="/member" rel="noopener noreferrer" className="text-white">
              Member
            </a>
          </button>

        </div>
      </div>
      
      <footer className="text-sm mt-4 text-gray-500">
        This website is created to provide support and assistance for the Quartyz | Mukuro script. © 2023 ! if#1046. All rights reserved.
      </footer>
    </div>
  );
};

export default Main;
