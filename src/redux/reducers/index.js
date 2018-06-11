import {combineReducers} from 'redux';
import loginReducer from './login';
import signupReducer from './signup';
import feedbackReducer from './feedback';

export default combineReducers({
  loginData: loginReducer,
  signupData: signupReducer,
  feedbackData: feedbackReducer
})
