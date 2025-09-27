import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const HeroBanner = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);

  // Query for banner image from CMS
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {slug: {eq: "banner"}}) {
        frontmatter {
          title
          logo_image {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                quality: 90
              )
            }
          }
        }
      }
    }
  `);

  const frontmatter = data.markdownRemark?.frontmatter;
  const logoImage = frontmatter?.logo_image ? getImage(frontmatter.logo_image) : null;

  useEffect(() => {
    // Simulate logo loading effect
    const timer = setTimeout(() => {
      setLogoLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Clean white background */}
      <div className="absolute inset-0 bg-white z-10"></div>

      {/* Content - Plain Image */}
      <div className="relative z-20 flex items-center justify-center w-full h-full px-4 py-8">
        {logoImage && (
          <GatsbyImage
            image={logoImage}
            alt="Aan Tafel"
            className="max-w-full max-h-full w-auto h-auto"
            style={{ maxWidth: '80%', maxHeight: '80%' }}
            objectFit="contain"
          />
        )}
      </div>

    </section>
  );
};

export default HeroBanner;