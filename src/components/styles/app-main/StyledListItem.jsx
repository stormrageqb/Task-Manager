import styled, { css } from 'styled-components';
import { Reorder } from 'framer-motion';

export const StyledListItem = styled(Reorder.Item)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.fontColorPrimary};
  font-weight: 400;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr 1fr;
  /* Change grid to allow form to fit - form is one child of grid including input and button - basically add 1fr to include the the input and save button in one grid column and subtract one from the end column */
  ${props =>
    props.isEditing &&
    css`
      grid-template-columns: 1fr 11fr 1fr;
    `}
  align-items: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.appBgMain};
  transition: background-color 0.3s;

  border-bottom: 0.1rem solid ${({ theme }) => theme.fontColorDarkMd};
  list-style: none;
  z-index: 10;
  :first-child {
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
  }
  /* 400px */
  @media only screen and (max-width: 25em) {
    grid-template-columns: 1.5fr 10fr 1fr 1fr;
  }
`;
