import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../../helpers/colors';

const StyledLogo = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: ${colors.black};
`;

const SmoothCorners = ({ size, color }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>App Icon</title>
    <desc>Created with Sketch.</desc>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        transform="translate(-120.000000, -20.000000)"
        fill={color}
        fillRule="nonzero"
      >
        <path d="M150.766622,20 L169.233378,20 C179.931602,20 183.811037,21.1139073 187.722148,23.2055924 C191.63326,25.2972776 194.702722,28.3667404 196.794408,32.2778516 C198.886093,36.1889627 200,40.0683975 200,50.7666224 L200,69.2333776 C200,79.9316025 198.886093,83.8110373 196.794408,87.7221484 C194.702722,91.6332596 191.63326,94.7027224 187.722148,96.7944076 C183.811037,98.8860927 179.931602,100 169.233378,100 L150.766622,100 C140.068398,100 136.188963,98.8860927 132.277852,96.7944076 C128.36674,94.7027224 125.297278,91.6332596 123.205592,87.7221484 C121.113907,83.8110373 120,79.9316025 120,69.2333776 L120,50.7666224 C120,40.0683975 121.113907,36.1889627 123.205592,32.2778516 C125.297278,28.3667404 128.36674,25.2972776 132.277852,23.2055924 C136.188963,21.1139073 140.068398,20 150.766622,20 Z" />
      </g>
    </g>
  </svg>
);

const Logo = props => {
  return (
    <StyledLogo>
      <SmoothCorners size={40} color="#fad050" />
      <div style={{ position: 'absolute' }}>J</div>
    </StyledLogo>
  );
};

Logo.propTypes = {
  size: PropTypes.number,
};

export default Logo;
