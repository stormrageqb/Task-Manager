import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  border: none;
  display: block;
  font-family: inherit;
  font-size: 1.6rem;
  padding: 0.2rem 0;
  background-color: ${({ theme }) => theme.color.darkTheme.darkBlueDesat};
  color: ${({ theme }) => theme.color.lightTheme.lightGray};

  &:focus {
    border: none;
    outline: none;

    ${props =>
      props.editing &&
      css`
        border-bottom: 0.1rem solid
          ${({ theme }) => theme.color.darkTheme.darkestGrayBlue};
        margin-bottom: -0.1rem;
      `}
  }
  &::placeholder {
    font-weight: 500;
  }

  ${props =>
    props.editing &&
    css`
      /* Note that this is a little bit hacky...there may be a better solution */
      line-height: 1.34999999999;
    `}
`;
