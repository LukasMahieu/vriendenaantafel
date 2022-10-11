import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-green-800 shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl text-primary">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Vrienden Aan Tafel
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#home">
          Home
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Mijn Keuken
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Formules
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Contact
        </AnchorLink>
      </div>
      <a href="https://www.instagram.com/vriendenaantafel/" target="_blank">
      <div className="hidden md:block">
        <Button className="text-sm">Instagram</Button>
      </div>
      </a>
    </div>
  </header>
);

export default Header;
