import React from 'react';
import Button from '../components/Button';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection1';
import StatsBox from '../components/StatsBox';
import SplitSection1 from '../components/SplitSection1';
import SplitSection2 from '../components/SplitSection2';
import SplitSection3 from '../components/SplitSection3';

export default function Index ({ data }) {
  return (
  <Layout>
    <section id="home" className="pt-20 md:pt-20">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-vat-bigtext text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Vrienden Aan Tafel
          </h1>
          <h2 className="text-vat-bigtext text-2xl lg:text-3xl xl:text-4xl ">
            Jij nodigt uit, ik kom koken.
          </h2>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Contact</Button>
          </p>
          <p className="mt-4 text-vat-subtext">Sed fermentum felis ut cursu</p>
        </div>
        <div className="xl:w-1/2 px-20">
        </div>
      </div>
    </section>
    <SplitSection1
    />
    <SplitSection2
      reverseOrder
    />
    <SplitSection3
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying </LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
  )
};
