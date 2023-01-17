import styled, { css } from 'styled-components';

const Button = styled.button`
  color: ${({ theme }) => theme.color.darkTheme.darkGrayBlue};
  display: inline-block;
  border: none;
  font-size: 1rem;
  padding: 0.2rem 0.2rem;
  background-color: transparent;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
  width: fit-content;
  place-self: center;
  text-transform: capitalize;
  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }

  ${props =>
    props.footer &&
    css`
      place-self: initial;
      padding: 0;
      font-size: 1.1rem;
    `}

  ${props =>
    props.lastChild &&
    css`
      margin-left: auto;
    `}
  ${props =>
    props.save &&
    css`
      color: ${({ theme }) => theme.color.primary};
    `}
`;

export default Button;
