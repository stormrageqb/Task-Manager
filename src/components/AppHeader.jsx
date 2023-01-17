import styled from 'styled-components';

const StyledAppHeader = styled.header`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;

const AppHeader = ({ children }) => {
  return <StyledAppHeader>{children}</StyledAppHeader>;
};

export default AppHeader;
