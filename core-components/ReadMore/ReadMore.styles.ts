import styled from 'styled-components';
import { StyledReadMoreProps } from './ReadMore.types';

export const StyledReadMore = styled.div<StyledReadMoreProps>`
  .read-more__content {
    line-height: ${(props) => props.contentLineHeight};
    ${(props) =>
      props.isTruncated && props.maxLines
        ? `
        display: -webkit-box;
        -webkit-line-clamp: ${props.maxLines};
        -webkit-box-orient: vertical;
        overflow: hidden;
    `
        : ''}
  }
  .read-more__button {
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
  }

  ${(props) => props.customStyle}
`;
