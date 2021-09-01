import { Reducer, AnyAction } from 'redux';
import { ADD_TASK, REMOVE_TASK } from '../actions/types';
import { tasks } from 'types';
// import { initialState } from 'utils/constants';

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

    default:
      return state;
  }
};

export default serviceTasks;
