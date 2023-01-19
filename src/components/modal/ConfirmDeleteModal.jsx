import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import ModalBackdrop from './ModalBackdrop';
import ModalOverlay from './ModalOverlay';

const ConfirmDeleteModal = ({ setShowModal }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop setShowModal={setShowModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay setShowModal={setShowModal} />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default ConfirmDeleteModal;
