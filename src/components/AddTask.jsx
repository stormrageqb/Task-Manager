import { useState } from 'react';
import styled, { css } from 'styled-components';
import { CONSTANTS } from '../constants';
import Button from './Button';
import Checkbox from './Checkbox';
import { StyledInput } from './styles/StyledInput.styled';
import { StyledForm } from './styles/StyledForm.styled';
import { StyledCharacterCounter } from './styles/StyledCharacterCounter.styled';

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
