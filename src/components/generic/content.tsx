import React from 'react';
import { $currentPage, Pages } from '../../store';
import { useStore } from '@nanostores/react';
import TopBar from './topBar';
import UrlBar from './urlBar';
import WindowFrame from './windowFrame';
import About from '@components/windows/about.astro';

const Content = () => {

  return (
    <div id="content">
      <WindowFrame >
        <TopBar  />
        <UrlBar  />

      </WindowFrame>
    </div>
  );
};

export default Content;
