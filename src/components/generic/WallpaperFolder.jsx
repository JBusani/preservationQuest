import React, { useState } from 'react';
import '../../styles/foldedPaper.css';

const WallpaperFolder = () => {
  const [isWallpapersOpen, setIsWallpapersOpen] = useState(false);

  const toggleFolders = () => {
    setIsWallpapersOpen(!isWallpapersOpen);
    console.log(isWallpapersOpen)
  };

  return (
    <div id="wallpapersContainer" className="relative">
      <div id="wallpaperFolder" className="cursor-pointer" onClick={toggleFolders}>
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
        className={`${
          isWallpapersOpen ? 'block' : 'hide'
        } bg-[rgba(0,0,0,0.08)] backdrop-blur-[13px] w-[250px] h-[150px] absolute top-[8px] left-[calc(100%+13px)] flex justify-center items-center transition-all duration-300`}
      >
        <div className="folded-paper">
          <img src="/wallpapers/pokemon.png" style={{ width: "inherit" }} alt="Folded paper look" />
        </div>
      </div>
    </div>
  );
};

export default WallpaperFolder;
