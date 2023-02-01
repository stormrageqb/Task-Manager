import { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import Checkbox from './Checkbox';
import ConfirmDeleteModal from './modal/ConfirmDeleteModal';
import { StyledCharacterCounter } from './styles/StyledCharacterCounter.styled';
import { StyledForm } from './styles/StyledForm.styled';
import { StyledInput } from './styles/StyledInput.styled';
import StyledTrashIcon from './styles/StyledTrashIcon';
import { CONSTANTS } from '../constants';
import { Reorder } from 'framer-motion';

const StyledListItem = styled(Reorder.Item)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.fontColorPrimary};
  font-weight: 400;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr 1fr;
  /* Change grid to allow form to fit - form is one child of grid including input and button - basically add 1fr to include the the input and save button in one grid column and subtract one from the end column */
  ${props =>
    props.isEditing &&
    css`
      grid-template-columns: 1fr 11fr 1fr;
    `}
  align-items: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.appBgMain};
  transition: background-color 0.3s;

  border-bottom: 0.1rem solid ${({ theme }) => theme.fontColorDarkMd};
  list-style: none;
  z-index: 10;
  :first-child {
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
  }
  /* 400px */
  @media only screen and (max-width: 25em) {
    grid-template-columns: 1.5fr 10fr 1fr 1fr;
  }
`;

const StyledTaskText = styled.span`
  transition: all 0.2s;
  ${props =>
    props.task.complete &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.fontColorDark};
    `}
`;

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
