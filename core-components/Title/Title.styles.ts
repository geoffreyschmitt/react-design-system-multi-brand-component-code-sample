import styled from 'styled-components';
import { StyledTitleProps } from './Title.types';

export const StyledTitle = styled.div<StyledTitleProps>`
  margin: 0;

  ${(props) => props.customStyle}
`;
