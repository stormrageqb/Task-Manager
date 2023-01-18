import TrashIcon from '/src/assets/icon-trash.svg';
import styled from 'styled-components';

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
`;
