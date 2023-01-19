import styled from 'styled-components';
import Button from '../Button';
import { StyledTrashIcon } from '../styles/StyledTrashIcon';

const StyledModalContainer = styled.div`
  position: fixed;
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
  /* background-color: blue; */
  box-shadow: rgba(0, 0, 0, 0.35) 0 2rem 3rem -1rem;
`;

const StyledModalHeader = styled.header`
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;

  grid-column: 1 / -1;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.color.modalGradient[0]},
    ${({ theme }) => theme.color.modalGradient[1]}
  );
  padding: 2.4rem;
  text-align: center;
  width: 100%;
`;

const StyledModalSection = styled.section`
  grid-column: 1 / -1;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  & h2 {
    font-size: 3.2rem;
  }

  & p {
    font-size: 1.8rem;
    text-align: center;
  }
  background-color: ${({ theme }) => theme.color.darkTheme.darkestGrayBlue};
  padding: 2.4rem;
`;

const StyledModalFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 1 / -1;
  background-color: ${({ theme }) => theme.color.darkTheme.darkestGrayBlue};
  /* padding: 2.4rem 0; */
  border-top: 0.1rem solid
    ${({ theme }) => theme.color.darkTheme.darkerGrayBlue};
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  width: 100%;
`;

const ModalOverlay = ({ setShowModal }) => {
  return (
    <StyledModalContainer>
      <StyledModalHeader>
        <Button xModal onClick={() => setShowModal(false)}>
          &#10006;
        </Button>
        <StyledTrashIcon modal />
      </StyledModalHeader>
      <StyledModalSection>
        <h2>Delete?</h2>
        <p>Are you sure you want to delete this task?</p>
        <p>
          This action is <strong>irreversible.</strong>
        </p>
      </StyledModalSection>
      <StyledModalFooter>
        <Button modalFooter>Delete</Button>
        <Button
          modalFooter
          modalFooterRight
          onClick={() => setShowModal(false)}
        >
          Cancel
        </Button>
      </StyledModalFooter>
    </StyledModalContainer>
  );
};

export default ModalOverlay;
