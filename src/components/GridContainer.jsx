import styled from 'styled-components';

const StyledGridContainer = styled.div`
  height: 100%;
  display: grid;
  /* grid-template-rows: 40vh 60vh; */
  grid-template-rows: 7.5vh 10vh 20vh 40vh 10vh 10vh 2.5vh;

  grid-template-columns:
    [full-start] minmax(4rem, 15rem) [center-start] repeat(
      4,
      [col-start] 1fr [col-end]
    )
    [center-end] minmax(4rem, 15rem) [full-end];
  /* grid-template-columns: repeat(12, [col-start] 1fr [col-end]); */

  /* 750px */
  @media only screen and (max-width: 47.875em) {
    grid-template-columns:
      [full-start] 2.5rem [center-start] repeat(4, [col-start] 1fr [col-end])
      [center-end] 2.5rem [full-end];
    grid-template-rows: 5vh 10vh 20vh 40vh 10vh 10vh 5vh;
  }
`;

const GridContainer = ({ children }) => {
  return <StyledGridContainer>{children}</StyledGridContainer>;
};

export default GridContainer;
