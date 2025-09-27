import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150); // 150ms delay before closing
    setDropdownTimeout(timeout);
  };

  return (
    <header className="bg-white z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/#activities" className="flex items-center">
          <StaticImage
            src="../../assets/logo.png"
            alt="Aan Tafel"
            height={80}
            objectFit="contain"
            className="h-20"
            placeholder="blurred"
          />
        </Link>

        {/* Navigation Menu */}
        <ul className="hidden md:flex space-x-8 font-vat text-lg items-center">
          {/* Activiteiten Dropdown */}
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-vat-purple hover:text-vat-yellow transition-colors duration-300 cursor-pointer py-2 inline-flex items-center font-medium">
              Activiteiten
              <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 pt-1 w-64 z-50">
                {/* Invisible bridge to prevent gap issues */}
                <div className="h-1 bg-transparent"></div>
                <div className="bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden">
                  <Link
                    to="/vrienden-aan-tafel"
                    className="block px-4 py-3 text-vat-smalltext hover:text-vat-linktext hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div>
                      <div className="font-medium">Vrienden Aan Tafel</div>
                      <div className="text-sm text-gray-500">Kok aan huis</div>
                    </div>
                  </Link>
                  <Link
                    to="/aan-tafel-in-neon"
                    className="block px-4 py-3 text-vat-smalltext hover:text-vat-linktext hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div>
                      <div className="font-medium">Aan Tafel in NEON</div>
                      <div className="text-sm text-gray-500">Diner in het kookatelier</div>
                    </div>
                  </Link>
                  <Link
                    to="/workshops-in-neon"
                    className="block px-4 py-3 text-vat-smalltext hover:text-vat-linktext hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div>
                      <div className="font-medium">Workshop in Neon</div>
                      <div className="text-sm text-gray-500">Samen koken in het kookatelier</div>
                    </div>
                  </Link>
                  <Link
                    to="/catering-op-maat"
                    className="block px-4 py-3 text-vat-smalltext hover:text-vat-bigtext hover:bg-gray-50 transition-colors duration-300 rounded-b-lg"
                  >
                    <div>
                      <div className="font-medium">Catering op maat</div>
                      <div className="text-sm text-gray-500">Catering voor groepen</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </li>

          {/* Other Navigation Items */}
          <li>
            <a
              href="/#over"
              className="text-vat-purple hover:text-vat-yellow transition-colors duration-300 py-2 font-medium"
            >
              Over
            </a>
          </li>
          <li>
            <a
              href="/#nieuws"
              className="text-vat-purple hover:text-vat-yellow transition-colors duration-300 py-2 font-medium"
            >
              Nieuws
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="text-vat-purple hover:text-vat-yellow transition-colors duration-300 py-2 font-medium"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/vriendenaantafel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vat-purple hover:text-vat-yellow transition-colors duration-300 py-2 font-medium"
            >
              Instagram
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-vat-smalltext hover:text-vat-bigtext transition-colors duration-300 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            /* X icon when menu is open */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger icon when menu is closed */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Activiteiten Section */}
            <div className="mb-4">
              <h3 className="text-lg font-vat text-vat-bigtext mb-3">Activiteiten</h3>
              <div className="space-y-2 pl-4">
                <Link
                  to="/vrienden-aan-tafel"
                  className="block py-2 text-vat-smalltext hover:text-vat-bigtext transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div>
                    <div className="font-medium">Vrienden Aan Tafel</div>
                    <div className="text-sm text-gray-500">Kok aan huis</div>
                  </div>
                </Link>
                <Link
                  to="/aan-tafel-in-neon"
                  className="block py-2 text-vat-smalltext hover:text-vat-bigtext transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div>
                    <div className="font-medium">Aan Tafel in NEON</div>
                    <div className="text-sm text-gray-500">Dineren in het kookatelier</div>
                  </div>
                </Link>
                <Link
                  to="/workshops-in-neon"
                  className="block py-2 text-vat-smalltext hover:text-vat-bigtext transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div>
                    <div className="font-medium">Koken Aan Tafel</div>
                    <div className="text-sm text-gray-500">Workshops in het kookatelier</div>
                  </div>
                </Link>
                <Link
                  to="/catering-op-maat"
                  className="block py-2 text-vat-smalltext hover:text-vat-bigtext transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div>
                    <div className="font-medium">Met veel Aan Tafel</div>
                    <div className="text-sm text-gray-500">Catering op maat</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Mobile Other Navigation */}
            <div className="space-y-2 border-t border-gray-100 pt-4">
              <a
                href="/#over"
                className="block py-2 text-vat-smalltext hover:text-vat-bigtext transition-colors duration-300 font-vat_smalltext"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Over
              </a>
              <a
                href="/#nieuws"
                className="block py-2 text-vat-smalltext hover:text-vat-bigtext transition-colors duration-300 font-vat_smalltext"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nieuws
              </a>
              <a
                href="/#contact"
                className="block py-2 text-vat-smalltext hover:text-vat-bigtext transition-colors duration-300 font-vat_smalltext"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="https://www.instagram.com/vriendenaantafel/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-vat-smalltext hover:text-vat-bigtext transition-colors duration-300 font-vat_smalltext"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;