import React from 'react';
import { StyledHero } from './style';
import Social from '../social';

const Hero = () => {
  return (
    <StyledHero>
      <h1>Hi! I'm Jiri Crispeyn — a Front End Engineer based in Belgium</h1>
      <p>
        Lorem ipsum dolor sit amet, sea possit facilisi neglegentur at. Esse
        quot veniam sed id. Ius ea sumo dicam, cu vix habemus fierent tacimates,
        ex homero forensibus accommodare has. An omnis lorem duo, eu tollit
        conclusionemque nec, viderer lobortis duo ad. Per an case integre, id
        per posse soluta diceret. Idque argumentum scripserit has ex, vide
        graecis has in.
      </p>
      <Social />
    </StyledHero>
  );
};

export default Hero;
