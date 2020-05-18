import { combineReducers } from 'redux';
import authReducer from './authReducer';
import Reducer from './reducer';

export default combineReducers({
    redu: Reducer,
    authen: authReducer
});
