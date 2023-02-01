import styled, { css } from 'styled-components';

export const StyledTaskText = styled.span`
  transition: all 0.2s;
  ${props =>
    props.task.complete &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.fontColorDark};
    `}
`;
