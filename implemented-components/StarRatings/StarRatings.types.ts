import { StarRatingsProps as CoreStarRatingsProps } from 'link-to-core-component';
import { SharedComponentsProps } from '../utils';

export type StarRatingsProps = CoreStarRatingsProps &
  SharedComponentsProps & {
    /**
     * Star icon with white background
     */
    whiteBg?: boolean;
  };
