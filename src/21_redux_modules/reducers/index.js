import { combineReducers } from 'redux';
import tasks from './tasks';
import filters from './filters';

const rootReducers = combineReducers({ tasks, filters });

export default rootReducers;