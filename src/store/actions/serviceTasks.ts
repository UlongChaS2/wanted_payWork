import { ADD_TASK, EDIT_TASK, REMOVE_TASK } from './types';

export const addTask = (content: string, id: string) => ({
  type: ADD_TASK,
  payload: { content, id },
});

export const removeTask = (id: string) => ({
  type: REMOVE_TASK,
  payload: id,
});

export const editTask = (content: string, id: string) => ({
  type: EDIT_TASK,
  payload: { content, id },
});
