import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from '../components/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Banner ({  }) {
  const data = useStaticQuery(graphql`
  query bannerQuery {
    markdownRemark(frontmatter: {slug: {eq: "banner"}}) {
      frontmatter {
        title
        subtitle
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
  `)

  // Error handling for missing content
  if (!data?.markdownRemark) {
    return (
      <section id="home">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-4xl text-vat-bigtext">Content not available</h1>
        </div>
      </section>
    );
  }

  const { frontmatter, internal } = data.markdownRemark;
  const image = frontmatter?.Image01 ? getImage(frontmatter.Image01) : null;
  const image_full = frontmatter?.Image02 ? getImage(frontmatter.Image02) : null;
  const text = internal?.content || '';
  const title = frontmatter?.title || 'Vrienden aan Tafel';
  const subtitle = frontmatter?.subtitle || 'Welkom';

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
      {image && (
        <div className="w-1/2 py-5 xl:ml-20 lg:py-0 lg:hidden">
          <GatsbyImage image={image} alt={title || 'Vrienden aan Tafel'} className="hero-img" style={{ opacity: 1.0 }}/>
        </div>
      )}
      {image_full && (
        <div className="w-2/3 py-5 px-0 mx-0 overflow-hidden rounded-md lg:py-0 hidden lg:block">
          <GatsbyImage image={image_full} alt={title || 'Vrienden aan Tafel'} className="hero-img" style={{ opacity: 1.0 }}/>
        </div>
      )}
      </div>
    </section>
  )
};