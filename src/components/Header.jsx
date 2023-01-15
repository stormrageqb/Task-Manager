import styled from 'styled-components';

const StyledHeader = styled.header`
  grid-column: full-start / full-end;
  background: linear-gradient(
      to right,
      rgba(235, 251, 255, 0.3),
      rgba(235, 251, 255, 0.3)
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
