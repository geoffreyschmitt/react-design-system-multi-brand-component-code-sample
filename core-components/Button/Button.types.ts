import { MouseEventHandler, ReactNode } from 'react';
import { RenderLinkType, SharedComponentsProps } from '../../../';

export type ButtonProps = SharedComponentsProps & {
  /**
   * Button contents
   */
  children: ReactNode;
  /**
   * href when component is a link
   */
  linkHref?: string;
  /**
   * button type when component is a button
   */
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  /**
   * Method the handle the onClick event
   */
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  /**
   * Should the button be disabled?
   * Only really disable button and not a link as this shouldn't be disabled
   */
  isDisabled?: boolean;
  /**
   * Method to render link
   */
  renderLink?: RenderLinkType;
};

export type StyledButtonProps = {
  customStyle?: ButtonProps['customStyle'];
};
