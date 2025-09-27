import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function CateringOpMaat() {
  // Query for structured CMS content
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {activity_type: {eq: "catering-op-maat"}}) {
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
          voorwaarden {
            title
            description
          }
          offerte_aanvragen {
            title
            description
          }
        }
      }
      vegetableIcon: file(relativePath: {eq: "act4.png"}) {
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
  const mijnKeukenImage = frontmatter?.mijn_keuken?.image ? getImage(frontmatter.mijn_keuken.image) : null;

  return (
    <Layout>
      <SEO
        title="Catering op maat - Catering voor kleine groepen"
        description="Professionele catering service op maat voor al uw evenementen met lokale, verse ingrediënten"
        keywords="catering, evenementen, op maat, lokale ingrediënten, Mechelen"
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
                      alt="Perzik - Catering op maat"
                      className="w-full h-full"
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-4xl md:text-5xl font-vat text-vat-bigtext mb-2">
                    {frontmatter?.title || "Catering op maat"}
                  </h1>
                  <h2 className="text-xl md:text-2xl font-vat_smalltext text-vat-subtext">
                    {frontmatter?.subtitle || "Catering voor kleine groepen"}
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
                    alt={`${frontmatter?.title || "Catering op maat"} - Catering service`}
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
                <div className="font-vat_smalltext text-vat-smalltext text-lg leading-relaxed whitespace-pre-line">
                  {frontmatter.mijn_keuken.description}
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

          {/* Offerte aanvragen Section - Centered Text with Button */}
          {frontmatter?.offerte_aanvragen && (
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-vat text-vat-red mb-6">
                {frontmatter.offerte_aanvragen.title}
              </h2>
              <div className="font-vat_smalltext text-vat-smalltext text-lg leading-relaxed whitespace-pre-line mb-8">
                {frontmatter.offerte_aanvragen.description}
              </div>

              {/* Contact Button */}
              <a
                href="/#contact"
                className="inline-block bg-vat-button hover:bg-vat-button_hover text-vat-button_text px-8 py-4 rounded-lg font-vat text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Offerte aanvragen
              </a>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
};