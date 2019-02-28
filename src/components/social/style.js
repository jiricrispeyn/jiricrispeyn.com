import styled from '@emotion/styled';
import colors from '../../helpers/colors';

export const StyledSocial = styled.div`
  display: flex;
`;

export const StyledIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  /* color: ${colors.black}; */

  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
