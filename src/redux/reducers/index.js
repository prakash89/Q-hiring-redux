import {combineReducers} from 'redux';
import loginReducer from './login';
import signupReducer from './signup';
import feedbackReducer from './feedback';
import questionsReducer from './questions';

export default combineReducers({
  loginData: loginReducer,
  signupData: signupReducer,
  feedbackData: feedbackReducer,
  questionsList: questionsReducer
})
