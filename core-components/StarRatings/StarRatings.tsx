import React from 'react';

import { StyledStarRatings } from './StarRatings.styles';

import { StarRatingsProps } from './StarRatings.types';

//Out of code sample
import { BackgroundImage } from '../BackgroundImage';

const StarRatings = ({
  starNumber = 5,
  ratings,
  size = 12,
  backgroundStarImageSrc = 'star-image-src',
  activeStarImageSrc = 'active-star-image-src',
  componentClassname = 'star-ratings',
  customClassnames = '',
  customStyle,
}: StarRatingsProps) => {
  const getStarListItems = (type: 'background' | 'active') => {
    const stars = [];
    for (let i = 0; i < starNumber; i++) {
      stars.push(
        <BackgroundImage
          key={i}
          className={`${componentClassname}__star`}
          src={
            type === 'background' ? backgroundStarImageSrc : activeStarImageSrc
          }
        />,
      );
    }
    return stars;
  };

  return (
    <StyledStarRatings
      className={`${componentClassname} ${customClassnames}`}
      customStyle={customStyle}
      backgroundStarImageSrc={backgroundStarImageSrc}
      activeStarImageSrc={activeStarImageSrc}
      starSize={size}
      activePercentage={(ratings / starNumber) * 100}
    >
      <div className={`${componentClassname}__star-list`}>
        {getStarListItems('background')}
      </div>
      <div
        className={`${componentClassname}__star-list ${componentClassname}__star-list--active`}
      >
        {getStarListItems('active')}
      </div>
    </StyledStarRatings>
  );
};
StarRatings.displayName = 'StarRatings';

export default StarRatings;
