import React from 'react';
import { StyledContainer, StyledTitle } from './style';

const Tooltip = ({ title, style }) => {
  return (
    <StyledContainer style={style}>
      <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
  );
};

export default Tooltip;
