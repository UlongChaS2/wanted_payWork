import { tasks } from 'types';

export const TIME_ZONE = 'ko-KR';

export const initialState: tasks = {
  list: [],
};

export const newId =
  Math.max(0, ...initialState.list.map((todo) => Number(todo.id))) + 1;
