import { combineReducers } from 'redux';
import { user } from './user';
import { template } from './template';

export default combineReducers({
    user,
    template,
});
