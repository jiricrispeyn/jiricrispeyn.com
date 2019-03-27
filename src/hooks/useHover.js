import { useState } from 'react';

const useHover = () => {
  const [isHovered, setHovered] = useState(false);
  const bind = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  return [isHovered, bind];
};

export default useHover;
