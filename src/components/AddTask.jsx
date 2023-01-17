import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Checkbox from './Checkbox';
import { StyledInput } from './styles/StyledInput.styled';

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

const AddTask = ({ task, onAddTask, onChangeTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAddTask(taskName);
    setTaskName('');
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Checkbox onChange={onChangeTask} task={task} />
      <StyledInput
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
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
