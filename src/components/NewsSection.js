import React, { useEffect, useState } from 'react';

const NewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('nieuws');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Placeholder news items
  const newsItems = [
    {
      id: 1,
      title: "Nieuwe keukenatelier geopend",
      date: "30 augustus 2024",
      summary: "We hebben ons keukenatelier uitgebreid met nieuwe faciliteiten voor onze workshops en dinerervaringen.",
      featured: true
    },
    {
      id: 2,
      title: "Seizoensmenu herfst 2024",
      date: "15 september 2024",
      summary: "Ontdek ons nieuwe seizoensmenu met de beste herfstgroenten van lokale boeren.",
      featured: false
    },
    {
      id: 3,
      title: "Workshop 'Groenten van het seizoen'",
      date: "1 oktober 2024",
      summary: "Leer alles over het bereiden van seizoensgroenten in onze hands-on workshop.",
      featured: false
    }
  ];

  return (
    <section id="nieuws" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-vat text-vat-bigtext mb-6">
              Nieuws & Updates
            </h2>
            <p className="text-xl font-vat_smalltext text-vat-smalltext max-w-2xl mx-auto">
              Blijf op de hoogte van onze laatste nieuwtjes, seizoensmenus en speciale evenementen
            </p>
          </div>

          {/* News Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article
                key={item.id}
                className={`${
                  item.featured ? 'lg:col-span-2' : 'lg:col-span-1'
                } transition-all duration-1000 delay-${index * 200} transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-gray-50 rounded-xl p-6 lg:p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  {/* Date */}
                  <div className="text-sm font-vat_smalltext text-vat-subtext mb-3">
                    {item.date}
                  </div>

                  {/* Title */}
                  <h3 className={`font-vat text-vat-bigtext mb-4 ${
                    item.featured ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className={`font-vat_smalltext text-vat-smalltext leading-relaxed ${
                    item.featured ? 'text-lg' : 'text-base'
                  }`}>
                    {item.summary}
                  </p>

                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="inline-block mt-4 px-3 py-1 bg-vat-subtext text-white text-sm font-vat_smalltext rounded-full">
                      Belangrijk nieuws
                    </div>
                  )}

                  {/* Read More Link */}
                  <div className="mt-6">
                    <span className="text-vat-bigtext font-vat_smalltext text-sm hover:text-vat-subtext transition-colors duration-300 cursor-pointer">
                      Lees meer →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className={`mt-16 text-center bg-gray-50 p-8 lg:p-12 rounded-2xl transition-all duration-1000 delay-600 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-2xl lg:text-3xl font-vat text-vat-bigtext mb-4">
              Blijf op de hoogte
            </h3>
            <p className="text-lg font-vat_smalltext text-vat-smalltext mb-6 max-w-2xl mx-auto">
              Wilt u automatisch op de hoogte blijven van ons nieuws, nieuwe menu's en speciale aanbiedingen? 
              Laat het ons weten via het contactformulier.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-vat-button hover:bg-vat-button_hover text-vat-button_text px-8 py-4 rounded-lg font-vat text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Aanmelden voor updates
            </a>
          </div>

          {/* Note about placeholder content */}
          <div className={`mt-8 text-center transition-all duration-1000 delay-800 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-sm font-vat_smalltext text-gray-400 italic">
              * Deze nieuwsberichten zijn placeholder content. Via het CMS systeem kunnen echte nieuwsberichten toegevoegd worden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;