import TrashIcon from '/src/assets/icon-trash.svg';
import styled, { css } from 'styled-components';

export const StyledTrashIcon = styled(TrashIcon)`
  height: 1.4rem;
  display: inline-block;
  background-color: transparent;
  transition: all 0.2s;
  width: 1.4rem;
  margin-top: -0.35rem;
  margin-right: -0.1rem;
  fill: ${({ theme }) => theme.color.darkTheme.darkGrayBlue};
  justify-self: flex-end;
  cursor: pointer;

  &:hover {
    fill: ${({ theme }) => theme.color.secondary};
  }

  ${props =>
    props.modal &&
    css`
      height: 8.4rem;
      width: 8.4rem;
      fill: ${({ theme }) => theme.color.primary};
      background-color: ${({ theme }) => theme.color.darkTheme.darkestGrayBlue};
      border-radius: 50%;
      padding: 1rem;
    `}
`;
