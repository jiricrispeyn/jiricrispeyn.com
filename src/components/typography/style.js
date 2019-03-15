import styled from '@emotion/styled';
import { darken } from 'polished';

export const Anchor = styled.a`
  color: #736ced;
  border-bottom: 2px solid #736ced;
  text-decoration: none;
  transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover,
  &:focus {
    color: ${darken(0.2, '#736ced')};
    border-color: ${darken(0.2, '#736ced')};
  }
`;
