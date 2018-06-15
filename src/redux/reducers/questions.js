import {QUESTIONS} from '../actionTypes'

const INITIAL_STATE = {
  message: '',
  items: [],
}

export default (state = INITIAL_STATE, action) => {
  console.log("action", action.payload)
  switch (action.type) {
    case QUESTIONS:
      let {message} = action.payload;
      return {...state, message};
    default:
      return state;
  }
}
