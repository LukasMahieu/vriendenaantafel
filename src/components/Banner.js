import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from '../components/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Banner ({  }) {
  const data = useStaticQuery(graphql`
  query bannerQuery {
    allMarkdownRemark(filter: {frontmatter: {slug: {eq: "banner"}}}) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            date
            Image01 {
              childImageSharp {
                gatsbyImageData(
                  placeholder: NONE
                  transformOptions: {cropFocus: CENTER}
                  )
              }
            }
            Image02 {
              childImageSharp {
                gatsbyImageData(
                  placeholder: NONE
                  transformOptions: {cropFocus: CENTER}
                  )
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
  `)

  const image = getImage(data.allMarkdownRemark.edges[0].node.frontmatter.Image01);
  const image_full = getImage(data.allMarkdownRemark.edges[0].node.frontmatter.Image02);
  console.log(image_full);
  const text = data.allMarkdownRemark.edges[0].node.internal.content;
  const title = data.allMarkdownRemark.edges[0].node.frontmatter.title;
  const subtitle = data.allMarkdownRemark.edges[0].node.frontmatter.subtitle;

  return (
    <section id="home">
      <div className="relative container pb-20 mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="justify-center text-transform: uppercase flex flex-col">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-vat-bigtext text-center md:text-left">{title}</h1>
          <h3 className="text-2xl lg:text-2xl xl:text-3xl text-vat-bigtext text-center sm:text-left">{subtitle}</h3>
          <div className="py-6">
            <div className="text-center lg:text-left m:text-xl">
              <AnchorLink href="#contact">
                <Button>CONTACT</Button>
              </AnchorLink>
            </div>
            <div className="pt-0">
            </div>
          </div>
        </div>
      <div className="w-1/2 py-5 xl:ml-20 lg:py-0 lg:hidden">
        <GatsbyImage image={image} alt="alt" className="hero-img" style={{ opacity: 1.0 }}/>
      </div>
      <div className="w-2/3 py-5 px-0 mx-0 overflow-hidden rounded-md lg:py-0 hidden lg:block">
        <GatsbyImage image={image_full} alt="alt" className="hero-img" style={{ opacity: 1.0 }}/>
      </div>
      </div>
    </section>
  )
};

//