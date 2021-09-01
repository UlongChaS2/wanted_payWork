import { ADD_TASK } from './types';

export const addTask = (content: string) => ({
  type: ADD_TASK,
  payload: content,
});
