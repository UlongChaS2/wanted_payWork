import { Reducer, AnyAction } from 'redux';
import { ADD_TASK, LOAD_TASKS, SAVE_TASKS } from '../actions/types';
import { tasks } from 'types';

const initialState: tasks = [];

const serviceTasks: Reducer<tasks, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_TASK:
      const newId =
        Math.max(0, ...initialState.map((todo) => Number(todo.id))) + 1;
      return {
        ...state,
        id: `${newId}`,
        content: action.payload,
        isCheck: false,
        createdAt: new Date().toISOString(),
      };

    default:
      return state;
  }
};

export default serviceTasks;
