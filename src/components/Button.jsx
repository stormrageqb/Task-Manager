import styled, { css } from 'styled-components';

const Button = styled.button`
  color: ${({ theme }) => theme.color.darkTheme.darkGrayBlue};
  display: inline-block;
  border: none;
  font-size: 1.1rem;
  /* padding: 0.2rem 0.2rem; */
  background-color: transparent;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
  width: fit-content;
  align-self: center;
  justify-self: flex-end;
  text-transform: capitalize;
  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }

  ${props =>
    props.footer &&
    css`
      place-self: initial;
      padding: 0;
    `}

  ${props =>
    props.lastChild &&
    css`
      margin-left: auto;

      &:hover {
        color: ${({ theme }) => theme.color.secondary};
      }
    `}
  ${props =>
    props.save &&
    css`
      color: ${({ theme }) => theme.color.primary};
    `}
  ${props =>
    props.xModal &&
    css`
      position: absolute;
      z-index: 10;
      top: 1rem;
      right: 2rem;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.color.darkTheme.darkestGrayBlue};

      &:hover {
        color: ${({ theme }) => theme.color.darkTheme.darkerGrayBlue};
      }
    `}
    ${props =>
    props.modalFooter &&
    css`
      place-self: center;
      font-size: 1.8rem;
      height: 100%;
      width: 100%;
      padding: 2.4rem 0;

      &:hover {
        background-color: ${({ theme }) =>
          theme.color.darkTheme.darkerGrayBlue};
      }
    `}
    ${props =>
    props.modalFooterRight &&
    css`
      border-left: 0.1rem solid
        ${({ theme }) => theme.color.darkTheme.darkerGrayBlue};
    `}

    ${props =>
    props.ariaPressed &&
    css`
      color: ${({ theme }) => theme.color.primary};
    `}
`;

export default Button;
