export const CONSTANTS = {
  MAXIMUM_CHARACTERS: 45,
  ACTIONS: {
    ADD_TASK: 'add-task',
    DELETE_TASK: 'delete-task',
    DELETE_COMPLETED_TASKS: 'delete-completed-tasks',
    CHANGE_TASK: 'change-task',
    REORDER_TASK: 'reorder-task',
  },
  FILTERS: {
    All: () => true,
    Active: task => !task.complete,
    Completed: task => task.complete,
  },
};
