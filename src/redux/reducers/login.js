import {LOGIN, LOGOUT} from '../actionTypes'

const INITIAL_STATE = {
  message: '',
  id_token: '',
  email: '',
  user_id: '',
  error: '',
  role: 'user',
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
      let user_role = action.payload.user.role
      return { ...state, message, id_token, email, user_id, user_role};
    case LOGOUT:
      return initState;
    default:
      return state;
  }
}
