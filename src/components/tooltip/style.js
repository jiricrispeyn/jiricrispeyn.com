import styled from '@emotion/styled';
import { rgba } from 'polished';
import colors from '../../helpers/colors';

export const StyledContainer = styled.div`
  background-color: ${colors.white};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 7px 20px 0 ${rgba(colors.black, 0.08)};
`;

export const StyledTitle = styled.div`
  font-size: 0.9375rem;
  color: ${colors.purpleHeart};
`;
