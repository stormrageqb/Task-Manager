import MoonIcon from '/src/assets/icon-moon.svg';
import styled, { css, keyframes } from 'styled-components';
import { useEffect } from 'react';
import { StyledSunIcon } from './styles/app-header/StyledSunIcon';
import { StyledMoonIcon } from './styles/app-header/StyledMoonIcon';
import { StyledAppHeader } from './styles/app-header/StyledAppHeader';
import { StyledLogo } from './styles/app-header/StyledLogo';

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
