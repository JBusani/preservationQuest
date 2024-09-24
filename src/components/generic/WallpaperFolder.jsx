import React, { useState } from 'react';
/* import foldedPaperStyles from '../../styles/foldedPaper.css'; */

const WallpaperFolder = () => {
  const [isWallpapersOpen, setIsWallpapersOpen] = useState(false);

  const toggleFolders = () => {
    setIsWallpapersOpen(!isWallpapersOpen);
    console.log("clicked")
  };

  return (
    <div id="wallpapersContainer" className="relative">
      <div id="wallpaperFolder" className="cursor-pointer" onClick={toggleFolders}>
        <img
          id="folderClosed"
          src="/images/folder-closed.svg"
          alt="Desktop Wallpapers"
          className={isWallpapersOpen ? 'hidden' : 'block'}
        />
        <img
          id="folderOpen"
          src="/images/folder-open.svg"
          alt="Desktop Wallpapers"
          className={isWallpapersOpen ? 'block' : 'hidden'}
        />
      </div>
      {/* <div id='options'
        className="bg-[rgba(0,0,0,0.08)] backdrop-blur-[13px] w-[250px] h-[150px] absolute top-[8px] left-[calc(100%+13px)] flex justify-center items-center"
      >
        <div class="folded-paper" >
          <img src="/wallpapers/pokemon.png" style={{width:"inherit"}} alt="Folded paper look" />
        </div>

      </div> */}
    </div>
  );
};

export default WallpaperFolder;
