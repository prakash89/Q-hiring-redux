import {FEEDBACK} from '../actionTypes'

const INITIAL_STATE = {
  message: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log("action", action.payload)
  switch (action.type) {
    case FEEDBACK:
      let {message} = action.payload;
      debugger
      return {...state, message};
    default:
      return state;
  }
}
