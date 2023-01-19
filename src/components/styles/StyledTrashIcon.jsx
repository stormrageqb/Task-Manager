import TrashIcon from '/src/assets/icon-trash.svg';
import styled, { css } from 'styled-components';
import Button from '../Button';

// Transient props syntax
// const StyledIcon = styled(({ ...props }) => <TrashIcon {...props} />)`

const StyledIcon = styled(TrashIcon)`
  height: 1.45rem;
  display: inline-block;
  background-color: transparent;
  transition: all 0.2s;
  width: 1.45rem;
  margin-top: -0.1rem;
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
      cursor: default;
    `}
`;

const StyledTrashIcon = ({ ...props }) => {
  return <StyledIcon {...props} />;
};

export default StyledTrashIcon;

// export const StyledTrashIcon = ({ ...props }) => {
//   return <StyledIcon {...props} />;
// };

// export const StyledTrashIcon = () => {
//   return <StyledTrashIcon />;
// };
