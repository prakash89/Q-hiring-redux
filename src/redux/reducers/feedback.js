import {FEEDBACK, LOGOUT} from '../actionTypes'

const INITIAL_STATE = {
  message: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FEEDBACK:
      let {message} = action.payload;
      return {...state, message};
    case LOGOUT:
      return initState;
    default:
      return state;
  }
}
