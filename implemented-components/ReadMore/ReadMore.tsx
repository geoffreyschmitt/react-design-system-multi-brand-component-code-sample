import React from 'react';

import { ReadMore as CoreReadMore } from 'link-to-core-component';

import { implementationCustomStyle } from './ReadMore.styles';

import { ReadMoreProps } from './ReadMore.types';

const ReadMore = ({ customStyle = '', ...props }: ReadMoreProps) => {
  return (
    <CoreReadMore
      customStyle={`${implementationCustomStyle} ${customStyle}`}
      {...props}
    />
  );
};
ReadMore.displayName = 'IMPLEMENTED-ReadMore';

export default ReadMore;
