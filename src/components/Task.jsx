import { useState } from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import ConfirmDeleteModal from './modal/ConfirmDeleteModal';
import { StyledCharacterCounter } from './styles/StyledCharacterCounter.styled';
import { StyledForm } from './styles/StyledForm.styled';
import { StyledInput } from './styles/StyledInput.styled';
import StyledTrashIcon from './styles/StyledTrashIcon';
import { CONSTANTS } from '../constants';
import { StyledListItem } from './styles/app-main/StyledListItem';
import { StyledTaskText } from './styles/app-main/StyledTaskText';

const Task = ({
  isEditing,
  onShowInput,
  onSave,
  onDeleteTask,
  onChangeTask,
  task,
  tasks,
}) => {
  // const [showModal, setShowModal] = useState(false);
  // const { showDeleteModal, setShowDeleteModal } = useContext(ModalContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    onSave();
  };
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <StyledForm isEditing={isEditing} onSubmit={handleSubmit}>
          <StyledInput
            onChange={e => {
              if (e.target.value.length <= CONSTANTS.MAXIMUM_CHARACTERS) {
                onChangeTask({
                  ...task,
                  text: e.target.value,
                });
              }
            }}
            editing
            value={task.text}
            autoFocus
            maxLength={CONSTANTS.MAXIMUM_CHARACTERS}
            required
          />
          <Button type="button" save onClick={onSave}>
            Save
          </Button>
        </StyledForm>
      </>
    );
  } else {
    taskContent = (
      <>
        <StyledTaskText task={task}>{task.text}</StyledTaskText>
        <Button type="button" onClick={onShowInput}>
          Edit
        </Button>
      </>
    );
  }

  return (
    <>
      {showDeleteModal && (
        <ConfirmDeleteModal
          setShowDeleteModal={setShowDeleteModal}
          onDeleteTask={onDeleteTask}
          task={task}
        />
      )}
      <StyledListItem
        whileDrag={{
          position: 'relative',
          zIndex: '1000',
          boxShadow: '.5rem .5rem 1rem rgba(0,0,0,0.3)',
        }}
        // draggable={true}
        // This prop is reponsible for making task items draggable when there are two or more tasks provided
        dragListener={tasks.length >= 2 ? true : false}
        value={task}
        isEditing={isEditing}
      >
        {isEditing && (
          <StyledCharacterCounter>
            {CONSTANTS.MAXIMUM_CHARACTERS - task.text.length}
          </StyledCharacterCounter>
        )}
        {!isEditing && <Checkbox task={task} onChange={onChangeTask} />}
        {/* <Checkbox task={task} onChange={onChangeTask} /> */}
        {taskContent}

        <Button type="button" onClick={() => setShowDeleteModal(true)}>
          <StyledTrashIcon />
        </Button>
      </StyledListItem>
    </>
  );
};

export default Task;
