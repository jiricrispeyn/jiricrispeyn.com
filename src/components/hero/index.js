import React from 'react';
import { StyledHero } from './style';
import Social from '../social';
import { Anchor } from '../typography';

const Hero = () => {
  return (
    <StyledHero>
      <h1>Hi! I'm Jiri Crispeyn — a Front End Engineer based in Belgium</h1>
      <p>
        I currently work at{' '}
        <Anchor href="//sentiance.com" target="blank" rel="noopener noreferrer">
          Sentiance
        </Anchor>{' '}
        where I visualize people’s behavior and real-time context using
        Javascript. I also contribute to open source projects on{' '}
        <Anchor
          href="//github.com/jiricrispeyn"
          target="blank"
          rel="noopener noreferrer"
        >
          Github
        </Anchor>
        . I share my (own) opininions on{' '}
        <Anchor
          href="//twitter.com/jiricrispeyn"
          target="blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Anchor>
        . You can find my work history on{' '}
        <Anchor
          href="//linkedin.com/in/jiricrispeyn"
          target="blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Anchor>
        .
      </p>
      <p>Get in touch at jiri.crispeyn[at]gmail[dot]com.</p>
      <Social />
    </StyledHero>
  );
};

export default Hero;
