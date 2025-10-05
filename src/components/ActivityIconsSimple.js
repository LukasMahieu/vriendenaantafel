import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const ActivityIconsSimple = () => {
  const [hoveredActivity, setHoveredActivity] = useState(null);

  const activities = [
    {
      id: 'vrienden-aan-tafel',
      title: 'Vrienden aan Tafel',
      description: 'Kok aan huis',
      imageSrc: '../data/images/act1.png',
      path: '/vrienden-aan-tafel',
    },
    {
      id: 'aan-tafel-in-neon',
      title: 'Aan Tafel in neon',
      description: 'Diner in het kookatelier',
      imageSrc: '../data/images/act2.png',
      path: '/aan-tafel-in-neon',
    },
    {
      id: 'koken-aan-tafel',
      title: 'Workshop in neon',
      description: 'Samen koken in het kookatelier',
      imageSrc: '../data/images/act3.png',
      path: '/workshops-in-neon',
    },
    {
      id: 'met-veel-aan-tafel',
      title: 'Catering op maat',
      description: 'Catering voor kleine groepen',
      imageSrc: '../data/images/act4.png',
      path: '/catering-op-maat',
    }
  ];

  return (
    <section id="activiteiten" className="pt-48 md:pt-64 lg:pt-80 pb-32 bg-white">
      <div className="container mx-auto px-4">

        {/* Desktop: Horizontal layout, Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 max-w-screen-xl mx-auto flex items-center justify-center">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="group relative"
              onMouseEnter={() => setHoveredActivity(activity.id)}
              onMouseLeave={() => setHoveredActivity(null)}
            >
              <Link to={activity.path} className="block">
                <div className="relative active:scale-95 transition-all duration-300">
                  {/* Activity Icon/Image - Using StaticImage */}
                  <div className="relative w-full mb-4 flex items-center justify-center" style={{ minHeight: '200px' }}>
                    {activity.id === 'vrienden-aan-tafel' && (
                      <StaticImage
                        src="../data/images/act1.png"
                        alt="Maïs - Vrienden aan Tafel"
                        width={400}
                        objectFit="contain"
                        className="transform transition-all duration-300 group-hover:scale-110"
                        placeholder="blurred"
                      />
                    )}
                    {activity.id === 'aan-tafel-in-neon' && (
                      <StaticImage
                        src="../data/images/act2.png"
                        alt="Tomaat - Aan Tafel in neon"
                        width={400}
                        objectFit="contain"
                        className="transform transition-all duration-300 group-hover:scale-110"
                        placeholder="blurred"
                      />
                    )}
                    {activity.id === 'koken-aan-tafel' && (
                      <StaticImage
                        src="../data/images/act3.png"
                        alt="Chilipeper - Koken Aan Tafel"
                        width={400}
                        objectFit="contain"
                        className="transform transition-all duration-300 group-hover:scale-110"
                        placeholder="blurred"
                      />
                    )}
                    {activity.id === 'met-veel-aan-tafel' && (
                      <StaticImage
                        src="../data/images/act4.png"
                        alt="Perzik - Met veel Aan Tafel"
                        width={400}
                        objectFit="contain"
                        className="transform transition-all duration-300 group-hover:scale-110"
                        placeholder="blurred"
                      />
                    )}
                  </div>

                  {/* Activity Title */}
                  <h3 className="text-lg md:text-xl font-vat text-vat-orange text-center mb-2 group-hover:text-vat-lightgreen transition-colors duration-300">
                    {activity.title}
                  </h3>

                  {/* Activity Description */}
                  <p className="text-sm md:text-base font-vat_smalltext text-black text-center mb-2">
                    {activity.description}
                  </p>

                  {/* Click indicator - Always visible on mobile, hover-triggered on desktop */}
                  <div className="text-center mt-3 transform transition-all duration-300">
                    {/* Mobile: Always visible */}
                    <span className="block md:hidden text-sm font-vat_smalltext text-vat-orange">
                      Klik voor meer info →
                    </span>
                    {/* Desktop: Hover triggered */}
                    <span className={`hidden md:block text-sm font-vat_smalltext text-vat-orange transition-all duration-300 ${
                      hoveredActivity === activity.id
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2'
                    }`}>
                      Klik voor meer info →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ActivityIconsSimple;