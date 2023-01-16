import styled from 'styled-components';
import { taskData } from '../taskData';
import Button from './Button';
import Checkbox from './Checkbox';
import Task from './Task';

const StyledTaskListSection = styled.section`
  grid-column: 1 / -1;
  /* box-shadow: rgba(0, 0, 0, 0.2) 0.1rem 0.4rem 1.2rem; */
  box-shadow: rgba(0, 0, 0, 0.35) 0 2rem 3rem -1rem;
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
  background-color: ${({ theme }) => theme.color.darkTheme.darkBlueDesat};
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  & article {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 1rem 1.5rem;

    & span {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.color.darkTheme.darkGrayBlue};
      font-weight: 400;
    }

    & div {
      display: flex;
      gap: 1.2rem;
    }
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
        <article>
          <span>5 items left</span>
          <div>
            <Button footer>All</Button>
            <Button footer>Active</Button>
            <Button footer>Completed</Button>
          </div>
          <Button footer lastChild>
            Clear completed
          </Button>
        </article>
      </StyledTaskListFooter>
    </StyledTaskListSection>
  );
};

export default TaskList;
