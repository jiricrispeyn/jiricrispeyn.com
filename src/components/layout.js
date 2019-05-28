import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Container from './container';
import './layout.css';

import { Anchor } from '../components/typography';
import Footer from '../components/footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()}, Built with{` `}
            <Anchor
              href="https://www.gatsbyjs.org"
              target="blank"
              rel="noopener noreferrer"
              activeColor="rgb(102, 51, 153)"
            >
              Gatsby
            </Anchor>
            {`, `}
            <Anchor
              href="https://emotion.sh"
              target="blank"
              rel="noopener noreferrer"
              activeColor="#D36AC2"
            >
              Emotion
            </Anchor>
            {`, 💻 and ☕`}
          </Footer>
        </Container>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
