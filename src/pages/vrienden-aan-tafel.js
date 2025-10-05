import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
          prijzen {
            title
            menu_price
            alcoholic_price
            non_alcoholic_price
            luxury_option
            servies_option
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
          hoe_werkt_het {
            title
            step1
            step2
            step3
            step4
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
          voorwaarden {
            title
            condition1
            condition2
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
  const prijzenImage = frontmatter?.prijzen?.image ? getImage(frontmatter.prijzen.image) : null;
  const hoeWerktHetImage = frontmatter?.hoe_werkt_het?.image ? getImage(frontmatter.hoe_werkt_het.image) : null;

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
                  <p>{frontmatter.mijn_keuken.description}</p>
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
                    <span>{frontmatter.prijzen.alcoholic_price}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-vat-green mr-3 mt-1">•</span>
                    <span>{frontmatter.prijzen.non_alcoholic_price}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-vat-green mr-3 mt-1">•</span>
                    <span>{frontmatter.prijzen.luxury_option}</span>
                  </div>
                  {frontmatter.prijzen.servies_option && (
                    <div className="flex items-start">
                      <span className="text-vat-green mr-3 mt-1">•</span>
                      <span>{frontmatter.prijzen.servies_option}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Image - Right */}
              <div>
                {prijzenImage && (
                  <div className="overflow-hidden flex justify-center">
                    <GatsbyImage
                      image={prijzenImage}
                      alt={frontmatter.prijzen.title}
                      className=""
                      objectFit="contain"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Hoe werkt het Section */}
          {frontmatter?.hoe_werkt_het && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Right */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-vat text-vat-red mb-6">
                  {frontmatter.hoe_werkt_het.title}
                </h2>
                <div className="space-y-4 font-vat_smalltext text-vat-smalltext text-lg leading-relaxed">
                  <div className="flex items-start">
                    <div className="bg-vat-button text-vat-button_text w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3 mt-1">1</div>
                    <span>{frontmatter.hoe_werkt_het.step1}</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-vat-button text-vat-button_text w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3 mt-1">2</div>
                    <span>{frontmatter.hoe_werkt_het.step2}</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-vat-button text-vat-button_text w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3 mt-1">3</div>
                    <span>{frontmatter.hoe_werkt_het.step3}</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-vat-button text-vat-button_text w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3 mt-1">4</div>
                    <span>{frontmatter.hoe_werkt_het.step4}</span>
                  </div>
                </div>
              </div>

              {/* Image - Left */}
              <div className="order-2 lg:order-1">
                {hoeWerktHetImage && (
                  <div className="overflow-hidden flex justify-center">
                    <GatsbyImage
                      image={hoeWerktHetImage}
                      alt={frontmatter.hoe_werkt_het.title}
                      className=""
                      objectFit="contain"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Voorwaarden Section */}
          {frontmatter?.voorwaarden && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-vat text-vat-red mb-6 text-center">
                {frontmatter.voorwaarden.title}
              </h2>
              <div className="space-y-4 font-vat_smalltext text-vat-smalltext text-lg leading-relaxed">
                <div className="flex items-start">
                  <span className="text-vat-green mr-3 mt-1">•</span>
                  <span>{frontmatter.voorwaarden.condition1}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-vat-green mr-3 mt-1">•</span>
                  <span>{frontmatter.voorwaarden.condition2}</span>
                </div>
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