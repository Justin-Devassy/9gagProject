import {combineReducers} from 'redux';
import userReducer from '../reducer/userReducer';
const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
