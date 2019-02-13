import React from 'react';
import PropTypes from 'prop-types';
import Container from '../container';
import Logo from '../logo';
import { StyledHeader, HeaderContent, StyledLink } from './style';

const Header = () => (
  <StyledHeader>
    <Container>
      <HeaderContent>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
      </HeaderContent>
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
