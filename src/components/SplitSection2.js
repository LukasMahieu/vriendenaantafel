import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


export default function SplitSection ({ id, reverseOrder }) {
  const data = useStaticQuery(graphql`
  query MyQuery2 {
    markdownRemark(frontmatter: {slug: {eq: "mijnkeuken_2"}}) {
      frontmatter {
        title
        Image01 {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              transformOptions: {cropFocus: CENTER}
              aspectRatio: 1.3
              )
          }
        }
      }
      internal {
        content
      }
    }
  }
        `
    )

  // Error handling for missing content
  if (!data?.markdownRemark) {
    return (
      <section className="pt-20">
        <div className="container mx-auto text-center">
          <h3 className="text-vat-button text-2xl font-semibold">Content niet beschikbaar</h3>
        </div>
      </section>
    );
  }

  const { frontmatter, internal } = data.markdownRemark;
  const image = frontmatter?.Image01 ? getImage(frontmatter.Image01) : null;
  const text = internal?.content || '';
  const title = frontmatter?.title || 'Mijn Keuken';

  return(
  <section id={id} className="pt-20">
    <div className="container mx-auto items-center flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <div className="lg:pl-12">
            <h3 className="text-vat-button text-2xl sm:text-3xl font-semibold leading-tight">
              {title}
            </h3>
            <p className="mt-8 text-lg sm:text-xl font-vat_smalltext  leading-relaxed">
              {text}
            </p>
          </div>
      </div>
      <div
        className={`mt-10 lg:mt-0 w-full lg:w-1/2 overflow-hidden rounded-md ${reverseOrder && `order-last lg:order-first`}`}
      >
        {image ? (
          <GatsbyImage image={image} alt={title || 'Mijn Keuken'} />
        ) : (
          <div className="bg-gray-200 h-64 flex items-center justify-center rounded-md">
            <span className="text-gray-500">Afbeelding niet beschikbaar</span>
          </div>
        )}
      </div>
    </div>
  </section>
  )
};

