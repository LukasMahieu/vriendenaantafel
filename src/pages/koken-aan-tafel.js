import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function KokenAanTafel() {
  // Query for the chef in kitchen image
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "mijnkeuken_3.jpg"}) {
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
      vegetableIcon: file(relativePath: {eq: "act3_placeholder.png"}) {
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
        title="Koken Aan Tafel - Workshops in het keukenatelier"
        description="Leer koken in onze workshops in het keukenatelier met focus op lokale ingrediënten en groenten"
        keywords="kookworkshops, keukenatelier, leren koken, groenten, lokale ingrediënten"
      />
      
      {/* Hero Section with Chef Image */}
      <div className="relative bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              {/* Chili Pepper Icon */}
              <div className="flex items-center mb-6">
                {vegetableIcon && (
                  <div className="w-20 h-20 mr-4">
                    <GatsbyImage
                      image={vegetableIcon}
                      alt="Chilipeper - Koken Aan Tafel"
                      className="w-full h-full"
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-4xl md:text-5xl font-vat text-vat-bigtext mb-2">
                    Koken Aan Tafel
                  </h1>
                  <h2 className="text-xl md:text-2xl font-vat_smalltext text-vat-subtext">
                    Workshops in het keukenatelier
                  </h2>
                </div>
              </div>
              
              <p className="text-xl font-vat_smalltext text-vat-smalltext mb-8 leading-relaxed">
                Ontdek de kunst van koken met lokale ingrediënten in onze hands-on workshops. 
                Leer van een ervaren chef in een gezellige, professionele keuken.
              </p>
              
              <a 
                href="/#contact" 
                className="inline-block bg-vat-button hover:bg-vat-button_hover text-vat-button_text px-8 py-4 rounded-lg font-vat text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Inschrijven workshop
              </a>
            </div>

            {/* Image */}
            <div className="order-first lg:order-last">
              {heroImage && (
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <GatsbyImage
                    image={heroImage}
                    alt="Koken Aan Tafel - Chef aan het werk in de keuken"
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
              <h3 className="text-2xl font-vat text-vat-bigtext mb-4">Wat leer je bij ons?</h3>
              <ul className="space-y-3 font-vat_smalltext text-vat-smalltext">
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">🌱</span>
                  Werken met seizoensgebonden, lokale ingrediënten
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">🥕</span>
                  Creatief omgaan met veel groenten in je gerechten
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">👨‍🍳</span>
                  Basis technieken tot gevorderde kookmethoden
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">👥</span>
                  Kleine groepen voor persoonlijke begeleiding
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">🏠</span>
                  Gezellige sfeer in ons keukenatelier
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-vat text-vat-bigtext mb-4">Workshop formaten</h3>
              <ul className="space-y-3 font-vat_smalltext text-vat-smalltext">
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">⏰</span>
                  Halve dag workshops (3-4 uur)
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">📅</span>
                  Volledige dag intensief (6-8 uur)
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">🌅</span>
                  Avond workshops na werk
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">👨‍👩‍👧‍👦</span>
                  Privé workshops voor groepen
                </li>
              </ul>
            </div>
          </div>

          {/* Workshop Topics */}
          <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
            <h3 className="text-2xl font-vat text-vat-bigtext mb-6 text-center">Workshop onderwerpen</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-vat-subtext rounded-full flex items-center justify-center text-white text-2xl mx-auto">🥬</div>
                <h4 className="font-vat text-vat-bigtext">Groenten van het seizoen</h4>
                <p className="text-sm font-vat_smalltext text-vat-smalltext">Leer werken met seizoensgroenten</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-vat-subtext rounded-full flex items-center justify-center text-white text-2xl mx-auto">🍲</div>
                <h4 className="font-vat text-vat-bigtext">Basis technieken</h4>
                <p className="text-sm font-vat_smalltext text-vat-smalltext">Fundamentele kooktechnieken</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-vat-subtext rounded-full flex items-center justify-center text-white text-2xl mx-auto">🌿</div>
                <h4 className="font-vat text-vat-bigtext">Kruiden & smaken</h4>
                <p className="text-sm font-vat_smalltext text-vat-smalltext">Smaakcombinaties ontdekken</p>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-vat text-vat-bigtext mb-4">Inbegrepen</h3>
              <ul className="space-y-3 font-vat_smalltext text-vat-smalltext">
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">✅</span>
                  Alle ingrediënten en materialen
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">✅</span>
                  Receptenboekje om mee naar huis te nemen
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">✅</span>
                  Lunch/diner (wat we samen bereiden)
                </li>
                <li className="flex items-start">
                  <span className="text-vat-subtext mr-2">✅</span>
                  Welkomstdrankje en koffie/thee
                </li>
              </ul>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-vat text-vat-bigtext mb-4">Prijzen & Booking</h3>
              <p className="text-lg font-vat text-vat-bigtext mb-4">
                Vanaf €85 per persoon
              </p>
              <p className="font-vat_smalltext text-vat-smalltext mb-6">
                Inclusief alle ingrediënten, materialen en lunch/diner
              </p>
              <a 
                href="/#contact" 
                className="inline-block bg-vat-button hover:bg-vat-button_hover text-vat-button_text px-8 py-3 rounded-lg font-vat transition-colors duration-300"
              >
                Workshop boeken
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};