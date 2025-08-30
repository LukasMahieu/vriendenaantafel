import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

const HeroBanner = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);

  // Query for banner image
  const data = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: {eq: "banner_full.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 1920
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
          )
        }
      }
    }
  `);

  const bannerImage = getImage(data.bannerImage);

  useEffect(() => {
    // Simulate logo loading effect
    const timer = setTimeout(() => {
      setLogoLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {bannerImage && (
        <div className="absolute inset-0 z-0">
          <GatsbyImage
            image={bannerImage}
            alt="Aan Tafel achtergrond"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      )}

      {/* Background Overlay for clean white look */}
      <div className="absolute inset-0 bg-white bg-opacity-90 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        {/* Logo Placeholder */}
        <div
          className={`mb-8 transition-all duration-1000 transform ${logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl">
            <StaticImage
              src="../data/images/banner_round.png"
              alt="Aan Tafel Logo"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              placeholder="blurred"
            />
          </div>
        </div>

        {/* Main Title */}
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-vat text-vat-bigtext mb-6 leading-tight transition-all duration-1000 delay-300 transform ${logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          Aan Tafel
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl md:text-2xl font-vat_smalltext text-vat-smalltext mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 transform ${logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          Lokaal koken met lokale groenten
        </p>

        {/* Call to Action */}
        <div
          className={`transition-all duration-1000 delay-700 transform ${logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <a
            href="#activiteiten"
            className="inline-block bg-vat-button hover:bg-vat-button_hover text-vat-button_text px-8 py-4 rounded-lg font-vat text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ontdek onze activiteiten
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-vat-bigtext"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;