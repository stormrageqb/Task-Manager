import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  grid-column: col-start 2 / col-start 4;
  grid-row: 2 / 3;
  grid-row: 2 / 5;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* 5.2rem equals a total of a 4rem gap between AppHeader and AddTask components */
  grid-template-rows: 5.2rem min-content min-content;
  /* TEMP */
  height: 50rem;

  row-gap: 2rem;

  /* background-color: red; */
`;
