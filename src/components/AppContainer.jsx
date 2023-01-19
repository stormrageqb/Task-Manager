import React, { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import AppHeader from './AppHeader';
import { StyledAppContainer } from './styles/StyledAppContainer.styled';
import { taskData } from '../taskData';
import { CONSTANTS } from '../constants';

const taskReducer = (tasks, action) => {
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
    case 'delete-completed-tasks': {
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

const AppContainer = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

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

  return (
    <StyledAppContainer>
      <AppHeader />
      <AddTask
        onAddTask={handleAddTask}
        onChangeTask={handleChangeTask}
        task={state}
      />
      <TaskList
        onDeleteTask={handleDeleteTask}
        onDeleteCompletedTasks={handleDeleteCompletedTasks}
        onChangeTask={handleChangeTask}
        tasks={state}
      />
    </StyledAppContainer>
  );
};

export default AppContainer;
