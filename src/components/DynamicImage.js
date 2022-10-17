import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

export default function DynamicImage ({ slug }) {
  const data = useStaticQuery(graphql`
        query($slug: String) {
            allMarkdownRemark(filter: {frontmatter: {slug: {eq: $slug}}}) {
            edges {
                node {
                frontmatter {
                    Image01 {
                    childImageSharp {
                        gatsbyImageData
                    }
                    }
                }
                }
            }
            }
        }
        `
        )

  const image = getImage(data.allMarkdownRemark.edges[0].node.frontmatter.Image01);

  return (
    <GatsbyImage image={image} alt={data.allMarkdownRemark.edges[0].node.frontmatter.image1alt} />
  )
}

