import React from 'react';
import Layout from '../components/layout/Layout';
import Banner from '../components/Banner';
import Button from '../components/Button';
import SplitSection1 from '../components/SplitSection1';
import SplitSection2 from '../components/SplitSection2';
import SplitSection3 from '../components/SplitSection3';
import Formula1 from '../components/Formula1';
import Contact from '../components/Contact';

export default function Index ({ }) {
  return (
  <Layout>
    <Banner />
    <SplitSection1 />
    <SplitSection2 reverseOrder />
    <SplitSection3 />
    <section class = "flex container items-center mx-auto">
      <div>
      <Formula1 />
      </div>
      <div class="py-10 text-l">
      <Button>BOEK</Button>
      </div>
      <div>
      <Formula1 />
      </div>
    </section>
    <Contact />
  </Layout>
  )
};
