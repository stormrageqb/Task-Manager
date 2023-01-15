import styled from 'styled-components';

const StyledGridContainer = styled.div`
  display: grid;
  /* grid-template-rows: 40vh 60vh; */
  grid-template-rows: 10vh 10vh 20vh 40vh 10vh 10vh;

  grid-template-columns:
    [full-start] minmax(4rem, 15rem) [center-start] repeat(
      4,
      [col-start] 1fr [col-end]
    )
    [center-end] minmax(4rem, 15rem) [full-end];
  /* grid-template-columns: repeat(12, [col-start] 1fr [col-end]); */
`;

const GridContainer = ({ children }) => {
  return <StyledGridContainer>{children}</StyledGridContainer>;
};

export default GridContainer;
