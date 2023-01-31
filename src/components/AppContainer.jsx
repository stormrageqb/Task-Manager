import React, { useEffect, useReducer, useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import AppHeader from './AppHeader';
import { StyledAppContainer } from './styles/StyledAppContainer.styled';
import { taskData } from '../taskData';
import { CONSTANTS } from '../constants';
import DnDNote from './DnDNote';
import { easeInOut } from 'framer-motion';
import { usePrefersReducedMotion } from '../usePrefersReducedMotion';

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
    case CONSTANTS.ACTIONS.REORDER_TASK: {
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
  const prefersReducedMotion = usePrefersReducedMotion();

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
    dispatch({ type: CONSTANTS.ACTIONS.DELETE_COMPLETED_TASKS });
  };

  const handleChangeTask = task => {
    dispatch({ type: CONSTANTS.ACTIONS.CHANGE_TASK, task: task });
  };

  const handleReorderTask = tasks => {
    dispatch({ type: CONSTANTS.ACTIONS.REORDER_TASK, tasks: tasks });
  };

  return (
    <StyledAppContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: easeInOut,
      }}
    >
      <AppHeader userTheme={userTheme} setUserTheme={setUserTheme} />
      <AddTask
        onAddTask={handleAddTask}
        onChangeTask={handleChangeTask}
        task={state}
      />
      <TaskList
        onDeleteTask={handleDeleteTask}
        onDeleteCompletedTasks={handleDeleteCompletedTasks}
        onChangeTask={handleChangeTask}
        onReorderTask={handleReorderTask}
        tasks={state}
      />
      <DnDNote tasks={state} />
    </StyledAppContainer>
  );
};

export default AppContainer;
