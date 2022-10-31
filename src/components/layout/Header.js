import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../Button';
import Icon from "../../../src/assets/logo.svg";

const Header = () => (
  <header className="top-0 mb-5 text-vat-header_text bg-vat-header_background font-vat">
    <div className="container border-b-2 border-vat-button lg:border-hidden flex flex-col lg:flex-row justify-between items-center mx-auto py-0 px-4">
      <div className="md:block">
        <Icon class="h-20 sm:h-full"/>
      </div>
      <div className="flex text-l sm:text-2xl">
        <AnchorLink className="px-4  hover:text-vat-button_hover" href="#mijnkeuken">
          KEUKEN
        </AnchorLink>
        <AnchorLink className="px-4  hover:text-vat-button_hover" href="#formules">
          FORMULES
        </AnchorLink>
        <AnchorLink className="px-4  hover:text-vat-button_hover" href="#contact">
          CONTACT
        </AnchorLink>
      </div>
      <a href="https://www.instagram.com/vriendenaantafel/" target="_blank">
      <div className="md:block">
        <Button className="hidden lg:block lg:text-2xl">INSTAGRAM</Button>
      </div>
      </a>
    </div>
  </header>
);

export default Header;
