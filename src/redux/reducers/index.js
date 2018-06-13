import {combineReducers} from 'redux';
import loginReducer from './login';
import signupReducer from './signup';
import questionsReducer from './questions';

export default combineReducers({
  loginData: loginReducer,
  signupData: signupReducer,
  questionsList: questionsReducer
})
