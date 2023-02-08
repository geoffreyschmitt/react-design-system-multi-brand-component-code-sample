import React from 'react';

import { StyledTitle } from './Title.styles';

import { TitleProps } from './Title.types';

const Title = ({
  titleTag = 'h2',
  children,
  componentClassname = 'title',
  customClassnames = '',
  customStyle = '',
  ...props
}: TitleProps) => {
  return (
    <StyledTitle
      as={titleTag}
      className={`${componentClassname} ${customClassnames}`}
      customStyle={customStyle}
      {...props}
    >
      {children}
    </StyledTitle>
  );
};
Title.displayName = 'Title';

export default Title;
