import SunIcon from '/src/assets/icon-sun.svg';
import MoonIcon from '/src/assets/icon-moon.svg';
import styled, { css } from 'styled-components';

const StyledAppHeader = styled.header`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;

const StyledLogo = styled.h1`
  text-transform: uppercase;
  letter-spacing: 0.85rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.titleColor};
  line-height: 1;
  padding-top: 0.2rem;
`;

const StyledSunIcon = styled(SunIcon)`
  fill: ${({ theme }) => theme.fontColorPrimary};
  transform: scale(0.8);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    fill: ${({ theme }) => theme.fontColorPrimaryHover};
  }
`;

const StyledMoonIcon = styled(MoonIcon)`
  /* color: #f8f6f6; */
  fill: ${({ theme }) => theme.fontColorPrimary};
  transform: scale(0.8);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    fill: ${({ theme }) => theme.fontColorPrimaryHover};
  }
`;

const AppHeader = ({ userTheme, setUserTheme }) => {
  const toggleTheme = () => {
    userTheme === 'dark'
      ? setUserTheme(prevTheme => (prevTheme = 'light'))
      : setUserTheme(prevTheme => (prevTheme = 'dark'));
  };
  return (
    <StyledAppHeader>
      <StyledLogo>Todo</StyledLogo>
      {userTheme === 'dark' ? (
        <StyledSunIcon onClick={toggleTheme} />
      ) : (
        <StyledMoonIcon onClick={toggleTheme} />
      )}
    </StyledAppHeader>
  );
};

export default AppHeader;
