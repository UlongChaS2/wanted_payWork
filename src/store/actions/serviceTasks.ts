import { ADD_TASK, LOAD_TASKS, SAVE_TASKS } from './types';

export const addTask = (content: string) => ({
  type: ADD_TASK,
  payload: content,
});

export const loadTasks = () => ({
  type: LOAD_TASKS,
});

export const saveTasks = () => ({
  type: SAVE_TASKS,
});
