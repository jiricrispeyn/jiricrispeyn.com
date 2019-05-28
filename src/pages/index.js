import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `jiri`,
        `crispeyn`,
        `front end`,
        `engineer`,
        `belgium`,
        `javascript`,
        `es6`,
        `react`,
      ]}
    />
    <Hero />
  </Layout>
);

export default IndexPage;
