import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

export default function AanTafelInNeon() {
  return (
    <Layout>
      <SEO 
        title="Aan Tafel in NEON - Dineren in het keukenatelier"
        description="Dineer in ons sfeervolle keukenatelier en ervaar een unieke culinaire avond"
        keywords="keukenatelier, dineren, culinaire ervaring, Mechelen"
      />
      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-vat text-vat-bigtext mb-8 text-center">
            Aan Tafel in NEON
          </h1>
          <h2 className="text-2xl font-vat_smalltext text-vat-subtext mb-12 text-center">
            Dineren in het keukenatelier
          </h2>
          
          <div className="prose prose-lg max-w-none font-vat_smalltext text-vat-smalltext">
            <p className="text-center text-xl mb-8">
              Beleef een intieme culinaire ervaring in ons gezellige keukenatelier.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-vat text-vat-bigtext mb-4">Wat bieden we aan?</h3>
              <ul className="space-y-3">
                <li>• Dineren in een sfeervolle, huiselijke omgeving</li>
                <li>• Verse, seizoensgebonden menu's met veel groenten</li>
                <li>• Kleine groepen voor een persoonlijke beleving</li>
                <li>• Kijk mee in de keuken en leer over de bereiding</li>
              </ul>
            </div>
            
            <div className="text-center">
              <p className="mb-6">
                Wilt u reserveren of meer informatie? Contacteer ons!
              </p>
              <a 
                href="/#contact" 
                className="inline-block bg-vat-button hover:bg-vat-button_hover text-vat-button_text px-8 py-3 rounded-lg font-vat transition-colors duration-300"
              >
                Reserveren
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};