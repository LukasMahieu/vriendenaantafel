import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function VriendenAanTafel() {
  // Query for the outdoor dining image
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "mijnkeuken_2.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            height: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
          )
        }
      }
      vegetableIcon: file(relativePath: {eq: "act1_placeholder.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 120
            height: 120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
            backgroundColor: "transparent"
          )
        }
      }
    }
  `);

  const heroImage = getImage(data.heroImage);
  const vegetableIcon = getImage(data.vegetableIcon);

  return (
    <Layout>
      <SEO 
        title="Vrienden Aan Tafel - Kok aan huis"
        description="Persoonelijke kok aan huis service voor uw evenementen in en rond Mechelen"
        keywords="kok aan huis, persoonlijke chef, catering Mechelen"
      />
      
      {/* Hero Section with Image */}
      <div className="relative bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              {/* Vegetable Icon */}
              <div className="flex items-center mb-6">
                {vegetableIcon && (
                  <div className="w-20 h-20 mr-4">
                    <GatsbyImage
                      image={vegetableIcon}
                      alt="Maïs - Vrienden Aan Tafel"
                      className="w-full h-full"
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-4xl md:text-5xl font-vat text-vat-bigtext mb-2">
                    Vrienden Aan Tafel
                  </h1>
                  <h2 className="text-xl md:text-2xl font-vat_smalltext text-vat-subtext">
                    Kok aan huis
                  </h2>
                </div>
              </div>
              
              <p className="text-xl font-vat_smalltext text-vat-smalltext mb-8 leading-relaxed">
                Geniet van een unieke culinaire ervaring in de vertrouwde omgeving van uw eigen huis. 
                Wij brengen restaurant-kwaliteit rechtstreeks bij u thuis.
              </p>
              
              <a 
                href="/#contact" 
                className="inline-block bg-vat-button hover:bg-vat-button_hover text-vat-button_text px-8 py-4 rounded-lg font-vat text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact opnemen
              </a>
            </div>

            {/* Image */}
            <div className="order-first lg:order-last">
              {heroImage && (
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <GatsbyImage
                    image={heroImage}
                    alt="Vrienden Aan Tafel - Gezellig samen dineren"
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-vat text-vat-bigtext mb-4">Wat kunnen we voor u doen?</h3>
              <ul className="space-y-3 font-vat_smalltext text-vat-smalltext">
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">🏠</span>
                  Persoonlijke chef aan huis voor al uw evenementen
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">🥬</span>
                  Gebruik van lokale, verse ingrediënten met veel groenten
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">📋</span>
                  Op maat gemaakte menu's aangepast aan uw wensen
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">✨</span>
                  Complete service van inkoop tot afwas
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-vat text-vat-bigtext mb-4">Voor elke gelegenheid</h3>
              <ul className="space-y-3 font-vat_smalltext text-vat-smalltext">
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">💕</span>
                  Intieme diners voor 2 personen
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">🎉</span>
                  Verjaardagsfeesten tot 12 personen
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">👨‍👩‍👧‍👦</span>
                  Familiereünies en bijeenkomsten
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">🏢</span>
                  Bedrijfsevenementen in huiselijke sfeer
                </li>
              </ul>
            </div>
          </div>

          {/* Process */}
          <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
            <h3 className="text-2xl font-vat text-vat-bigtext mb-6 text-center">Hoe werkt het?</h3>
            <div className="grid md:grid-cols-5 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-vat-subtext rounded-full flex items-center justify-center text-white font-vat mx-auto">1</div>
                <h4 className="font-vat text-vat-bigtext">Kennismaking</h4>
                <p className="text-sm font-vat_smalltext text-vat-smalltext">Bespreken wensen</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-vat-subtext rounded-full flex items-center justify-center text-white font-vat mx-auto">2</div>
                <h4 className="font-vat text-vat-bigtext">Menu</h4>
                <p className="text-sm font-vat_smalltext text-vat-smalltext">Samenstellen menu</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-vat-subtext rounded-full flex items-center justify-center text-white font-vat mx-auto">3</div>
                <h4 className="font-vat text-vat-bigtext">Inkoop</h4>
                <p className="text-sm font-vat_smalltext text-vat-smalltext">Verse ingrediënten</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-vat-subtext rounded-full flex items-center justify-center text-white font-vat mx-auto">4</div>
                <h4 className="font-vat text-vat-bigtext">Koken</h4>
                <p className="text-sm font-vat_smalltext text-vat-smalltext">Bereiding ter plaatse</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-vat-subtext rounded-full flex items-center justify-center text-white font-vat mx-auto">5</div>
                <h4 className="font-vat text-vat-bigtext">Genieten</h4>
                <p className="text-sm font-vat_smalltext text-vat-smalltext">Wij doen de afwas</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-vat text-vat-bigtext mb-4">Prijzen</h3>
            <p className="font-vat_smalltext text-vat-smalltext mb-6">
              Onze prijzen zijn afhankelijk van het aantal personen, het gekozen menu en de duur van de service.
            </p>
            <p className="text-lg font-vat text-vat-bigtext mb-6">
              Vanaf €65 per persoon voor een 3-gangen menu (minimaal 4 personen)
            </p>
            <a 
              href="/#contact" 
              className="inline-block bg-vat-button hover:bg-vat-button_hover text-vat-button_text px-8 py-3 rounded-lg font-vat transition-colors duration-300"
            >
              Vrijblijvende offerte aanvragen
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};