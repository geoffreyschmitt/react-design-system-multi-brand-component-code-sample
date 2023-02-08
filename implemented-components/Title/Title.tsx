import React from 'react';

import { Title as CoreTitle } from 'link-to-core-component';

import { getImplementationCustomStyle } from './Title.styles';

import { TitleProps } from './Title.types';

const Title = ({
  variantList = ['primary'],
  customClassnames = '',
  componentClassname = 'title',
  customStyle = '',
  ...props
}: TitleProps) => {
  let implementationCustomClassnames = customClassnames;

  if (variantList && Array.isArray(variantList)) {
    variantList.forEach((variant) => {
      implementationCustomClassnames += ` ${componentClassname}--${variant}`;
    });
  }

  return (
    <CoreTitle
      {...props}
      componentClassname={componentClassname}
      customClassnames={implementationCustomClassnames}
      data-text={typeof props.children === 'string' ? props.children : ''}
      customStyle={`${getImplementationCustomStyle({
        variantList,
      })} ${customStyle}`}
    />
  );
};
Title.displayName = 'IMPLEMENTED-Title';

export default Title;
