import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import HeroBanner from '../components/HeroBanner';
import ActivityIconsSimple from '../components/ActivityIconsSimple';
import AboutSection from '../components/AboutSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';

export default function Index() {
  return (
    <Layout>
      <SEO
        title="Aan Tafel - Lokaal koken met veel groenten"
        description="Ontdek onze culinaire diensten: kok aan huis, dineren in ons keukenatelier, workshops en catering op maat. Lokaal en seizoensgebonden koken in Mechelen."
        keywords="aan tafel, kok aan huis, keukenatelier, kookworkshops, catering, Mechelen, lokaal koken, seizoensgebonden, groenten"
      />

      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Activity Icons Section */}
      <ActivityIconsSimple />

      {/* About Section */}
      <AboutSection />

      {/* News Section */}
      <NewsSection />

      {/* Contact Section */}
      <ContactSection />
    </Layout>
  );
};