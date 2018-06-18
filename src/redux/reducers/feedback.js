import {FEEDBACK} from '../actionTypes'

const INITIAL_STATE = {
  message: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FEEDBACK:
      let {message} = action.payload;
      return {...state, message};
    default:
      return state;
  }
}
