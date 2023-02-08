import React, { useEffect, useRef, useState } from 'react';

import { StyledModal } from './Modal.styles';

import { ModalProps } from './Modal.types';

const Modal = ({
  isOpen,
  handleClose,
  handleTransitionEnd = () => {},
  triggerHandleTransitionEnd = 'close',
  children,
  componentClassname = 'modal',
  customClassnames = '',
  modalContentCustomClassnames = '',
  customStyle = '',
  modalIdentifier = 'modal',
  modalDescription = `This is a dialog window which overlays the main content of the page.
   Pressing the Close Modal button will close the modal 
   and bring you back to where you were on the page.`,
  modalLabel,
  hasModalOverlay = true,
  canOverlayClickCloseModal = true,
  hasButtonClose = true,
  buttonCloseContent = 'X',
  buttonCloseTitle = 'Close button',
  focusedElementOnOpen = null,
  transitionSpeed = 300,
}: ModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const [hasBeenOpened, setHasBeenOpened] = useState(false); // Necessary for animation at opening

  useEffect(() => {
    if (isOpen) {
      if (focusedElementOnOpen) {
        focusedElementOnOpen.focus();
      } else if (hasButtonClose && closeButtonRef?.current) {
        closeButtonRef?.current.focus();
      }
      setHasBeenOpened(true);
    } else {
      setHasBeenOpened(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keyup', close);
    return () => window.removeEventListener('keyup', close);
  }, []);

  const handleTransitionEndWithTriggerOption = () => {
    if (
      // Only at modal opening
      (triggerHandleTransitionEnd === 'open' && isOpen) ||
      // Only at modal closing
      (triggerHandleTransitionEnd === 'close' && !isOpen) ||
      // Both opening and closing
      triggerHandleTransitionEnd === 'both'
    ) {
      handleTransitionEnd();
    }
  };

  return (
    <StyledModal
      onTransitionEnd={handleTransitionEndWithTriggerOption}
      role="dialog"
      aria-modal="true"
      className={`${componentClassname} ${
        hasBeenOpened ? `${componentClassname}--is-open ` : ''
      } ${customClassnames ? customClassnames : ''}`}
      customStyle={customStyle}
      aria-label={modalLabel}
      aria-describedby={`${modalIdentifier}__description`}
      transitionSpeed={transitionSpeed}
    >
      <div className="sr-only" id={`${modalIdentifier}__description`}>
        {modalDescription}
      </div>

      {hasModalOverlay && (
        <div
          aria-hidden="true"
          className={`${componentClassname}__overlay`}
          onClick={() => {
            canOverlayClickCloseModal && handleClose();
          }}
        />
      )}

      <div
        className={`${componentClassname}__content ${modalContentCustomClassnames}`}
      >
        {hasButtonClose && (
          <button
            className={`${componentClassname}__btn-close`}
            type="button"
            title={buttonCloseTitle}
            onClick={handleClose}
            ref={closeButtonRef}
          >
            {buttonCloseContent}
          </button>
        )}
        {children}
      </div>
    </StyledModal>
  );
};
Modal.displayName = 'Modal';

export default Modal;
