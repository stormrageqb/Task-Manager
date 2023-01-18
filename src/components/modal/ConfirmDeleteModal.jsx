import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import ModalBackdrop from './ModalBackdrop';
import ModalOverlay from './ModalOverlay';

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
