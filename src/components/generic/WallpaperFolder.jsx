import React, { useState } from 'react';

const WallpaperFolder = () => {
  const [isWallpapersOpen, setIsWallpapersOpen] = useState(false);

  const toggleFolders = () => {
    setIsWallpapersOpen(!isWallpapersOpen);
  };

  return (
    <div id="wallpapersContainer">
      <div id="wallpaperFolder" onClick={toggleFolders}>
        <img
          id="folderClosed"
          src="/images/folder-closed.svg"
          alt="Desktop Wallpapers"
          style={{ display: isWallpapersOpen ? 'none' : 'block' }}
        />
        <img
          id="folderOpen"
          src="/images/folder-open.svg"
          alt="Desktop Wallpapers"
          style={{ display: isWallpapersOpen ? 'block' : 'none' }}
        />
      </div>
    </div>
  );
};

export default WallpaperFolder;

