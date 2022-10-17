import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


export default function SplitSection ({ id, reverseOrder }) {
  const data = useStaticQuery(graphql`
  query MyQuery2 {
    allMarkdownRemark(filter: {frontmatter: {slug: {eq: "mijnkeuken_2"}}}) {
      edges {
        node {
          frontmatter {
            title
            slug
            image1alt
            date
            Image01 {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          internal {
            content
          }
        }
      }
    }
  }
        `
    )

  const image = getImage(data.allMarkdownRemark.edges[0].node.frontmatter.Image01);
  const text = data.allMarkdownRemark.edges[0].node.internal.content;
  const title = data.allMarkdownRemark.edges[0].node.frontmatter.title;

  return(
  <section id={id} className="py-20">
    <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <div className="lg:pl-32 xl:pr-18">
            <h3 className="text-vat-bigtext text-3xl font-semibold leading-tight">
              {title}
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              {text}
            </p>
          </div>
      </div>
      <div
        className={`mt-10 lg:mt-0 w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}
      >
        <GatsbyImage image={image} alt={data.allMarkdownRemark.edges[0].node.frontmatter.image1alt} />
      </div>
    </div>
  </section>
  )
};

