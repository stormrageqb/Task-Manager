import styled from 'styled-components';
import React from 'react';
import SunIcon from '/src/assets/icon-sun.svg';

const StyledSunIcon = styled(SunIcon)`
  fill: ${({ theme }) => theme.color.lightTheme.lightGray};
  /* height: 3rem;
  width: 3rem; */
  transform: scale(0.85);
`;

const StyledAppHeader = styled.header`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: blue;
  & h1 {
    text-transform: uppercase;
    letter-spacing: 0.85rem;
    font-size: 3rem;
    color: ${({ theme }) => theme.color.lightTheme.lightGray};
    line-height: 1;
    padding-top: 0.2rem;
  }
`;

const StyledAppContainer = styled.div`
  grid-column: col-start 2 / col-start 4;
  background-color: ${({ theme }) => theme.color.darkTheme.darkestGrayBlue};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: min-content min-content min-content;
  height: 50rem;
  transform: translateY(-18rem);
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
