import React, { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import AppHeader from './AppHeader';
import { StyledAppContainer } from './styles/StyledAppContainer.styled';
import { taskData } from '../taskData';

const taskReducer = (tasks, action) => {
  switch (action.type) {
    case 'add-task': {
      return;
    }
  }
};

const initialState = taskData;

const AppContainer = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const handleAddTask = text => {
    dispatch({ type: 'add-task', id: crypto.randomUUID(), text: text });
  };

  return (
    <StyledAppContainer>
      <AppHeader />
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={state} />
    </StyledAppContainer>
  );
};

export default AppContainer;
