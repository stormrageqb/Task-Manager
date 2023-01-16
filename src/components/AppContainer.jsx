import styled from 'styled-components';
import React from 'react';
import SunIcon from '/src/assets/icon-sun.svg';
import AddTask from './AddTask';

const StyledSunIcon = styled(SunIcon)`
  fill: ${({ theme }) => theme.color.lightTheme.lightGray};
  /* height: 3rem;
  width: 3rem; */
  transform: scale(0.8);
`;

const StyledAppHeader = styled.header`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
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
  grid-row: 2 / 3;
  grid-row: 2 / 5;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* 5.2rem equals a total of a 4rem gap between AppHeader and AddTask components */
  grid-template-rows: 5.2rem min-content min-content;
  height: 50rem;

  row-gap: 2rem;
  /* background-color: red; */
`;

const AppContainer = () => {
  return (
    <StyledAppContainer>
      <StyledAppHeader>
        <h1>Todo</h1>
        <StyledSunIcon />
      </StyledAppHeader>
      <AddTask />
    </StyledAppContainer>
  );
};

export default AppContainer;
