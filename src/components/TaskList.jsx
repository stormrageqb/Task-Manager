import styled from 'styled-components';
import { taskData } from '../taskData';
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

const TaskList = () => {
  return (
    <StyledTaskListSection>
      {/* <Checkbox /> */}
      <StyledTaskList>
        {taskData.map(task => {
          return <Task text={task.text} />;
        })}
      </StyledTaskList>
    </StyledTaskListSection>
  );
};

export default TaskList;
