import { useState } from 'react';
import styled, { css } from 'styled-components';
import { CONSTANTS } from '../constants';
import Button from './Button';
import Checkbox from './Checkbox';
import { StyledInput } from './styles/StyledInput.styled';
import { StyledCharacterCounter } from './styles/StyledCharacterCounter.styled';

const StyledForm = styled.form`
  grid-column: 1 / -1;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 10fr 2fr;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.appBgMain};
  border-radius: 0.4rem;
  /* box-shadow: rgba(0, 0, 0, 0.2) 0.8rem 0.4rem 1.2rem; */
  box-shadow: rgba(0, 0, 0, 0.35) 0 2rem 3rem -1rem;
  transition: background-color 0.3s;
`;

const AddTask = ({ task, onAddTask, onChangeTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAddTask(taskName);
    setTaskName('');
  };

  const handleTaskNameChange = e => {
    if (e.target.value.length <= CONSTANTS.MAXIMUM_CHARACTERS) {
      setTaskName(e.target.value);
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      {/* <Checkbox onChange={onChangeTask} task={task} /> */}
      <StyledCharacterCounter>
        {CONSTANTS.MAXIMUM_CHARACTERS - taskName.length}
      </StyledCharacterCounter>
      <StyledInput
        value={taskName}
        maxLength={CONSTANTS.MAXIMUM_CHARACTERS}
        // onChange={e => setTaskName(e.target.value)}
        onChange={handleTaskNameChange}
        placeholder="Create a new todo..."
        aria-label="Create a new todo..."
        autoFocus
        required
      />
      <Button type="submit">Add</Button>
    </StyledForm>
  );
};

export default AddTask;
