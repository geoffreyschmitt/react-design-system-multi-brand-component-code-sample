import styled from 'styled-components';
import { StyledButtonProps } from './Button.types';

export const StyledButton = styled.div<StyledButtonProps>`
  cursor: pointer;

  ${(props) => props.customStyle}
`;
