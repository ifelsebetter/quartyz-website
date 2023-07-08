import React from 'react';
import Typed from 'react-typed';

const Main = () => {
  const sclink = () => {
    const scriptlink = 'loadstring(game:HttpGet"https://raw.githubusercontent.com/xQuartyx/DonateMe/main/ScriptLoader")()';
    navigator.clipboard.writeText(scriptlink)
      .then(() => {
        alert('Script copied to the clipboard');
      })
      .catch((error) => {
        console.error('Failed to copy URL to the clipboard:', error);
      });
  };

  return (
    <div className="text-white text-center">
      <div className="max-w-[790px] mt-[-50px] w-full h-screen mx-auto flex flex-col justify-center">
        <div className="md:text-5xl sm:text-6xl font-bold md:py-6">
          <Typed strings={["Quartyz | Mukuro"]} typeSpeed={120} />
        </div>
        <div className="justify-center flex space-x-4 font-mono">
          <button className="rounded-lg bg-black border-2 border-cyan-50 text-lg px-2 py-1 hover:underline" onClick={sclink}>
            Script
          </button>
          <button className="rounded-lg bg-black border-2 border-cyan-50 text-lg px-2 py-1 hover:underline">
            <a href="https://quartyz.dev/" target="_blank" rel="noopener noreferrer">
              Get Key
            </a>
          </button>
          <button className="rounded-lg bg-black border-2 border-cyan-50 text-lg px-2 py-1 hover:underline">
            <a href="https://discord.gg/nFpQXeG38x" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
          </button>
          <button className="rounded-lg bg-black border-2 border-cyan-50 text-lg px-2 py-1 hover:underline">
            <a href="/support" rel="noopener noreferrer">
              Support
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
