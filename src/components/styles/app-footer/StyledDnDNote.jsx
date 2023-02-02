import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledDnDNote = styled(motion.p)`
  font-size: 1.4rem;
  grid-column: 1 / -1;
  grid-row: 4 / -1;
  justify-self: center;
  align-self: center;
  color: ${({ theme }) => theme.fontColorPrimary};
  font-weight: 300;
  letter-spacing: 0.05rem;
  //Necessary for animation (starting state is invisible)
  opacity: 0;
  @media only screen and (max-width: 47.875em) {
    position: absolute;
    bottom: -6.5rem;
    left: 0rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }
`;
