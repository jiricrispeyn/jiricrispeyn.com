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
        `staff software engineer`,
        `engineer`,
        `belgium`,
        `javascript`,
        `typescript`,
        `react native`,
      ]}
    />
    <Hero />
  </Layout>
);

export default IndexPage;
