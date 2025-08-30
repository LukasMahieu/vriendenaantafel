import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('over');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Query for about section image
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: {eq: "mijnkeuken_1.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            height: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
          )
        }
      }
    }
  `);

  const aboutImage = getImage(data.aboutImage);

  return (
    <section id="over" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h2 className="text-4xl md:text-5xl font-vat text-vat-bigtext mb-6">
                Over ons
              </h2>
              
              <div className="space-y-6 font-vat_smalltext text-vat-smalltext text-lg leading-relaxed">
                <p>
                  Welkom bij <span className="font-semibold text-vat-bigtext">Aan Tafel</span>, 
                  waar lokale keuken en verse groenten centraal staan. Wij geloven in de kracht van 
                  seizoensgebonden ingrediënten en de magie die ontstaat wanneer mensen samenkomen rond een tafel.
                </p>
                
                <p>
                  Onze passie voor koken begint bij de beste lokale producten. We werken samen met 
                  lokale boeren en leveranciers om ervoor te zorgen dat elke maaltijd niet alleen 
                  heerlijk is, maar ook duurzaam en verantwoord.
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-vat-subtext">
                  <h3 className="font-vat text-vat-bigtext text-xl mb-3">
                    Onze filosofie
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-vat-subtext mr-2">•</span>
                      Lokaal en seizoensgebonden koken
                    </li>
                    <li className="flex items-start">
                      <span className="text-vat-subtext mr-2">•</span>
                      Veel groenten in elke maaltijd
                    </li>
                    <li className="flex items-start">
                      <span className="text-vat-subtext mr-2">•</span>
                      Persoonlijke en hartelijke service
                    </li>
                    <li className="flex items-start">
                      <span className="text-vat-subtext mr-2">•</span>
                      Duurzame en bewuste keuzes
                    </li>
                  </ul>
                </div>
                
                <p>
                  Of het nu gaat om een intiem diner aan huis, een workshop in ons keukenatelier, 
                  of catering voor een groot evenement - bij elke gelegenheid zorgen we voor een 
                  onvergetelijke culinaire ervaring.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              {aboutImage && (
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <GatsbyImage
                      image={aboutImage}
                      alt="Over Aan Tafel"
                      className="w-full h-full"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-vat-subtext rounded-full opacity-60"></div>
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-vat-bigtext rounded-full opacity-40"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;