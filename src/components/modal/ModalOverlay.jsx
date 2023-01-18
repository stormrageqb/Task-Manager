import styled from 'styled-components';
import { StyledTrashIcon } from '../styles/StyledTrashIcon';

const StyledModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  /* height: 50rem; */

  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: blue;
`;

const StyledModalHeader = styled.header`
  height: 40%;
  width: 100%;
  background-color: linear-gradient(
    to right,
    ${({ theme }) => theme.color.trueGradient[0]},
    ${({ theme }) => theme.color.trueGradient[1]}
  );
`;

const ModalOverlay = () => {
  return (
    <StyledModalContainer>
      <StyledModalHeader>
        <StyledTrashIcon />
      </StyledModalHeader>
    </StyledModalContainer>
  );
};

export default ModalOverlay;
