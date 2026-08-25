import React from "react";
import { StyledHero } from "./style";
import { Anchor } from "../typography";

const Hero = () => {
  return (
    <StyledHero>
      <h1>Hi! I'm Jiri Crispeyn — a Software Engineer based in Belgium</h1>
      <p>
        Staff Software Engineer{" "}
        <Anchor
          href="//shopify.engineering"
          target="blank"
          rel="noopener noreferrer"
          activeColor="#008060"
        >
          @shopify
        </Anchor>
        , where I work on Point of Sale, the React Native app that makes
        commerce better for retail merchants. Previously{" "}
        <Anchor
          href="//rocketreach.co/aaqua-profile_b42ae115fe01bccd"
          target="blank"
          rel="noopener noreferrer"
          activeColor="#9206D3"
        >
          @aaqua
        </Anchor>,{" "}
        <Anchor
          href="//sentiance.com"
          target="blank"
          rel="noopener noreferrer"
          activeColor="#ff3d49"
        >
          @sentiance
        </Anchor>,{" "}
        and{" "}
        <Anchor
          href="//nascom.be"
          target="blank"
          rel="noopener noreferrer"
          activeColor="#f90f37"
        >
          @nascom
        </Anchor>
        . I contribute to open source projects on{" "}
        <Anchor
          href="//github.com/jiricrispeyn"
          target="blank"
          rel="noopener noreferrer"
          activeColor="#333"
        >
          Github
        </Anchor>
        . I share my own <code style={{ fontSize: 14 }}>{`<View />`}</code>s on{" "}
        <Anchor
          href="//x.com/jiricrispeyn"
          target="blank"
          rel="noopener noreferrer"
          activeColor="#000000"
        >
          X
        </Anchor>
        . You can find my work history on{" "}
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
      <address style={{ fontStyle: "normal" }}>
        Get in touch at{" "}
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
