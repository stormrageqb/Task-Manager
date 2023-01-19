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

const ModalBackdrop = ({ setShowModal }) => {
  return <StyledBackdrop onClick={() => setShowModal(false)}></StyledBackdrop>;
};

export default ModalBackdrop;
