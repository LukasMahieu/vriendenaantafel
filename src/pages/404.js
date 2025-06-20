import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NotFound = () => (
  <Layout>
    <SEO 
      title="Pagina niet gevonden"
      description="De pagina die u zoekt bestaat niet. Ga terug naar de homepagina van Vrienden aan Tafel."
    />
    <div className="container mx-auto text-center py-20 px-10">
      <h1 className="text-6xl font-vat text-vat-bigtext mb-8">404</h1>
      <h2 className="text-3xl font-vat text-vat-bigtext mb-6">Pagina niet gevonden</h2>
      <p className="text-lg text-vat-smalltext mb-8 max-w-2xl mx-auto">
        De pagina die u zoekt bestaat helaas niet. Dit kan gebeuren als de link verouderd is of als u een tikfout heeft gemaakt in het webadres.
      </p>
      <div className="space-y-4">
        <div>
          <a href="/" className="inline-block bg-vat-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold">
            Terug naar Home
          </a>
        </div>
        <div>
          <a href="/#contact" className="inline-block text-vat-primary underline hover:text-opacity-80">
            Contact opnemen
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFound;
