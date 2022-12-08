import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

export default function Info (){
    const data = useStaticQuery(graphql`
    query Info {
        allMarkdownRemark(filter: {frontmatter: {slug: {eq: "info"}}}) {
            edges {
                node {
                    html
                    frontmatter {
                        title
                        slug
                    }
                }
            }
        }
    }
    `)
    const html = data.allMarkdownRemark.edges[0].node.html;
    const title = data.allMarkdownRemark.edges[0].node.frontmatter.title;

    return(
        <div class = "container pt-10 lg:px-20 mx-auto text-vat-bigtext text-4xl md:text-5xl">
            <div className="py-4 px-5 lg:px-20 bg-white shadow-xl rounded-lg">
                <div>
                    <h2 className="text-vat-bigtext text-center text-4xl md:text-5xl font-semibold pb-10 pt-10 sm:pt-5">{title}</h2>
                    <p className="py-5 mt-2 text-vat-smalltext font-vat_smalltext text-lg" dangerouslySetInnerHTML={{ __html: html }}></p>
                </div>
            </div>
        </div>
    )

}