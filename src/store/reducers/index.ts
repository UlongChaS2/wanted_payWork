import { combineReducers } from 'redux';
import serviceTasks from './serviceTasks';

const rootReducer = combineReducers({
  serviceTasks,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
