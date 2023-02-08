import React from 'react';

import { StyledButton } from './Button.styles';

import { ButtonProps } from './Button.types';

const Button = ({
  children,
  linkHref,
  buttonType = 'button',
  handleClick = () => {},
  isDisabled = false,
  componentClassname = 'btn',
  customClassnames = '',
  customStyle = '',
  renderLink,
  ...props
}: ButtonProps) => {
  const componentDataBasedOnTag = linkHref
    ? { href: linkHref, onClick: handleClick }
    : { type: buttonType, disabled: isDisabled, onClick: handleClick };

  const component = (
    <StyledButton
      as={linkHref ? 'a' : 'button'}
      {...componentDataBasedOnTag}
      className={`${componentClassname} ${
        isDisabled ? `${componentClassname}--is-disabled` : ''
      } ${customClassnames}`}
      customStyle={customStyle}
      aria-disabled={isDisabled}
      tabIndex={0}
      {...props}
    >
      {children}
    </StyledButton>
  );

  if (renderLink && linkHref) {
    return (
      <>
        {renderLink({
          href: linkHref,
          children: component,
        })}
      </>
    );
  }

  return component;
};
Button.displayName = 'Button';

export default Button;
