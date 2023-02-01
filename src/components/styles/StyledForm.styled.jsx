import styled, { css } from 'styled-components';

export const StyledForm = styled.form`
  grid-column: 1 / -1;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 10fr 2fr;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.appBgMain};
  border-radius: 0.4rem;
  /* box-shadow: rgba(0, 0, 0, 0.2) 0.8rem 0.4rem 1.2rem; */
  box-shadow: rgba(0, 0, 0, 0.35) 0 2rem 3rem -1rem;
  transition: background-color 0.3s;

  ${props =>
    props.isEditing &&
    css`
      grid-column: unset;
      /* Add high fr number for input so it takes up the rest of the space when editing */
      grid-template-columns: 10fr 1fr;
      align-items: initial;
      padding: 0;
      border-radius: 0;
      box-shadow: none;
    `}
  /* 400px */
  @media only screen and (max-width: 25em) {
    grid-template-columns: 1.5fr 10fr 2fr;
  }
`;
