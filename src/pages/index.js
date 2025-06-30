import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import UnderConstruction from '../components/UnderConstruction';

export default function Index() {
  return (
    <Layout>
      <SEO 
        title="Website in Onderhoud"
        description="Vrienden aan Tafel is momenteel bezig met het vernieuwen van de website. Kom binnenkort terug voor onze nieuwe site!"
        keywords="vrienden aan tafel, catering Mechelen, website onderhoud"
      />
      <UnderConstruction />
    </Layout>
  );
};