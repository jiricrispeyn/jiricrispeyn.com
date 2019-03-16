import styled from '@emotion/styled';
import colors from '../../helpers/colors';

export const Anchor = styled.a`
  position: relative;
  color: ${colors.black};
  text-decoration: none;
  transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: ${colors.black};
  }

  &:hover,
  &:focus {
    color: #000;
    border-color: #000;
  }
`;
