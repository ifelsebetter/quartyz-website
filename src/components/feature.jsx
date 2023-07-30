import React, { useMemo } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';

const Feature = () => {
  const features = useMemo(() => [
    {
      map: 'Blox Fruits',
      image: 'https://tr.rbxcdn.com/b46265f21b2f53eaa2bef11e8187c84a/512/512/Image/Png',
      link: 'https://www.roblox.com/games/2753915549',
      features: [
        'Auto Farm',
        'Raid Farm',
        'Factory Farm',
        'Fast Attack',
        'Auto Evolve Race',
        'Auto Stats',
        'Auto Shop',
        'Devil Fruit Shop Sniper',
        'ESP',
      ],
    },
    {
      map: 'Pet Simulator X!',
      image: 'https://tr.rbxcdn.com/0f57b4f93acef9a33f6441909990ada6/512/512/Image/Png',
      link: 'https://www.roblox.com/games/6284583030',
      features: [
        'Auto Farm',
        'Auto Buy Area',
        'Auto Egg Opener',
        'ESP',
      ],
    },
    {
      map: 'Project New World',
      image: 'https://tr.rbxcdn.com/ca7e4a3fe9999dec4c5b6eac34525539/512/512/Image/Png',
      link: 'https://www.roblox.com/games/6918802270',
      features: [
        'Auto Quest',
        'Auto Train',
        'ESP',
      ],
    },
    {
      map: 'King Legacy',
      image: 'https://tr.rbxcdn.com/8c8e5208cdbcedb30cba0896cbb7a0d4/512/512/Image/Png',
      link: 'https://www.roblox.com/games/4520749081',
      features: [
        'Auto Farm',
        'Auto Stats',
        'Auto Buy Weapon',
        'ESP',
      ],
    },
    {
      map: 'Build A Boat For Treasure',
      image: 'https://tr.rbxcdn.com/72981f2994d85aace15563551965aae8/512/512/Image/Png',
      link: 'https://www.roblox.com/games/537413528',
      features: [
        'Auto Farm',
        'ESP',
      ],
    },
    {
      map: 'Anime Adventure',
      image: 'https://tr.rbxcdn.com/7b6a3914cac2e93f7e7f27cbefa92280/512/512/Image/Png',
      link: 'https://www.roblox.com/games/8304191830',
      features: [
        'Auto Play',
        'Macro Record/Play',
        'Auto Open Unit',
      ],
    },
  ], []);

  return (
    <div className="max-w-4xl mx-auto px-4 my-10">
      <div className="text-3xl font-bold mb-6">
        <div className="flex items-center">
          <a href="/" className="text-white hover:text-cyan-700">
            <IoArrowBackOutline className="text-2xl" />
          </a>
          <span className="ml-2">Featured Games</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">* There are many more features that are not listed here</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {features.map((item, index) => (
          <div key={index} className="bg-black rounded-lg p-6 shadow-md">
            <img
              src={item.image}
              alt={item.map}
              className="w-full h-auto object-cover mb-4 rounded-lg"
              loading="lazy"
            />
            <h3 className="text-xl font-bold mb-2 text-white">{item.map}</h3>
            {item.features.length > 4 ? (
              <div className="overflow-y-auto max-h-32">
                <ul className="text-sm text-white">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-1">
                      <span className="mr-2">-</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="text-sm text-white">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-1">
                    <span className="mr-2">-</span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            <a
              href={item.link}
              className="text-cyan-500 hover:text-cyan-700 mt-2 text-sm font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Map
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
