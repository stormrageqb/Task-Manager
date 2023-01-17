import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Checkbox from './Checkbox';

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

const StyledInput = styled.input`
  border: none;
  display: block;
  font-family: inherit;
  font-size: 1.6rem;
  padding: 0.2rem 0;
  background-color: ${({ theme }) => theme.color.darkTheme.darkBlueDesat};
  color: ${({ theme }) => theme.color.lightTheme.lightGray};

  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    font-weight: 500;
  }
`;

const AddTask = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(taskName);
    onAddTask(taskName);
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Checkbox />
      <StyledInput
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
        placeholder="Create a new todo..."
        aria-label="Create a new todo..."
      />
      <Button
        // onClick={() => {
        //   setTaskName('');
        // }}
        type="submit"
      >
        Add
      </Button>
    </StyledForm>
  );
};

export default AddTask;
