import {LOGIN} from '../actionTypes'

const INITIAL_STATE = {
  message: '',
  id_token: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      let {message, id_token} = action.payload
      return {...state, message, id_token};
    default:
      return state;
  }
}