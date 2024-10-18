import React from 'react';
import '@styles/urlBar.css'; // Importing the CSS file for styling
import { $currentPage,  } from '../../store';
import { useStore } from '@nanostores/react';
 // read the store value with the `useStore` hook

const UrlBar = () => {
  let currentPage = useStore($currentPage);  

  return (
    <div id="urlBar" slot="url-bar">
      <div className="flex gap-2 urlNav">
        <img src="/icons/leftArrow.svg" alt="Left Arrow Icon" />
        <img src="/icons/rightArrow.svg" alt="Right Arrow Icon" />
        <img src="/icons/refresh.svg" alt="Refresh Icon" />
      </div>
      <div id="url">
        <img src="/icons/padlock.svg" alt="Padlock Secure Icon" />
        <p>https://www.preservationquest.org/{currentPage}</p>
      </div>
    </div>
  );
};

export default UrlBar;
