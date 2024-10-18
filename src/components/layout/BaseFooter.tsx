import React from 'react';
import { Pages, setCurrentPage } from '../../store'; 
import '../../styles/footer.css'

const Footer = () => {
  return (
    <footer className='text-white p-6 w-full fixed bottom-0'>
      <nav className="footerNav flex justify-center items-center">
        {/* Footer buttons with click event handlers */}
        <div id="aboutUs">
          <button type="button" className="link" onClick={() => setCurrentPage(Pages.About)}>
            <img src="/icons/aboutUs.png" alt="About Us" />
          </button>
          <p className="text">About Us</p>
        </div>
        <div id="projects">
          <button type="button" className="link" onClick={() => setCurrentPage(Pages.Projects)}>
            <img src="/icons/projectsSvg.svg" alt="Projects" />
          </button>
          <p className="text">Projects</p>
        </div>
        <div id="ourStory">
          <button type="button" className="link" onClick={() => setCurrentPage(Pages.OurStory)}>
            <img src="/icons/ourStorySvg.svg" alt="Our Story" />
          </button>
          <p className="text">Our Story</p>
        </div>
        <div id="stories">
          <button type="button" className="link" onClick={() => setCurrentPage(Pages.Stories)}>
            <img src="/icons/storiesSvg.svg" alt="Stories" />
          </button>
          <p className="text">Stories</p>
        </div>
        <div id="donate">
          <button type="button" className="link" onClick={() => setCurrentPage(Pages.Donate)}>
            <img src="/icons/donateSvg.svg" alt="Donate" />
          </button>
          <p className="text">Donate</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
