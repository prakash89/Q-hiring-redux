import {SIGNUP} from '../actionTypes'

const INITIAL_STATE = {
  message: '',
  email: '',
  authToken: '',
}

export default (state = INITIAL_STATE, action) => {
  console.log("action", action.payload)
  switch (action.type) {
    case SIGNUP:
      let {message} = action.payload.message;
      let {authToken} = action.payload.session.authToken;
      let {email} = action.payload.user.email;
      return {...state, message, authToken, email};
    default:
      return state;
  }
}
