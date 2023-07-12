import React, { useEffect, useState, useMemo } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';

const Feature = () => {
  const features = useMemo(() => [
    {
      map: 'Blox Fruits',
      image: 'blox-fruits.jpg',
      link: 'https://www.roblox.com/games/2753915549',
      features: [
        '- Auto Farm',
        '- Raid Farm',
        '- Factory Farm',
        '- Fast Attack',
        '- Auto Evolve Race',
        '- Auto Stats',
        '- Auto Shop',
        '- Fruit Shop Sniper',
        '- ESP'
      ],
    },
    {
      map: 'Pet Simulator X!',
      image: 'pet-simulator-x.jpg',
      link: 'https://www.roblox.com/games/6284583030',
      features: [
        '- Auto Farm',
        '- Auto Egg Opener',
        '- ESP',
      ],
    },
    {
      map: 'Project New World',
      image: 'project-new-world.jpg',
      link: 'https://www.roblox.com/games/6918802270',
      features: [
        '- Auto Quest',
        '- Auto Train',
        '- ESP',
      ],
    },
    {
      map: 'King Legacy',
      image: 'king-legacy.jpg',
      link: 'https://www.roblox.com/games/4520749081',
      features: [
        '- Auto Farm',
        '- Auto Stats',
        '- Auto Buy Weapon',
        '- ESP',
      ],
    },
    {
      map: 'Build A Boat For Treasure',
      image: 'build-a-boat-for-treasure.jpg',
      link: 'https://www.roblox.com/games/537413528',
      features: [
        '- Auto Farm',
        '- ESP',
      ],
    },
    {
      map: 'Anime Adventure',
      image: 'anime-adventure.jpg',
      link: 'https://www.roblox.com/games/8304191830',
      features: [
        '- Auto Play',
        '- Macro Record/Play',
        '- Auto Open Unit',
      ],
    },
  ], []);

  const [imageCache, setImageCache] = useState({});

  useEffect(() => {
    const preLoadImages = async () => {
      const promises = features.map(async (item) => {
        const imageSrc = await import(`../assets/maps/${item.image}`);
        setImageCache((prevCache) => ({
          ...prevCache,
          [item.image]: imageSrc.default,
        }));
      });

      await Promise.all(promises);
    };

    preLoadImages();
  }, [features]);

  const getImageSource = (imageName) => {
    return imageCache[imageName];
  };

  return (
    <div className="max-w-4xl mx-auto px-4 my-10">
      <div className="text-3xl font-bold mb-6">
        <div className="flex justify-start items-center">
          <a href="/">
            <IoArrowBackOutline className="text-2xl" />
          </a>
          <span className="ml-2">Feature</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">* There are many more features that are not written</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {features.map((item, index) => (
          <div key={index} className="bg-black rounded-lg p-6 shadow-md">
            <img
              src={getImageSource(item.image)}
              alt={item.map}
              className="w-full h-auto object-cover mb-2 rounded-lg"
              loading="lazy" // Lazy loading attribute
            />
            <h3 className="text-xl font-bold mb-2">{item.map}</h3>
            {item.features.length > 4 ? (
              <div className="overflow-y-auto max-h-32">
                <ul className="text-base text-white">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="text-base text-white">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            )}
            <a href={item.link} className="text-cyan-100 hover:underline mt-2 text-sm">View Map</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
