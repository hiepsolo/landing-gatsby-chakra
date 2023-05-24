import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const PlayIcon = () => {
  return (
    <StaticImage
      alt="play icon"
      placeholder="blurred"
      layout="fixed"
      src="../images/play-circle.png"
      sizes="icon-16"
    />
  );
};
