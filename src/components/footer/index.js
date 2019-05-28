import React from 'react';
import { StyledFooter } from './style';

const Footer = ({ children, style }) => (
  <StyledFooter style={style}>{children}</StyledFooter>
);

export default Footer;
