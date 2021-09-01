import { AnyAction } from 'redux';
import { ADD_TASK, CHECK_TASK, EDIT_TASK, REMOVE_TASK } from '../actions/types';
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
        list: state.list.filter((task) => task.id !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        list: state.list.map((task) =>
          task.id === action.payload.id
            ? { ...task, content: action.payload.content }
            : task
        ),
      };
    case CHECK_TASK:
      return {
        list: state.list.map((task) =>
          task.id === action.payload
            ? { ...task, isCheck: !task.isCheck }
            : task
        ),
      };

    default:
      return state;
  }
};

export default serviceTasks;
