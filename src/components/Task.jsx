import { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import Checkbox from './Checkbox';
import ConfirmDeleteModal from './modal/ConfirmDeleteModal';
import { StyledInput } from './styles/StyledInput.styled';
import { StyledTrashIcon } from './styles/StyledTrashIcon';

const StyledListItem = styled.li`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.lightTheme.lightGray};
  font-weight: 400;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr 1fr;
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

const StyledTaskText = styled.span`
  transition: all 0.2s;
  ${props =>
    props.task.complete &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.color.darkTheme.darkGrayBlue};
    `}
`;

const Task = ({ onDeleteTask, onChangeTask, task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
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

        <Button save onClick={() => setIsEditing(false)}>
          Save
        </Button>
      </>
    );
  } else {
    taskContent = (
      <>
        <StyledTaskText task={task}>{task.text}</StyledTaskText>
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
      </>
    );
  }

  return (
    <>
      {showModal && <ConfirmDeleteModal />}
      <StyledListItem>
        <Checkbox task={task} onChange={onChangeTask} />
        {taskContent}

        {/* <StyledTrashIcon onClick={() => onDeleteTask(task.id)} /> */}
        <StyledTrashIcon onClick={() => setShowModal(true)} />
      </StyledListItem>
    </>
  );
};

export default Task;
