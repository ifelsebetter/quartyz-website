import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';

const Feature = () => {
  const features = [
    { map: 'Blox Fruits', image: 'blox-fruits.jpg', link: 'https://www.roblox.com/games/2753915549' },
    { map: 'Pet Simulator X!', image: 'pet-simulator-x.jpg', link: 'https://www.roblox.com/games/6284583030' },
    { map: 'Project New World', image: 'project-new-world.jpg', link: 'https://www.roblox.com/games/6918802270' },
    { map: 'King Legacy', image: 'king-legacy.jpg', link: 'https://www.roblox.com/games/4520749081' },
    { map: 'Build A Boat For Treasure', image: 'build-a-boat-for-treasure.jpg', link: 'https://www.roblox.com/games/537413528' },
    { map: 'Anime Adventure', image: 'anime-adventure.jpg', link: 'https://www.roblox.com/games/8304191830' },
  ];

  return (
    <div className="max-w-3xl mx-auto my-20 px-4">
      <div className="flex justify-start items-center mb-10">
        <a href="/">
          <IoArrowBackOutline className="text-2xl" />
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((item, index) => (
          <div key={index} className="bg-black rounded-lg p-4 shadow-md">
            <img
              src={require(`../assets/${item.image}`)}
              alt={item.map}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">{item.map}</h3>
            <a href={item.link} className="text-cyan-100 hover:underline">
              Visit Map
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
