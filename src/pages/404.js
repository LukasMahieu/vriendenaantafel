import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NotFound = () => (
  <Layout>
    <SEO 
      title="Pagina niet gevonden"
      description="De pagina die u zoekt bestaat niet. Ga terug naar de homepagina van Aan Tafel."
    />
    <div className="container mx-auto text-center py-20 px-10">
      <h1 className="text-6xl font-vat text-vat-bigtext mb-8">404</h1>
      <h2 className="text-3xl font-vat text-vat-bigtext mb-6">Pagina niet gevonden</h2>
      <p className="text-lg text-vat-smalltext mb-8 max-w-2xl mx-auto">
        De pagina die u zoekt bestaat helaas niet. Dit kan gebeuren als de link verouderd is of als u een tikfout heeft gemaakt in het webadres.
      </p>
      <div className="space-y-4">
        <div>
          <a href="/" className="inline-block bg-vat-button hover:bg-vat-button_hover text-vat-button_text px-8 py-4 rounded-lg font-vat text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Terug naar Home
          </a>
        </div>
        <div>
          <a href="/#contact" className="inline-block text-vat-orange underline hover:text-vat-lightgreen transition-colors duration-300 font-vat_smalltext">
            Contact opnemen
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFound;
