import { useState } from 'react';
import Button from './Button';
import Task from './Task';
import ConfirmDeleteModal from './modal/ConfirmDeleteModal';
import { StyledZeroTaskParagraph } from './styles/app-main/StyledZeroTaskParagraph';
import { CONSTANTS } from '../constants';
import { StyledTaskListSection } from './styles/app-main/StyledTaskListSection';
import { StyledReorderTaskList } from './styles/app-main/StyledReorderTaskList';
import { StyledTaskListFooter } from './styles/app-main/StyledTaskListFooter';
import { StyledFooterFilter } from './styles/app-main/StyledFooterFilter';

const filterNames = Object.keys(CONSTANTS.FILTERS);

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
        <StyledReorderTaskList
          axis="y"
          onReorder={onReorderTask}
          values={tasks}
        >
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
                tasks={tasks}
                key={task.id}
              />
            );
          })}
        </StyledReorderTaskList>
        <StyledTaskListFooter>
          <article>
            <span>
              <strong>{remainingTasks.length}</strong> item
              {remainingTasks.length === 1 ? null : 's'} left
            </span>
            <StyledFooterFilter>
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
            </StyledFooterFilter>

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
