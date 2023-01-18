import { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import Checkbox from './Checkbox';
import { StyledInput } from './styles/StyledInput.styled';
const maximumCharacterValue = 45;
const StyledForm = styled.form`
  grid-column: 1 / -1;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 10fr 2fr;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.color.darkTheme.darkBlueDesat};
  border-radius: 0.4rem;
  /* box-shadow: rgba(0, 0, 0, 0.2) 0.8rem 0.4rem 1.2rem; */
  box-shadow: rgba(0, 0, 0, 0.35) 0 2rem 3rem -1rem;
`;

const StyledCharacterCounter = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  background-color: transparent;
  margin-left: 0.3rem;
  color: ${({ theme }) => theme.color.lightTheme.darkGrayBlue};

  color: ${({ children, theme }) => {
    if (children < 1) {
      // TEMP COLOR
      return 'firebrick';
    } else {
      return theme.color.lightTheme.darkGrayBlue;
    }
  }};
`;

const AddTask = ({ task, onAddTask, onChangeTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAddTask(taskName);
    setTaskName('');
  };

  const handleTaskNameChange = e => {
    if (e.target.value.length <= maximumCharacterValue) {
      setTaskName(e.target.value);
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      {/* <Checkbox onChange={onChangeTask} task={task} /> */}
      <StyledCharacterCounter>
        {maximumCharacterValue - taskName.length}
      </StyledCharacterCounter>
      <StyledInput
        value={taskName}
        maxLength={maximumCharacterValue}
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
