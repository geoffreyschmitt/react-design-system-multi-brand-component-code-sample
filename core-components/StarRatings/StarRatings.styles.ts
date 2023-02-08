import styled from 'styled-components';
import { StyledStarRatingsProps } from './StarRatings.types';

export const StyledStarRatings = styled.div<StyledStarRatingsProps>`
  position: relative;
  display: inline-block;

  .star-ratings__star-list {
    display: flex;
    flex-wrap: nowrap;

    .star-ratings__star {
      margin-right: 4px;
      flex: 0 0 ${(props) => props.starSize}px;
    }

    &--active {
      position: absolute;
      top: 0;
      left: 0;
      width: ${(props) => props.activePercentage}%;
      height: 100%;
      overflow: hidden;
    }
  }

  .star-ratings__star {
    position: relative;
    width: ${(props) => props.starSize}px;
    height: ${(props) => props.starSize}px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  ${(props) => props.customStyle}
`;
