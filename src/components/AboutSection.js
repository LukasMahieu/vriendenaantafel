import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import StyledMarkdown from './StyledMarkdown';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('over');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Query for about section from CMS
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {title: {eq: "Concept"}}) {
        frontmatter {
          title
          intro_content
          intro_image {
            childImageSharp {
              gatsbyImageData(
                height: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                quality: 90
              )
            }
          }
          visie_title
          visie_content
          visie_image {
            childImageSharp {
              gatsbyImageData(
                height: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                quality: 90
              )
            }
          }
          keuken_title
          keuken_content
          keuken_image {
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
  `);

  const frontmatter = data.markdownRemark?.frontmatter;
  const introImage = frontmatter?.intro_image ? getImage(frontmatter.intro_image) : null;
  const visieImage = frontmatter?.visie_image ? getImage(frontmatter.visie_image) : null;
  const keukenImage = frontmatter?.keuken_image ? getImage(frontmatter.keuken_image) : null;

  return (
    <section id="over" className="pt-48 pb-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-24">

          {/* Over Ons Section */}
          {frontmatter?.title && frontmatter?.intro_content && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Right side */}
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-vat text-vat-yellow mb-6">
                  {frontmatter.title}
                </h2>

                <div className="space-y-6 font-vat_smalltext text-vat-smalltext text-lg leading-relaxed">
                  <StyledMarkdown>{frontmatter.intro_content}</StyledMarkdown>
                </div>
              </div>

              {/* Image - Left side */}
              <div className="order-2 lg:order-1">
                {introImage && (
                  <div className="overflow-hidden flex justify-center">
                    <GatsbyImage
                      image={introImage}
                      alt={frontmatter.title}
                      className=""
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Visie Section */}
          {frontmatter?.visie_title && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className={`transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <h2 className="text-4xl md:text-5xl font-vat text-vat-yellow mb-6">
                  {frontmatter.visie_title}
                </h2>

                <div className="space-y-6 font-vat_smalltext text-vat-smalltext text-lg leading-relaxed">
                  <StyledMarkdown>{frontmatter.visie_content}</StyledMarkdown>
                </div>
              </div>

              {/* Image */}
              <div className={`transition-all duration-1000 delay-300 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                {visieImage && (
                  <div className="overflow-hidden flex justify-center">
                    <GatsbyImage
                      image={visieImage}
                      alt={frontmatter.visie_title}
                      className=""
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Keuken Section */}
          {frontmatter?.keuken_title && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - First on mobile, right on desktop */}
              <div className={`transition-all duration-1000 transform order-1 lg:order-2 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                <h2 className="text-4xl md:text-5xl font-vat text-vat-yellow mb-6">
                  {frontmatter.keuken_title}
                </h2>

                <div className="space-y-6 font-vat_smalltext text-vat-smalltext text-lg leading-relaxed">
                  <StyledMarkdown>{frontmatter.keuken_content}</StyledMarkdown>
                </div>
              </div>

              {/* Image - Second on mobile, left on desktop */}
              <div className={`transition-all duration-1000 delay-300 transform order-2 lg:order-1 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                {keukenImage && (
                  <div className="overflow-hidden flex justify-center">
                    <GatsbyImage
                      image={keukenImage}
                      alt={frontmatter.keuken_title}
                      className=""
                    />
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default AboutSection;