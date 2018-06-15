import {QUESTIONS} from '../actionTypes'

const INITIAL_STATE = {
  message: '',
  items: [],
}

export default (state = INITIAL_STATE, action) => {
  console.log("action", action.questions)
  switch (action.type) {
    case QUESTIONS:
      return {
        ...state,
        items: action.questions,
      };
    default:
      return state;
  }
}
