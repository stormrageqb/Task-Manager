import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledDnDNote = styled(motion.p)`
  font-size: 1.4rem;
  grid-column: 1 / -1;
  justify-self: center;
  align-self: center;
  color: ${({ theme }) => theme.fontColorPrimary};
  font-weight: 300;
  letter-spacing: 0.05rem;
  //Necessary for animation (starting state is invisible)
  opacity: 0;
`;
