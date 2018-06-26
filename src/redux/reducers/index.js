import {combineReducers} from 'redux';
import loginReducer from './login';
import signupReducer from './signup';
import feedbackReducer from './feedback';
import questonsReducer from './questions';
import instructionReducer from './instruction';


export default combineReducers({
  loginData: loginReducer,
  signupData: signupReducer,
  feedbackData: feedbackReducer,
  questionsData: questonsReducer,
  instructionReducer: instructionReducer,
  
})
