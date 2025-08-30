import React, { useState, useEffect } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://formbold.com/s/91W2o', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-vat text-vat-bigtext mb-6">
              Contact
            </h2>
            <p className="text-xl font-vat_smalltext text-vat-smalltext max-w-2xl mx-auto">
              Heeft u vragen of wilt u een afspraak maken? We horen graag van u!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="space-y-8">
                {/* About Contact */}
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-vat text-vat-bigtext mb-4">
                    Neem contact op
                  </h3>
                  <p className="font-vat_smalltext text-vat-smalltext text-lg leading-relaxed mb-6">
                    Of u nu een intiem diner thuis wilt organiseren, interesse heeft in onze workshops, 
                    of catering nodig heeft voor een groot evenement - we staan klaar om uw wensen te bespreken.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-vat-subtext mr-3 mt-1">📍</span>
                      <div>
                        <p className="font-vat_smalltext text-vat-smalltext">
                          Keukenatelier in Mechelen
                        </p>
                        <p className="text-sm text-gray-600">
                          (Exacte adres bij afspraak)
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-vat-subtext mr-3">📱</span>
                      <p className="font-vat_smalltext text-vat-smalltext">
                        Telefonisch contact via formulier
                      </p>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-vat-subtext mr-3">✉️</span>
                      <p className="font-vat_smalltext text-vat-smalltext">
                        E-mail contact via formulier
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services Overview */}
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-vat text-vat-bigtext mb-4">
                    Onze diensten
                  </h3>
                  <ul className="space-y-2 font-vat_smalltext text-vat-smalltext">
                    <li className="flex items-center">
                      <span className="text-vat-subtext mr-2">•</span>
                      Kok aan huis service
                    </li>
                    <li className="flex items-center">
                      <span className="text-vat-subtext mr-2">•</span>
                      Dineren in keukenatelier
                    </li>
                    <li className="flex items-center">
                      <span className="text-vat-subtext mr-2">•</span>
                      Kookworkshops
                    </li>
                    <li className="flex items-center">
                      <span className="text-vat-subtext mr-2">•</span>
                      Catering op maat
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-vat text-vat-bigtext mb-6">
                  Stuur ons een bericht
                </h3>

                {formStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 font-vat_smalltext">
                      Dank je wel! Uw bericht is verzonden. We nemen zo snel mogelijk contact met u op.
                    </p>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 font-vat_smalltext">
                      Er is iets misgegaan. Probeer het opnieuw of neem direct contact met ons op.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-vat-bigtext mb-2">
                        Naam *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vat-subtext focus:border-vat-subtext outline-none transition-colors font-vat_smalltext"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-vat-bigtext mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vat-subtext focus:border-vat-subtext outline-none transition-colors font-vat_smalltext"
                        placeholder="uw.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-vat-bigtext mb-2">
                      Onderwerp *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vat-subtext focus:border-vat-subtext outline-none transition-colors font-vat_smalltext"
                      placeholder="Waarover wilt u contact opnemen?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-vat-bigtext mb-2">
                      Bericht *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vat-subtext focus:border-vat-subtext outline-none transition-colors font-vat_smalltext resize-none"
                      placeholder="Vertel ons meer over uw wensen, datum, aantal personen, etc."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="privacy" className="text-sm font-vat_smalltext text-gray-600">
                      Ik heb de{' '}
                      <a href="/privacy" className="text-vat-bigtext underline hover:text-vat-subtext">
                        privacyverklaring
                      </a>{' '}
                      gelezen en ga hiermee akkoord. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-vat-button hover:bg-vat-button_hover text-vat-button_text py-3 px-6 rounded-lg font-vat text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {formStatus === 'sending' ? 'Bezig met verzenden...' : 'Verstuur bericht'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;