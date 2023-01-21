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
  onShowModal,
  task,
  tasks,
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
          onShowModal={onShowModal}
          onDeleteTask={onDeleteTask}
          onDeleteCompletedTasks={onDeleteCompletedTasks}
          setShowDeleteModal={setShowDeleteModal}
          task={task}
          tasks={tasks}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default ConfirmDeleteModal;
