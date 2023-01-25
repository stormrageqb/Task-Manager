import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  border: none;
  display: block;
  font-family: inherit;
  font-size: 1.6rem;
  padding: 0.2rem 0;
  background-color: ${({ theme }) => theme.appBgMain};
  color: ${({ theme }) => theme.fontColorPrimary};
  transition: background-color 0.3s;

  &::placeholder {
    font-weight: 500;
  }

  &:focus {
    border: none;
    outline: none;

    ${props =>
      // Fixed hack, but consider changing color
      props.editing &&
      css`
        box-shadow: 0 0.1rem 0 0 ${({ theme }) => theme.darkBoxShadow};
      `}
  }

  ${props =>
    props.editing &&
    css`
      padding: 0;
      line-height: 1.6;
    `}
`;
