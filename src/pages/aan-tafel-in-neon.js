import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function AanTafelInNeon() {
  // Query for structured CMS content
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: {regex: "/aan-tafel-in-neon/aan-tafel-in-neon.md$/"}) {
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
                  width: 600
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
                  width: 600
                  height: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  quality: 90
                )
              }
            }
          }
          prijzen {
            title
            menu_price
            non_alcoholic_price
            basic_alcoholic_price
            adventurous_alcoholic_price
            image {
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
          reserveren {
            title
            description
            image {
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
        }
      }
      vegetableIcon: file(relativePath: {eq: "act2.png"}) {
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

  const vegetableIcon = getImage(data.vegetableIcon);
  const markdownData = data.markdownRemark;
  const frontmatter = markdownData?.frontmatter;
  const featuredImage = frontmatter?.image ? getImage(frontmatter.image) : null;

  // Get images for each section
  const mijnKeukenImage = frontmatter?.mijn_keuken?.image ? getImage(frontmatter.mijn_keuken.image) : null;
  const watVerwachtenImage = frontmatter?.wat_verwachten?.image ? getImage(frontmatter.wat_verwachten.image) : null;
  const prijzenImage = frontmatter?.prijzen?.image ? getImage(frontmatter.prijzen.image) : null;
  const reserverenImage = frontmatter?.reserveren?.image ? getImage(frontmatter.reserveren.image) : null;

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
        title={`${frontmatter?.title} - ${frontmatter?.subtitle}` || "Aan Tafel in NEON - Dineren in het kookatelier"}
        description="Dineer in ons sfeervolle kookatelier en ervaar een unieke culinaire avond"
        keywords="kookatelier, dineren, culinaire ervaring, Mechelen"
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
                      alt="Tomaat - Aan Tafel in NEON"
                      className="w-full h-full"
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-4xl md:text-5xl font-vat text-vat-bigtext mb-2">
                    {frontmatter?.title || "Aan Tafel in NEON"}
                  </h1>
                  <h2 className="text-xl md:text-2xl font-vat_smalltext text-vat-subtext">
                    {frontmatter?.subtitle || "Dineren in het kookatelier"}
                  </h2>
                </div>
              </div>

              {/* Intro */}
              {frontmatter?.intro && (
                <p className="text-lg font-vat_smalltext text-vat-smalltext leading-relaxed mb-8">
                  {frontmatter.intro}
                </p>
              )}

            </div>

            {/* Image */}
            <div className="order-first lg:order-last flex justify-center">
              {featuredImage && (
                <div className="w-80 h-80">
                  <GatsbyImage
                    image={featuredImage}
                    alt={`${frontmatter?.title || "Aan Tafel in NEON"} - Sfeervolle kookatelier`}
                    className="w-full h-full"
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
                  <p>{frontmatter.mijn_keuken.description}</p>
                </div>
              </div>

              {/* Image - Right */}
              <div>
                {mijnKeukenImage && (
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <GatsbyImage
                      image={mijnKeukenImage}
                      alt={frontmatter.mijn_keuken.title}
                      className="w-full h-full"
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
                    <span>{frontmatter.wat_verwachten.item1}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-vat-green mr-3 mt-1">•</span>
                    <span>{frontmatter.wat_verwachten.item2}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-vat-green mr-3 mt-1">•</span>
                    <span>{frontmatter.wat_verwachten.item3}</span>
                  </div>
                </div>
              </div>

              {/* Image - Left */}
              <div className="order-2 lg:order-1">
                {watVerwachtenImage && (
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <GatsbyImage
                      image={watVerwachtenImage}
                      alt={frontmatter.wat_verwachten.title}
                      className="w-full h-full"
                      objectFit="contain"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Prijzen Section */}
          {frontmatter?.prijzen && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Left */}
              <div>
                <h2 className="text-3xl md:text-4xl font-vat text-vat-red mb-6">
                  {frontmatter.prijzen.title}
                </h2>
                <div className="space-y-4 font-vat_smalltext text-vat-smalltext text-lg leading-relaxed">
                  <div className="flex items-start">
                    <span className="text-vat-green mr-3 mt-1">•</span>
                    <span>{frontmatter.prijzen.menu_price}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-vat-green mr-3 mt-1">•</span>
                    <span>{frontmatter.prijzen.non_alcoholic_price}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-vat-green mr-3 mt-1">•</span>
                    <span>{frontmatter.prijzen.basic_alcoholic_price}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-vat-green mr-3 mt-1">•</span>
                    <span>{frontmatter.prijzen.adventurous_alcoholic_price}</span>
                  </div>
                </div>
              </div>

              {/* Image - Right */}
              <div>
                {prijzenImage && (
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <GatsbyImage
                      image={prijzenImage}
                      alt={frontmatter.prijzen.title}
                      className="w-full h-full"
                      objectFit="contain"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Reserveren Section */}
          {frontmatter?.reserveren && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Right */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-vat text-vat-red mb-6">
                  {frontmatter.reserveren.title}
                </h2>
                <div className="space-y-6 font-vat_smalltext text-vat-smalltext text-lg leading-relaxed">
                  <p>{frontmatter.reserveren.description}</p>
                </div>
              </div>

              {/* Image - Left */}
              <div className="order-2 lg:order-1">
                {reserverenImage && (
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <GatsbyImage
                      image={reserverenImage}
                      alt={frontmatter.reserveren.title}
                      className="w-full h-full"
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
            <h3 className="text-xl font-vat text-vat-bigtext mb-6 text-center">Boek een Aan Tafel in NEON</h3>
            <div id="calendar-container" className="min-h-96"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};