import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Contact ({ }) {
    const data = useStaticQuery(graphql`
    query contactQuery {
      markdownRemark(frontmatter: {slug: {eq: "profiel"}}) {
        html
        frontmatter {
          title
          Image01 {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                transformOptions: {cropFocus: CENTER}
                height: 250
                aspectRatio: 1.7
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
        <div className="container mx-auto py-20 text-center">
          <h2 className="text-4xl text-vat-bigtext">Contact content not available</h2>
        </div>
      );
    }

    const { html, frontmatter } = data.markdownRemark;
    const image = frontmatter?.Image01 ? getImage(frontmatter.Image01) : null;
    const title = frontmatter?.title || 'Contact';

    return (

    <div className="container mx-auto py-20 mt-5">
    <p className="py-4 pb-10 pt-10 text-4xl md:text-5xl text-vat-bigtext text-center">{title} </p>
    <div className="xl:grid xl:grid-cols-2 xl:gap-6 lg:px-20 lg:mx-20">
        <div className="xl:col-span-1">
        <div className="px-4 sm:px-0">
          <p className="text-lg sm:text-xl font-vat_smalltext leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        {image && (
          <div className="py-8 rounded-xl overflow-hidden text-center xl:text-left">
            <GatsbyImage image={image} alt={title || 'Contact image'}/>
          </div>
        )}
        </div>

        <div className="flex items-center justify-center px-10 py-12 xl:py-0">
        <div className="mx-auto w-full max-w-[550px]">
            <form action="https://formbold.com/s/91W2o" method="POST">
            <div className="mb-5">
                <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
                >
                Naam
                </label>
                <input
                type="text"
                name="name"
                id="name"
                placeholder="Naam"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-vat-bigtext focus:shadow-md"
                />
            </div>
            <div className="mb-5">
                <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
                >
                Email
                </label>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-vat-bigtext focus:shadow-md"
                />
            </div>
            <div className="mb-5">
                <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
                >
                Onderwerp
                </label>
                <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Onderwerp"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-light text-[#6B7280] outline-none focus:border-vat-bigtext focus:shadow-md"
                />
            </div>
            <div className="mb-5">
                <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
                >
                Bericht
                </label>
                <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Schrijf je bericht hier..."
                required
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-light text-[#6B7280] outline-none focus:border-vat-bigtext focus:shadow-md"
                ></textarea>
            </div>
            <div className="mb-5 ml-5 flex items-center font-medium font-sans">
              <input className="mr-2 leading-tight" type="checkbox" required/>
                <span className="text-sm ml-2">
                  Ik heb de <a href="privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">privacyverklaring</a> gelezen en ga hiermee akkoord.
                </span>
            </div>
            <div id="submit">
              <input type="submit" value="Verstuur" className="w-full rounded-md border border-[#e0e0e0] bg-vat-button py-3 px-6 text-base hover:bg-vat-button_hover font-medium text-white outline-none focus:border-vat-bigtext focus:shadow-md"/>
            </div>
            </form>
        </div>
        </div>
    </div>
    </div>
    )
};