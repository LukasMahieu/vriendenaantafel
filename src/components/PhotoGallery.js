import React, { useRef, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  const data = useStaticQuery(graphql`
    query PhotoGallery {
      allFile(filter: {relativeDirectory: {eq: "images/gallery/photogallery"}} 
      sort: {order: ASC, fields: name}
      )
      {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                placeholder: NONE
                transformOptions: {cropFocus: CENTER}
                height: 600
                aspectRatio: 1.2
                )
            }
          }
        }
      }
    }
    `
  )

  const images = data.allFile.edges.map((edge) => {
      return (
          <SwiperSlide>
              <GatsbyImage image={getImage(edge.node)}/>
          </SwiperSlide>
      )
  })

  return (
  <>
    <Swiper
      breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
              slidesPerView: 3,
          },
        }}
      spaceBetween={30}
      pagination={
        true
      }
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      >
          {images}
      </Swiper>
  </>
  );
}
