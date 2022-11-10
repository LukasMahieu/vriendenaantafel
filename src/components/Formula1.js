import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

export default function Banner ({  }) {
    const data = useStaticQuery(graphql`
    query Formula1 {
      allMarkdownRemark(filter: {frontmatter: {slug: {eq: "formule_1"}}}) {
        edges {
          node {
            html
            frontmatter {
              title
              slug
              date
              price
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

    return (
    <div class="py-4 px-20 md:px-5 lg:px-20 bg-white shadow-lg rounded-lg">
    <div class="flex justify-center md:justify-end mb-5">
        <img class="w-20 h-20 object-cover rounded-full border-2 border-yellow-500" src="https://th.bing.com/th/id/OIP.60Xz3zmGK7F3SPkaxeQ7CQHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
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
