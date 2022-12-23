import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-10 mt-48 mb-8 text-gray-800">
    <div className="sm:grid sm:grid-cols-3 sm:-mx-3 sm:justify-items-center">
      <div className="flex-1 px-3 sm:col-span-1">
        <h2 className="text-lg font-semibold">Over Ons</h2>
        <ul>
          <li className="mt-0 sm:mt-3 leading-loose">
          Vrienden Aan Tafel EZ BE0793.216.708
          </li>
          <li className="">
          Schuttersvest 86
          </li>
          <li className="">
          2800 Mechelen
          </li>
          <li className="">
          vriendenaantafel@outlook.be
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3 sm:col-span-1 pt-5 sm:pt-0">
        <h2 className="text-lg font-semibold">Sociale Media</h2>
        <ul className="mt-0 sm:mt-3 leading-loose">
          <li>
            <a href="https://www.instagram.com/vriendenaantafel/" target="_blank">Instagram</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3 sm:col-span-1 pt-5 sm:pt-0">
        <h2 className="text-lg font-semibold">Website</h2>
        <ul className="mt-0 sm:mt-3 leading-loose">
          <li>
            door Lukas Mahieu
          </li>
        </ul>
      </div>

    </div>
  </footer>
);

export default Footer;
