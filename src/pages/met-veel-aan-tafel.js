import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

export default function MetVeelAanTafel() {
  return (
    <Layout>
      <SEO 
        title="Met veel Aan Tafel - Catering op maat"
        description="Professionele catering service op maat voor al uw evenementen met lokale, verse ingrediënten"
        keywords="catering, evenementen, op maat, lokale ingrediënten, Mechelen"
      />
      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-vat text-vat-bigtext mb-8 text-center">
            Met veel Aan Tafel
          </h1>
          <h2 className="text-2xl font-vat_smalltext text-vat-subtext mb-12 text-center">
            Catering op maat
          </h2>
          
          <div className="prose prose-lg max-w-none font-vat_smalltext text-vat-smalltext">
            <p className="text-center text-xl mb-8">
              Professionele catering voor al uw evenementen, van kleine bijeenkomsten tot grote feesten.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-vat text-vat-bigtext mb-4">Onze catering service</h3>
              <ul className="space-y-3">
                <li>• Op maat gemaakte menu's voor elke gelegenheid</li>
                <li>• Gebruik van lokale, verse ingrediënten</li>
                <li>• Flexibele service: van pick-up tot volledige bediening</li>
                <li>• Specialiteit: gerechten rijk aan groenten</li>
                <li>• Voor kleine intimate diners tot grote evenementen</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-vat text-vat-bigtext mb-4">Type evenementen</h3>
              <ul className="space-y-3">
                <li>• Bedrijfsevents en vergaderingen</li>
                <li>• Bruiloften en feesten</li>
                <li>• Verjaardagspartijen</li>
                <li>• Familiebijeenkomsten</li>
                <li>• Speciale gelegenheden</li>
              </ul>
            </div>
            
            <div className="text-center">
              <p className="mb-6">
                Plant u een evenement? Vraag een offerte aan!
              </p>
              <a 
                href="/#contact" 
                className="inline-block bg-vat-button hover:bg-vat-button_hover text-vat-button_text px-8 py-3 rounded-lg font-vat transition-colors duration-300"
              >
                Offerte aanvragen
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};