import React, { useEffect, useReducer, useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import AppHeader from './AppHeader';
import { StyledAppContainer } from './styles/StyledAppContainer.styled';
import { taskData } from '../taskData';
import { CONSTANTS } from '../constants';

const taskReducer = (tasks, action) => {
  console.log(tasks);
  switch (action.type) {
    case CONSTANTS.ACTIONS.ADD_TASK: {
      return [
        {
          id: action.id,
          text: action.text,
          complete: false,
        },
        ...tasks,
      ];
    }
    case CONSTANTS.ACTIONS.DELETE_TASK: {
      return tasks.filter(task => task.id !== action.id);
    }
    case CONSTANTS.ACTIONS.DELETE_COMPLETED_TASKS: {
      return tasks.filter(task => !task.complete);
    }
    case CONSTANTS.ACTIONS.CHANGE_TASK: {
      return tasks.map(task => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    // Make copy of all tasks to reorder them
    case 'reorder-task': {
      return [...action.tasks];
    }
    default: {
      throw Error('Action unknown: ' + action.type);
    }
  }
};

// const initialState = taskData;
const initialState = [];

// Local Storage:
const init = () => {
  const storedTasks = localStorage.getItem('storedTask');
  if (storedTasks) {
    try {
      return JSON.parse(storedTasks);
    } catch (error) {
      return initialState;
    }
  } else {
    return initialState;
  }
};

const AppContainer = ({ userTheme, setUserTheme }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState, init);

  // Local Storage:
  useEffect(() => {
    localStorage.setItem('storedTask', JSON.stringify(state));
  }, [state]);

  const handleAddTask = text => {
    dispatch({
      type: CONSTANTS.ACTIONS.ADD_TASK,
      id: crypto.randomUUID(),
      text: text,
    });
  };

  const handleDeleteTask = taskId => {
    dispatch({ type: CONSTANTS.ACTIONS.DELETE_TASK, id: taskId });
  };

  const handleDeleteCompletedTasks = () => {
    dispatch({ type: 'delete-completed-tasks' });
  };

  const handleChangeTask = task => {
    dispatch({ type: CONSTANTS.ACTIONS.CHANGE_TASK, task: task });
  };

  const handleReorderTask = tasks => {
    dispatch({ type: 'reorder-task', tasks: tasks });
  };

  // MODAL CONTEXT
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const [showDeleteCompletedModal, setShowDeleteCompletedModal] =
  useState(false);
  return (
    <StyledAppContainer>
      <AppHeader userTheme={userTheme} setUserTheme={setUserTheme} />
      <AddTask
        onAddTask={handleAddTask}
        onChangeTask={handleChangeTask}
        task={state}
      />
      {/* <ModalContext.Provider
        value={{
          showDeleteModal,
          setShowDeleteModal,
          showDeleteCompletedModal,
          setShowDeleteCompletedModal,
        }}
      > */}
      <TaskList
        onDeleteTask={handleDeleteTask}
        onDeleteCompletedTasks={handleDeleteCompletedTasks}
        onChangeTask={handleChangeTask}
        onReorderTask={handleReorderTask}
        tasks={state}
      />
      {/* </ModalContext.Provider> */}
    </StyledAppContainer>
  );
};

export default AppContainer;
