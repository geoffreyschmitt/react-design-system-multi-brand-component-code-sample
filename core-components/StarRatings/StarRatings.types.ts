import { SharedComponentsProps } from '../utils';

export type StarRatingsProps = SharedComponentsProps & {
  /**
   * Rating number of star
   */
  starNumber?: number;
  /**
   * Ratings of the product
   */
  ratings?: number;
  /**
   * Star icon size
   */
  size?: number;
  /**
   * Background star image src
   */
  backgroundStarImageSrc?: string;
  /**
   * Active star image src
   */
  activeStarImageSrc?: string;
};

export type StyledStarRatingsProps = {
  activePercentage: number;
  starSize: StarRatingsProps['size'];
  backgroundStarImageSrc: StarRatingsProps['backgroundStarImageSrc'];
  activeStarImageSrc: StarRatingsProps['activeStarImageSrc'];
  customStyle?: StarRatingsProps['customStyle'];
};
