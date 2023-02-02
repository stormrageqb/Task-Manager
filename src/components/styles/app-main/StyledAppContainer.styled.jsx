import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledAppContainer = styled(motion.div)`
  grid-column: col-start 2 / col-start 4;
  grid-row: 2 / -1;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* 5.2rem equals a total of a 4rem gap between AppHeader and AddTask components */
  grid-template-rows: 5.2rem min-content min-content min-content;
  height: 80vh;

  row-gap: 2rem;

  /* 1025px */
  @media only screen and (max-width: 64em) {
    grid-column: center-start / center-end;
  }

  /* 750px */
  @media only screen and (max-width: 47.875em) {
    row-gap: 1.2rem;
    max-height: 100%;
    height: 100%;
    position: relative;
  }
`;
