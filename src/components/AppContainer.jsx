import styled from 'styled-components';
import React from 'react';
import SunIcon from '/src/assets/icon-sun.svg';

const StyledSunIcon = styled(SunIcon)`
  fill: #fff;
`;

const StyledAppHeader = styled.header`
  grid-column: 1 / -1;
  & h1 {
  }

  & svg {
    fill: #fff;
  }
`;

const StyledAppContainer = styled.div`
  grid-column: col-start 2 / col-start 4;
  background-color: ${({ theme }) => theme.color.darkTheme.darkestGrayBlue};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: min-content min-content min-content;
  height: 50rem;
`;

const AppContainer = () => {
  return (
    <StyledAppContainer>
      <StyledAppHeader>
        <h1>Todo</h1>
        <StyledSunIcon />
      </StyledAppHeader>
    </StyledAppContainer>
  );
};

export default AppContainer;
