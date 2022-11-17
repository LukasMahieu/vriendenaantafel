import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Banner ({  }) {
    const data = useStaticQuery(graphql`
    query Formula2 {
      allMarkdownRemark(filter: {frontmatter: {slug: {eq: "formule_2"}}}) {
        edges {
          node {
            html
            frontmatter {
              title
              slug
              date
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
      }
    }
          `
    )

    const html = data.allMarkdownRemark.edges[0].node.html;
    const title = data.allMarkdownRemark.edges[0].node.frontmatter.title;
    const price = data.allMarkdownRemark.edges[0].node.frontmatter.price;

    const image = getImage(data.allMarkdownRemark.edges[0].node.frontmatter.Image01);

    return (
    <div class="py-4 px-20 md:px-5 lg:px-20 bg-white shadow-lg rounded-lg">
    <div class="flex justify-center md:justify-end mb-5">
        <GatsbyImage image={image} alt={data.allMarkdownRemark.edges[0].node.frontmatter.image1alt}/>
    </div>
    <div>
        <h2 class="text-vat-bigtext text-3xl font-semibold">{title}</h2>
        <p class="mt-2 text-vat-smalltext font-vat_smalltext text-lg" dangerouslySetInnerHTML={{ __html: html }}></p>
        
    </div>
    <div class="flex justify-end mt-4">
        <a href="#" class="text-xl font-medium text-vat-bigtext font-bold">{price}</a>
    </div>
    </div>
    )
}
