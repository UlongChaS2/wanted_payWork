import { AnyAction } from 'redux';
import { ADD_TASK, REMOVE_TASK } from '../actions/types';
import { tasks } from 'types';

const initialState: tasks = {
  list: [],
};

const serviceTasks = (state = initialState, action: AnyAction): tasks => {
  switch (action.type) {
    case ADD_TASK:
      return {
        list: [
          ...state.list,
          {
            id: action.payload.id,
            content: action.payload.content,
            isCheck: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    case REMOVE_TASK:
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

export default serviceTasks;
