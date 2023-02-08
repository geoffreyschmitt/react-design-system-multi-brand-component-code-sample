import React from 'react';
import { StarRatings as CoreStarRatings } from 'link-to-core-component';

import { implementationCustomStyle } from './StarRatings.styles';

import { StarRatingsProps } from './StarRatings.types';

const StarRatings = ({
  whiteBg,
  backgroundStarImageSrc,
  activeStarImageSrc,
  customStyle = '',
  ...props
}: StarRatingsProps) => {
  const extension = whiteBg ? '.svg' : '.png';
  const basePathStarImageSrc = `img-path${
    whiteBg ? 'white-bg-' : ''
  }`;
  const currentBackgroundStarImageSrc = backgroundStarImageSrc
    ? backgroundStarImageSrc
    : `${basePathStarImageSrc}0${extension}`;
  const currentActiveStarImageSrc = activeStarImageSrc
    ? activeStarImageSrc
    : `${basePathStarImageSrc}1${extension}`;
  return (
    <CoreStarRatings
      customStyle={`${implementationCustomStyle} ${customStyle}`}
      backgroundStarImageSrc={currentBackgroundStarImageSrc}
      activeStarImageSrc={currentActiveStarImageSrc}
      {...props}
    />
  );
};
StarRatings.displayName = 'IMPLEMENTED-StarRatings';

export default StarRatings;
