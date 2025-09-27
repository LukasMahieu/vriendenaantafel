import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
          hoe_ziet_uit {
            title
            description
          }
          prijzen {
            title
            description
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  height: 700
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  quality: 90
                )
              }
            }
          }
          voorwaarden {
            title
            description
          }
        }
      }
      vegetableIcon: file(relativePath: {eq: "act3.png"}) {
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

  // Get images for sections
  const prijzenImage = frontmatter?.prijzen?.image ? getImage(frontmatter.prijzen.image) : null;

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
        title="Workshop in Neon - Kookworkshops in het kookatelier"
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
                      alt="Chilipeper - Workshop in Neon"
                      className="w-full h-full"
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-4xl md:text-5xl font-vat text-vat-bigtext mb-2">
                    {frontmatter?.title || "Workshop in Neon"}
                  </h1>
                  <h2 className="text-xl md:text-2xl font-vat_smalltext text-vat-subtext">
                    {frontmatter?.subtitle || "Samen koken in het kookatelier"}
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
                    alt={`${frontmatter?.title || "Workshop in Neon"} - Kookworkshop`}
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

          {/* Hoe ziet een Workshop eruit Section - Centered Text */}
          {frontmatter?.hoe_ziet_uit && (
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-vat text-vat-red mb-6">
                {frontmatter.hoe_ziet_uit.title}
              </h2>
              <div className="font-vat_smalltext text-vat-smalltext text-lg leading-relaxed">
                <p>{frontmatter.hoe_ziet_uit.description}</p>
              </div>
            </div>
          )}

          {/* Prijzen Section - Text with Image to the side */}
          {frontmatter?.prijzen && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Left */}
              <div>
                <h2 className="text-3xl md:text-4xl font-vat text-vat-red mb-6">
                  {frontmatter.prijzen.title}
                </h2>
                <div className="font-vat_smalltext text-vat-smalltext text-lg leading-relaxed whitespace-pre-line">
                  {frontmatter.prijzen.description}
                </div>
              </div>

              {/* Image - Right */}
              <div>
                {prijzenImage && (
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <GatsbyImage
                      image={prijzenImage}
                      alt={frontmatter.prijzen.title}
                      className="w-full"
                      objectFit="contain"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Voorwaarden Section - Centered Text */}
          {frontmatter?.voorwaarden && (
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-vat text-vat-red mb-6">
                {frontmatter.voorwaarden.title}
              </h2>
              <div className="font-vat_smalltext text-vat-smalltext text-lg leading-relaxed whitespace-pre-line">
                {frontmatter.voorwaarden.description}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="p-8">
            <h3 className="text-xl font-vat text-vat-bigtext mb-6 text-center">Boek een Workshop in Neon</h3>
            <div id="calendar-container" className="min-h-96"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};