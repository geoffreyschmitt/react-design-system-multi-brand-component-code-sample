import { ElementType, ReactNode } from 'react';
import { SharedComponentsProps } from '../utils';

export type TitleProps = SharedComponentsProps & {
  /**
   * Title tag
   */
  titleTag?: ElementType;
  /**
   * Title content
   */
  children: ReactNode;
};

export type StyledTitleProps = {
  customStyle?: TitleProps['customStyle'];
};
