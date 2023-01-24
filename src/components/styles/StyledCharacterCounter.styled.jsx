import styled from 'styled-components';

export const StyledCharacterCounter = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  background-color: transparent;
  margin-left: 0.3rem;

  color: ${({ children, theme }) => {
    if (children < 1) {
      return theme.color.darkTheme.darkGrayBlue;
    } else {
      return theme.color.primary;
    }
  }};
`;
