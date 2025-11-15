import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import StyledMarkdown from '../components/StyledMarkdown';

export default function VriendenAanTafel() {
  // Query for structured CMS content
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: {regex: "/vrienden-aan-tafel/content.md$/"}) {
        frontmatter {
          title
          subtitle
          intro
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                quality: 90
              )
            }
          }
          mijn_keuken {
            title
            description
            image {
              childImageSharp {
                gatsbyImageData(
                  height: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  quality: 90
                )
              }
            }
          }
          wat_verwachten {
            title
            item1
            item2
            item3
            image {
              childImageSharp {
                gatsbyImageData(
                  height: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  quality: 90
                )
              }
            }
          }
          praktisch {
            title
            description
            image {
              childImageSharp {
                gatsbyImageData(
                  height: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  quality: 90
                )
              }
            }
          }
        }
      }
      vegetableIcon: file(relativePath: {eq: "act1.png"}) {
        childImageSharp {
          gatsbyImageData(
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

  const vegetableIcon = getImage(data.vegetableIcon);
  const markdownData = data.markdownRemark;
  const frontmatter = markdownData?.frontmatter;
  const featuredImage = frontmatter?.image ? getImage(frontmatter.image) : null;

  // Get images for each section
  const mijnKeukenImage = frontmatter?.mijn_keuken?.image ? getImage(frontmatter.mijn_keuken.image) : null;
  const watVerwachtenImage = frontmatter?.wat_verwachten?.image ? getImage(frontmatter.wat_verwachten.image) : null;
  const praktischImage = frontmatter?.praktisch?.image ? getImage(frontmatter.praktisch.image) : null;

  // Load calendar script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.ycb.me';
    script.async = true;
    script.setAttribute('data-domain', 'aantafel');
    script.setAttribute('data-displaymode', 'auto');

    const calendarContainer = document.getElementById('calendar-container');
    if (calendarContainer) {
      calendarContainer.appendChild(script);
    }

    return () => {
      // Cleanup script if component unmounts
      if (calendarContainer && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <Layout>
      <SEO
        title="Vrienden aan Tafel - Kok aan huis"
        description="Persoonlijke kok aan huis service voor uw evenementen in en rond Mechelen"
        keywords="kok aan huis, persoonlijke chef, catering Mechelen"
      />

      {/* Hero Section with Image */}
      <div className="relative bg-white pt-32 pb-20">
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
                      alt="Maïs - Vrienden aan Tafel"
                      className=""
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-4xl md:text-5xl font-vat text-vat-bigtext mb-2">
                    {frontmatter?.title || "Vrienden aan Tafel"}
                  </h1>
                  <h2 className="text-xl md:text-2xl font-vat_smalltext text-vat-mediumtext">
                    {frontmatter?.subtitle || "Kok aan huis"}
                  </h2>
                </div>
              </div>

              {/* Intro */}
              {frontmatter?.intro && (
                <div className="text-lg font-vat_smalltext text-vat-smalltext leading-relaxed mb-8">
                  <StyledMarkdown>{frontmatter.intro}</StyledMarkdown>
                </div>
              )}
            </div>

            {/* Image */}
            <div className="order-first lg:order-last flex justify-center">
              {featuredImage && (
                <div className="w-80 h-80">
                  <GatsbyImage
                    image={featuredImage}
                    alt={`${frontmatter?.title || "Vrienden aan Tafel"} - Gezellig samen dineren`}
                    className=""
                    objectFit="contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl space-y-24">

          {/* Mijn Keuken Section */}
          {frontmatter?.mijn_keuken && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Left */}
              <div>
                <h2 className="text-3xl md:text-4xl font-vat text-vat-red mb-6">
                  {frontmatter.mijn_keuken.title}
                </h2>
                <div className="space-y-6 font-vat_smalltext text-vat-smalltext text-lg leading-relaxed">
                  <StyledMarkdown>{frontmatter.mijn_keuken.description}</StyledMarkdown>
                </div>
              </div>

              {/* Image - Right */}
              <div>
                {mijnKeukenImage && (
                  <div className="overflow-hidden flex justify-center">
                    <GatsbyImage
                      image={mijnKeukenImage}
                      alt={frontmatter.mijn_keuken.title}
                      className=""
                      objectFit="contain"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Wat mag je verwachten Section */}
          {frontmatter?.wat_verwachten && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Right */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-vat text-vat-red mb-6">
                  {frontmatter.wat_verwachten.title}
                </h2>
                <div className="space-y-4 font-vat_smalltext text-vat-smalltext text-lg leading-relaxed">
                  <div className="flex items-start">
                    <span className="text-vat-green mr-3 mt-1">•</span>
                    <span><StyledMarkdown>{frontmatter.wat_verwachten.item1}</StyledMarkdown></span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-vat-green mr-3 mt-1">•</span>
                    <span><StyledMarkdown>{frontmatter.wat_verwachten.item2}</StyledMarkdown></span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-vat-green mr-3 mt-1">•</span>
                    <span><StyledMarkdown>{frontmatter.wat_verwachten.item3}</StyledMarkdown></span>
                  </div>
                </div>
              </div>

              {/* Image - Left */}
              <div className="order-2 lg:order-1">
                {watVerwachtenImage && (
                  <div className="overflow-hidden flex justify-center">
                    <GatsbyImage
                      image={watVerwachtenImage}
                      alt={frontmatter.wat_verwachten.title}
                      className=""
                      objectFit="contain"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Prijzen Section - Three blocks side by side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-vat text-vat-red mb-12 text-center">
              Prijzen
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              {/* 3-gangenmenu option */}
              <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-vat text-vat-green mb-3">
                    3-gangenmenu
                  </h3>
                  <p className="text-2xl font-vat text-vat-bigtext mt-2">
                    50 euro pp
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="font-vat text-vat-mediumtext mb-4 text-center text-lg">
                    Inbegrepen:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">3-gangen verrassingsmenu</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">Opkuis van de keuken</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dranken option */}
              <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-vat text-vat-green mb-3">
                    Dranken*
                  </h3>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">Boeiend drankenassortiment van (non-)alcoholische dranken aan schappelijke prijzen</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">Kies op voorhand de flessen die je wenst uit de bestellijst</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Huur materiaal option */}
              <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 h-fit">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-vat text-vat-green mb-3">
                    Huur materiaal*
                  </h3>
                  <p className="text-2xl font-vat text-vat-bigtext mt-2">
                    5 euro pp
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="font-vat text-vat-mediumtext mb-4 text-center text-lg">
                    Inbegrepen:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">Servies</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">Glazen</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">Bestek</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional note */}
            <p className="text-lg font-vat_smalltext text-vat-green mt-4">
              *optioneel
            </p>
          </div>

          {/* Praktisch Section */}
          {frontmatter?.praktisch && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Right */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-vat text-vat-red mb-6">
                  {frontmatter.praktisch.title}
                </h2>
                <div className="font-vat_smalltext text-vat-smalltext text-lg leading-relaxed">
                  <StyledMarkdown>{frontmatter.praktisch.description}</StyledMarkdown>
                </div>
              </div>

              {/* Image - Left */}
              <div className="order-2 lg:order-1">
                {praktischImage && (
                  <div className="overflow-hidden flex justify-center">
                    <GatsbyImage
                      image={praktischImage}
                      alt={frontmatter.praktisch.title}
                      className=""
                      objectFit="contain"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="p-8">
            <h3 className="text-xl font-vat text-vat-bigtext mb-6 text-center">Boek een Vrienden aan Tafel</h3>
            <div id="calendar-container" className="min-h-96"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};