import styled from 'styled-components';
import { StyledModalProps } from './Modal.types';
import { srOnly } from '../../../';

export const StyledModal = styled.aside<StyledModalProps>`
  ${srOnly}

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  opacity: 0;
  visibility: hidden;
  transition: ${(props) => `all ${props.transitionSpeed}ms ease-out`};

  &.modal--is-open {
    opacity: 1;
    visibility: visible;
  }

  .modal__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .modal__content {
    position: relative;
  }

  .modal__btn-close {
    cursor: pointer;
  }

  ${(props) => props.customStyle}
`;
