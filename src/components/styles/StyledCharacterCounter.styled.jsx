import styled from 'styled-components';

export const StyledCharacterCounter = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  background-color: transparent;
  margin-left: 0.3rem;
  color: ${({ theme }) => theme.color.lightTheme.darkGrayBlue};
  /* color: ${({ theme }) => theme.color.primary}; */

  color: ${({ children, theme }) => {
    if (children < 1) {
      // TEMP COLOR
      return 'firebrick';
    } else {
      return theme.color.lightTheme.darkGrayBlue;
    }
  }};
`;
