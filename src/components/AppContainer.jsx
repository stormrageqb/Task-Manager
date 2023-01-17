import React, { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import AppHeader from './AppHeader';
import { StyledAppContainer } from './styles/StyledAppContainer.styled';
import { taskData } from '../taskData';

const taskReducer = (tasks, action) => {
  switch (action.type) {
    case 'add-task': {
      return [
        {
          id: action.id,
          text: action.text,
          complete: false,
        },
        ...tasks,
      ];
    }
    case 'change-task': {
      return tasks.map(task => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
  }
};

const initialState = taskData;

const AppContainer = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const handleAddTask = text => {
    dispatch({ type: 'add-task', id: crypto.randomUUID(), text: text });
  };

  const handleChangeTask = task => {
    dispatch({ type: 'change-task', task: task });
  };

  return (
    <StyledAppContainer>
      <AppHeader />
      <AddTask onAddTask={handleAddTask} />
      <TaskList onChangeTask={handleChangeTask} tasks={state} />
    </StyledAppContainer>
  );
};

export default AppContainer;
