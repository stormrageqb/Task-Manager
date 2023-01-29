import { useState } from 'react';
import { Reorder } from 'framer-motion';
import styled from 'styled-components';
import Button from './Button';
import Task from './Task';
import ConfirmDeleteModal from './modal/ConfirmDeleteModal';
import { CONSTANTS } from '../constants';

const filterNames = Object.keys(CONSTANTS.FILTERS);
console.log(filterNames);

const StyledTaskListSection = styled.section`
  grid-column: 1 / -1;
  /* box-shadow: rgba(0, 0, 0, 0.2) 0.1rem 0.4rem 1.2rem; */
  box-shadow: rgba(0, 0, 0, 0.35) 0 2rem 3rem -1rem;
  display: flex;
  flex-direction: column;
  max-height: 62vh;
`;

const StyledZeroTaskParagraph = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.fontColorDark};
  background-color: ${({ theme }) => theme.appBgMain};
  font-weight: 500;
  padding: 3rem;
  text-align: center;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0.1rem solid ${({ theme }) => theme.fontColorDarkMd};
`;

const StyledTaskList = styled(Reorder.Group)`
  /* For scrollbar, note that flex is needed on parent and flex shrink: 0 on TaskListFooter child element */

  overflow-y: auto;
  /* Change if you want a different height for entire container */
  /* max-height: 30rem; */
  background-color: ${({ theme }) => theme.appBgMain};

  border-radius: 0.4rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollThumb};
    border: 0.4rem solid transparent;
    border-radius: 0.8rem;
    background-clip: padding-box;

    &:hover {
      background-color: ${({ theme }) => theme.scrollThumbHover};
    }
  }

  &::-webkit-scrollbar {
    width: 1.6rem;
  }
  scrollbar-color: ${({ theme }) => theme.appBgMain};
`;

const StyledTaskListFooter = styled.footer`
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.appBgMain};
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  transition: background-color 0.3s;

  & article {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 1rem 1.5rem;

    & span {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.fontColorDark};
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
  onReorderTask,
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
        <StyledTaskList axis="y" onReorder={onReorderTask} values={tasks}>
          {/* Filters through the values found in CONSTANTS which correspond to the dynamic value of filter from useState */}
          {tasks.length === 0 && (
            <StyledZeroTaskParagraph>
              All caught up! Try adding a todo.
            </StyledZeroTaskParagraph>
          )}
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
              <strong>{remainingTasks.length}</strong> item
              {remainingTasks.length === 1 ? null : 's'} left
            </span>
            <div>
              {filterNames.map(name => {
                return (
                  <Button
                    name={name}
                    ariaPressed={name === filter}
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
