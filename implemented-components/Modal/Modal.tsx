import React from 'react';

import { Modal as CoreModal } from 'link-to-core-component';

import { implementationCustomStyle } from './Modal.styles';

import { ModalProps } from './Modal.types';

const Modal = ({ children, customStyle = '', ...props }: ModalProps) => {
  return (
    <CoreModal
      customStyle={`${implementationCustomStyle} ${customStyle}`}
      {...props}
    >
      {children}
    </CoreModal>
  );
};
Modal.displayName = 'IMPLEMENTED-Modal';

export default Modal;
