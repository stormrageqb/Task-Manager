import Button from '../Button';
import StyledTrashIcon from '../styles/StyledTrashIcon';
import { easeInOut } from 'framer-motion';
import { usePrefersReducedMotion } from '../../usePrefersReducedMotion';
import { StyledModalContainer } from '../styles/modal/modal-overlay/StyledModalContainer';
import { StyledModalHeader } from '../styles/modal/modal-overlay/StyledModalHeader';
import { StyledModalSection } from '../styles/modal/modal-overlay/StyledModalSection';
import { StyledModalFooter } from '../styles/modal/modal-overlay/StyledModalFooter';

const ModalOverlay = ({
  onDeleteCompletedTasks,
  onDeleteTask,
  setShowDeleteModal,
  setShowDeleteCompletedModal,
  showDeleteCompletedModal,
  task,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const handleDeleteCompletedTasks = () => {
    onDeleteCompletedTasks();
    setShowDeleteCompletedModal(false);
  };

  // Render two 'separate' modals based on which button is clicked in the UI. Note that the callback method doesn't hide the modal after clicking delete in the deleteCompleted modal, which is why I've provided the full function just above.
  if (showDeleteCompletedModal) {
    return (
      <StyledModalContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : 0.4,
          ease: easeInOut,
        }}
      >
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
    <StyledModalContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.4,
        ease: easeInOut,
      }}
    >
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
