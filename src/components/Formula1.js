import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Formula1 ({  }) {
    const data = useStaticQuery(graphql`
    query Formula1 {
      markdownRemark(frontmatter: {slug: {eq: "formule_1"}}) {
        html
        frontmatter {
          title
          price
          Image01 {
            childImageSharp {
              gatsbyImageData(
                placeholder: NONE
                transformOptions: {cropFocus: CENTER}
                height: 75
                )
            }
          }
        }
      }
    }
          `
    )

    // Error handling for missing content
    if (!data?.markdownRemark) {
      return (
        <div className="py-4 px-20 md:px-5 lg:px-20 bg-white shadow-lg rounded-lg">
          <h2 className="text-vat-bigtext text-3xl font-semibold">Formule niet beschikbaar</h2>
        </div>
      );
    }

    const { html, frontmatter } = data.markdownRemark;
    const title = frontmatter?.title || 'Formule 1';
    const price = frontmatter?.price || 'Prijs op aanvraag';
    const image = frontmatter?.Image01 ? getImage(frontmatter.Image01) : null;

    return (
    <div className="py-4 px-20 md:px-5 lg:px-20 bg-white shadow-lg rounded-lg">
    {image && (
      <div className="flex justify-center md:justify-end mb-5">
          <GatsbyImage image={image} alt={title || 'Formule 1'}/>
      </div>
    )}
    <div>
        <h2 className="text-vat-bigtext text-3xl font-semibold">{title}</h2>
        <p className="mt-2 text-vat-smalltext font-vat_smalltext text-lg" dangerouslySetInnerHTML={{ __html: html }}></p>
        
    </div>
    <div className="flex justify-end mt-4">
        <span className="text-xl font-medium text-vat-bigtext font-bold">{price}</span>
    </div>
    </div>
    )
}
