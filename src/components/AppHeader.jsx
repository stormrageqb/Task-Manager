import SunIcon from '/src/assets/icon-sun.svg';
import styled from 'styled-components';

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
  color: ${({ theme }) => theme.color.darkTheme.lightGray};
  line-height: 1;
  padding-top: 0.2rem;
`;

const StyledSunIcon = styled(SunIcon)`
  fill: ${({ theme }) => theme.color.darkTheme.lightGray};
  transform: scale(0.8);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    fill: ${({ theme }) => theme.color.darkTheme.lightGrayBlueHover};
  }
`;

const AppHeader = () => {
  return (
    <StyledAppHeader>
      <StyledLogo>Todo</StyledLogo>
      <StyledSunIcon />
    </StyledAppHeader>
  );
};

export default AppHeader;
