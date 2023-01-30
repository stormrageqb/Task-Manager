import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledDnDNote = styled.p`
  font-size: 1.4rem;
  grid-column: 1 / -1;
  justify-self: center;
  align-self: center;
  color: ${({ theme }) => theme.fontColorPrimary};
  font-weight: 300;
  letter-spacing: 0.05rem;
  opacity: 0;

  ${props =>
    props.tasks.length >= 2 &&
    css`
      opacity: 1;
    `}
`;



// import { motion } from 'framer-motion';

// const dropIn = {
//   hidden: {
//     y: '-100vh',
//     opacity: 0,
//   },
//   visible: {
//     y: '0',
//     opacity: 1,
//     transition: {
//       duration: 0.1,
//       type: 'spring',
//       damping: 25,
//       stiffness: 500,
//     },
//   },
//   exit: {
//     y: '100vh',
//     opacity: 0,
//   },
// };

// const StyledModalContainer = styled(motion.div)`


//  <StyledModalContainer
//         variants={dropIn}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//       >
