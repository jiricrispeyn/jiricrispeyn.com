import React from 'react';
import PropTypes from 'prop-types';
import InstagramIcon from 'mdi-react/InstagramIcon';
import TwitterIcon from 'mdi-react/TwitterIcon';
import LinkedinIcon from 'mdi-react/LinkedinIcon';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import { StyledSocial, StyledIcon } from './style';

const Social = props => {
  return (
    <StyledSocial>
      <StyledIcon
        href="https://twitter.com/jiricrispeyn"
        target="blank"
        rel="noopener noreferrer"
        brandColor="#1DA1F2"
      >
        <TwitterIcon size={20} />
      </StyledIcon>
      <StyledIcon
        href="https://instagram.com/jiricrispeyn"
        target="blank"
        rel="noopener noreferrer"
        brandColor=""
      >
        <InstagramIcon size={20} />
      </StyledIcon>
      <StyledIcon
        href="https://linkedin.com/in/jiricrispeyn"
        target="blank"
        rel="noopener noreferrer"
        brandColor=""
      >
        <LinkedinIcon size={20} />
      </StyledIcon>
      <StyledIcon
        href="https://github.com/jiricrispeyn"
        target="blank"
        rel="noopener noreferrer"
        brandColor=""
      >
        <GithubCircleIcon size={20} />
      </StyledIcon>
    </StyledSocial>
  );
};

Social.propTypes = {};

export default Social;
