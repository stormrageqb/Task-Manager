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
    default: {
      throw Error('Action unknown: ' + action.type);
    }
  }
};

const initialState = taskData;

const AppContainer = ({ userTheme, setUserTheme }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Local Storage:
  useEffect(() => {
    localStorage.setItem('storedTask', JSON.stringify(state));
  }, [state]);
  // useEffect(() => {
  //   const storedTasks = JSON.parse(localStorage.getItem('storedTasks'));
  //   if (storedTasks) {
  //     dispatch({
  //       type: CONSTANTS.ACTIONS.ADD_TASK,
  //       id: crypto.randomUUID(),
  //       text: text,
  //     });
  //   }
  // }, []);

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
        tasks={state}
      />
      {/* </ModalContext.Provider> */}
    </StyledAppContainer>
  );
};

export default AppContainer;
