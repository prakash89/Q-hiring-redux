import {LOGIN} from '../actionTypes'

const INITIAL_STATE = {
  message: '',
  id_token: '',
  email: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      // let {message, id_token} = action.payload
      let message = action.payload.message
      let id_token = action.payload.session.authToken
      let email = action.payload.user.email
      return {...state, message, id_token, email};
    default:
      return state;
  }
}
