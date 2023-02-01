import { StyledBackdrop } from '../styles/modal/StyledBackdrop';

const ModalBackdrop = ({
  setShowDeleteModal,
  showDeleteCompletedModal,
  setShowDeleteCompletedModal,
}) => {
  if (showDeleteCompletedModal) {
    return (
      <StyledBackdrop
        onClick={() => setShowDeleteCompletedModal(false)}
      ></StyledBackdrop>
    );
  }
  return (
    <StyledBackdrop onClick={() => setShowDeleteModal(false)}></StyledBackdrop>
  );
};

export default ModalBackdrop;
