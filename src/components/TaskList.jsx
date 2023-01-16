import styled from 'styled-components';
import { taskData } from '../taskData';
import Button from './Button';
import Checkbox from './Checkbox';
import Task from './Task';

const StyledTaskListSection = styled.section`
  grid-column: 1 / -1;
`;

const StyledTaskList = styled.ul`
  /* grid-column: 1 / -1; */
  /* display: grid;
  align-items: center;
  grid-template-columns: 1fr 10fr 2fr;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.color.darkTheme.darkBlueDesat};
  border-radius: 0.4rem; */
`;

const StyledTaskListFooter = styled.footer`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); */
  background-color: ${({ theme }) => theme.color.darkTheme.darkBlueDesat};
  & div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0.7rem 1.5rem;
  }
`;

const TaskList = () => {
  return (
    <StyledTaskListSection>
      <StyledTaskList>
        {taskData.map(task => {
          return <Task key={task.id} task={task} />;
        })}
      </StyledTaskList>
      <StyledTaskListFooter>
        <div>
          <span>5 items left</span>
          <div>
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Completed</Button>
          </div>
          <Button>Clear completed</Button>
        </div>
      </StyledTaskListFooter>
    </StyledTaskListSection>
  );
};

export default TaskList;
