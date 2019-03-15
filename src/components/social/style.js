import styled from '@emotion/styled';
import colors from '../../helpers/colors';

export const StyledSocial = styled.div`
  display: flex;
`;

export const StyledIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.black};
  margin-left: 6px;

  &:first-child {
    margin-left: 0;
  }
`;
