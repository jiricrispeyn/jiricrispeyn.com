import styled from '@emotion/styled';
import { Anchor } from '../typography';

export const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: calc(100vh - 6.625rem);
  max-width: 40rem;
`;

export const AnchorButton = Anchor.withComponent('span');
