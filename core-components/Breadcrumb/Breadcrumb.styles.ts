import styled from 'styled-components';
import { StyledBreadcrumbProps } from './Breadcrumb.types';

export const StyledBreadcrumb = styled.div<StyledBreadcrumbProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .breadcrumb__item-wrapper {
    display: flex;
    align-items: center;
  }

  ${(props) => props.customStyle}
`;
