import {LOGIN} from '../actionTypes'

const INITIAL_STATE = {
  message: '',
  id_token: '',
  email: '',
  user_id: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
    console.log(action.payload)
      // let {message, id_token} = action.payload
      let message = action.payload.message
      let id_token = action.payload.session.authToken
      let email = action.payload.user.email
      let user_id = action.payload.user.id

      return {...state, message, id_token, email, user_id};
    default:
      return state;
  }
}
