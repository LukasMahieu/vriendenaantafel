import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from '../components/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Banner ({  }) {
  const data = useStaticQuery(graphql`
  query {
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
  const text = data.allMarkdownRemark.edges[0].node.internal.content;
  const title = data.allMarkdownRemark.edges[0].node.frontmatter.title;
  const subtitle = data.allMarkdownRemark.edges[0].node.frontmatter.subtitle;

  return (
    <section id="home">
      <div class="relative container pb-20 mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div class="justify-center text-transform: uppercase flex flex-col">
          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-vat-bigtext text-center md:text-left">{title}</h1>
          <h3 class="text-2xl lg:text-2xl xl:text-3xl text-vat-bigtext text-center sm:text-left">{subtitle}</h3>
          <div class="py-6">
            <div class="text-center lg:text-left m:text-xl">
              <AnchorLink href="#contact">
                <Button>CONTACT</Button>
              </AnchorLink>
            </div>
            <div class="pt-0">
            </div>
          </div>
        </div>
      <div class="w-1/2 py-5 xl:ml-20 lg:py-0 lg:hidden">
        <GatsbyImage image={image} alt={data.allMarkdownRemark.edges[0].node.frontmatter.image1alt } className="hero-img" style={{ opacity: 1.0 }}/>
      </div>
      <div class="w-2/3 py-5 px-0 mx-0 overflow-hidden rounded-xl lg:py-0 hidden lg:block">
        <GatsbyImage image={image_full} alt={data.allMarkdownRemark.edges[0].node.frontmatter.image1alt } className="hero-img" style={{ opacity: 1.0 }}/>
      </div>
      </div>
    </section>
  )
};

//