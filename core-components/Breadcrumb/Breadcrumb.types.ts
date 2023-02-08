import { ReactNode } from 'react';
//RenderLinkType Out of code sample
import { RenderLinkType, SharedComponentsProps } from '../../../';

export type BreadcrumbItemProps = {
  name: string;
  href?: string;
};

export type BreadcrumbProps = SharedComponentsProps & {
  /**
   * Breadcrumb item list
   */
  breadcrumbItemList: BreadcrumbItemProps[];
  /**
   * Breadcrumb item separator
   */
  breadcrumbItemSeparator?: ReactNode;
  /**
   * Index of the active breadcrumb index
   */
  activeIndexBreadcrumbIndex?: number;
  /**
   * Method to render link
   */
  renderLink?: RenderLinkType;
};

export type StyledBreadcrumbProps = {
  customStyle?: BreadcrumbProps['customStyle'];
};
