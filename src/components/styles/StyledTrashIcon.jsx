import TrashIcon from '/src/assets/icon-trash.svg';
import styled, { css } from 'styled-components';

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
  fill: ${({ theme }) => theme.fontColorDark};
  justify-self: flex-end;
  cursor: pointer;

  &:hover {
    fill: ${({ theme }) => theme.secondary};
  }

  & h1 {
    color: white;
    z-index: 55555555;
    font-size: 4rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  ${props =>
    props.modal &&
    css`
      height: 8.4rem;
      width: 8.4rem;
      fill: ${({ theme }) => theme.secondary};
      background-color: ${({ theme }) => theme.fontColorDarkLg};
      border-radius: 50%;
      padding: 1rem;
      cursor: default;

      @media only screen and (max-width: 47.875em) {
        height: 7rem;
        width: 7rem;
      }
    `}
`;

const StyledTrashIcon = ({ ...props }) => {
  return (
    <>
      <StyledIcon {...props} />
    </>
  );
};

export default StyledTrashIcon;
