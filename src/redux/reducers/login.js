import {LOGIN, LOGOUT} from '../actionTypes'

const INITIAL_STATE = {
  message: '',
  id_token: '',
  email: '',
  user_id: '',
  error: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      if (action.payload.error) {
        state.error = action.payload.error;
        return state;
      }
      let message = action.payload.message
      let id_token = action.payload.session.authToken
      let email = action.payload.user.email
      let user_id = action.payload.user.id
      return {...state, message, id_token, email, user_id};
    case LOGOUT:
      return initState;
    default:
      return state;
  }
}
