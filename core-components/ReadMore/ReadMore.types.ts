import { ReactNode } from 'react';
import { SharedComponentsProps } from '../utils';

export type ReadMoreProps = SharedComponentsProps & {
  /**
   * Is the default display truncate?
   */
  defaultIsTruncated?: boolean;
  /**
   * node to display for the read more
   */
  seeMoreButtonContent: ReactNode;
  /**
   * node to display for the read less
   */
  seeLessButtonContent: ReactNode;
  /**
   * The full content
   */
  content: string;
  /**
   * Truncate content Max lines
   */
  truncateContentMaxLines?: number;
  /**
   * Truncate content length
   */
  truncateContentLength?: number;
  /**
   * Truncated content if user don't want the truncate to be done at component level
   */
  truncatedContent?: string;
  /**
   * Truncate content end
   */
  truncateEndContent?: ReactNode;
  /**
   * Content line height
   */
  contentLineHeight?: number;
};

export type StyledReadMoreProps = {
  isTruncated?: boolean;
  maxLines?: number;
  contentLineHeight?: ReadMoreProps['contentLineHeight'];
  customStyle?: ReadMoreProps['customStyle'];
};
