import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

export default function Info (){
    const data = useStaticQuery(graphql`
    query Info {
        markdownRemark(frontmatter: {slug: {eq: "info"}}) {
          html
          frontmatter {
            title
            slug
          }
        }
      }
    `)

    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;


    return(
        <div className="flex justify-center pt-10 lg:px-20 text-vat-bigtext text-4xl md:text-5xl">
            <div className="py-4 px-10 lg:px-20 bg-white shadow-xl rounded-lg">
                <div>
                    <h2 className="text-vat-bigtext text-center text-4xl md:text-5xl pt-10 sm:pt-5">{frontmatter.title}</h2>
                    <div className="py-5 mt-2 text-vat-smalltext font-vat_smalltext text-xl font-medium" dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
            </div>
        </div>
    )

}