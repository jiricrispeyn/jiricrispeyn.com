import React from 'react';
import { StyledHero } from './style';
import { Anchor } from '../typography';

const Hero = () => {
  return (
    <StyledHero>
      <h1>Hi! I'm Jiri Crispeyn — a Front End Engineer based in Belgium</h1>
      <p>
        I currently work at{' '}
        <Anchor
          href="//sentiance.com"
          target="blank"
          rel="noopener noreferrer"
          activeColor="#ff3d49"
        >
          Sentiance
        </Anchor>{' '}
        where I visualize people’s behavior and real-time context using
        Javascript. I contribute to open source projects on{' '}
        <Anchor
          href="//github.com/jiricrispeyn"
          target="blank"
          rel="noopener noreferrer"
          activeColor="#333"
        >
          Github
        </Anchor>
        . I share my own <code style={{ fontSize: 14 }}>{`<View />`}</code>s on{' '}
        <Anchor
          href="//twitter.com/jiricrispeyn"
          target="blank"
          rel="noopener noreferrer"
          activeColor="#38a1f3"
        >
          Twitter
        </Anchor>
        . You can find my work history on{' '}
        <Anchor
          href="//linkedin.com/in/jiricrispeyn"
          target="blank"
          rel="noopener noreferrer"
          activeColor="#0077b5"
        >
          LinkedIn
        </Anchor>
        .
      </p>
      <address style={{ fontStyle: 'normal' }}>
        Get in touch at{' '}
        <Anchor
          href="mailto:jiri.crispeyn@gmail.com"
          target="blank"
          rel="noopener noreferrer"
        >
          jiri.crispeyn[at]gmail[dot]com
        </Anchor>
      </address>
    </StyledHero>
  );
};

export default Hero;
