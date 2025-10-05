import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import SEO from '../components/SEO';
import HeroBanner from '../components/HeroBanner';
import ActivityIconsSimple from '../components/ActivityIconsSimple';
import AboutSection from '../components/AboutSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';

export default function Index() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Use requestAnimationFrame to smooth out the transition
        requestAnimationFrame(() => {
          // Show header when activities come into view, hide when hero is back in view
          if (entry.target.id === 'activities' && entry.isIntersecting) {
            setShowHeader(true);
          } else if (entry.target.id === 'hero' && entry.isIntersecting) {
            setShowHeader(false);
          }
        });
      },
      {
        threshold: 0.3, // Lower threshold for smoother experience
        rootMargin: '-10% 0px -10% 0px' // Trigger slightly before/after
      }
    );

    const activitiesElement = document.getElementById('activities');
    const heroElement = document.getElementById('hero');

    if (activitiesElement) {
      observer.observe(activitiesElement);
    }
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (activitiesElement) {
        observer.unobserve(activitiesElement);
      }
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  return (
    <Layout isHomePage={true}>
      <SEO
        title="Aan Tafel"
        description="Ontdek onze culinaire diensten: kok aan huis, dineren in ons kookatelier, workshops en catering op maat. Lokaal en seizoensgebonden koken in Mechelen."
        keywords="aan tafel, kok aan huis, kookatelier, kookworkshops, catering, Mechelen, lokaal koken, seizoensgebonden, groenten"
      />

      {/* Hero Banner Section */}
      <div id="hero">
        <HeroBanner />
      </div>

      {/* Header Navigation - appears when activities are in view */}
      <div className={`sticky top-0 z-50 transform transition-all duration-300 ease-out ${
        showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <Header />
      </div>

      {/* Activity Icons Section */}
      <div id="activities">
        <ActivityIconsSimple />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* News Section */}
      <NewsSection />

      {/* Contact Section */}
      <ContactSection />
    </Layout>
  );
};