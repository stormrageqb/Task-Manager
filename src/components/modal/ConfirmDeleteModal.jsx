import { ReactDOM } from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';
import ModalBackdrop from './ModalBackdrop';

const StyledModalHeader = styled.header``;

const StyledConfirmDeleteModal = styled.div``;

const ConfirmDeleteModal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default ConfirmDeleteModal;
