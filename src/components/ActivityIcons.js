import React, { useState } from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ActivityIcons = () => {
  const [hoveredActivity, setHoveredActivity] = useState(null);

  // Query for activity placeholder images (vegetables/fruits)
  const data = useStaticQuery(graphql`
    query {
      act1: file(relativePath: {eq: "act1_placeholder.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            height: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
            backgroundColor: "transparent"
          )
        }
      }
      act2: file(relativePath: {eq: "act2_placeholder.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            height: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
            backgroundColor: "transparent"
          )
        }
      }
      act3: file(relativePath: {eq: "act3_placeholder.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            height: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
            backgroundColor: "transparent"
          )
        }
      }
      act4: file(relativePath: {eq: "act4_placeholder.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            height: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
            backgroundColor: "transparent"
          )
        }
      }
    }
  `);

  const activities = [
    {
      id: 'vrienden-aan-tafel',
      title: 'Vrienden Aan Tafel',
      description: 'Kok aan huis',
      longDescription: 'Persoonlijke chef aan huis voor al uw evenementen met lokale, verse ingrediënten',
      image: getImage(data.act1), // Corn - symbolizes abundance and home cooking
      path: '/vrienden-aan-tafel',
      vegetable: 'Maïs'
    },
    {
      id: 'aan-tafel-in-neon',
      title: 'Aan Tafel in NEON',
      description: 'Dineren in het keukenatelier',
      longDescription: 'Intieme culinaire ervaring in ons gezellige keukenatelier',
      image: getImage(data.act2), // Tomato - classic cooking ingredient
      path: '/aan-tafel-in-neon',
      vegetable: 'Tomaat'
    },
    {
      id: 'koken-aan-tafel',
      title: 'Koken Aan Tafel',
      description: 'Workshops in het keukenatelier',
      longDescription: 'Leer koken met lokale ingrediënten in onze hands-on workshops',
      image: getImage(data.act3), // Chili pepper - represents learning and spice
      path: '/koken-aan-tafel',
      vegetable: 'Chilipeper'
    },
    {
      id: 'met-veel-aan-tafel',
      title: 'Met veel Aan Tafel',
      description: 'Catering op maat',
      longDescription: 'Professionele catering voor al uw evenementen met verse, lokale ingrediënten',
      image: getImage(data.act4), // Peaches - represents luxury and special occasions
      path: '/met-veel-aan-tafel',
      vegetable: 'Perzik'
    }
  ];

  return (
    <section id="activiteiten" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-vat text-vat-bigtext mb-6">
            Onze Activiteiten
          </h2>
          <p className="text-xl font-vat_smalltext text-vat-smalltext max-w-2xl mx-auto">
            Ontdek onze verschillende culinaire diensten
          </p>
        </div>

        {/* Desktop: Horizontal layout, Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="group relative"
              onMouseEnter={() => setHoveredActivity(activity.id)}
              onMouseLeave={() => setHoveredActivity(null)}
            >
              <Link to={activity.path} className="block">
                <div className="relative">
                  {/* Activity Icon/Image - Real Vegetables! */}
                  <div className="relative w-full aspect-square mb-4 rounded-full overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl bg-white">
                    {activity.image ? (
                      <GatsbyImage
                        image={activity.image}
                        alt={`${activity.title} - ${activity.vegetable}`}
                        className="w-full h-full object-contain p-4"
                      />
                    ) : (
                      /* Fallback if image doesn't load */
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <div className="text-gray-500 text-center">
                          <div className="text-2xl font-vat mb-1">{activity.vegetable}</div>
                          <div className="text-xs font-vat_smalltext">Loading...</div>
                        </div>
                      </div>
                    )}
                    
                    {/* Hover overlay with subtle effect */}
                    <div className="absolute inset-0 bg-vat-subtext bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-full"></div>
                  </div>

                  {/* Activity Title */}
                  <h3 className="text-lg md:text-xl font-vat text-vat-bigtext text-center mb-2 group-hover:text-vat-subtext transition-colors duration-300">
                    {activity.title}
                  </h3>

                  {/* Activity Description */}
                  <p className="text-sm md:text-base font-vat_smalltext text-vat-smalltext text-center mb-2">
                    {activity.description}
                  </p>

                  {/* Hover Description */}
                  <div className={`transform transition-all duration-500 overflow-hidden ${
                    hoveredActivity === activity.id 
                      ? 'max-h-20 opacity-100 translate-y-0' 
                      : 'max-h-0 opacity-0 translate-y-2'
                  }`}>
                    <p className="text-sm font-vat_smalltext text-gray-600 text-center px-2">
                      {activity.longDescription}
                    </p>
                  </div>

                  {/* Click indicator */}
                  <div className={`text-center mt-3 transform transition-all duration-300 ${
                    hoveredActivity === activity.id 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-2'
                  }`}>
                    <span className="text-xs font-vat_smalltext text-vat-subtext">
                      Klik voor meer info →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg font-vat_smalltext text-vat-smalltext mb-6">
            Heeft u vragen over onze activiteiten?
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-vat-button hover:bg-vat-button_hover text-vat-button_text px-6 py-3 rounded-lg font-vat transition-all duration-300 transform hover:scale-105"
          >
            Neem contact op
          </a>
        </div>
      </div>
    </section>
  );
};

export default ActivityIcons;