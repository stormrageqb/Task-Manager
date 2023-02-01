import MoonIcon from '/src/assets/icon-moon.svg';
import styled, { keyframes } from 'styled-components';

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

export const StyledMoonIcon = styled(MoonIcon)`
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
