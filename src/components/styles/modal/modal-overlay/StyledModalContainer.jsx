import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledModalContainer = styled(motion.div)`
  position: absolute;
  width: 45%;
  max-width: 100%;
  max-height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  /* height: 50rem; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* border-radius: 0.4rem; */
  box-shadow: rgba(0, 0, 0, 0.35) 0 2rem 3rem -1rem;
  /* 750px */
  @media only screen and (max-width: 47.875em) {
    width: max-content;
  }
`;
