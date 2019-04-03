import styled from '@emotion/styled';
import { rgba } from 'polished';
import colors from '../../helpers/colors';

export const Anchor = styled.a`
  position: relative;
  color: ${colors.black};
  text-decoration: none;
  transition: all 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &::before {
    content: '';
    position: absolute;
    height: 2px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.black};
    transition: all 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    z-index: -10;
  }

  &:hover,
  &:focus {
    color: ${colors.white};

    &::before {
      height: 100%;
      background-color: ${props =>
        props.activeColor ? props.activeColor : colors.purpleHeart};
      box-shadow: 0 7px 20px 0 ${rgba(colors.black, 0.08)};
    }
  }
`;
