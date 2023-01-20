import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import ModalBackdrop from './ModalBackdrop';
import ModalOverlay from './ModalOverlay';

const ConfirmDeleteModal = ({ onDeleteTask, setShowModal, task }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop setShowModal={setShowModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          // message={deleteMessageData}
          onDeleteTask={onDeleteTask}
          setShowModal={setShowModal}
          task={task}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default ConfirmDeleteModal;
