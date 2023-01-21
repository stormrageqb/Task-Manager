export const CONSTANTS = {
  MAXIMUM_CHARACTERS: 45,
  ACTIONS: {
    ADD_TASK: 'add-task',
    DELETE_TASK: 'delete-task',
    DELETE_COMPLETED_TASKS: 'delete-completed-tasks',
    CHANGE_TASK: 'change-task',
  },
  FILTERS: {
    ALL: () => true,
    ACTIVE: task => !task.complete,
    COMPLETED: task => task.complete,
  },
};
