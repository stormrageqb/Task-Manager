import styled from 'styled-components';
import Button from '../Button';
import StyledTrashIcon from '../styles/StyledTrashIcon';

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
    ${props => props.theme.modalGradient[0]},
    ${props => props.theme.modalGradient[1]}
  );
  padding: 2.4rem;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* For Checkmark within trash icon */
  & div {
    width: max-content;
    height: max-content;
    position: relative;
    line-height: 1.3;
  }
  & span {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);

    appearance: none;
    /* background-color: ${({ theme }) => theme.primary}; */
    background-color: #3a7bfd;
    outline: 0.15rem solid ${({ theme }) => theme.fontColorDark};

    font: inherit;
    color: currentColor;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    display: grid;
    place-content: center;

    transition: all 0.25s;
    &::before {
      content: '';
      width: 1rem;
      height: 1rem;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 14%, 80% 0%, 43% 62%);
      box-shadow: inset 1rem 1rem #fff;
    }
  }
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
  background-color: ${({ theme }) => theme.fontColorDarkLg};
  padding: 2.4rem;
`;

const StyledModalFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 1 / -1;
  background-color: ${({ theme }) => theme.fontColorDarkLg};
  /* padding: 2.4rem 0; */
  border-top: 0.135rem solid ${({ theme }) => theme.fontColorDarkMd};
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  width: 100%;
`;

const ModalOverlay = ({
  onDeleteCompletedTasks,
  onDeleteTask,
  setShowDeleteModal,
  setShowDeleteCompletedModal,
  showDeleteCompletedModal,
  task,
}) => {
  const handleDeleteCompletedTasks = () => {
    onDeleteCompletedTasks();
    setShowDeleteCompletedModal(false);
  };

  // Render two 'separate' modals based on which button is clicked in the UI. Note that the callback method does hide the modal after clicking delete in the deleteCompleted modal, which is why I've provided the full function just above.
  if (showDeleteCompletedModal) {
    return (
      <StyledModalContainer>
        <StyledModalHeader
          theme={{
            modalGradient: ['rgba(87, 221, 255)', 'rgba(192, 88, 243)'],
          }}
        >
          <Button xModal onClick={() => setShowDeleteCompletedModal(false)}>
            &#10006;
          </Button>
          {/* Transient props set for this icon set to true to fix bug */}
          <div>
            <span></span>
            <StyledTrashIcon modal="true" />
          </div>
        </StyledModalHeader>
        <StyledModalSection>
          <h2>Delete?</h2>
          <p>Are you sure you want to delete all completed tasks?</p>
          <p>
            This action is <strong>irreversible</strong>.
          </p>
        </StyledModalSection>
        <StyledModalFooter>
          <Button modalDelete modalFooter onClick={handleDeleteCompletedTasks}>
            Delete
          </Button>
          <Button
            modalCancel
            modalFooter
            onClick={() => setShowDeleteCompletedModal(false)}
          >
            Cancel
          </Button>
        </StyledModalFooter>
      </StyledModalContainer>
    );
  }
  return (
    <StyledModalContainer>
      <StyledModalHeader
        theme={{ modalGradient: ['rgba(87, 221, 255)', 'rgba(192, 88, 243)'] }}
      >
        <Button xModal onClick={() => setShowDeleteModal(false)}>
          &#10006;
        </Button>
        {/* Transient props set for this icon set to true to fix bug */}
        <StyledTrashIcon modal="true" />
      </StyledModalHeader>
      <StyledModalSection>
        <h2>Delete?</h2>
        <p>Are you sure you want to delete this task?</p>
        <p>
          This action is <strong>irreversible</strong>.
        </p>
      </StyledModalSection>
      <StyledModalFooter>
        <Button modalDelete modalFooter onClick={() => onDeleteTask(task.id)}>
          Delete
        </Button>
        <Button
          modalCancel
          modalFooter
          onClick={() => setShowDeleteModal(false)}
        >
          Cancel
        </Button>
      </StyledModalFooter>
    </StyledModalContainer>
  );
};

export default ModalOverlay;
