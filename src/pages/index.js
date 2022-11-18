import React from 'react';
import Layout from '../components/layout/Layout';
import Banner from '../components/Banner';
import Button from '../components/Button';
import SplitSection1 from '../components/SplitSection1';
import SplitSection2 from '../components/SplitSection2';
import SplitSection3 from '../components/SplitSection3';
import Formula1 from '../components/Formula1';
import Formula2 from '../components/Formula2';
import Contact from '../components/Contact';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PhotoGallery from '../components/PhotoGallery';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";


export default function Index ({ }) {
  return (
  <Layout>
    <div class = 'flex flex-col container mx-auto  px-10 md:px-20'>
      <div>
        <Banner />
      </div>
      <div id = 'mijnkeuken' class='flex flex-col'>
        <div class = ''>
        <SplitSection2 reverseOrder />
        </div>
        <div>
        <SplitSection1 />
        </div>
        <div>
        <SplitSection3 reverseOrder />
        </div>
      </div>
      <div>
        <div id="formules" class="container mx-auto text-vat-bigtext text-center font-bold text-4xl md:text-5xl pb-10 pt-10 sm:pt-20">
            FORMULES
        </div>
        <section class = "container mx-auto items-center space-y-6">
          <div class = "block md:hidden">
          <Swiper effect={"flip"} loop={true} navigation={true} modules={[Navigation, EffectFlip]} className="formulaSwiper">
              <SwiperSlide>
                <Formula1 />
              </SwiperSlide>
              <SwiperSlide>
                <Formula2 />
              </SwiperSlide>
            </Swiper>
          </div>
          <div class = "hidden md:block md:flex md:flex-row gap-6">
            <Formula1 />
            <Formula2 />
          </div>
          <div class="text-l text-center">
            <AnchorLink className="px-4" href="#contact">
              <Button>BOEK</Button>
            </AnchorLink>
          </div>
        </section>
      </div>
      <div class='mt-20'>
        <PhotoGallery />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  </Layout>
  )
};
