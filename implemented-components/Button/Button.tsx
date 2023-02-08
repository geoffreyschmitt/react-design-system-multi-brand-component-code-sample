import React from 'react';
import { Button as CoreButton } from 'link-to-core-component';

import { ButtonProps } from './Button.types';

import { getImplementationCustomStyle } from './Button.styles';

const Button = ({
  children,
  customClassnames = '',
  variantList = ['primary'],
  size,
  customStyle = '',
  ...props
}: ButtonProps) => {
  return (
    <CoreButton
      {...props}
      customStyle={`${getImplementationCustomStyle(
        variantList,
        size,
      )} ${customStyle}`}
      customClassnames={`${customClassnames ? customClassnames : ''}${
        !!variantList &&
        Array.isArray(variantList) &&
        variantList.map((variant) => ` btn--${variant}`)
      }${!!size && ` btn--size-${size}`}
      `}
    >
      {children}
    </CoreButton>
  );
};
Button.displayName = 'IMPLEMENTED-Button';

export default Button;
