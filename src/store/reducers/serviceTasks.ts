import { Reducer, AnyAction } from 'redux';
import { ADD_TASK } from '../actions/types';
import { tasks } from 'types';

const initialState: tasks = {
  list: [],
};

const serviceTasks = (state = initialState, action: AnyAction): tasks => {
  switch (action.type) {
    case ADD_TASK:
      const newId =
        Math.max(0, ...initialState.list.map((todo) => Number(todo.id))) + 1;
      return {
        list: [
          ...state.list,
          {
            id: `${newId}`,
            content: action.payload,
            isCheck: false,
            createdAt: new Date(),
          },
        ],
      };

    default:
      return state;
  }
};

export default serviceTasks;
