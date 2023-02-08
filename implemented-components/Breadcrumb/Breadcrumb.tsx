import React from 'react';

import { Breadcrumb as CoreBreadcrumb } from 'link-to-core-component';

import { implementationCustomStyle } from './Breadcrumb.styles';

import { BreadcrumbProps } from './Breadcrumb.types';

const Breadcrumb = ({
  customStyle = '',
  breadcrumbItemSeparator = '',
  ...props
}: BreadcrumbProps) => {
  return (
    <CoreBreadcrumb
      {...props}
      breadcrumbItemSeparator={breadcrumbItemSeparator}
      customStyle={`${implementationCustomStyle} ${customStyle}`}
    />
  );
};
Breadcrumb.displayName = 'IMPLEMENTED-Breadcrumb';

export default Breadcrumb;
