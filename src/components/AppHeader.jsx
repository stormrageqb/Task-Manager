import SunIcon from '/src/assets/icon-sun.svg';
import MoonIcon from '/src/assets/icon-moon.svg';
import styled, { css, keyframes } from 'styled-components';
import { useEffect } from 'react';

const fadeIn = keyframes`
  from {
    transform: scale(0.8);

    opacity: 0;
  }

  to {

    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(0.8);

    opacity: 1;
  }

  to {

    opacity: 0;
  }
`;

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
  /* 750px */
  @media only screen and (max-width: 47.875em) {
    font-size: 2.7rem;
  }
`;

const StyledSunIcon = styled(SunIcon)`
  fill: ${({ theme }) => theme.fontColorPrimary};
  transform: scale(0.8);
  cursor: pointer;
  opacity: 1;
  transition: all 0.3s;
  &:hover {
    fill: ${({ theme }) => theme.fontColorPrimaryHover};
  }

  visibility: ${props => (props.userTheme === 'dark' ? 'hidden' : 'visible')};
  animation: ${props => (props.userTheme === 'dark' ? fadeOut : fadeIn)} 0.3s
    linear;
  transition: visibility 0.3s linear;
  /* 750px */
  @media only screen and (max-width: 47.875em) {
    transform: scale(0.75);
  }
`;

const StyledMoonIcon = styled(MoonIcon)`
  fill: ${({ theme }) => theme.fontColorPrimary};
  transform: scale(0.8);
  opacity: 1;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    fill: ${({ theme }) => theme.fontColorPrimaryHover};
  }

  visibility: ${props => (props.userTheme === 'dark' ? 'hidden' : 'visible')};
  animation: ${props => (props.userTheme === 'dark' ? fadeOut : fadeIn)} 0.3s
    linear;
  transition: visibility 0.3 linear;
`;

const AppHeader = ({ userTheme, setUserTheme }) => {
  const toggleTheme = () => {
    userTheme === 'dark'
      ? setUserTheme(prevTheme => (prevTheme = 'light'))
      : setUserTheme(prevTheme => (prevTheme = 'dark'));
  };
  useEffect(() => {
    localStorage.setItem('userTheme', JSON.stringify(userTheme));
  }, [userTheme]);

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
