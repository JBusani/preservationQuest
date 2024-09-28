import React, { useEffect, useState } from 'react';
import '../../styles/foldedPaper.css';

const greenCheck = '/icons/greenCheckMark.svg';

export const wallOptions = [
  {
    caption: "presquest-hq.png",
    src: "/images/rainbow62.svg",
    alt: "rainbow wallpaper",
    wallpaperSrc: "/wallpapers/mesh-gradient.jpg", // Corrected wallpaper path (no need for 'public')
    id: "default"
  },
  {
    caption: "pokemon-picnic.png",
    src: "/images/pokemon.svg",
    alt: 'pokemon',
    wallpaperSrc: '/wallpapers/pokemon.png',
    id: "pokemon"
  }
];

const WallpaperFolder = () => {
  const [isWallpapersOpen, setIsWallpapersOpen] = useState(false);
  const [selectedWallpaper, setSelectedWallpaper] = useState("default"); // Store the selected wallpaper

  const toggleFolders = () => {
    setIsWallpapersOpen(!isWallpapersOpen);
  };

  // Function to select the wallpaper and set it globally
  const handleWallpaperSelect = (wallpaperID) => {
    const wallpaper = wallOptions.find(({ id }) => id === wallpaperID);
    setSelectedWallpaper(wallpaper.id);
    localStorage.setItem('selectedWallpaper', wallpaper.id);
    document.documentElement.style.setProperty('--selected-wallpaper', `url(${wallpaper.wallpaperSrc})`);
  };

  useEffect(() => {
    const storedWallpaper = localStorage.getItem('selectedWallpaper');
    if (storedWallpaper) {
      const wallpaper = wallOptions.find(({ id }) => id === storedWallpaper);
      if (wallpaper) {
        setSelectedWallpaper(wallpaper.id);
        document.documentElement.style.setProperty('--selected-wallpaper', `url(${wallpaper.wallpaperSrc})`);
      }
    }
  }, []); // Empty dependency array to run on component mount

  return (
    <div id="wallpapersContainer" className="relative">
      <div id="wallpaperFolder hover:bg-[var(--sys-color-gray)]" onClick={toggleFolders}>
        <img
          id="folderClosed"
          src="/images/folder-closed.svg"
          alt="Desktop Wallpapers"
          className={isWallpapersOpen ? 'hide' : 'block'}
        />
        <img
          id="folderOpen"
          src="/images/folder-open.svg"
          alt="Desktop Wallpapers"
          className={isWallpapersOpen ? 'block' : 'hide'}
        />
      </div>
      <div
        id='options'
        style={{ clipPath: "polygon(100% 0%, 100% 100%, 10% 100%, 10% 20%, 0 0)" }}
        className={`${
          isWallpapersOpen ? 'block w-[250px] speechBubble' : 'w-[0px]'
        } 
        rounded-lg
        bg-[rgba(0,0,0,0.08)] 
        backdrop-blur-[13px]  
        h-[150px] 
        absolute top-[8px] 
        left-[calc(100%+13px)] 
        flex 
        justify-center
        gap-1.5em 
        items-center 
        transition-all 
        duration-300`}
      >
        {wallOptions.map((wallpaper, index) => (
          <div className='relative' key={index}>
            <span className={`absolute top--8px left--5px z-1 ${selectedWallpaper === wallpaper.id ? '' : 'hide'}`}>
              <img src={greenCheck} />
            </span>
            <div className="folded-paper hover:cursor-pointer" onClick={() => handleWallpaperSelect(wallpaper.id)}>
              <img src={wallpaper.src} style={{ width: "inherit" }} alt={wallpaper.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WallpaperFolder;
