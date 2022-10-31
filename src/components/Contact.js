import React from 'react';
import Button from '../components/Button';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Contact ({ }) {
    const data = useStaticQuery(graphql`
    query contactQuery {
      allMarkdownRemark(filter: {frontmatter: {slug: {eq: "profiel"}}}) {
        edges {
          node {
            frontmatter {
              slug
              image1alt
              date
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

    <div class="container mx-auto py-12">
    <div class="md:grid md:grid-cols-2 md:gap-6">
        <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
            <GatsbyImage image={image} alt={data.allMarkdownRemark.edges[0].node.frontmatter.image1alt}/>
        </div>
        </div>

        <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
            <form action="https://formbold.com/s/91W2o" method="POST">
            <div class="mb-5">
                <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Naam
                </label>
                <input
                type="text"
                name="name"
                id="name"
                placeholder="Naam"
                required
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-vat-bigtext focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="email"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Email
                </label>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                required
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-vat-bigtext focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Onderwerp
                </label>
                <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Onderwerp"
                required
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-vat-bigtext focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="message"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Bericht
                </label>
                <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Schrijf je bericht hier..."
                required
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-vat-bigtext focus:shadow-md"
                ></textarea>
            </div>
            <div id="contact">
              <input type="submit" value="Verstuur" class="w-full rounded-md border border-[#e0e0e0] bg-vat-button py-3 px-6 text-base hover:bg-vat-button_hover font-medium text-white outline-none focus:border-vat-bigtext focus:shadow-md"/>
            </div>
            </form>
        </div>
        </div>
    </div>
    </div>
    )
};