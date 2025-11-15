import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import StyledMarkdown from '../components/StyledMarkdown';

export default function WorkshopsInNeon() {
  // Query for structured CMS content
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {activity_type: {eq: "workshops-in-neon"}}) {
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
          gallery_images {
            image_left {
              childImageSharp {
                gatsbyImageData(
                  height: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  quality: 90
                )
              }
            }
            image_center {
              childImageSharp {
                gatsbyImageData(
                  height: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  quality: 90
                )
              }
            }
            image_right {
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
          hoe_ziet_uit {
            title
            description
          }
          voorwaarden {
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
      vegetableIcon: file(relativePath: {eq: "act3.png"}) {
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

  // Get gallery images
  const galleryImageLeft = frontmatter?.gallery_images?.image_left ? getImage(frontmatter.gallery_images.image_left) : null;
  const galleryImageCenter = frontmatter?.gallery_images?.image_center ? getImage(frontmatter.gallery_images.image_center) : null;
  const galleryImageRight = frontmatter?.gallery_images?.image_right ? getImage(frontmatter.gallery_images.image_right) : null;

  // Get voorwaarden image
  const voorwaardenImage = frontmatter?.voorwaarden?.image ? getImage(frontmatter.voorwaarden.image) : null;

  // Load calendar script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.ycb.me';
    script.async = true;
    script.setAttribute('data-domain', 'workshopaantafel');
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
        title="Workshop in neon - Kookworkshops in het kookatelier"
        description="Leer koken in onze workshops in het kookatelier met focus op lokale ingrediënten en groenten"
        keywords="kookworkshops, kookatelier, leren koken, groenten, lokale ingrediënten"
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
                      alt="Chilipeper - Workshop in neon"
                      className=""
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-4xl md:text-5xl font-vat text-vat-bigtext mb-2">
                    {frontmatter?.title || "Workshop in neon"}
                  </h1>
                  <h2 className="text-xl md:text-2xl font-vat_smalltext text-vat-mediumtext">
                    {frontmatter?.subtitle || "Samen koken in het kookatelier"}
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
                    alt={`${frontmatter?.title || "Workshop in neon"} - Kookworkshop`}
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

          {/* Gallery Images - Three side by side */}
          {(galleryImageLeft || galleryImageCenter || galleryImageRight) && (
            <div className="grid md:grid-cols-3 gap-8">
              {galleryImageLeft && (
                <div className="overflow-hidden flex justify-center">
                  <GatsbyImage
                    image={galleryImageLeft}
                    alt="Workshop galerij afbeelding"
                    className=""
                  />
                </div>
              )}
              {galleryImageCenter && (
                <div className="overflow-hidden flex justify-center">
                  <GatsbyImage
                    image={galleryImageCenter}
                    alt="Workshop galerij afbeelding"
                    className=""
                  />
                </div>
              )}
              {galleryImageRight && (
                <div className="overflow-hidden flex justify-center">
                  <GatsbyImage
                    image={galleryImageRight}
                    alt="Workshop galerij afbeelding"
                    className=""
                  />
                </div>
              )}
            </div>
          )}

          {/* Hoe ziet een Workshop eruit Section - Centered Text */}
          {frontmatter?.hoe_ziet_uit && (
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-vat text-vat-red mb-6">
                {frontmatter.hoe_ziet_uit.title}
              </h2>
              <div className="font-vat_smalltext text-vat-smalltext text-lg leading-relaxed">
                <StyledMarkdown>{frontmatter.hoe_ziet_uit.description}</StyledMarkdown>
              </div>
            </div>
          )}

          {/* Prijzen Section - Three blocks side by side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-vat text-vat-red mb-12 text-center">
              Prijzen
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Hele dag option */}
              <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-vat text-vat-green mb-3">
                    Hele dag
                  </h3>
                  <p className="text-lg font-vat_smalltext text-vat-smalltext">
                    14u-22u
                  </p>
                  <p className="text-2xl font-vat text-vat-bigtext mt-2">
                    85 euro pp
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="font-vat text-vat-mediumtext mb-4 text-center text-lg">
                    Inbegrepen:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">veldbezoek</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">drankje brughuis</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">workshop</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">diner</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">water/thee/koffie</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">aperitief</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avond option */}
              <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-vat text-vat-green mb-3">
                    Avond
                  </h3>
                  <p className="text-lg font-vat_smalltext text-vat-smalltext">
                    17u - 22u
                  </p>
                  <p className="text-2xl font-vat text-vat-bigtext mt-2">
                    65 euro pp
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="font-vat text-vat-mediumtext mb-4 text-center text-lg">
                    Inbegrepen:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">workshop</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">diner</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">water/thee/koffie</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-vat-green mr-4 text-lg">•</span>
                      <span className="font-vat_smalltext text-vat-smalltext text-base">aperitief</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fiets option */}
              <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 h-fit">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-vat text-vat-green mb-3">
                    Fiets
                  </h3>
                  <p className="text-lg font-vat_smalltext text-vat-smalltext">
                    14u-17u
                  </p>
                  <p className="text-2xl font-vat text-vat-bigtext mt-2">
                    25 euro pp
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="font-vat_smalltext text-vat-smalltext text-center text-base leading-relaxed">
                    Lukt het niet om zelf met de fiets deel te nemen aan de workshop? Huur dan een fiets via Aan Tafel om deel te nemen aan de workshop vanaf 14u.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Voorwaarden Section */}
          {frontmatter?.voorwaarden && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image - Left side */}
              <div className="order-2 lg:order-1">
                {voorwaardenImage && (
                  <div className="overflow-hidden flex justify-center">
                    <GatsbyImage
                      image={voorwaardenImage}
                      alt={frontmatter.voorwaarden.title}
                      className=""
                    />
                  </div>
                )}
              </div>

              {/* Text Content - Right side */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-vat text-vat-red mb-6">
                  {frontmatter.voorwaarden.title}
                </h2>
                <div className="font-vat_smalltext text-vat-smalltext text-lg leading-relaxed">
                  <StyledMarkdown>{frontmatter.voorwaarden.description}</StyledMarkdown>
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
            <h3 className="text-xl font-vat text-vat-bigtext mb-6 text-center">Boek een Workshop in neon</h3>
            <div id="calendar-container" className="min-h-96"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};