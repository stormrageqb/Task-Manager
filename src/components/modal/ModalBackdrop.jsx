import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background-color: transparent;
  backdrop-filter: blur(0.2rem) brightness(90%);
`;

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
