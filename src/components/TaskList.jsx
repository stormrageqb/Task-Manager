import { useState } from 'react';
import styled from 'styled-components';
import { taskData } from '../taskData';
import Button from './Button';
import Checkbox from './Checkbox';
import Task from './Task';
import ConfirmDeleteModal from './modal/ConfirmDeleteModal';
import { CONSTANTS } from '../constants';

const filterNames = Object.keys(CONSTANTS.FILTERS);
console.log(filterNames);

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

const TaskList = ({
  onDeleteTask,
  onDeleteCompletedTasks,
  onChangeTask,
  tasks,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const remainingTasks = tasks.filter(task => !task.complete);
  const [showDeleteCompletedModal, setShowDeleteCompletedModal] =
    useState(false);
  const [filter, setFilter] = useState('All');

  // MODAL CONTEXT
  // const { showDeleteCompletedModal, setShowDeleteCompletedModal } =
  //   useContext(ModalContext);

  return (
    <>
      {showDeleteCompletedModal && (
        <ConfirmDeleteModal
          setShowDeleteCompletedModal={setShowDeleteCompletedModal}
          showDeleteCompletedModal={showDeleteCompletedModal}
          onDeleteCompletedTasks={onDeleteCompletedTasks}
        />
      )}
      <StyledTaskListSection>
        <StyledTaskList>
          {/* Filters through the values found in CONSTANTS which correspond to the dynamic value of filter from useState */}
          {tasks.filter(CONSTANTS.FILTERS[filter]).map((task, i) => {
            return (
              <Task
                isEditing={activeIndex === i}
                onShowInput={() => setActiveIndex(i)}
                onSave={() => setActiveIndex()}
                onDeleteTask={onDeleteTask}
                onChangeTask={onChangeTask}
                task={task}
                key={task.id}
              />
            );
          })}
        </StyledTaskList>
        <StyledTaskListFooter>
          <article>
            <span>
              {remainingTasks.length} item
              {remainingTasks.length === 1 ? null : 's'} left
            </span>
            <div>
              {filterNames.map(name => {
                return (
                  <Button
                    name={name}
                    aria-pressed={name === filter}
                    key={name}
                    onClick={() => setFilter(name)}
                  >
                    {name}
                  </Button>
                );
              })}
            </div>

            <Button
              footer
              lastChild
              onClick={() => setShowDeleteCompletedModal(true)}
            >
              Clear completed
            </Button>
          </article>
        </StyledTaskListFooter>
      </StyledTaskListSection>
    </>
  );
};

export default TaskList;
