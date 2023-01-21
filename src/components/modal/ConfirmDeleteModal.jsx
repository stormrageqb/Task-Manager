import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import ModalBackdrop from './ModalBackdrop';
import ModalOverlay from './ModalOverlay';

const ConfirmDeleteModal = ({
  onDeleteTask,
  onDeleteCompletedTasks,
  setShowDeleteModal,
  showDeleteCompletedModal,
  setShowDeleteCompletedModal,
  task,
}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop
          showDeleteCompletedModal={showDeleteCompletedModal}
          setShowDeleteCompletedModal={setShowDeleteCompletedModal}
          setShowDeleteModal={setShowDeleteModal}
        />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          setShowDeleteCompletedModal={setShowDeleteCompletedModal}
          showDeleteCompletedModal={showDeleteCompletedModal}
          onDeleteTask={onDeleteTask}
          onDeleteCompletedTasks={onDeleteCompletedTasks}
          setShowDeleteModal={setShowDeleteModal}
          task={task}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default ConfirmDeleteModal;
