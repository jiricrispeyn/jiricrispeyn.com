import React from 'react';
import { StyledHero, AnchorButton } from './style';
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
        Javascript. I contribute to open source projects on{' '}
        <Anchor
          href="//github.com/jiricrispeyn"
          target="blank"
          rel="noopener noreferrer"
        >
          Github
        </Anchor>
        . I share my own <code>{`<View />`}</code>s on{' '}
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
      <address style={{ fontStyle: 'normal' }}>
        Get in touch at{' '}
        <AnchorButton>jiri.crispeyn[at]gmail[dot]com</AnchorButton>.
      </address>
    </StyledHero>
  );
};

export default Hero;
