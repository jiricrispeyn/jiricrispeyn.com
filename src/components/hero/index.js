import React from 'react';
import { StyledHero } from './style';
import Social from '../social';

const Hero = () => {
  return (
    <StyledHero>
      <h1>Hi! I'm Jiri Crispeyn — a Front End Engineer based in Belgium</h1>
      <p>
        I currently work at{' '}
        <a href="//sentiance.com" target="blank" rel="noopener noreferrer">
          Sentiance
        </a>{' '}
        where I visualize people’s behavior and real-time context using
        Javascript. I also contribute to open source projects on{' '}
        <a
          href="//github.com/jiricrispeyn"
          target="blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        . I share my (own) opininions on{' '}
        <a
          href="//twitter.com/jiricrispeyn"
          target="blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        . You can find my work history on{' '}
        <a
          href="//linkedin.com/in/jiricrispeyn"
          target="blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
      <p>Get in touch at jiri.crispeyn[at]gmail[dot]com.</p>
      <Social />
    </StyledHero>
  );
};

export default Hero;
