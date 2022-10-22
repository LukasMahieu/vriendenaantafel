import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../Button';
import Icon from "../../../src/assets/logo.svg";

const Header = () => (
  <header className="top-0 mb-5 text-vat-header_text bg-vat-header_background">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-0 px-4">
      <div className="w-12 mr-3 hidden md:block">
        <Icon />
      </div>
      <div className="flex text-l mt-4 sm:mt-0 m:text-2xl ">
        <AnchorLink className="px-4" href="#home">
          HOME
        </AnchorLink>
        <AnchorLink className="px-4" href="#mijnkeuken">
          MIJN KEUKEN
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          FORMULES
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          CONTACT
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
