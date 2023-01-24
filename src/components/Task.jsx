import { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import Checkbox from './Checkbox';
import ConfirmDeleteModal from './modal/ConfirmDeleteModal';
import { StyledInput } from './styles/StyledInput.styled';
import StyledTrashIcon from './styles/StyledTrashIcon';

const StyledListItem = styled.li`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.lightTheme.lightGray};
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
  background-color: ${({ theme }) => theme.color.darkTheme.darkBlueDesat};

  border-bottom: 0.1rem solid
    ${({ theme }) => theme.color.darkTheme.darkerGrayBlue};
  list-style: none;
  :first-child {
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
  }
`;

const StyledInputForm = styled.form`
  display: grid;
  /* Add high fr number for input so it takes up the rest of the space when editing */
  grid-template-columns: 10fr 1fr;
`;

const StyledTaskText = styled.span`
  transition: all 0.2s;
  ${props =>
    props.task.complete &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.color.darkTheme.darkGrayBlue};
    `}
`;

const Task = ({
  isEditing,
  onShowInput,
  onSave,
  onDeleteTask,
  onChangeTask,
  task,
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
        {/* <span>20</span> */}
        <StyledInputForm onSubmit={handleSubmit}>
          <StyledInput
            onChange={e => {
              onChangeTask({
                ...task,
                text: e.target.value,
              });
            }}
            editing
            value={task.text}
            autoFocus
          />
          <Button type="button" save onClick={onSave}>
            Save
          </Button>
        </StyledInputForm>
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
      <StyledListItem isEditing={isEditing}>
        {isEditing && <span>20</span>}
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
