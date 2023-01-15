import styled from 'styled-components';

const StyledBottom = styled.div`
  grid-column: full-start / full-end;
  grid-row: 4 / -1;

  background-color: ${({ theme }) => theme.color.darkTheme.darkBlue};
  height: 100%;
`;

const Bottom = ({ children }) => {
  return <StyledBottom />;
};

export default Bottom;
