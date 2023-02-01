import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  grid-column: full-start / full-end;
  grid-row: 1 / 4;

  background-image: linear-gradient(
      to right,
      ${props => props.theme.headerGradient[0]},
      ${props => props.theme.headerGradient[1]}
    ),
    url(/bg-desktop-light.jpg);
  @media only screen and (max-width: 64em) {
    background-image: linear-gradient(
        to right,
        ${props => props.theme.headerGradient[0]},
        ${props => props.theme.headerGradient[1]}
      ),
      url(/bg-mobile-light.jpg);
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  height: 100%;

  ${props =>
    props.userTheme === 'dark' &&
    css`
      background-image: linear-gradient(
          to right,
          ${props => props.theme.headerGradient[0]},
          ${props => props.theme.headerGradient[1]}
        ),
        url(/bg-desktop-dark.jpg);
      @media only screen and (max-width: 64em) {
        background-image: linear-gradient(
            to right,
            ${props => props.theme.headerGradient[0]},
            ${props => props.theme.headerGradient[1]}
          ),
          url(/bg-mobile-dark.jpg);
      }
    `}
`;
