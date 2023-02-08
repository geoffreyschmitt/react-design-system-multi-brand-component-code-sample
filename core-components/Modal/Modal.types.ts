import { ReactNode } from 'react';
import { SharedComponentsProps } from '../utils';

export const modalTransitionEndOptions = ['open', 'close', 'both'] as const;
export type ModalTransitionEndOptionType =
  typeof modalTransitionEndOptions[number];

export type ModalProps = SharedComponentsProps & {
  /**
   * Modal is open
   */
  isOpen: boolean;
  /**
   * Function to handle close modal
   */
  handleClose: () => void;
  /**
   * Triggered after the closing animation. Useful to control conditionally the modal component (with an isModalInDOM state for instance)
   */
  handleTransitionEnd?: () => void;
  /**
   * When to trigger the handleTransitionEnd function.
   */
  triggerHandleTransitionEnd?: ModalTransitionEndOptionType;
  /**
   * Modal content
   */
  children: ReactNode;
  /**
   * Modal content custom classnames to add
   */
  modalContentCustomClassnames?: string;
  /**
   * Modal identifier. Used for accessibility modal description and events callbacks.
   */
  modalIdentifier?: string;
  /**
   * Modal description for accessibility
   */
  modalDescription?: string;
  /**
   * Modal label for accessibility
   */
  modalLabel?: string;
  /**
   * Modal has a body overlay when open
   */
  hasModalOverlay?: boolean;
  /**
   * Click on modal overlay cause the clause of modal
   */
  canOverlayClickCloseModal?: boolean;
  /**
   * Modal content has button close
   */
  hasButtonClose?: boolean;
  /**
   * Modal button close content
   */
  buttonCloseContent?: ReactNode;
  /**
   * Modal button close title
   */
  buttonCloseTitle?: string;
  /**
   * On open, focus this element.
   * If no element is set for this prop, focus close button if hasButtonClose is true.
   */
  focusedElementOnOpen?: HTMLElement | null;
  /**
   * transition speed in ms. E.g. 300 === 0.3s
   */
  transitionSpeed?: number;
};

export type StyledModalProps = {
  customStyle?: ModalProps['customStyle'];
  transitionSpeed?: ModalProps['transitionSpeed'];
};
