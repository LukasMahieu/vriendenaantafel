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
import Info from '../components/Info';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-flip";


export default function Index ({ }) {
  return (
  <Layout>
    <div className='flex flex-col container mx-auto  px-10 md:px-20'>
      <div>
        <Banner />
      </div>
      <div id='mijnkeuken' className='flex flex-col'>
        <div className=''>
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
        <div id="formules" className="container mx-auto text-vat-bigtext text-center font-bold text-4xl md:text-5xl pb-10 pt-10 sm:pt-20">
            FORMULES
        </div>
        <section className="container mx-auto items-center space-y-6">
          <div className="block md:hidden">
          <Swiper effect={"flip"} loop={true} navigation={true} modules={[Navigation, EffectFlip]} className="formulaSwiper">
              <SwiperSlide>
                <Formula1 />
              </SwiperSlide>
              <SwiperSlide>
                <Formula2 />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="hidden md:block md:flex md:flex-row gap-6 justify-center">
            <Formula1 />
            <Formula2 />
          </div>
          <div className="text-l text-center">
            <AnchorLink className="px-4" href="#contact">
              <Button>BOEK</Button>
            </AnchorLink>
          </div>
        </section>
      </div>
      <div className='mt-20'>
        <PhotoGallery />
      </div>
      <div className='mt-20' id="info">
        <Info />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  </Layout>
  )
};
