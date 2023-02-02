import styled from 'styled-components';
import { Reorder } from 'framer-motion';

export const StyledReorderTaskList = styled(Reorder.Group)`
  /* For scrollbar, note that flex is needed on parent and flex shrink: 0 on TaskListFooter child element */

  overflow-y: auto;
  /* Change if you want a different height for entire container */
  /* max-height: 30rem; */
  background-color: ${({ theme }) => theme.appBgMain};

  border-radius: 0.4rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollThumb};
    border: 0.4rem solid transparent;
    border-radius: 0.8rem;
    background-clip: padding-box;

    &:hover {
      background-color: ${({ theme }) => theme.scrollThumbHover};
    }
  }

  &::-webkit-scrollbar {
    width: 1.6rem;
  }
  scrollbar-color: ${({ theme }) => theme.appBgMain};

  @media only screen and (max-width: 47.875em) {
    overflow-y: initial;
  }
`;
