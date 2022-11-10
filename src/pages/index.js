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

export default function Index ({ }) {
  return (
  <Layout>
    <div class = 'flex flex-col container mx-auto items-center px-10 md:px-20'>
      <div>
        <Banner />
      </div>
      <div id = 'mijnkeuken' class='flex flex-col'>
        <div class = ''>
        <SplitSection1 />
        </div>
        <div>
        <SplitSection2 reverseOrder />
        </div>
        <div>
        <SplitSection3 />
        </div>
      </div>
      <div>
        <div id="formules" class="container mx-auto text-vat-bigtext text-center font-bold text-4xl md:text-5xl pb-10 pt-10 sm:pt-20">
            Formules
        </div>
        <section class = "flex flex-col gap-6 md:gap-0 md:flex-row container items-center mx-auto">
          <div>
          <Formula1 />
          </div>
          <div class="hidden md:block py-10 text-l">
          <AnchorLink className="px-4" href="#contact">
            <Button>BOEK</Button>
          </AnchorLink>
          </div>
          <div>
          <Formula2 />
          </div>
        </section>
      </div>
      <div>
        <Contact />
      </div>
    </div>
  </Layout>
  )
};
