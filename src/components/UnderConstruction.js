import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-vat-background">
      <div className="text-center px-6 py-12 max-w-2xl mx-auto">
        {/* Logo/Brand section */}
        <div className="mb-8">
          <h1 className="font-vat text-4xl md:text-6xl text-vat-bigtext font-bold mb-4">
            AAN TAFEL
          </h1>
          <div className="w-24 h-1 bg-vat-subtext mx-auto mb-6"></div>
        </div>

        {/* Construction message */}
        <div className="mb-8">
          <h2 className="font-vat text-2xl md:text-3xl text-vat-bigtext font-bold mb-4">
            Vanaf september 2025
          </h2>
          <p className="font-vat_smalltext text-lg text-vat-smalltext leading-relaxed mb-6">
            Vrienden aan Tafel breidt uit en wordt Aan Tafel.
            <br />
            Kijk op
            <a href="https://www.instagram.com/vriendenaantafel/" target="_blank" rel="noopener noreferrer" className="font-bold"> Instagram </a>
            voor de laatste updates!
          </p>
          <p className="font-vat_smalltext text-base text-vat-smalltext">
            Voor vragen en al afgesproken etentjes ben ik bereikbaar via e-mail.
          </p>
        </div>

        {/* Contact info */}
        <div className="flex items-center justify-center space-x-3">
        </div>
        <div className="flex items-center justify-center space-x-3">
          <span className="font-vat_smalltext font-semibold text-vat-bigtext">Email:</span>
          <a href="mailto:vriendenaantafel@outlook.be" className="font-vat_smalltext text-vat-smalltext hover:text-vat-bigtext transition-colors">
            vriendenaantafel@outlook.be
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;