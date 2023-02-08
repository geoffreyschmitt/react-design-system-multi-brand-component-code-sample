import { colors } from '../../..';

export const implementationCustomStyle = `
    &.modal {
    .modal__content {
        min-height: 150px;
    }
    
    .modal__btn-close {
        position: absolute;
        top: 28px;
        right: 24px;
    }
    }

    .modal__overlay {
    backdrop-filter: blur(8px);
    background: ${colors.modalOverlayBackground};
    }

    .modal__content {  
    border-radius: 19px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
    background: ${colors.modalContentBackground};
    }

    .modal__btn-close {
    padding: 0;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-weight: 500;
    line-height: 0.75;
    color: ${colors.secondary};
    background: transparent;
    border: none;
    cursor: pointer;
    }
`;
