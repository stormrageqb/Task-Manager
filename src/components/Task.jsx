import styled from 'styled-components';
import Button from './Button';
import Checkbox from './Checkbox';

const StyledTask = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 10fr 2fr; */
`;

const StyledListItem = styled.li`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.lightTheme.lightGray};
  font-weight: 400;
  display: grid;
  grid-template-columns: 1fr 10fr 2fr;
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

const Task = ({ task }) => {
  return (
    <StyledListItem>
      <Checkbox />
      <label htmlFor="">{task.text}</label>
      <Button>Edit</Button>
    </StyledListItem>
  );
};

export default Task;
