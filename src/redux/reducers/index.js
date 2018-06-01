import {combineReducers} from 'redux';
import loginReducer from './login';
import signupReducer from './signup';

export default combineReducers({
  loginData: loginReducer,
  signupData: signupReducer
})
