import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from '../components/Button';
import InstagramIcon from "../../src/assets/instagram.svg";

export default function Banner ({  }) {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {slug: {eq: "banner"}}}) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            image1alt
            date
            Image01 {
              childImageSharp {
                gatsbyImageData(aspectRatio: 2.2, transformOptions: {cropFocus: CENTER})
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
  const text = data.allMarkdownRemark.edges[0].node.internal.content;
  const title = data.allMarkdownRemark.edges[0].node.frontmatter.title;
  const subtitle = data.allMarkdownRemark.edges[0].node.frontmatter.subtitle;

  return (
    <section id="home">
      <div class="relative container mx-auto flex">
        <div class="text-center text-transform: uppercase flex flex-col">
          <h1 class="pt-5 text-2xl lg:text-5xl xl:text-6xl font-bold text-vat-bigtext text-left">{title}</h1>
          <h3 class="text-xl lg:text-2xl xl:text-3xl text-vat-bigtext text-left">{subtitle}</h3>
          <div class="flex justify-evenly pt-3 pr-10">
            <div class="text-left text-xl pt-5">
              <Button>CONTACT</Button>
            </div>
            <div class="pt-0">
              <a href="https://www.instagram.com/vriendenaantafel/" target="_blank">
              <button type="button" class="w-10"/>
                <InstagramIcon/>
              </a>
            </div>
          </div>
        </div>
      <div class="w-4/6 relative">
        <GatsbyImage image={image} alt={data.allMarkdownRemark.edges[0].node.frontmatter.image1alt } className="hero-img" style={{ opacity: 1.0 }}/>
      </div>
      </div>
    </section>
  )
};

//