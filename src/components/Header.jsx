import styled from 'styled-components';

const StyledHeader = styled.header`
  grid-column: full-start / full-end;
  grid-row: 1 / 4;

  background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.color.trueGradient[0]},
      ${({ theme }) => theme.color.trueGradient[1]}
    ),
    url(/bg-desktop-dark.jpg);
  /* no-repeat left top/contain; */
  /* background-size: contain;
  background-repeat: no-repeat;
  background-position: top left; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
`;

const Header = () => {
  return <StyledHeader></StyledHeader>;
};

export default Header;
