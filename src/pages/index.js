import React from 'react';
import Button from '../components/Button';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import Banner from '../components/Banner';
import StatsBox from '../components/StatsBox';
import SplitSection1 from '../components/SplitSection1';
import SplitSection2 from '../components/SplitSection2';
import SplitSection3 from '../components/SplitSection3';
import Formula from '../components/Formula';

export default function Index ({ }) {
  return (
  <Layout>
    <Banner />
    <SplitSection1 />
    <SplitSection2 reverseOrder />
    <SplitSection3 />
    <Formula />
  </Layout>
  )
};
