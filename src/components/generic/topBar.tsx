import React from 'react';
import { useStore } from '@nanostores/react';
import { $currentPage,  } from '../../store';

import '../../styles/topBar.css'; // Importing the CSS file for styling


const TopBar = () => {
  // read the store value with the `useStore` hook
  let currentPage = useStore($currentPage);  
  console.log(currentPage)
  return (
    <div id="topBar" slot="top-bar">
      <h6>{currentPage}</h6>
      <img className="icon" src="/icons/exit.svg" alt="Exit Icon" />
    </div>
  );
};

export default TopBar;

